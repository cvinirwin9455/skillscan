import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Curtis Irwin | L&D Leader Transforming How Amazon Trains 10,000+ People',
  description: 'Learning & Development Leader at Amazon building the future of employee training across EMEA. Designing AI-powered learning solutions, leading high-performing teams, and turning skill gaps into career breakthroughs. Let\'s connect.',
  keywords: ['Curtis Irwin', 'Learning and Development', 'Amazon', 'L&D Leader', 'Training', 'EMEA', 'EdTech', 'Learning Experience Design', 'Learning Product Design', 'Leadership Facilitation', 'Change Management', 'curtisirwin.com'],
  authors: [{ name: 'Curtis Irwin' }],
  creator: 'Curtis Irwin',
  publisher: 'Curtis Irwin',
  metadataBase: new URL('https://curtisirwin.com'),
  alternates: {
    canonical: 'https://curtisirwin.com',
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here once you have it
    // google: 'your-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data - JSON-LD for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Curtis Irwin',
              url: 'https://curtisirwin.com',
              jobTitle: 'Manager, Learning Product Design',
              worksFor: {
                '@type': 'Organization',
                name: 'Amazon',
                url: 'https://www.amazon.com',
              },
              description: 'Learning & Development Leader at Amazon building the future of employee training across EMEA. Helping 10,000+ people grow through technology and innovation.',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Greater London',
                addressCountry: 'GB',
              },
              email: 'curtisirwin@me.com',
              knowsAbout: [
                'Learning & Development',
                'Organizational Leadership',
                'Change Management',
                'Technology Integration',
                'Performance Improvement',
                'Leadership Facilitation',
                'Instructional Design',
                'eLearning',
                'EdTech',
                'AI in Learning',
              ],
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'Drury University',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Springfield',
                  addressRegion: 'MO',
                  addressCountry: 'US',
                },
              },
              hasCredential: [
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'Core Strengths SDI Facilitator',
                },
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'Liz Wiseman Multipliers Facilitator',
                },
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'Situational Leadership II Facilitator',
                },
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'FranklinCovey Leading at the Speed of Trust Facilitator',
                },
              ],
              sameAs: [],
            }),
          }}
        />
        {/* WebSite structured data for sitelinks search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Curtis Irwin',
              url: 'https://curtisirwin.com',
              description: 'Personal portfolio and resume of Curtis Irwin, Learning & Development Leader at Amazon.',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
