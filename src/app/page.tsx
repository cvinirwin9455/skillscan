import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              AI-Powered Skills Intelligence
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Discover Your
              <span className="text-gradient"> Professional Edge</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Upload your work artifacts, get assessed by AI, and track your skill progression over time.
              Find roles that match your growing expertise.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/upload"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Scan Your Artifacts
              </Link>
              <Link
                href="/assessment"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-brand-300 hover:text-brand-700 transition-all duration-300"
              >
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three powerful ways to understand and grow your professional skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white border border-gray-200 card-hover">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Upload & Scan</h3>
              <p className="text-gray-600 leading-relaxed">
                Upload resumes, certificates, portfolios, code samples, or any professional artifact.
                Our AI analyzes them to identify and rate your skills.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white border border-gray-200 card-hover">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                Engage in an interactive conversation where AI probes your knowledge depth.
                Get precise skill level ratings with actionable feedback.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white border border-gray-200 card-hover">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track & Grow</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch your skills evolve over time with beautiful progression charts.
                Find job roles that match your growing expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 to-accent-600 p-12 text-center">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Discover Your Skills?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Start by uploading an artifact or diving into an interactive assessment.
                Your professional growth journey begins here.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/upload"
                  className="px-8 py-4 bg-white text-brand-700 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/dashboard"
                  className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-xl font-semibold text-lg hover:bg-white/20 transition-colors"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Curtis Irwin &middot; curtisirwin.com &middot; AI-Powered Skills Intelligence
          </p>
        </div>
      </footer>
    </div>
  )
}
