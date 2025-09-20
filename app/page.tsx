import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <Image
            src="/logo.svg"
            alt="GoldenFlow Labs"
            width={80}
            height={80}
            className="mx-auto mb-8"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI-powered food trust — starting with honey.
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          We're building TrustStack: handheld spectrometry, edge+cloud AI, and blockchain certification 
          so anyone can verify authenticity in seconds and carry that proof through the supply chain.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pilot" className="btn-primary">
            Join the pilot
          </a>
          <a href="#contact" className="btn-secondary">
            Contact us
          </a>
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-4 text-gold">Independent Authentication</h3>
            <p className="text-neutral-100">
              Verify purity without shipping samples to a lab.
            </p>
          </div>
          
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-4 text-gold">Instant Results</h3>
            <p className="text-neutral-100">
              Edge AI decisions in seconds; no Wi-Fi required.
            </p>
          </div>
          
          <div className="card text-center">
            <h3 className="text-xl font-semibold mb-4 text-gold">Immutable Proof</h3>
            <p className="text-neutral-100">
              Blockchain certificates for traceability and resale value.
            </p>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <p className="text-xl text-neutral-100 leading-relaxed">
              Honey is among the most adulterated foods. Dilution and unverifiable origins erode margins and trust. 
              Lab testing is slow and expensive—especially at the edge.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-gold font-bold">Layer 1</span>
                <span className="text-neutral-100">Handheld NIR spectrometer with calibrated optics</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-gold font-bold">Layer 2</span>
                <span className="text-neutral-100">On-device + cloud AI verification</span>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-gold font-bold">Layer 3</span>
                <span className="text-neutral-100">Blockchain certification & supply-chain traceability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TrustStack Diagram */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">TrustStack Technology</h2>
          <div className="max-w-2xl mx-auto">
            <Image
              src="/truststack.png"
              alt="TrustStack Technology Diagram"
              width={800}
              height={400}
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Pilot Signup */}
      <section id="pilot" className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="card">
            <h2 className="text-3xl font-bold mb-6 text-center">Join Our Pilot Program</h2>
            <p className="text-neutral-100 mb-8 text-center">
              We're onboarding early partners to co-develop field workflows and certification standards. 
              Tell us about your operation and we'll reach out with next steps.
            </p>
            
            <form name="pilot" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="pilot" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company/Farm
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium mb-2">
                  Tell us about your operation
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Describe your honey operation, volumes, current testing methods, etc."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About GoldenFlow Labs</h2>
          <p className="text-xl text-neutral-100 leading-relaxed">
            Founded at George Mason University, GoldenFlow builds practical, field-ready tools for authenticity. 
            We believe trust should be measurable, portable, and open to scrutiny.
          </p>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="container mx-auto px-6 py-16 border-t border-neutral-800">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-neutral-100 mb-4">
            Partnerships, pilots, or press: 
            <a href="mailto:hello@goldenflowlabs.com" className="text-gold hover:underline ml-1">
              hello@goldenflowlabs.com
            </a>
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/company/goldenflow-labs" 
              className="text-neutral-100 hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-neutral-100 hover:text-gold transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="text-center text-sm text-neutral-100 space-y-2">
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} GoldenFlow Labs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}