import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Curtis Irwin | L&D Leader Transforming How Amazon Trains 10,000+ People',
  description: 'Learning & Development Leader at Amazon building the future of employee training across EMEA. Designing AI-powered learning solutions, leading high-performing teams, and turning skill gaps into career breakthroughs. Let\'s connect.',
  keywords: ['Curtis Irwin', 'Learning and Development', 'Amazon', 'L&D Leader', 'Training', 'EMEA', 'EdTech'],
  authors: [{ name: 'Curtis Irwin' }],
  metadataBase: new URL('https://curtisirwin.com'),
  openGraph: {
    title: 'Curtis Irwin | L&D Leader Transforming How Amazon Trains 10,000+ People',
    description: 'Learning & Development Leader at Amazon building the future of employee training across EMEA. Designing AI-powered learning solutions, leading high-performing teams, and turning skill gaps into career breakthroughs. Let\'s connect.',
    url: 'https://curtisirwin.com',
    siteName: 'Curtis Irwin',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curtis Irwin | L&D Leader Transforming How Amazon Trains 10,000+ People',
    description: 'Learning & Development Leader at Amazon building the future of employee training across EMEA. Designing AI-powered learning solutions, leading high-performing teams, and turning skill gaps into career breakthroughs. Let\'s connect.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
