import JourneySection from './components/JourneySection'
import SDIProfile from './components/SDIProfile'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Sticky Name Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="flex items-center gap-2 font-bold text-lg text-white">
            <img src="/curtis-irwin.jpeg" alt="Curtis Irwin" className="w-8 h-8 rounded-full object-cover border border-amber-400/30" />
            Curtis <span className="text-amber-400">Irwin</span>
          </span>
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
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">1,100+</p>
              <p className="text-slate-400 text-sm mt-2">Leaders Trained Directly</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">50+</p>
              <p className="text-slate-400 text-sm mt-2">Team Members Led</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">9</p>
              <p className="text-slate-400 text-sm mt-2">Countries Delivered In</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">+74</p>
              <p className="text-slate-400 text-sm mt-2">Combined NPS</p>
            </div>
          </div>

          {/* Secondary stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">80+</p>
              <p className="text-slate-400 text-sm mt-2">Workshops Delivered</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">97%</p>
              <p className="text-slate-400 text-sm mt-2">Satisfaction Rate</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">20+</p>
              <p className="text-slate-400 text-sm mt-2">Years in L&amp;D</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-amber-400/30 transition-colors group">
              <p className="text-4xl sm:text-5xl font-bold text-amber-400 group-hover:scale-110 transition-transform">40K+</p>
              <p className="text-slate-400 text-sm mt-2">Leaders in Program Reach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes & Program Impact */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">What People Say</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            In their <span className="text-amber-400">own words</span>.
          </h2>

          {/* Quotes grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                &ldquo;Curtis was an amazing instructor, ensuring a very safe space and making sure everybody gets heard.&rdquo;
              </p>
              <p className="text-xs text-amber-400/70">LeaF Participant, 2026</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                &ldquo;Curtis was able to keep everyone involved and engaged for the 2 days training period &mdash; not an easy one! He made it easy to drop the room if urgent &mdash; he trusted us and we did trust him!&rdquo;
              </p>
              <p className="text-xs text-amber-400/70">LeaF Participant, 2026</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                &ldquo;It could&apos;ve been easily a boring training, but the way Curtis and Melissa delivered added a lot of value. They were amazing.&rdquo;
              </p>
              <p className="text-xs text-amber-400/70">LeaF Participant, 2026</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                &ldquo;Very engaging facilitators, I was impressed by the insight and experience of Curtis and Adam.&rdquo;
              </p>
              <p className="text-xs text-amber-400/70">Multipliers Participant, 2025</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                &ldquo;Curtis is such a great facilitator!&rdquo;
              </p>
              <p className="text-xs text-amber-400/70">LeaF Participant, 2026</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-slate-300 text-sm leading-relaxed italic mb-3">
                &ldquo;Great workshop. I liked how space was made for participants to contribute and debate based on their experience.&rdquo;
              </p>
              <p className="text-xs text-amber-400/70">Multipliers Participant, 2025 &middot; NPS +64, 0 detractors</p>
            </div>
          </div>

          {/* Program Highlights */}
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">Program Highlights</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            LeaF + Multipliers <span className="text-amber-400">combined</span>.
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* LeaF */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-400/5 to-transparent border border-amber-400/20">
              <h4 className="text-lg font-bold text-white mb-1">Leaders as Facilitators (LeaF)</h4>
              <p className="text-xs text-amber-400 mb-4">Jan &ndash; Jun 2026</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Leaders trained</span>
                  <span className="text-sm font-bold text-white">336</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Workshops delivered</span>
                  <span className="text-sm font-bold text-white">35</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">NPS</span>
                  <span className="text-sm font-bold text-amber-400">+78</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Overall satisfaction</span>
                  <span className="text-sm font-bold text-white">97.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Gave a perfect 10</span>
                  <span className="text-sm font-bold text-white">60%</span>
                </div>
              </div>
            </div>

            {/* Multipliers */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-400/5 to-transparent border border-blue-400/20">
              <h4 className="text-lg font-bold text-white mb-1">Multipliers &amp; Impact Players</h4>
              <p className="text-xs text-blue-400 mb-4">2023 &ndash; Sep 2025</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Leaders trained</span>
                  <span className="text-sm font-bold text-white">~778</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Workshops delivered</span>
                  <span className="text-sm font-bold text-white">45+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">NPS (avg)</span>
                  <span className="text-sm font-bold text-blue-400">+69.3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Best session NPS</span>
                  <span className="text-sm font-bold text-white">+87.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Countries</span>
                  <span className="text-sm font-bold text-white">9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Certified facilitators</span>
                  <span className="text-sm font-bold text-white">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">Budget secured</span>
                  <span className="text-sm font-bold text-white">$180,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight callout */}
          <div className="mt-6 p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 text-center">
            <p className="text-slate-400 text-sm">
              <span className="text-amber-400 font-bold">15%</span> of Multipliers participants called it 
              &ldquo;one of the best trainings at Amazon&rdquo;
            </p>
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

      {/* Journey */}
      <JourneySection />

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
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <span className="text-amber-400">&#10003;</span>
                  <p className="text-sm text-slate-300">Core Strengths SDI Facilitator</p>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <span className="text-amber-400">&#10003;</span>
                  <p className="text-sm text-slate-300">Liz Wiseman Multipliers &amp; Impact Players Facilitator</p>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <span className="text-amber-400">&#10003;</span>
                  <p className="text-sm text-slate-300">Situational Leadership II Facilitator</p>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <span className="text-amber-400">&#10003;</span>
                  <p className="text-sm text-slate-300">FranklinCovey Leading at the Speed of Trust</p>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <span className="text-amber-400">&#10003;</span>
                  <p className="text-sm text-slate-300">CrossFit Level 1</p>
                </div>
              </div>
            </div>
          </div>

          {/* SDI Hub */}
          <SDIProfile />
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">Side Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            What I&apos;m working on <span className="text-amber-400">outside work</span>.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Crystal Pistol Performance */}
            <div className="group rounded-2xl bg-gradient-to-br from-rose-400/5 to-rose-600/5 border border-rose-400/20 p-8 hover:border-rose-400/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Pistol <span className="text-rose-400">Performance</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                A platform I built for my sister, an ultra running coach, to manage her 
                clients and give them a place to interact, track progress, and see their 
                history. She&apos;s doing good for so many people &mdash; this is my way of helping.
              </p>
              <a
                href="http://crystalpistolperformance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-400/10 text-rose-400 text-sm font-medium border border-rose-400/20 hover:bg-rose-400/20 transition-colors"
              >
                Visit Site
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
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
                A fun community project helping locals discover the weird and wonderful 
                facts about the town I live in. Also my first full-stack project &mdash; where I 
                learned to build front end and back end from scratch.
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

            {/* First Mile Coach */}
            <div className="group rounded-2xl bg-gradient-to-br from-emerald-400/5 to-emerald-600/5 border border-emerald-400/20 p-8 hover:border-emerald-400/40 transition-all hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                First Mile <span className="text-emerald-400">Coach</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                In the idea phase &mdash; building a platform to connect experienced runners 
                (not pros) with people who want to start running and just need a little 
                inspiration and help to take that first step.
              </p>
              <a
                href="https://www.firstmilecoach.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 text-emerald-400 text-sm font-medium border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors"
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

      {/* World Travel */}
      <section className="py-20 border-t border-slate-700/50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">Beyond Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            30 countries. 3 countries called <span className="text-amber-400">home</span>.
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            I&apos;ve lived and worked across continents. Every place shaped how I think about people, culture, and learning.
          </p>

          {/* Places Lived */}
          <div className="mb-12">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-4 text-center">Called Home</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { country: 'United States', flag: '🇺🇸' },
                { country: 'Slovakia', flag: '🇸🇰' },
                { country: 'England', flag: '🇬🇧' },
              ].map(({ country, flag }) => (
                <div key={country} className="px-5 py-4 rounded-2xl bg-gradient-to-br from-amber-400/10 to-amber-600/5 border border-amber-400/30 text-center group hover:-translate-y-1 transition-all duration-300">
                  <span className="text-3xl block mb-2">{flag}</span>
                  <p className="font-bold text-white text-sm">{country}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Countries Map - Visual Grid */}
          <div className="mb-8">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-4 text-center">Passport Stamps</p>
          </div>

          {/* Continent groups */}
          <div className="space-y-6">
            {/* Americas */}
            <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-xs text-amber-400 uppercase tracking-wider mb-3 font-medium">Americas</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { country: 'United States', flag: '🇺🇸' },
                  { country: 'Canada', flag: '🇨🇦' },
                  { country: 'Mexico', flag: '🇲🇽' },
                  { country: 'Peru', flag: '🇵🇪' },
                  { country: 'Aruba', flag: '🇦🇼' },
                ].map(({ country, flag }) => (
                  <span key={country} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/50 text-sm text-slate-300 hover:bg-slate-700 transition-colors">
                    <span>{flag}</span> {country}
                  </span>
                ))}
              </div>
            </div>

            {/* Europe */}
            <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-xs text-amber-400 uppercase tracking-wider mb-3 font-medium">Europe</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { country: 'UK', flag: '🇬🇧' },
                  { country: 'Slovakia', flag: '🇸🇰' },
                  { country: 'Czech Republic', flag: '🇨🇿' },
                  { country: 'Poland', flag: '🇵🇱' },
                  { country: 'Germany', flag: '🇩🇪' },
                  { country: 'France', flag: '🇫🇷' },
                  { country: 'Italy', flag: '🇮🇹' },
                  { country: 'Spain', flag: '🇪🇸' },
                  { country: 'Portugal', flag: '🇵🇹' },
                  { country: 'Netherlands', flag: '🇳🇱' },
                  { country: 'Belgium', flag: '🇧🇪' },
                  { country: 'Luxembourg', flag: '🇱🇺' },
                  { country: 'Austria', flag: '🇦🇹' },
                  { country: 'Ireland', flag: '🇮🇪' },
                  { country: 'Sweden', flag: '🇸🇪' },
                  { country: 'Norway', flag: '🇳🇴' },
                  { country: 'Finland', flag: '🇫🇮' },
                  { country: 'Greece', flag: '🇬🇷' },
                  { country: 'Croatia', flag: '🇭🇷' },
                  { country: 'Bulgaria', flag: '🇧🇬' },
                  { country: 'Lithuania', flag: '🇱🇹' },
                  { country: 'Latvia', flag: '🇱🇻' },
                ].map(({ country, flag }) => (
                  <span key={country} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/50 text-sm text-slate-300 hover:bg-slate-700 transition-colors">
                    <span>{flag}</span> {country}
                  </span>
                ))}
              </div>
            </div>

            {/* Asia & Middle East */}
            <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50">
              <p className="text-xs text-amber-400 uppercase tracking-wider mb-3 font-medium">Asia &amp; Middle East</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { country: 'Japan', flag: '🇯🇵' },
                  { country: 'India', flag: '🇮🇳' },
                  { country: 'UAE', flag: '🇦🇪' },
                ].map(({ country, flag }) => (
                  <span key={country} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700/50 text-sm text-slate-300 hover:bg-slate-700 transition-colors">
                    <span>{flag}</span> {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fun counter */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              <span className="text-amber-400 font-bold">30</span> countries &middot; 
              <span className="text-amber-400 font-bold"> 4</span> continents &middot; 
              <span className="text-amber-400 font-bold"> 3</span> countries called home &middot; 
              <span className="text-slate-400">still exploring</span>
            </p>
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
