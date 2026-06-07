'use client'

import { useState, useRef, useEffect } from 'react'
import { AssessmentMessage } from '@/lib/types'
import { updateSkillFromAssessment, addAssessment, generateId, getProfile } from '@/lib/storage'

export default function AssessmentPage() {
  const [skill, setSkill] = useState('')
  const [isStarted, setIsStarted] = useState(false)
  const [messages, setMessages] = useState<AssessmentMessage[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [finalResult, setFinalResult] = useState<{ level: number; feedback: string } | null>(null)
  const [questionCount, setQuestionCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [existingSkills, setExistingSkills] = useState<string[]>([])

  useEffect(() => {
    const profile = getProfile()
    setExistingSkills(profile.skills.map(s => s.name))
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const startAssessment = async () => {
    if (!skill.trim()) return

    setIsStarted(true)
    setIsLoading(true)

    try {
      const response = await fetch('/api/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'start', skill: skill.trim(), messages: [] }),
      })

      if (!response.ok) throw new Error('Failed to start assessment')

      const data = await response.json()
      const aiMessage: AssessmentMessage = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date().toISOString(),
      }
      setMessages([aiMessage])
      setQuestionCount(1)
    } catch (err) {
      setMessages([{
        role: 'assistant',
        content: 'I apologize, but I encountered an error starting the assessment. Please ensure the API key is configured and try again.',
        timestamp: new Date().toISOString(),
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: AssessmentMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString(),
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'continue',
          skill: skill.trim(),
          messages: updatedMessages,
          questionCount: questionCount + 1,
        }),
      })

      if (!response.ok) throw new Error('Failed to continue assessment')

      const data = await response.json()

      if (data.isComplete) {
        setIsComplete(true)
        setFinalResult({ level: data.level, feedback: data.feedback })

        const completeMessage: AssessmentMessage = {
          role: 'assistant',
          content: data.message,
          timestamp: new Date().toISOString(),
        }
        setMessages([...updatedMessages, completeMessage])

        updateSkillFromAssessment(skill.trim(), data.level, data.feedback)
        addAssessment({
          id: generateId(),
          skill: skill.trim(),
          startedAt: messages[0]?.timestamp || new Date().toISOString(),
          completedAt: new Date().toISOString(),
          messages: [...updatedMessages, completeMessage],
          finalLevel: data.level,
          feedback: data.feedback,
        })
      } else {
        const aiMessage: AssessmentMessage = {
          role: 'assistant',
          content: data.message,
          timestamp: new Date().toISOString(),
        }
        setMessages([...updatedMessages, aiMessage])
        setQuestionCount(questionCount + 1)
      }
    } catch (err) {
      const errorMessage: AssessmentMessage = {
        role: 'assistant',
        content: 'I encountered an error. Please try sending your response again.',
        timestamp: new Date().toISOString(),
      }
      setMessages([...updatedMessages, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const resetAssessment = () => {
    setSkill('')
    setIsStarted(false)
    setMessages([])
    setInput('')
    setIsComplete(false)
    setFinalResult(null)
    setQuestionCount(0)
  }

  if (!isStarted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Skill Assessment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I&apos;ll probe your knowledge with targeted questions to precisely assess your
            skill level. Choose a skill to get started.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            What skill would you like to be assessed on?
          </label>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && startAssessment()}
            placeholder="e.g., React, Python, Project Management, Data Analysis..."
            className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-lg transition-all"
          />

          {existingSkills.length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Your existing skills:</p>
              <div className="flex flex-wrap gap-2">
                {existingSkills.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSkill(s)}
                    className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-brand-100 hover:text-brand-700 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={startAssessment}
            disabled={!skill.trim()}
            className="mt-6 w-full py-4 px-8 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-accent-500/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Start Assessment
          </button>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-100 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-brand-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Choose a Skill</h3>
            <p className="text-sm text-gray-600">Pick any professional skill you want assessed</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-accent-100 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-accent-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Answer Questions</h3>
            <p className="text-sm text-gray-600">I&apos;ll ask 5-8 progressively deeper questions</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get Your Rating</h3>
            <p className="text-sm text-gray-600">Receive a precise skill level with feedback</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Assessing: <span className="text-brand-600">{skill}</span>
          </h1>
          <p className="text-sm text-gray-500">
            Question {questionCount} of ~6 {isComplete && '- Complete'}
          </p>
        </div>
        <button
          onClick={resetAssessment}
          className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          New Assessment
        </button>
      </div>

      {finalResult && (
        <div className="mb-6 p-6 rounded-2xl bg-gradient-to-r from-brand-50 to-accent-50 border border-brand-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Assessment Complete</h3>
            <div className="text-3xl font-bold text-brand-600">{finalResult.level}%</div>
          </div>
          <div className="w-full h-3 rounded-full bg-gray-200 mb-4">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-1000"
              style={{ width: `${finalResult.level}%` }}
            />
          </div>
          <p className="text-gray-700">{finalResult.feedback}</p>
          <div className="mt-4 text-sm text-gray-500">
            Level: {getLevelLabel(finalResult.level)}
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="h-[400px] overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-brand-600 text-white rounded-tr-md'
                  : 'bg-gray-100 text-gray-800 rounded-tl-md'
              }`}>
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-5 py-3 rounded-2xl rounded-tl-md">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {!isComplete && (
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Type your answer..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none transition-all disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 disabled:opacity-50 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function getLevelLabel(level: number): string {
  if (level <= 20) return 'Beginner'
  if (level <= 40) return 'Foundational'
  if (level <= 60) return 'Intermediate'
  if (level <= 80) return 'Advanced'
  return 'Expert'
}
