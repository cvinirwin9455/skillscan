import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillScan | Coming Soon - curtisirwin.com',
  description: 'AI-powered skills assessment and career intelligence. Coming soon to curtisirwin.com.',
  keywords: ['skills assessment', 'AI', 'career development', 'professional growth'],
  authors: [{ name: 'Curtis Irwin' }],
  openGraph: {
    title: 'SkillScan | Coming Soon',
    description: 'AI-powered skills assessment and career intelligence. Coming soon.',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
