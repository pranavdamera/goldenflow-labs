import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | GoldenFlow Labs',
  description: 'Terms of service for GoldenFlow Labs',
}

export default function Terms() {
  return (
    <main className="min-h-screen container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-gold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-neutral-100 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="text-neutral-100 mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-neutral-100 mb-4">
              Permission is granted to temporarily download one copy of the materials on GoldenFlow Labs' website for personal, non-commercial transitory viewing only.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-neutral-100">
              Questions about the Terms of Service should be sent to us at{' '}
              <a href="mailto:hello@goldenflowlabs.com" className="text-gold hover:underline">
                hello@goldenflowlabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}