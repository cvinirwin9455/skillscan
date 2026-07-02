import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Curtis Irwin - Learning & Development Leader at Amazon'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const imageData = await readFile(join(process.cwd(), 'public', 'curtis-irwin.jpeg'))
  const base64 = imageData.toString('base64')
  const dataUrl = `data:image/jpeg;base64,${base64}`

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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #fbbf24',
            flexShrink: 0,
          }}
        >
          <img
            src={dataUrl}
            width={280}
            height={280}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </div>

        {/* Text section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
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
              maxWidth: '600px',
              lineHeight: 1.4,
              marginTop: '8px',
            }}
          >
            Helping 10,000+ people grow at Amazon across EMEA
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
