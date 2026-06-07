export interface Skill {
  id: string
  name: string
  category: string
  level: number // 0-100
  confidence: number // 0-100, how confident the AI is in this rating
  lastAssessed: string // ISO date
  history: SkillSnapshot[]
}

export interface SkillSnapshot {
  date: string // ISO date
  level: number
  source: 'artifact' | 'assessment' | 'manual'
  notes?: string
}

export interface Artifact {
  id: string
  name: string
  type: 'resume' | 'certificate' | 'portfolio' | 'code' | 'document' | 'other'
  uploadedAt: string
  content?: string
  extractedSkills: ExtractedSkill[]
}

export interface ExtractedSkill {
  name: string
  category: string
  level: number
  evidence: string
}

export interface AssessmentSession {
  id: string
  skill: string
  startedAt: string
  completedAt?: string
  messages: AssessmentMessage[]
  finalLevel?: number
  feedback?: string
}

export interface AssessmentMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export interface JobRole {
  title: string
  company: string
  location: string
  matchScore: number
  requiredSkills: string[]
  matchedSkills: string[]
  url?: string
  description: string
  salary?: string
}

export interface UserProfile {
  skills: Skill[]
  artifacts: Artifact[]
  assessments: AssessmentSession[]
  lastUpdated: string
}
