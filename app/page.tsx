'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AuroraBackground from '@/components/AuroraBackground'
import GlassyCard from '@/components/GlassyCard'
import GlowButton from '@/components/GlowButton'
import SectionHeader from '@/components/SectionHeader'

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Netlify Forms handles the submission automatically
    setFormStatus('success')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus('idle')
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <main className="relative">
      <AuroraBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient">AI-powered</span>
              <br />
              <span className="text-white">food trust</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Starting with honey.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            TrustStack combines device + edge&cloud AI + blockchain to deliver 
            independent authentication you can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GlowButton onClick={() => document.getElementById('pilot')?.scrollIntoView({ behavior: 'smooth' })}>
              Join Pilot Program
            </GlowButton>
            <GlowButton 
              variant="secondary"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </GlowButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Value Props Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Why TrustStack" 
            subtitle="Three pillars of authenticity that can't be faked"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <GlassyCard delay={0}>
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Independent Authentication</h3>
              <p className="text-gray-400 leading-relaxed">
                No centralized authority. No single point of failure. Our distributed AI analyzes 
                honey at the molecular level without relying on any one organization.
              </p>
            </GlassyCard>

            <GlassyCard delay={0.1}>
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Results</h3>
              <p className="text-gray-400 leading-relaxed">
                Edge computing delivers authentication in seconds, not weeks. Real-time verification 
                means faster decisions across your entire supply chain.
              </p>
            </GlassyCard>

            <GlassyCard delay={0.2}>
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Immutable Proof</h3>
              <p className="text-gray-400 leading-relaxed">
                Blockchain-anchored records create an unalterable chain of custody. Every 
                authentication is permanent, tamper-proof, and independently verifiable.
              </p>
            </GlassyCard>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="The Authenticity Crisis" 
            subtitle="Food fraud costs the global economy $40B annually"
          />

          <div className="mt-16 space-y-8">
            <GlassyCard hover={false}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">33% of honey is fake</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Adulteration with corn syrup and rice syrup is widespread. Traditional lab 
                    testing is too slow and expensive to catch it all. Consumers deserve better.
                  </p>
                </div>
                <div className="relative h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-gold/20 rounded-xl blur-2xl" />
                  <div className="relative text-7xl font-bold text-gradient">33%</div>
                </div>
              </div>
            </GlassyCard>

            <GlassyCard hover={false}>
              <p className="text-xl text-gray-300 leading-relaxed">
                Current authentication methods rely on centralized labs, weeks-long turnaround 
                times, and tests that can be gamed. The industry needs a new approach—one that's 
                fast, distributed, and mathematically certain.
              </p>
            </GlassyCard>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="The TrustStack Solution" 
            subtitle="Three layers working in harmony"
          />

          <div className="mt-16 space-y-6">
            <GlassyCard delay={0}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">L1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Device Layer</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Proprietary handheld spectrometer captures molecular fingerprints in seconds. 
                    No sample preparation. No lab required. Point, scan, authenticate.
                  </p>
                </div>
              </div>
            </GlassyCard>

            <GlassyCard delay={0.1}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">L2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">AI Layer</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Edge computing analyzes spectral data locally while cloud-based models 
                    continuously learn from millions of scans. Privacy-preserving federated 
                    learning means your data stays yours.
                  </p>
                </div>
              </div>
            </GlassyCard>

            <GlassyCard delay={0.2}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gold">L3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Blockchain Layer</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every authentication is cryptographically signed and anchored to an 
                    immutable ledger. Full transparency without compromising privacy. 
                    Verify any claim, anytime, anywhere.
                  </p>
                </div>
              </div>
            </GlassyCard>
          </div>
        </div>
      </section>

      {/* TrustStack Diagram */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassyCard hover={false}>
            <div className="text-center py-12">
              <h3 className="text-3xl font-bold text-gradient mb-8">TrustStack Architecture</h3>
              
              <div className="space-y-4">
                {/* Blockchain Layer */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0 }}
                  className="glass rounded-xl p-6 border-2 border-gold/30"
                >
                  <div className="text-gold font-bold mb-2">Layer 3: Blockchain</div>
                  <div className="text-sm text-gray-400">Immutable proof & verification</div>
                </motion.div>

                {/* AI Layer */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass rounded-xl p-6 border-2 border-gold/20"
                >
                  <div className="text-gold font-bold mb-2">Layer 2: Edge & Cloud AI</div>
                  <div className="text-sm text-gray-400">Distributed intelligence & learning</div>
                </motion.div>

                {/* Device Layer */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass rounded-xl p-6 border-2 border-gold/10"
                >
                  <div className="text-gold font-bold mb-2">Layer 1: Spectrometer Device</div>
                  <div className="text-sm text-gray-400">Molecular fingerprinting</div>
                </motion.div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Independent • Instant • Immutable</span>
              </div>
            </div>
          </GlassyCard>
        </div>
      </section>

      {/* Pilot Program Form */}
      <section id="pilot" className="relative py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <SectionHeader 
            title="Join the Pilot Program" 
            subtitle="Be among the first to experience TrustStack technology"
          />

          <GlassyCard hover={false} className="mt-16">
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                <p className="text-gray-400">We'll be in touch soon with next steps.</p>
              </motion.div>
            ) : (
              <form 
                name="pilot-program" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="pilot-program" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 
                             focus-outline transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 
                             focus-outline transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 
                             focus-outline transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your use case
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 
                             focus-outline transition-all resize-none"
                    placeholder="What challenges are you facing with authentication?"
                  />
                </div>

                <GlowButton type="submit" className="w-full">
                  Submit Application
                </GlowButton>
              </form>
            )}
          </GlassyCard>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="About GoldenFlow Labs" 
            subtitle="Building trust through technology"
          />

          <GlassyCard hover={false} className="mt-16">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We're a team of scientists, engineers, and food industry veterans united by a 
                simple belief: authenticity shouldn't be negotiable.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Starting with honey, we're building the infrastructure for trustworthy food. 
                Our TrustStack platform combines cutting-edge AI, distributed computing, and 
                blockchain technology to make authentication fast, affordable, and impossible to fake.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The future of food is transparent. Join us in building it.
              </p>
            </div>
          </GlassyCard>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="Get in Touch" 
            subtitle="Questions? Partnerships? We'd love to hear from you."
          />

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:hello@goldenflow.com"
              className="glass px-8 py-4 rounded-xl hover:bg-gold/10 transition-all
                       focus-outline group inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white group-hover:text-gold transition-colors">
                hello@goldenflow.com
              </span>
            </a>
          </div>

          <div className="mt-8 flex gap-6 justify-center">
            <a 
              href="https://twitter.com/goldenflowlabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-12 h-12 rounded-xl glass hover:bg-gold/10 flex items-center 
                       justify-center transition-all focus-outline group"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/goldenflow-labs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-xl glass hover:bg-gold/10 flex items-center 
                       justify-center transition-all focus-outline group"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                <span className="text-2xl">🍯</span>
              </div>
              <div>
                <div className="text-white font-bold">GoldenFlow Labs</div>
                <div className="text-sm text-gray-500">AI-powered food trust</div>
              </div>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-gold transition-colors">
                Terms
              </a>
            </div>

            <div className="text-sm text-gray-500">
              © 2024 GoldenFlow Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}