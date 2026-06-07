'use client'

import { useState, useEffect } from 'react'
import { getProfile } from '@/lib/storage'
import { Skill, UserProfile } from '@/lib/types'
import { SkillChart } from '@/components/SkillChart'
import { ProgressionChart } from '@/components/ProgressionChart'

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  useEffect(() => {
    setProfile(getProfile())
  }, [])

  if (!profile) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  const categories = ['all', ...new Set(profile.skills.map(s => s.category))]
  const filteredSkills = selectedCategory === 'all'
    ? profile.skills
    : profile.skills.filter(s => s.category === selectedCategory)

  const avgLevel = filteredSkills.length > 0
    ? Math.round(filteredSkills.reduce((sum, s) => sum + s.level, 0) / filteredSkills.length)
    : 0

  const topSkills = [...profile.skills].sort((a, b) => b.level - a.level).slice(0, 5)
  const recentAssessments = profile.assessments.slice(-5).reverse()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Skills Dashboard</h1>
        <p className="text-gray-600">Track your professional growth over time</p>
      </div>

      {profile.skills.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <StatCard label="Total Skills" value={profile.skills.length.toString()} icon="&#127919;" />
            <StatCard label="Avg. Level" value={`${avgLevel}%`} icon="&#128202;" />
            <StatCard label="Assessments" value={profile.assessments.length.toString()} icon="&#128172;" />
            <StatCard label="Artifacts" value={profile.artifacts.length.toString()} icon="&#128196;" />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Skills' : cat}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Skill Levels</h2>
              <SkillChart skills={filteredSkills} />
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Progression</h2>
              <ProgressionChart skills={topSkills} />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">All Skills</h2>
            <div className="space-y-4">
              {filteredSkills.sort((a, b) => b.level - a.level).map((skill) => (
                <SkillRow key={skill.id} skill={skill} />
              ))}
            </div>
          </div>

          {recentAssessments.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Assessments</h2>
              <div className="space-y-3">
                {recentAssessments.map((assessment) => (
                  <div key={assessment.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-900">{assessment.skill}</p>
                      <p className="text-sm text-gray-500">{new Date(assessment.startedAt).toLocaleDateString()}</p>
                    </div>
                    {assessment.finalLevel && (
                      <div className="text-right">
                        <p className="text-2xl font-bold text-brand-600">{assessment.finalLevel}%</p>
                        <p className="text-xs text-gray-500">{getLevelLabel(assessment.finalLevel)}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: icon }} />
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}

function SkillRow({ skill }: { skill: Skill }) {
  const changeIndicator = getChangeIndicator(skill)

  return (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-medium text-gray-900">{skill.name}</p>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{skill.category}</span>
          {changeIndicator && (
            <span className={`text-xs font-medium ${changeIndicator.color}`}>{changeIndicator.text}</span>
          )}
        </div>
        <div className="w-full h-2 rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
      <div className="text-right min-w-[60px]">
        <p className="text-lg font-bold text-gray-900">{skill.level}%</p>
        <p className="text-xs text-gray-500">{getLevelLabel(skill.level)}</p>
      </div>
    </div>
  )
}

function getChangeIndicator(skill: Skill): { text: string; color: string } | null {
  if (skill.history.length < 2) return null
  const prev = skill.history[skill.history.length - 2].level
  const current = skill.level
  const diff = current - prev
  if (diff > 0) return { text: `+${diff}%`, color: 'text-green-600' }
  if (diff < 0) return { text: `${diff}%`, color: 'text-red-600' }
  return null
}

function getLevelLabel(level: number): string {
  if (level <= 20) return 'Beginner'
  if (level <= 40) return 'Foundational'
  if (level <= 60) return 'Intermediate'
  if (level <= 80) return 'Advanced'
  return 'Expert'
}

function EmptyState() {
  return (
    <div className="text-center py-20">
      <div className="w-20 h-20 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">No Skills Tracked Yet</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        Start by uploading an artifact or taking a skill assessment. Your progress will appear here.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a href="/upload" className="px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors">
          Upload Artifact
        </a>
        <a href="/assessment" className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
          Take Assessment
        </a>
      </div>
    </div>
  )
}
