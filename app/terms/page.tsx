'use client'

import React from 'react'
import Link from 'next/link'
import AuroraBackground from '@/components/AuroraBackground'
import GlassyCard from '@/components/GlassyCard'
import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <main className="relative min-h-screen">
      <AuroraBackground />
      
      <div className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light 
                     transition-colors mb-8 focus-outline rounded-lg px-3 py-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gradient mb-6"
          >
            Terms of Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 mb-12"
          >
            Last updated: January 2024
          </motion.p>

          <GlassyCard hover={false}>
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using the GoldenFlow Labs website and services, you accept 
                and agree to be bound by these Terms of Service. If you do not agree to these 
                terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Use of Services</h2>
              <p className="text-gray-300 mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Use our services in any way that violates applicable laws or regulations</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                All content, features, and functionality of our services, including but not 
                limited to text, graphics, logos, and software, are owned by GoldenFlow Labs 
                and are protected by international copyright, trademark, and other intellectual 
                property laws.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Pilot Program</h2>
              <p className="text-gray-300 mb-6">
                Participation in our pilot program is subject to acceptance and additional terms. 
                We reserve the right to modify or terminate the pilot program at any time without 
                notice.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">5. Disclaimer of Warranties</h2>
              <p className="text-gray-300 mb-6">
                Our services are provided "as is" without warranties of any kind, either express 
                or implied. We do not warrant that our services will be uninterrupted, secure, 
                or error-free.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">6. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                To the maximum extent permitted by law, GoldenFlow Labs shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages resulting 
                from your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">7. Changes to Terms</h2>
              <p className="text-gray-300 mb-6">
                We reserve the right to modify these Terms at any time. We will notify users of 
                any material changes by posting the new Terms on our website.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">8. Contact Information</h2>
              <p className="text-gray-300">
                If you have questions about these Terms, please contact us at:<br />
                <a href="mailto:legal@goldenflow.com" className="text-gold hover:text-gold-light">
                  legal@goldenflow.com
                </a>
              </p>
            </div>
          </GlassyCard>
        </div>
      </div>
    </main>
  )
}