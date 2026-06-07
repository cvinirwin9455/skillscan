import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Curtis Irwin - Learning & Development Leader'
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
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          padding: '60px',
          gap: '60px',
        }}
      >
        {/* Photo */}
        <div
          style={{
            width: '280px',
            height: '280px',
            borderRadius: '24px',
            border: '4px solid rgba(251, 191, 36, 0.4)',
            overflow: 'hidden',
            display: 'flex',
            flexShrink: 0,
          }}
        >
          <img
            src="https://curtisirwin.com/curtis-irwin.jpeg"
            width={280}
            height={280}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: '#fbbf24',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Learning & Development Leader
          </div>
          <div
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
            }}
          >
            Curtis Irwin
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              maxWidth: '500px',
              lineHeight: 1.4,
            }}
          >
            Building the future of learning at Amazon. Helping 10,000+ people grow across EMEA.
          </div>
          <div
            style={{
              fontSize: '18px',
              color: '#64748b',
              marginTop: '8px',
            }}
          >
            curtisirwin.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
