# SkillScan - AI-Powered Skills Assessment Platform

**Live at: [curtisirwin.com](https://curtisirwin.com)**

An AI-powered platform that helps professionals discover, assess, and track their skills over time. Upload work artifacts for AI analysis, take interactive skill assessments, visualize your progression, and find matching job roles.

## Features

### 1. Artifact Scanning
Upload resumes, certificates, portfolios, code samples, or any professional document. The AI analyzes them to extract and rate your skills with evidence-based proficiency scores.

### 2. Interactive Skill Assessment
Engage in a conversational AI assessment that adapts its questions based on your responses. Get precise skill level ratings (0-100) with actionable feedback.

### 3. Skills Dashboard & Progression
Visual dashboard showing all your skills with category-based filtering, skill level bars, progression charts showing growth over time, and change indicators between assessments.

### 4. Job Role Matching
AI-powered job matching that finds roles based on your assessed skill profile, with match scores and skill gap analysis.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** OpenAI GPT-4o
- **Data:** Local Storage (client-side persistence)
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites
- Node.js 18+
- OpenAI API key

### Installation

```bash
npm install
cp .env.local.example .env.local
# Edit .env.local and add your OpenAI API key
npm run dev
```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes | Your OpenAI API key |
| `OPENAI_MODEL` | No | Model to use (default: `gpt-4o`) |
| `NEXT_PUBLIC_APP_URL` | No | Your domain URL |

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import the project on vercel.com
3. Add your `OPENAI_API_KEY` in the Environment Variables section
4. Set your custom domain to `curtisirwin.com`
5. Deploy!

## License

MIT - Curtis Irwin
