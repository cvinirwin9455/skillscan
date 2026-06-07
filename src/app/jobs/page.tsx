'use client'

import { useState, useEffect } from 'react'
import { getProfile } from '@/lib/storage'
import { JobRole, Skill } from '@/lib/types'

export default function JobsPage() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [jobs, setJobs] = useState<JobRole[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [customQuery, setCustomQuery] = useState('')

  useEffect(() => {
    const profile = getProfile()
    setSkills(profile.skills)
  }, [])

  const searchJobs = async (query?: string) => {
    if (skills.length === 0 && !query) {
      setError('No skills found. Please complete a skill assessment or upload an artifact first.')
      return
    }

    setIsSearching(true)
    setError(null)

    try {
      const topSkills = skills
        .sort((a, b) => b.level - a.level)
        .slice(0, 8)
        .map(s => s.name)

      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skills: topSkills, customQuery: query || customQuery }),
      })

      if (!response.ok) throw new Error('Failed to search for jobs')

      const data = await response.json()
      setJobs(data.jobs)
    } catch (err: any) {
      setError(err.message || 'An error occurred while searching for jobs')
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Matching Roles</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Based on your assessed skills, discover open roles that match your expertise.
          The AI matches your skill profile to relevant opportunities.
        </p>
      </div>

      {skills.length > 0 && (
        <div className="mb-8 p-6 bg-white rounded-2xl border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Your Top Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.sort((a, b) => b.level - a.level).slice(0, 10).map((skill) => (
              <span key={skill.id} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-50 text-brand-700 text-sm font-medium">
                {skill.name}
                <span className="text-brand-400">{skill.level}%</span>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mb-8 p-6 bg-white rounded-2xl border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={customQuery}
            onChange={(e) => setCustomQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && searchJobs()}
            placeholder="Add specific preferences (e.g., remote, London, startup, senior level)..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all"
          />
          <button
            onClick={() => searchJobs()}
            disabled={isSearching || (skills.length === 0 && !customQuery)}
            className="px-8 py-3 bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-xl font-semibold shadow-lg shadow-brand-500/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSearching ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Searching...
              </span>
            ) : (
              'Find Roles'
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">{error}</div>
      )}

      {jobs.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Found {jobs.length} Matching Roles</h2>
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      )}

      {!isSearching && jobs.length === 0 && skills.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">No Skills Assessed Yet</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Complete a skill assessment or upload an artifact first, then come back to find matching roles.
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
      )}
    </div>
  )
}

function JobCard({ job }: { job: JobRole }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-gray-200 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
          <p className="text-gray-600">{job.company} &middot; {job.location}</p>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${getMatchColor(job.matchScore)}`}>{job.matchScore}%</div>
          <p className="text-xs text-gray-500">match</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

      {job.salary && <p className="text-sm font-medium text-green-700 mb-4">{job.salary}</p>}

      <div className="flex flex-wrap gap-2 mb-4">
        {job.requiredSkills.map((skill) => {
          const isMatch = job.matchedSkills.includes(skill)
          return (
            <span key={skill} className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              isMatch ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
            }`}>
              {isMatch && '✓ '}{skill}
            </span>
          )
        })}
      </div>

      {job.url && (
        <a href={job.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-brand-600 hover:text-brand-700 font-medium">
          View Role
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  )
}

function getMatchColor(score: number): string {
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-brand-600'
  if (score >= 40) return 'text-yellow-600'
  return 'text-gray-600'
}
