"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Tablet, Phone, Laptop, BarChart3, CheckCircle } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide4Props {
  direction: number
}

export default function LandingSlide4({ direction }: LandingSlide4Props) {
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

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + custom * 0.1, duration: 0.5 }
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
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres/tech-background.jpg"
          alt="Digital Platform Background"
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
          className="mb-6 md:mb-8 text-3xl md:text-4xl font-extrabold text-white text-center md:text-left"
        >
          Project Objectives
        </motion.h1>

        {/* Objectives List */}
        <div className="space-y-4 md:space-y-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex items-center">
              <div className="p-2 mr-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Create a branded landing site that looks world-class and performs fast.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex items-center">
              <div className="p-2 mr-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Communicate clearly SERES' mission, values, and featured projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex items-center">
              <div className="p-2 mr-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Include direct contact tools (WhatsApp and email).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex items-center">
              <div className="p-2 mr-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Support multilingual navigation (EN + ES).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex items-center">
              <div className="p-2 mr-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <p className="text-white/90 text-base md:text-lg">
                Build future-ready architecture to allow scalable updates.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-auto bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-5 mt-6"
        >
          <h3 className="text-lg md:text-xl font-semibold text-amber-400 mb-2">
            Clear Focus on Essential Needs
          </h3>
          <p className="text-white/90 text-sm md:text-base">
            Our streamlined approach addresses SERES' most critical digital marketing needs without unnecessary features or complexity, making the website easy to manage while delivering maximum value.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
} 