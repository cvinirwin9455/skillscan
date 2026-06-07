import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { skills, customQuery } = await request.json()

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
    }

    const model = process.env.OPENAI_MODEL || 'gpt-4o'

    const systemPrompt = `You are a job matching AI assistant. Based on the user's skills and preferences, generate realistic job role suggestions that would be good matches.

Generate 6-8 job roles that match the provided skills. For each role, provide realistic details as if you found them on job boards.

Consider:
- The skill levels and combinations suggest certain role types
- Include a mix of experience levels
- Include varied company sizes and types
- Make locations and salaries realistic for the roles
- Calculate a match score (0-100) based on how well the user's skills align

Respond ONLY with valid JSON in this format:
{
  "jobs": [
    {
      "title": "Role Title",
      "company": "Company Name",
      "location": "City, Country or Remote",
      "matchScore": 85,
      "requiredSkills": ["Skill1", "Skill2", "Skill3"],
      "matchedSkills": ["Skill1", "Skill2"],
      "description": "Brief role description (1-2 sentences)",
      "salary": "$120k - $160k",
      "url": null
    }
  ]
}

Make the roles realistic and varied. Include some stretch roles (lower match) and some comfortable matches (high match).`

    const userMessage = `My skills: ${skills.join(', ')}${customQuery ? `\n\nAdditional preferences: ${customQuery}` : ''}\n\nPlease find job roles that match my skill profile.`

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
          { role: 'user', content: userMessage },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('OpenAI API error:', errorData)
      return NextResponse.json({ error: 'Job search failed' }, { status: 500 })
    }

    const data = await response.json()
    const result = JSON.parse(data.choices[0].message.content)

    result.jobs.sort((a: any, b: any) => b.matchScore - a.matchScore)

    return NextResponse.json(result)
  } catch (error: any) {
    console.error('Jobs search error:', error)
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 })
  }
}
