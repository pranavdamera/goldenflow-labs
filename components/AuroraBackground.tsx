'use client'

import React from 'react'

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base dark background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-pure" />
      
      {/* Animated aurora gradients */}
      <div className="absolute inset-0">
        {/* Gold aurora from top */}
        <div 
          className="absolute top-[-50%] left-1/4 w-[800px] h-[800px] rounded-full 
                     bg-gold/10 blur-[120px] animate-aurora"
          style={{ animationDelay: '0s' }}
        />
        
        {/* Secondary aurora from bottom right */}
        <div 
          className="absolute bottom-[-40%] right-1/4 w-[600px] h-[600px] rounded-full 
                     bg-gold/8 blur-[100px] animate-aurora"
          style={{ animationDelay: '10s' }}
        />
        
        {/* Accent aurora center-left */}
        <div 
          className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full 
                     bg-gold-light/6 blur-[90px] animate-aurora"
          style={{ animationDelay: '5s' }}
        />
      </div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-pure/50" />
    </div>
  )
}