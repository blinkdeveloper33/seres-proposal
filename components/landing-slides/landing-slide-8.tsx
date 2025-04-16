"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { DollarSign, TrendingUp, BadgePercent, ArrowRight, Check } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide8Props {
  direction: number
}

export default function LandingSlide8({ direction }: LandingSlide8Props) {
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

  // Investment metrics animation variants
  const metricVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + custom * 0.15, duration: 0.5 }
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres/investment-background.jpg"
          alt="Investment Background"
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
          Optional Monthly Support
        </motion.h1>

        {/* Monthly Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Monthly Maintenance Plan</h2>
              <p className="text-white/80 text-sm md:text-base">Professional ongoing support to keep your site fresh and functional</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center justify-center bg-gradient-to-r from-amber-600/30 to-amber-400/30 backdrop-blur-sm border border-amber-500/40 rounded-lg px-6 py-3">
                <span className="text-amber-400 font-bold text-xl md:text-2xl">$100</span>
                <span className="text-white/80 ml-1">/month</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Includes:</h3>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-start"
              >
                <Check className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Up to 2 content updates/month (projects, text edits, photos)</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-start"
              >
                <Check className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Bug fixes</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-start"
              >
                <Check className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Uptime and basic performance monitoring</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex items-start"
              >
                <Check className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Hosting management (if on Aleph Corp-managed server)</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-start"
              >
                <Check className="h-5 w-5 mr-3 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/90">Future feature planning advisory</span>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-auto bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-5 mt-6"
        >
          <h3 className="text-lg md:text-xl font-semibold text-amber-400 mb-2">
            Flexible Support Options
          </h3>
          <p className="text-white/90 text-sm md:text-base">
            The monthly maintenance plan is completely optional but provides peace of mind and ensures your website remains current and secure. You can start, pause, or cancel at any time.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
} 