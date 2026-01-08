'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface GlowButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  className?: string
  magnetic?: boolean
}

export default function GlowButton({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  className = '',
  magnetic = true
}: GlowButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    // Magnetic pull within 24px radius
    if (distance < 96) {
      setMousePosition({
        x: deltaX * 0.25,
        y: deltaY * 0.25
      })
    }
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const isPrimary = variant === 'primary'

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 0.5
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group px-8 py-4 rounded-xl font-medium
        transition-all duration-200
        focus-outline
        ${isPrimary 
          ? 'bg-gold text-dark hover:bg-gold-light shadow-glow hover:shadow-glow-lg' 
          : 'glass text-gold hover:bg-gold/10 border border-gold/30 hover:border-gold/50'
        }
        ${className}
      `}
    >
      {/* Glow effect on hover */}
      {isPrimary && (
        <div className="absolute inset-0 rounded-xl bg-gold opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-200" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}