import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Curtis Irwin | Learning & Development Leader',
  description: 'Building the future of learning at Amazon. Helping 10,000+ people grow across EMEA through technology, design, and innovation.',
  keywords: ['Curtis Irwin', 'Learning and Development', 'Amazon', 'L&D Leader', 'Training', 'EMEA'],
  authors: [{ name: 'Curtis Irwin' }],
  metadataBase: new URL('https://curtisirwin.com'),
  openGraph: {
    title: 'Curtis Irwin | Learning & Development Leader',
    description: 'Building the future of learning at Amazon. Helping 10,000+ people grow across EMEA.',
    url: 'https://curtisirwin.com',
    siteName: 'Curtis Irwin',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curtis Irwin | Learning & Development Leader',
    description: 'Building the future of learning at Amazon. Helping 10,000+ people grow across EMEA.',
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
