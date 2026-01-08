'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  gradient?: boolean
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  gradient = true 
}: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={centered ? 'text-center' : ''}
    >
      <h2 className={`
        text-4xl md:text-5xl lg:text-6xl font-bold mb-4
        ${gradient ? 'text-gradient' : 'text-white'}
      `}>
        {title}
      </h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}