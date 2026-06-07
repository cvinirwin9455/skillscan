export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mb-8">
          <svg className="w-9 h-9 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>

        {/* Brand */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Fore<span className="text-amber-400">Way</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          The path forward for your career.<br />
          AI-powered skills intelligence.
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-400/10 text-amber-400 text-lg font-semibold mb-10 border border-amber-400/20">
          <span className="relative flex h-3 w-3 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
          </span>
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-slate-400 text-base max-w-md mx-auto mb-12">
          Upload your work artifacts, get assessed by AI, track your skill progression, 
          and find roles that match your expertise. Launching soon.
        </p>

        {/* Footer */}
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Curtis Irwin &middot; curtisirwin.com
        </p>
      </div>
    </div>
  )
}
