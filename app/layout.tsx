import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GoldenFlow Labs | AI-Powered Food Trust',
  description: 'Independent authentication, instant results, and immutable proof for honey and food products. Starting with TrustStack technology.',
  keywords: ['food authentication', 'honey verification', 'AI authentication', 'blockchain', 'food trust', 'supply chain'],
  authors: [{ name: 'GoldenFlow Labs' }],
  openGraph: {
    title: 'GoldenFlow Labs | AI-Powered Food Trust',
    description: 'AI-powered food trust — starting with honey. Independent Authentication · Instant Results · Immutable Proof.',
    url: 'https://goldenflow.com',
    siteName: 'GoldenFlow Labs',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'GoldenFlow Labs - AI-powered food trust',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoldenFlow Labs | AI-Powered Food Trust',
    description: 'AI-powered food trust — starting with honey.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'GoldenFlow Labs',
              url: 'https://goldenflow.com',
              logo: 'https://goldenflow.com/logo.png',
              description: 'AI-powered food authentication and trust starting with honey',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              sameAs: [
                'https://twitter.com/goldenflowlabs',
                'https://linkedin.com/company/goldenflow-labs',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}