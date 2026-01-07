'use client'

import React from 'react'
import Link from 'next/link'
import AuroraBackground from '@/components/AuroraBackground'
import GlassyCard from '@/components/GlassyCard'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
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
            Privacy Policy
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
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 mb-6">
                GoldenFlow Labs ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Information We Collect</h2>
              <p className="text-gray-300 mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Name and contact information when you fill out forms</li>
                <li>Company information when you apply for our pilot program</li>
                <li>Communications when you contact us</li>
                <li>Technical information through cookies and similar technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process applications for our pilot program</li>
                <li>Send you updates about our products and services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have the right to access, correct, or delete your personal information. 
                You may also object to or restrict certain processing of your data. To exercise 
                these rights, please contact us at privacy@goldenflow.com.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this Privacy Policy, please contact us at:<br />
                <a href="mailto:privacy@goldenflow.com" className="text-gold hover:text-gold-light">
                  privacy@goldenflow.com
                </a>
              </p>
            </div>
          </GlassyCard>
        </div>
      </div>
    </main>
  )
}