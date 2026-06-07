import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Curtis Irwin | Learning & Development Leader',
  description: 'Results-driven Learning and Development Leader with over 8 years of experience at Amazon, focused on designing strategic training initiatives across EMEA.',
  keywords: ['Curtis Irwin', 'Learning and Development', 'Amazon', 'L&D Leader', 'Training', 'EMEA'],
  authors: [{ name: 'Curtis Irwin' }],
  openGraph: {
    title: 'Curtis Irwin | Learning & Development Leader',
    description: 'Results-driven L&D Leader with over 8 years at Amazon, designing strategic training initiatives across EMEA.',
    url: 'https://curtisirwin.com',
    siteName: 'Curtis Irwin',
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
      <body>{children}</body>
    </html>
  )
}
