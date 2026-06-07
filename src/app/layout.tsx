import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ForeWay | Coming Soon - curtisirwin.com',
  description: 'The path forward for your career. AI-powered skills intelligence. Coming soon to curtisirwin.com.',
  keywords: ['skills assessment', 'AI', 'career development', 'professional growth', 'ForeWay'],
  authors: [{ name: 'Curtis Irwin' }],
  openGraph: {
    title: 'ForeWay | Coming Soon',
    description: 'The path forward for your career. AI-powered skills intelligence.',
    url: 'https://curtisirwin.com',
    siteName: 'ForeWay',
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
