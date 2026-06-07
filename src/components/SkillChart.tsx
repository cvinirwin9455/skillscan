'use client'

import { Skill } from '@/lib/types'

interface SkillChartProps {
  skills: Skill[]
}

export function SkillChart({ skills }: SkillChartProps) {
  const sortedSkills = [...skills].sort((a, b) => b.level - a.level).slice(0, 10)

  if (sortedSkills.length === 0) {
    return <p className="text-gray-500 text-center py-8">No skills to display</p>
  }

  return (
    <div className="space-y-3">
      {sortedSkills.map((skill) => (
        <div key={skill.id} className="group">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-700 group-hover:text-brand-600 transition-colors">
              {skill.name}
            </span>
            <span className="text-sm font-bold text-gray-900">{skill.level}%</span>
          </div>
          <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${skill.level}%`,
                background: getBarColor(skill.level),
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function getBarColor(level: number): string {
  if (level >= 80) return 'linear-gradient(to right, #12b886, #087f5b)'
  if (level >= 60) return 'linear-gradient(to right, #4c6ef5, #3b5bdb)'
  if (level >= 40) return 'linear-gradient(to right, #748ffc, #5c7cfa)'
  if (level >= 20) return 'linear-gradient(to right, #fab005, #f59f00)'
  return 'linear-gradient(to right, #ff6b6b, #f03e3e)'
}
