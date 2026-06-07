'use client'

import { UserProfile, Skill, Artifact, AssessmentSession, SkillSnapshot } from './types'

const STORAGE_KEY = 'skillscan_profile'

export function getProfile(): UserProfile {
  if (typeof window === 'undefined') {
    return getDefaultProfile()
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) {
      return JSON.parse(data)
    }
  } catch (e) {
    console.error('Error reading profile:', e)
  }

  return getDefaultProfile()
}

export function saveProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') return

  try {
    profile.lastUpdated = new Date().toISOString()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
  } catch (e) {
    console.error('Error saving profile:', e)
  }
}

export function addSkill(skill: Skill): void {
  const profile = getProfile()
  const existingIndex = profile.skills.findIndex(
    (s) => s.name.toLowerCase() === skill.name.toLowerCase()
  )

  if (existingIndex >= 0) {
    const existing = profile.skills[existingIndex]
    const snapshot: SkillSnapshot = {
      date: new Date().toISOString(),
      level: skill.level,
      source: 'artifact',
    }
    existing.history.push(snapshot)
    existing.level = skill.level
    existing.confidence = Math.max(existing.confidence, skill.confidence)
    existing.lastAssessed = new Date().toISOString()
    profile.skills[existingIndex] = existing
  } else {
    profile.skills.push(skill)
  }

  saveProfile(profile)
}

export function updateSkillFromAssessment(
  skillName: string,
  level: number,
  notes?: string
): void {
  const profile = getProfile()
  const existingIndex = profile.skills.findIndex(
    (s) => s.name.toLowerCase() === skillName.toLowerCase()
  )

  const snapshot: SkillSnapshot = {
    date: new Date().toISOString(),
    level,
    source: 'assessment',
    notes,
  }

  if (existingIndex >= 0) {
    profile.skills[existingIndex].history.push(snapshot)
    profile.skills[existingIndex].level = level
    profile.skills[existingIndex].confidence = Math.min(
      profile.skills[existingIndex].confidence + 15,
      100
    )
    profile.skills[existingIndex].lastAssessed = new Date().toISOString()
  } else {
    const newSkill: Skill = {
      id: generateId(),
      name: skillName,
      category: 'General',
      level,
      confidence: 70,
      lastAssessed: new Date().toISOString(),
      history: [snapshot],
    }
    profile.skills.push(newSkill)
  }

  saveProfile(profile)
}

export function addArtifact(artifact: Artifact): void {
  const profile = getProfile()
  profile.artifacts.push(artifact)
  saveProfile(profile)
}

export function addAssessment(assessment: AssessmentSession): void {
  const profile = getProfile()
  profile.assessments.push(assessment)
  saveProfile(profile)
}

export function getSkillCategories(): string[] {
  const profile = getProfile()
  const categories = new Set(profile.skills.map((s) => s.category))
  return Array.from(categories)
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

function getDefaultProfile(): UserProfile {
  return {
    skills: [],
    artifacts: [],
    assessments: [],
    lastUpdated: new Date().toISOString(),
  }
}
