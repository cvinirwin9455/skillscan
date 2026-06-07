'use client'

import { Skill } from '@/lib/types'

interface ProgressionChartProps {
  skills: Skill[]
}

export function ProgressionChart({ skills }: ProgressionChartProps) {
  const skillsWithHistory = skills.filter(s => s.history.length > 1)

  if (skillsWithHistory.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-2">No progression data yet</p>
        <p className="text-sm text-gray-400">
          Take multiple assessments or upload more artifacts to see your growth over time
        </p>
      </div>
    )
  }

  const colors = ['#4c6ef5', '#12b886', '#f59f00', '#e64980', '#7048e8']

  return (
    <div className="space-y-6">
      {skillsWithHistory.slice(0, 5).map((skill, idx) => {
        const history = skill.history.slice(-6)
        const color = colors[idx % colors.length]

        return (
          <div key={skill.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-xs text-gray-500">
                {history.length} assessments
              </span>
            </div>

            <div className="flex items-end gap-1 h-12">
              {history.map((snapshot, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t transition-all duration-500 hover:opacity-80 relative group"
                  style={{
                    height: `${(snapshot.level / 100) * 100}%`,
                    backgroundColor: color,
                    opacity: 0.4 + (i / history.length) * 0.6,
                  }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                      {snapshot.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">
                {new Date(history[0].date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
              </span>
              {history.length > 1 && (
                <span className={getChangeColor(history[0].level, history[history.length - 1].level)}>
                  {getChangeText(history[0].level, history[history.length - 1].level)}
                </span>
              )}
              <span className="text-gray-400">
                {new Date(history[history.length - 1].date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function getChangeColor(start: number, end: number): string {
  const diff = end - start
  if (diff > 0) return 'text-green-600 font-medium'
  if (diff < 0) return 'text-red-600 font-medium'
  return 'text-gray-500'
}

function getChangeText(start: number, end: number): string {
  const diff = end - start
  if (diff > 0) return `+${diff}%`
  if (diff < 0) return `${diff}%`
  return 'No change'
}
