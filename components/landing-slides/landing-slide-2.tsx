"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide2Props {
  direction: number
  onExit?: () => void
}

export default function LandingSlide2({ direction, onExit }: LandingSlide2Props) {
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

  // Card animation variants with staggered appearance
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 22,
        delay: isMobile ? 0.2 + (custom * 0.1) : 0.3 + (custom * 0.15)
      }
    })
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
          alt="Executive Summary Background"
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
          className="mb-8 text-3xl md:text-4xl font-extrabold text-white text-center md:text-left"
        >
          Executive Summary
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
              <div className="p-2 mr-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg flex-shrink-0">
                <span className="flex h-5 w-5 items-center justify-center font-bold text-white text-sm">1</span>
              </div>
              The Challenge
            </h2>
            <ul className="space-y-3 text-white/90">
              <li className="flex">
                <span className="text-amber-400 mr-2">•</span>
                <span>SERES lacks an effective online presence despite increased foreign interest in Paraguay's real estate.</span>
              </li>
              <li className="flex">
                <span className="text-amber-400 mr-2">•</span>
                <span>No digital destination exists to validate credibility or convert visitors into clients.</span>
              </li>
            </ul>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
              <div className="p-2 mr-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg flex-shrink-0">
                <span className="flex h-5 w-5 items-center justify-center font-bold text-white text-sm">2</span>
              </div>
              The Solution
            </h2>
            <ul className="space-y-3 text-white/90">
              <li className="flex">
                <span className="text-amber-400 mr-2">•</span>
                <span>A fast, modern landing page designed to present SERES professionally, support multilingual visitors, and enable direct lead contact.</span>
              </li>
              <li className="flex">
                <span className="text-amber-400 mr-2">•</span>
                <span>A mobile-first, SEO‑ready site that can later expand into a full real estate platform.</span>
              </li>
            </ul>
          </motion.div>

          {/* Expected Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
              <div className="p-2 mr-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg flex-shrink-0">
                <span className="flex h-5 w-5 items-center justify-center font-bold text-white text-sm">3</span>
              </div>
              Expected Results
            </h2>
            <ul className="space-y-3 text-white/90">
              <li className="flex">
                <span className="text-amber-400 mr-2">•</span>
                <span>Boost brand trust for international buyers.</span>
              </li>
              <li className="flex">
                <span className="text-amber-400 mr-2">•</span>
                <span>2–3× increase in visitor engagement.</span>
              </li>
              <li className="flex">
                <span className="text-amber-400 mr-2">•</span>
                <span>A clear online identity and business gateway.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-auto bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-5 mt-8"
        >
          <h3 className="text-lg md:text-xl font-semibold text-amber-400 mb-2 text-center">
            Streamlined Landing Website Proposal
          </h3>
          <p className="text-white/90 text-sm md:text-base text-center">
            A professionally designed, cost-effective $1,500 USD solution to establish SERES' online presence quickly and efficiently.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
} 