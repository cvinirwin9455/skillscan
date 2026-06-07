import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { content, filename } = await request.json()

    if (!content) {
      return NextResponse.json({ error: 'No content provided' }, { status: 400 })
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    const model = process.env.OPENAI_MODEL || 'gpt-4o'

    const systemPrompt = `You are a professional skills analyst AI. Analyze the provided document/content and extract professional skills with proficiency ratings.

For each skill identified, provide:
- name: The skill name (e.g., "Python", "Project Management", "React")
- category: A category (e.g., "Programming", "Soft Skills", "Design", "Data Science", "DevOps", "Management", "Communication")
- level: A proficiency rating from 0-100 based on evidence in the document:
  - 0-20: Awareness/Beginner
  - 21-40: Foundational
  - 41-60: Intermediate/Competent
  - 61-80: Advanced/Proficient
  - 81-100: Expert/Master
- evidence: A brief quote or explanation from the document that supports this rating

Respond ONLY with valid JSON in this exact format:
{
  "skills": [
    {
      "name": "Skill Name",
      "category": "Category",
      "level": 75,
      "evidence": "Brief evidence from document"
    }
  ]
}

Be thorough but realistic. Don't inflate ratings. Look for concrete evidence of skill application, not just mentions.`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          {
            role: 'user',
            content: `Analyze this ${filename ? `file (${filename})` : 'content'} and extract professional skills:\n\n${content.substring(0, 8000)}`,
          },
        ],
        temperature: 0.3,
        response_format: { type: 'json_object' },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenAI API error:', errorData)
      return NextResponse.json({ error: 'AI analysis failed' }, { status: 500 })
    }

    const data = await response.json()
    const result = JSON.parse(data.choices[0].message.content)

    return NextResponse.json(result)
  } catch (error: any) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
