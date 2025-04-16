"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Mail, Calendar, Phone } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide9Props {
  direction: number
  onExit?: () => void
}

export default function LandingSlide9({ direction, onExit }: LandingSlide9Props) {
  // State to detect if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false)
  
  // Check for mobile device on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Define the shared transition
  const transition = {
    type: "tween",
    duration: 0.6,
    ease: "easeInOut",
  };

  // Slide transition variants
  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: transition
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98,
      transition: transition
    }),
  }

  // Animation variants for staggered list items
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + custom * 0.1, duration: 0.5 }
    })
  }

  // Contact info animation
  const contactVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.9, duration: 0.5 }
    }
  }

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`absolute inset-0 h-full w-full ${merriweather.className}`}
      style={{ opacity: 0 }}
    >
      {/* Exit Button */}
      {onExit && <ExitButton onClick={onExit} />}

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//milad-fakurian-UGSK1GGAz8E-unsplash.jpg"
          alt="Next Steps Background"
          fill
          priority
          className="object-cover brightness-[0.8]"
          style={{
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full w-full flex-col px-4 py-6 md:px-12 md:py-8 pb-16 md:pb-24 overflow-y-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          Next Steps
        </motion.h1>

        {/* Steps List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 md:space-y-5 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-white">1</span>
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Approve scope and fixed price ($1,500).
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-white">2</span>
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Send logo, brand content, photos of projects, and basic text.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-white">3</span>
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Schedule kick‑off meeting for project launch.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="font-bold text-white">4</span>
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Deliver and deploy in under 3.5 weeks.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Information */}
        <motion.div
          variants={contactVariants}
          initial="hidden"
          animate="visible"
          className="mt-auto mx-auto max-w-2xl w-full bg-gradient-to-r from-amber-500/40 to-yellow-600/40 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
            Contact – Aleph Corp
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center">
              <p className="text-white font-medium mb-1">Alejandro Neira, Managing Director</p>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-300" />
                <a href="mailto:alejandro@alephcorp.com" className="text-white hover:text-amber-200 transition-colors">
                  alejandro@alephcorp.com
                </a>
              </div>
              <div className="flex items-center mt-1">
                <Phone className="h-5 w-5 mr-2 text-amber-300" />
                <a href="tel:+13055550123" className="text-white hover:text-amber-200 transition-colors">
                  +1 (305) 555‑0123
                </a>
              </div>
            </div>
          </div>
          
          <p className="text-white text-center mt-6">
            Let's create the professional online presence SERES deserves—quickly, beautifully, and ready to scale.
          </p>
        </motion.div>
      </div>

      {/* Filename Label - Bottom Left */}
      <motion.div
        className="absolute bottom-2 md:bottom-4 left-3 md:left-6 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[9px] md:text-[10px] font-light text-white/50" style={{ letterSpacing: '0.05em' }}>
          landing-slide-9.tsx
        </p>
      </motion.div>
    </motion.div>
  )
} 