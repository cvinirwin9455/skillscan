'use client'

import { useState } from 'react'

export default function SDIProfile() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-12">
      <div className="rounded-2xl bg-gradient-to-r from-purple-400/5 to-blue-400/5 border border-purple-400/20 overflow-hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 flex-wrap">
                My SDI Profile
                <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full">HUB</span>
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Flexible, adaptable, situational &mdash; motivated by a blend of people, performance, and process.
              </p>
            </div>
          </div>
          <svg
            className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 sm:px-8 pb-8 pt-0">
            <div className="h-px bg-slate-700/50 mb-6" />

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              In the Strength Deployment Inventory (SDI), a <span className="text-purple-300 font-medium">HUB</span> is someone whose
              motivational value system is flexible, adaptable, and situational. Rather than being driven
              by one dominant motive, HUBs read the room and shift their approach depending on what the
              situation or people need &mdash; motivated by a blend of people, performance, and process.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <p className="text-sm font-medium text-purple-300 mb-2">What a HUB looks like</p>
                <ul className="text-xs text-slate-400 space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Adapts easily to different people and situations</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Sees multiple sides of an issue</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Mediates between different personalities or priorities</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Values balance, fairness, and flexibility</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Translates between people-focused, results-focused, and process-focused colleagues</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <p className="text-sm font-medium text-purple-300 mb-2">Strengths of a HUB</p>
                <ul className="text-xs text-slate-400 space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Building bridges between different working styles</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Staying open-minded and adjusting communication</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Helping a team avoid extremes</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Spotting when one approach is too rigid</li>
                  <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">&bull;</span>Bringing balance to emotionally charged discussions</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              In a team, a HUB often acts like a <span className="text-purple-300">connector, translator, or stabiliser</span>.
              Their default is: &ldquo;It depends. Let&apos;s look at what this situation actually needs.&rdquo;
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <p className="text-sm font-medium text-amber-400/80 mb-2">Possible overdone strengths</p>
                <ul className="text-xs text-slate-400 space-y-1.5">
                  <li className="flex items-start gap-2"><span className="text-amber-400/60 mt-0.5">&bull;</span>May seem inconsistent or hard to read</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400/60 mt-0.5">&bull;</span>Can delay decisions by seeing too many angles</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400/60 mt-0.5">&bull;</span>May adapt so much others are unsure what they really think</li>
                  <li className="flex items-start gap-2"><span className="text-amber-400/60 mt-0.5">&bull;</span>Flexibility can sometimes become ambiguity</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <p className="text-sm font-medium text-amber-400/80 mb-2">In conflict</p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A HUB may become frustrated when people become too rigid, ideological, or competitive.
                  They try to keep options open and restore balance. In conflict, a HUB thinks:
                  &ldquo;Why is everyone acting as if there is only one right way to see this?&rdquo;
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-400/5 border border-purple-400/10">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="font-medium text-purple-300">In short:</span> A HUB is adaptable, balanced, situational, and able to connect
                different motivations. Their strength is flexibility. Their challenge is making sure that
                flexibility does not come across as lack of conviction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
