'use client'

import { useState, useCallback } from 'react'
import { addSkill, addArtifact, generateId } from '@/lib/storage'
import { ExtractedSkill, Artifact } from '@/lib/types'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [textContent, setTextContent] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<ExtractedSkill[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
      setError(null)
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setError(null)
    }
  }

  const analyzeContent = async () => {
    const content = textContent.trim()
    if (!file && !content) {
      setError('Please upload a file or paste your content')
      return
    }

    setIsAnalyzing(true)
    setError(null)
    setResults(null)

    try {
      let textToAnalyze = content

      if (file) {
        textToAnalyze = await file.text()
      }

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: textToAnalyze,
          filename: file?.name || 'pasted-content',
        }),
      })

      if (!response.ok) {
        throw new Error('Analysis failed. Please check your API key configuration.')
      }

      const data = await response.json()
      setResults(data.skills)

      const artifact: Artifact = {
        id: generateId(),
        name: file?.name || 'Pasted Content',
        type: detectArtifactType(file?.name || ''),
        uploadedAt: new Date().toISOString(),
        extractedSkills: data.skills,
      }
      addArtifact(artifact)

      data.skills.forEach((skill: ExtractedSkill) => {
        addSkill({
          id: generateId(),
          name: skill.name,
          category: skill.category,
          level: skill.level,
          confidence: 60,
          lastAssessed: new Date().toISOString(),
          history: [{
            date: new Date().toISOString(),
            level: skill.level,
            source: 'artifact',
            notes: `Extracted from: ${file?.name || 'pasted content'}`,
          }],
        })
      })
    } catch (err: any) {
      setError(err.message || 'An error occurred during analysis')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Scan Your Artifacts
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload your resume, certificates, portfolio, code samples, or any professional document.
          Our AI will analyze it and extract your skills with proficiency ratings.
        </p>
      </div>

      <div className="space-y-8">
        {/* Upload Area */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            dragActive
              ? 'border-brand-500 bg-brand-50'
              : file
              ? 'border-accent-400 bg-accent-50'
              : 'border-gray-300 hover:border-brand-400 hover:bg-gray-50'
          }`}
        >
          {file ? (
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto rounded-xl bg-accent-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900">{file.name}</p>
              <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
              <button onClick={() => setFile(null)} className="text-sm text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-xl bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">Drop your file here</p>
                <p className="text-sm text-gray-500 mt-1">or click to browse</p>
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt,.md,.json,.py,.js,.ts,.jsx,.tsx,.html,.css"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <p className="text-xs text-gray-400">
                Supports: PDF, Word, Text, Markdown, Code files
              </p>
            </div>
          )}
        </div>

        {/* Or separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-gradient-to-br from-slate-50 via-white to-brand-50/30 text-gray-500">
              or paste your content
            </span>
          </div>
        </div>

        {/* Text Input */}
        <textarea
          value={textContent}
          onChange={(e) => { setTextContent(e.target.value); setError(null) }}
          placeholder="Paste your resume, project description, LinkedIn summary, or any professional content here..."
          className="w-full h-48 px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none resize-none text-gray-700 placeholder-gray-400 transition-all"
        />

        {/* Analyze Button */}
        <button
          onClick={analyzeContent}
          disabled={isAnalyzing || (!file && !textContent.trim())}
          className="w-full py-4 px-8 bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-brand-500/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isAnalyzing ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Analyzing with AI...
            </span>
          ) : (
            'Analyze & Extract Skills'
          )}
        </button>

        {/* Error */}
        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">{error}</div>
        )}

        {/* Results */}
        {results && results.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Extracted Skills ({results.length})</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {results.map((skill, index) => (
                <div key={index} className="p-6 rounded-xl bg-white border border-gray-200 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-brand-100 text-brand-700">{skill.category}</span>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Proficiency</span>
                      <span className="font-medium text-gray-900">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic">&ldquo;{skill.evidence}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function detectArtifactType(filename: string): Artifact['type'] {
  const ext = filename.toLowerCase().split('.').pop()
  if (['pdf', 'doc', 'docx'].includes(ext || '')) return 'resume'
  if (['py', 'js', 'ts', 'jsx', 'tsx', 'html', 'css', 'json'].includes(ext || '')) return 'code'
  if (['md', 'txt'].includes(ext || '')) return 'document'
  return 'other'
}
