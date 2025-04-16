"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Search, BarChart4, Map, Clock } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide5Props {
  direction: number
}

export default function LandingSlide5({ direction }: LandingSlide5Props) {
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

  // Feature item animation variants
  const featureVariants = {
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
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres/seo-background.jpg"
          alt="SEO Background"
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
          Key Features
        </motion.h1>

        {/* Feature Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Section 1: Included Sections */}
          <motion.div
            variants={featureVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">1. Sections Included</h3>
              </div>
              <ul className="space-y-2 text-white/80 text-sm md:text-base">
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Hero section with strong headline and CTA</span>
                </li>
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>About SERES – Vision, values, track record</span>
                </li>
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Project highlights (up to 3 static showcases)</span>
                </li>
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Contact section (form + WhatsApp)</span>
                </li>
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Language switcher (EN/ES)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 2: Technology */}
          <motion.div
            variants={featureVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">2. Technology</h3>
              </div>
              <ul className="space-y-2 text-white/80 text-sm md:text-base">
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Frontend: HTML/CSS/React or lightweight Next.js</span>
                </li>
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Hosting: Vercel or Netlify (free tier, blazing fast)</span>
                </li>
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Optimized for mobile (responsive)</span>
                </li>
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>SEO‑ready: meta tags, alt text, fast page load</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 3: Performance Targets */}
          <motion.div
            variants={featureVariants}
            custom={2}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">3. Performance Targets</h3>
              </div>
              <ul className="space-y-2 text-white/80 text-sm md:text-base">
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Loads in &lt; 1.5 seconds</span>
                </li>
                <li className="flex">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Google PageSpeed (mobile) ≥ 90</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-auto bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-5 mt-6"
        >
          <h3 className="text-lg md:text-xl font-semibold text-amber-400 mb-2">
            Optimized Approach
          </h3>
          <p className="text-white/90 text-sm md:text-base">
            We've carefully selected features and technologies that deliver maximum value at the $1,500 price point, focusing on what SERES truly needs to establish an effective online presence.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
} 