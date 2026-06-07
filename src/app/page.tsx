import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header / Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-amber-400/30 overflow-hidden flex-shrink-0">
              <img
                src="/curtis-irwin.jpeg"
                alt="Curtis Irwin"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Intro */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                Curtis <span className="text-amber-400">Irwin</span>
              </h1>
              <p className="text-xl text-slate-300 mb-4">
                Learning &amp; Development Leader
              </p>
              <p className="text-slate-400 leading-relaxed max-w-xl">
                Results-driven L&amp;D Leader with over 8 years at Amazon, focused on designing strategic
                training initiatives that enhance employee engagement and performance across EMEA.
                Leading innovative learning solutions leveraging advanced technologies to address
                skill gaps effectively.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a href="mailto:curtisirwin@me.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20 hover:bg-amber-400/20 transition-colors text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  curtisirwin@me.com
                </a>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 text-slate-300 border border-slate-600/50 text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Greater London Area, UK
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills */}
      <section className="py-16 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Core Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Learning & Development',
              'Organizational Leadership',
              'Change Management',
              'Technology Integration',
              'Performance Improvement',
              'Leadership Facilitation',
            ].map((skill) => (
              <div key={skill} className="px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            Experience
          </h2>

          <div className="space-y-8">
            {/* Role 1 */}
            <div className="relative pl-6 border-l-2 border-amber-400/30">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-400 border-4 border-slate-900" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Manager, Learning Product Design</h3>
                <span className="text-sm text-amber-400 font-medium">2023 &ndash; Present</span>
              </div>
              <p className="text-sm text-slate-400 mb-2">Amazon &middot; London, UK</p>
              <p className="text-slate-300 leading-relaxed">
                Leading a team of 6 Learning Product Managers and Technologists to deliver complex
                technical solutions for EU Amazon Transportation Services.
              </p>
            </div>

            {/* Role 2 */}
            <div className="relative pl-6 border-l-2 border-amber-400/30">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-400/60 border-4 border-slate-900" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Manager, Learning Experience Design</h3>
                <span className="text-sm text-amber-400 font-medium">2022 &ndash; 2023</span>
              </div>
              <p className="text-sm text-slate-400 mb-2">Amazon &middot; London, UK</p>
              <p className="text-slate-300 leading-relaxed">
                Led a team of 20 Learning Experience Designers and 4 Managers to design training
                processes and tools for Amazon operations across EU and UK Sort Centers, addressing
                skill gaps for 10,000 employees through diverse modalities and advanced technologies
                while evaluating and enhancing the effectiveness of learning solutions.
              </p>
            </div>

            {/* Role 3 */}
            <div className="relative pl-6 border-l-2 border-amber-400/30">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-400/40 border-4 border-slate-900" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Sr. Learning Experience Designer</h3>
                <span className="text-sm text-amber-400 font-medium">2019 &ndash; 2022</span>
              </div>
              <p className="text-sm text-slate-400 mb-2">Amazon &middot; London, UK</p>
              <p className="text-slate-300 leading-relaxed">
                Developed innovative solutions to address knowledge and skill gaps through advanced
                technology and training for Amazon 4-Star physical stores associates and EU Vendor Managers.
                Designed full-cycle learning solutions and performance support materials, established
                evaluation mechanisms for training effectiveness, and collaborated with functional teams
                to identify needs and prioritize deliverables.
              </p>
            </div>

            {/* Role 4 */}
            <div className="relative pl-6 border-l-2 border-amber-400/30">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-400/20 border-4 border-slate-900" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Global Payroll Training Program Manager</h3>
                <span className="text-sm text-amber-400 font-medium">2016 &ndash; 2019</span>
              </div>
              <p className="text-sm text-slate-400 mb-2">Amazon &middot; Bratislava, Slovakia</p>
              <p className="text-slate-300 leading-relaxed">
                Led a training team in designing and developing both instructor-led and eLearning courses
                on Amazon payroll processes and compliance. Owned and trained the &ldquo;Peculiar Partnership&rdquo;
                program to connect with global payroll vendors on Amazon&apos;s unique culture, and supported
                Global FinOps in creating programs focused on management, leadership, and customer obsession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                Education
              </h2>
              <div className="p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <h3 className="font-semibold text-white mb-1">B.S. Communications</h3>
                <p className="text-sm text-slate-400">Drury University, Springfield, MO, USA</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
                Certifications
              </h2>
              <div className="space-y-3">
                {[
                  'Core Strengths SDI Facilitator',
                  'Liz Wiseman Multipliers Facilitator',
                  'Situational Leadership II Facilitator',
                  'FranklinCovey Leading at the Speed of Trust Facilitator',
                ].map((cert) => (
                  <div key={cert} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <p className="text-sm text-slate-300 font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </span>
            Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* ForeWay */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-400/5 to-amber-600/5 border border-amber-400/20 p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fore<span className="text-amber-400">Way</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                AI-powered skills intelligence platform. Upload work artifacts, get assessed by AI,
                track your skill progression, and find roles that match your expertise.
              </p>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-medium border border-amber-400/20">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                Coming Soon
              </div>
            </div>

            {/* Do You Know Hertford */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-400/5 to-blue-600/5 border border-blue-400/20 p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Do You Know <span className="text-blue-400">Hertford</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                A local community project celebrating and sharing the history, culture, and hidden
                gems of Hertford.
              </p>
              <a
                href="https://doyouknowhertford.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-400/10 text-blue-400 text-xs font-medium border border-blue-400/20 hover:bg-blue-400/20 transition-colors"
              >
                Visit Site
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Curtis Irwin &middot; curtisirwin.com
          </p>
        </div>
      </footer>
    </div>
  )
}
