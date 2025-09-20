import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GoldenFlow Labs — AI-Powered Food Trust (Starting with Honey)',
  description: 'Handheld spectrometry + AI + blockchain certification to authenticate food in seconds—starting with honey.',
  metadataBase: new URL('https://www.goldenflowlabs.com'),
  openGraph: {
    title: 'GoldenFlow Labs — AI-Powered Food Trust',
    description: 'TrustStack: device + AI + blockchain certification. Pilot with beekeepers now open.',
    url: 'https://www.goldenflowlabs.com',
    siteName: 'GoldenFlow Labs',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'GoldenFlow Labs - AI-Powered Food Trust',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoldenFlow Labs — AI-Powered Food Trust',
    description: 'TrustStack: device + AI + blockchain certification. Pilot with beekeepers now open.',
    images: ['/og.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.goldenflowlabs.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GoldenFlow Labs',
              url: 'https://www.goldenflowlabs.com',
              logo: 'https://www.goldenflowlabs.com/logo.svg',
              sameAs: [
                'https://www.linkedin.com/company/goldenflow-labs'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@goldenflowlabs.com',
                contactType: 'customer service'
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
