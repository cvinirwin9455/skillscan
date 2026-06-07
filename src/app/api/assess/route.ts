import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { action, skill, messages, questionCount } = await request.json()

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
    }

    const model = process.env.OPENAI_MODEL || 'gpt-4o'

    const systemPrompt = `You are a professional skills assessor. You are conducting an interactive assessment of a person's "${skill}" skills.

Your approach:
1. Start with a warm greeting and a foundational question about their experience with ${skill}
2. Progressively ask deeper questions based on their responses
3. Adapt difficulty based on their answers - go deeper if they show strong knowledge, stay at current level if they struggle
4. Ask about practical application, not just theory
5. Cover different aspects: fundamentals, advanced concepts, real-world application, problem-solving, best practices
6. After 5-7 questions, provide a final assessment

Question progression strategy:
- Q1: Experience level and context (how long, what projects)
- Q2: Core concepts understanding
- Q3: Intermediate application
- Q4-5: Advanced scenarios or problem-solving
- Q6: Expert-level or edge cases (if they're doing well)

IMPORTANT RULES:
- Ask ONE question at a time
- Keep questions concise but substantive
- Be encouraging but honest
- Reference their previous answers to show you're listening
- Don't give away answers in your questions

${action === 'start' ? 'This is the beginning of the assessment. Introduce yourself briefly and ask your first question.' : ''}

${questionCount && questionCount >= 6 ? `You've asked ${questionCount} questions. It's time to wrap up. After processing their answer, provide your final assessment. Your response MUST include a JSON block at the end in this exact format:\n\n---ASSESSMENT_RESULT---\n{"level": <number 0-100>, "feedback": "<2-3 sentence summary of their skill level and areas for growth>"}\n---END_RESULT---` : ''}

Keep responses conversational and under 150 words.`

    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: any) => ({ role: m.role, content: m.content })),
    ]

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenAI API error:', errorData)
      return NextResponse.json({ error: 'AI assessment failed' }, { status: 500 })
    }

    const data = await response.json()
    const content = data.choices[0].message.content

    const resultMatch = content.match(/---ASSESSMENT_RESULT---\s*([\s\S]*?)\s*---END_RESULT---/)

    if (resultMatch) {
      try {
        const result = JSON.parse(resultMatch[1])
        const messageContent = content.replace(/---ASSESSMENT_RESULT---[\s\S]*---END_RESULT---/, '').trim()

        return NextResponse.json({
          isComplete: true,
          message: messageContent,
          level: result.level,
          feedback: result.feedback,
        })
      } catch {
        // If JSON parsing fails, continue as normal message
      }
    }

    return NextResponse.json({ isComplete: false, message: content })
  } catch (error: any) {
    console.error('Assessment error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
