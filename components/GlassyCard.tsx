'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface GlassyCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function GlassyCard({ 
  children, 
  className = '', 
  hover = true,
  delay = 0 
}: GlassyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Custom spring easing
      }}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(250, 204, 21, 0.15)',
      } : {}}
      className={`
        glass rounded-2xl p-8
        transition-all duration-200
        ${hover ? 'hover:border-gold/30 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}