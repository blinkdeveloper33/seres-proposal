"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { TrendingUp, Globe, Search, ArrowRight } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide3Props {
  direction: number
  onExit?: () => void
}

export default function LandingSlide3({ direction, onExit }: LandingSlide3Props) {
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

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  }

  // List item animation variants
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + custom * 0.08, duration: 0.4 }
    })
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
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//pawel-czerwinski-SD1VYMwGICo-unsplash.jpg"
          alt="Market Context Background"
          fill
          priority
          className="object-cover brightness-[0.75]"
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
          className="mb-6 md:mb-8 text-3xl md:text-4xl font-extrabold text-white text-center md:text-left"
        >
          Market Context
        </motion.h1>

        {/* Market Data Card */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300 mb-6"
        >
          <div className="space-y-5">
            <motion.div 
              variants={listItemVariants}
              custom={0}
              initial="hidden"
              animate="visible"
              className="flex items-start"
            >
              <div className="p-2 mr-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg flex-shrink-0">
                <Search className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Search Trends</h3>
                <p className="text-white/80 text-sm md:text-base">
                  Searches for "buy property in Paraguay" are up <span className="text-amber-400 font-semibold">40% YoY</span>.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={listItemVariants}
              custom={1}
              initial="hidden"
              animate="visible"
              className="flex items-start"
            >
              <div className="p-2 mr-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg flex-shrink-0">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">Traffic Growth</h3>
                <p className="text-white/80 text-sm md:text-base">
                  Real estate platforms in Paraguay recorded <span className="text-amber-400 font-semibold">+250% traffic MoM</span> in early 2025.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={listItemVariants}
              custom={2}
              initial="hidden"
              animate="visible"
              className="flex items-start"
            >
              <div className="p-2 mr-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg flex-shrink-0">
                <Globe className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-1">International Interest</h3>
                <p className="text-white/80 text-sm md:text-base">
                  The U.S., EU, Brazil, and Argentina represent <span className="text-amber-400 font-semibold">&gt;90%</span> of traffic to real estate websites.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-auto bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-5"
        >
          <h3 className="text-lg md:text-xl font-semibold text-amber-400 mb-2 flex items-center">
            <ArrowRight className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
            Time-Sensitive Opportunity
          </h3>
          <p className="text-white/90 text-sm md:text-base">
            SERES needs to act now to establish digital authority before competitors scale. The growth in Paraguay's real estate market creates a perfect opportunity to capture market share with minimal digital investment.
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
          landing-slide-3.tsx
        </p>
      </motion.div>
    </motion.div>
  )
} 