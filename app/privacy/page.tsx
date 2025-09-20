import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | GoldenFlow Labs',
  description: 'Privacy policy for GoldenFlow Labs',
}

export default function Privacy() {
  return (
    <main className="min-h-screen container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-gold hover:underline mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-neutral-100 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-neutral-100 mb-4">
              We collect information you provide directly to us, such as when you fill out our pilot program form.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
            <p className="text-neutral-100 mb-4">
              We use the information we collect to communicate with you about our services and pilot program.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-neutral-100">
              If you have any questions about this Privacy Policy, please contact us at{' '}
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