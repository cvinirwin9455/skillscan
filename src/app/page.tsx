export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center mb-8">
          <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>

        {/* Brand */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
          Skill<span className="text-blue-600">Scan</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          AI-powered skills assessment &amp; career intelligence.<br />
          Discover your professional edge.
        </p>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 text-lg font-semibold mb-10">
          <span className="relative flex h-3 w-3 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-gray-500 text-base max-w-md mx-auto mb-12">
          Upload your work artifacts, get assessed by AI, track your skill progression, 
          and find roles that match your expertise. Launching soon.
        </p>

        {/* Footer */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Curtis Irwin &middot; curtisirwin.com
        </p>
      </div>
    </div>
  )
}
