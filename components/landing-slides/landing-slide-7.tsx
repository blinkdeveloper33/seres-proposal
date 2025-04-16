"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ClipboardList, Rocket, BarChart, Calendar } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide7Props {
  direction: number
}

export default function LandingSlide7({ direction }: LandingSlide7Props) {
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

  // Timeline phase animation variants
  const phaseVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
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
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres/timeline-background.jpg"
          alt="Timeline Background"
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
          Budget
        </motion.h1>

        {/* Budget Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 mb-6 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-left font-bold text-amber-400">Item</th>
                  <th className="py-3 px-4 text-right font-bold text-amber-400">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">Discovery + Wireframe + Copy Support</td>
                  <td className="py-4 px-4 text-right font-medium">$250</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">UI Design + Branding Application</td>
                  <td className="py-4 px-4 text-right font-medium">$350</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">Full Development</td>
                  <td className="py-4 px-4 text-right font-medium">$700</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">Multilingual Setup (EN/ES)</td>
                  <td className="py-4 px-4 text-right font-medium">$100</td>
                </tr>
                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">Deployment + Testing + Final QA</td>
                  <td className="py-4 px-4 text-right font-medium">$100</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="py-4 px-4 font-bold">Total Fixed Cost</td>
                  <td className="py-4 px-4 text-right font-bold text-amber-400">$1,500 USD</td>
                </tr>
              </tbody>
            </table>
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
            Transparent Fixed-Price Approach
          </h3>
          <p className="text-white/90 text-sm md:text-base">
            We've carefully structured our pricing to deliver maximum value at each stage of the project. The $1,500 fixed price offers predictability and ensures you get a complete, high-quality solution.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
} 