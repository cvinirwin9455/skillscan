import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Curtis Irwin - Learning & Development Leader at Amazon'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          padding: '60px',
        }}
      >
        {/* Top section with text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: '22px',
              color: '#fbbf24',
              fontWeight: 600,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Learning & Development Leader
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
            }}
          >
            Curtis Irwin
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#94a3b8',
              maxWidth: '800px',
              lineHeight: 1.4,
              marginTop: '8px',
            }}
          >
            Helping 10,000+ people grow at Amazon across EMEA
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '32px',
              padding: '16px 32px',
              backgroundColor: '#fbbf24',
              borderRadius: '12px',
              color: '#0f172a',
              fontSize: '22px',
              fontWeight: 700,
            }}
          >
            Visit curtisirwin.com &rarr;
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
