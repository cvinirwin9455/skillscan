export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Sticky Name Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-lg text-white">Curtis <span className="text-amber-400">Irwin</span></span>
          <a href="mailto:curtisirwin@me.com" className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400 text-slate-900 rounded-lg text-sm font-bold hover:bg-amber-300 transition-colors">
            Get In Touch
          </a>
        </div>
      </nav>

      {/* Hero - Big Impact */}
      <header className="relative min-h-[90vh] flex items-center pt-14">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Photo */}
            <div className="relative">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl border-2 border-amber-400/30 overflow-hidden shadow-2xl shadow-amber-500/10 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/curtis-irwin.jpeg"
                  alt="Curtis Irwin"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-amber-400 text-slate-900 rounded-xl text-sm font-bold shadow-lg">
                20+ yrs in L&amp;D
              </div>
            </div>

            {/* Big intro */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Curtis <span className="text-amber-400">Irwin</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-slate-300 font-medium mb-6">
                I help <span className="text-amber-400">10,000+</span> people grow.
              </p>
              <p className="text-amber-400/80 font-medium tracking-wider uppercase text-sm mb-4">Learning &amp; Development Leader</p>
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed mb-8">
                Building the future of learning at Amazon across EMEA. 
                I turn skill gaps into career breakthroughs through technology, 
                design, and a little bit of magic.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="mailto:curtisirwin@me.com" className="px-6 py-3 bg-amber-400 text-slate-900 rounded-xl font-bold hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20">
                  Get In Touch
                </a>
                <a href="#impact" className="px-6 py-3 bg-slate-800 text-white rounded-xl font-medium border border-slate-700 hover:border-amber-400/50 transition-colors">
                  See My Impact &darr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Impact Numbers - scroll-stopping stats */}
      <section id="impact" className="py-20 border-t border-slate-700/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-12">The Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">10K+</p>
              <p className="text-slate-400 text-sm mt-2">Employees Trained</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">30+</p>
              <p className="text-slate-400 text-sm mt-2">Team Members Led</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">EMEA</p>
              <p className="text-slate-400 text-sm mt-2">Region Coverage</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">20+</p>
              <p className="text-slate-400 text-sm mt-2">Years in L&amp;D</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do - storytelling approach */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            I build learning that actually <span className="text-amber-400">works</span>.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-400/30 transition-all hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-slate-400 leading-relaxed">
                Complex technical learning made simple. From eLearning to immersive experiences, 
                I design solutions people actually want to complete.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-400/30 transition-all hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Lead</h3>
              <p className="text-slate-400 leading-relaxed">
                Building and scaling high-performing L&amp;D teams. I grow leaders who grow others &mdash; 
                it&apos;s multipliers all the way down.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-400/30 transition-all hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovate</h3>
              <p className="text-slate-400 leading-relaxed">
                Integrating AI, emerging tech, and creative approaches to transform 
                how organizations develop their people at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey - creative timeline */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">The Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            From trainer to <span className="text-amber-400">product leader</span>.
          </h2>

          <div className="space-y-12">
            {/* Current Role */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-400/5 to-transparent border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-bold">NOW</span>
                  <p className="text-slate-500 text-sm mt-2">2023 &ndash; Present</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Manager, Learning Product Design</h3>
                  <p className="text-amber-400 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-4 brightness-0 invert opacity-80" />
                    &middot; London
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Leading 6 Product Managers and Technologists building the technical learning 
                    infrastructure for EU Transportation Services. Where product thinking meets people development.
                  </p>
                </div>
              </div>
            </div>

            {/* Role 2 */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-slate-400 font-medium">2022 &ndash; 2023</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Manager, Learning Experience Design</h3>
                  <p className="text-amber-400/70 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-4 brightness-0 invert opacity-60" />
                    &middot; London
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Scaled a team of 20 designers and 4 managers across EU &amp; UK Sort Centers. 
                    Reached 10,000 employees with training that bridged skill gaps through diverse 
                    modalities and cutting-edge tech.
                  </p>
                </div>
              </div>
            </div>

            {/* Role 3 */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-slate-400 font-medium">2019 &ndash; 2022</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Sr. Learning Experience Designer</h3>
                  <p className="text-amber-400/70 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-4 brightness-0 invert opacity-60" />
                    &middot; London
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Designed end-to-end learning for Amazon 4-Star physical stores and EU Vendor Managers. 
                    Built mobile-first training apps, evaluation frameworks, and performance support 
                    that moved the needle.
                  </p>
                </div>
              </div>
            </div>

            {/* Role 4 */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-slate-400 font-medium">2016 &ndash; 2019</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Global Payroll Training Program Manager</h3>
                  <p className="text-amber-400/70 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-4 brightness-0 invert opacity-60" />
                    &middot; Bratislava
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Built instructor-led and eLearning programs for global payroll compliance. 
                    Created the &ldquo;Peculiar Partnership&rdquo; program connecting vendors to Amazon&apos;s 
                    unique culture. The start of the Amazon chapter.
                  </p>
                </div>
              </div>
            </div>

            {/* AT&T Section Header */}
            <div className="pt-8 pb-4">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-700/50" />
                <span className="text-slate-500 text-sm font-medium">Previously at AT&amp;T &middot; 9 years</span>
                <div className="h-px flex-1 bg-slate-700/50" />
              </div>
            </div>

            {/* AT&T Role 1 */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-slate-400 font-medium">2012 &ndash; 2015</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Senior Project Manager</h3>
                  <p className="text-blue-400/70 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg" alt="AT&T" className="h-5 brightness-0 invert opacity-60" />
                    &middot; Bratislava
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Managed India-based team supporting enterprise customers. Designed global 
                    learning programs on access path diversity for sales teams and enhanced 
                    processes with outsourced vendors.
                  </p>
                </div>
              </div>
            </div>

            {/* AT&T Role 2 */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-slate-400 font-medium">2011 &ndash; 2012</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Senior Project Manager, Communications &amp; Training</h3>
                  <p className="text-blue-400/70 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg" alt="AT&T" className="h-5 brightness-0 invert opacity-60" />
                    &middot; Bratislava
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Designed and deployed operational process and professional skills training. 
                    Built training roadmaps across job families and implemented social networking 
                    tools for global collaboration.
                  </p>
                </div>
              </div>
            </div>

            {/* AT&T Role 3 */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-slate-400 font-medium">2009 &ndash; 2011</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Operations Manager, Project Management</h3>
                  <p className="text-blue-400/70 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg" alt="AT&T" className="h-5 brightness-0 invert opacity-60" />
                    &middot; Bratislava
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Established go-to-market service delivery operations from scratch. Hired 
                    and developed 15 Project Managers for a new business model. Led training 
                    on Future Methods of Operations.
                  </p>
                </div>
              </div>
            </div>

            {/* AT&T Role 4 */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-slate-400 font-medium">2007 &ndash; 2008</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Transition Project Manager</h3>
                  <p className="text-blue-400/70 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg" alt="AT&T" className="h-5 brightness-0 invert opacity-60" />
                    &middot; Bratislava
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Led business unit transition and expansion to Kosice Center. Implemented 
                    diverse learning programs in engineering and leadership while managing 
                    regulatory compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* AT&T Role 5 */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-slate-400 font-medium">2005 &ndash; 2007</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Trainer &amp; Leadership Development PM</h3>
                  <p className="text-blue-400/70 text-sm mb-3 flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg" alt="AT&T" className="h-5 brightness-0 invert opacity-60" />
                    &middot; Bratislava
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Designed training programs for managers and engineers. Developed leadership 
                    programs for first and second-level managers and led the high-visibility 
                    Management Assessment Program. Where the L&amp;D journey began.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Superpowers / Skills */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">Superpowers</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            What I bring to the <span className="text-amber-400">table</span>.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { skill: 'Learning Design', emoji: '🎨' },
              { skill: 'Team Leadership', emoji: '🚀' },
              { skill: 'Change Management', emoji: '🔄' },
              { skill: 'EdTech & AI', emoji: '🤖' },
              { skill: 'Performance Strategy', emoji: '📈' },
              { skill: 'Leadership Facilitation', emoji: '🎯' },
            ].map(({ skill, emoji }) => (
              <div key={skill} className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-400/30 hover:-translate-y-1 transition-all duration-300 text-center group">
                <span className="text-3xl block mb-3 group-hover:scale-125 transition-transform">{emoji}</span>
                <p className="text-sm font-medium text-slate-300">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials - compact */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-amber-400 font-medium tracking-wider uppercase text-sm mb-6">Education</p>
              <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                <p className="text-lg font-bold mb-1">B.S. Communications</p>
                <p className="text-slate-400">Drury University, Springfield, MO</p>
              </div>
            </div>

            <div>
              <p className="text-amber-400 font-medium tracking-wider uppercase text-sm mb-6">Certified In</p>
              <div className="space-y-3">
                {[
                  'Core Strengths SDI Facilitator',
                  'Liz Wiseman Multipliers Facilitator',
                  'Situational Leadership II Facilitator',
                  'FranklinCovey Leading at the Speed of Trust',
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                    <span className="text-amber-400">&#10003;</span>
                    <p className="text-sm text-slate-300">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">Side Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            What I&apos;m building <span className="text-amber-400">next</span>.
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* ForeWay */}
            <div className="group rounded-2xl bg-gradient-to-br from-amber-400/5 to-amber-600/5 border border-amber-400/20 p-8 hover:border-amber-400/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Fore<span className="text-amber-400">Way</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                AI-powered skills intelligence. Upload artifacts, get assessed, 
                track your progression, find your next role. The path forward.
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
            <div className="group rounded-2xl bg-gradient-to-br from-blue-400/5 to-blue-600/5 border border-blue-400/20 p-8 hover:border-blue-400/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Do You Know <span className="text-blue-400">Hertford</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                Celebrating the history, culture, and hidden gems of one of England&apos;s 
                most underrated towns.
              </p>
              <a
                href="https://doyouknowhertford.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 text-blue-400 text-sm font-medium border border-blue-400/20 hover:bg-blue-400/20 transition-colors"
              >
                Visit Site
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s build something <span className="text-amber-400">together</span>.
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Whether it&apos;s transforming your L&amp;D strategy, exploring a collaboration, 
            or just talking shop &mdash; I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:curtisirwin@me.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-slate-900 rounded-xl font-bold text-lg hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            curtisirwin@me.com
          </a>
          <p className="text-slate-500 text-sm mt-4">Greater London Area, UK</p>
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
