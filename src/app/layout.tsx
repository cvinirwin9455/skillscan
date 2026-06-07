import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'SkillScan | AI-Powered Skills Assessment - curtisirwin.com',
  description: 'Discover, assess, and grow your professional skills with AI-powered analysis. Upload artifacts, get probed on your expertise, and track your progression over time.',
  keywords: ['skills assessment', 'AI', 'career development', 'professional growth', 'job matching'],
  authors: [{ name: 'Curtis Irwin' }],
  openGraph: {
    title: 'SkillScan | AI-Powered Skills Assessment',
    description: 'Discover, assess, and grow your professional skills with AI-powered analysis.',
    url: 'https://curtisirwin.com',
    siteName: 'SkillScan',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-brand-50/30">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
