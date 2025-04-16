"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, TrendingUp, DollarSign, BarChart } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide2Props {
  direction: number
}

export default function Slide2({ direction }: Slide2Props) {
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

  // Content container animation
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: isMobile ? 0.08 : 0.12,
        ease: "easeOut"
      }
    }
  }

  // Item animation variants
  const itemVariants = {
    hidden: { y: 25, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 18,
        mass: 1,
        opacity: { duration: 0.7 }
      }
    }
  }

  // Metric card animation variants
  const metricCardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 1,
        delay: isMobile ? 0.3 : 0.6
      }
    }
  }

  // Icon animation variants
  const iconAnimationVariants = {
    hidden: { scale: 0.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  // Inner circle pulse animation for icons
  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 2,
        ease: "easeInOut"
      }
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

      {/* Main Content - Responsive padding for mobile with space for navigation */}
      <div className="relative z-10 flex h-full w-full flex-col px-4 py-6 md:px-12 md:py-8 pb-16 md:pb-24 overflow-y-auto">
        {/* Title - Responsive font size */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 text-3xl md:text-4xl font-extrabold text-white text-center md:text-left"
        >
          Executive Summary
        </motion.h1>

        {/* 3-Column Layout - Converts to stacked on mobile */}
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-8 mt-2 md:mt-4"
        >
          {/* Current Challenge (Left Column) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 flex flex-col bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-[22px] font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Current Challenge
            </h2>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 bg-amber-400 rounded-full mr-2 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                <span className="text-sm md:text-base text-white/90">
                  Fragmented digital presence limits global reach and lead conversion.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 bg-amber-400 rounded-full mr-2 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                <span className="text-sm md:text-base text-white/90">
                  Manual property showcase slows deal cycles and raises acquisition cost.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Proposed Digital Platform (Center Column) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 flex flex-col bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-[22px] font-semibold text-white mb-4 flex items-center">
              <BarChart className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Proposed Digital Platform
            </h2>
            <ul className="space-y-3 md:space-y-4 list-none">
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 bg-amber-400 rounded-full mr-2 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                <span className="text-sm md:text-base text-white/90">
                  Unified, multilingual portal with curated property database.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block h-2 w-2 bg-amber-400 rounded-full mr-2 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                <span className="text-sm md:text-base text-white/90">
                  Friction-less lead-to-deal funnel via WhatsApp and CRM automation.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Impact Metrics (Right Column) - Horizontal layout on mobile */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 flex flex-col bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-[22px] font-semibold text-white mb-4 flex items-center">
              <DollarSign className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Impact Metrics – Year 1
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5">
              {/* Conversion Metric */}
              <motion.div
                variants={metricCardVariants}
                className="bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg border border-white/10 flex items-center overflow-hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="relative mr-3 md:mr-5 flex-shrink-0">
                  <motion.div 
                    className="absolute inset-0 bg-amber-500/20 rounded-full"
                    variants={pulseVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.div 
                    className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-lg border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] rounded-full shadow-inner"
                    variants={iconAnimationVariants}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: isMobile ? 1 : 1.5, delay: isMobile ? 0.1 : 0.2 }}
                      />
                      <motion.path 
                        d="M22 12C22 6.48 17.52 2 12 2" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0.1 : 0.2 }}
                      />
                      <motion.path 
                        d="M12 16L12 8" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: isMobile ? 0.6 : 1 }}
                      />
                      <motion.path 
                        d="M9 13L12 16L15 13" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: isMobile ? 0.8 : 1.3 }}
                      />
                    </svg>
                  </motion.div>
                </div>
                <div>
                  <p className="text-xl md:text-[28px] font-bold text-white">+45%</p>
                  <p className="text-xs md:text-[16px] text-white/80">Lead-to-Client Conversion</p>
                </div>
              </motion.div>

              {/* Global Traffic Metric */}
              <motion.div
                variants={metricCardVariants}
                className="bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg border border-white/10 flex items-center overflow-hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                custom={1}
              >
                <div className="relative mr-3 md:mr-5 flex-shrink-0">
                  <motion.div 
                    className="absolute inset-0 bg-amber-500/20 rounded-full"
                    variants={pulseVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.div 
                    className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-lg border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] rounded-full shadow-inner"
                    variants={iconAnimationVariants}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.circle 
                        cx="12" 
                        cy="12" 
                        r="8" 
                        stroke="white" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: isMobile ? 0.6 : 1, delay: isMobile ? 0.3 : 0.5 }}
                      />
                      <motion.path 
                        d="M12 2V4M12 20V22M2 12H4M20 12H22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: isMobile ? 1 : 1.5, delay: isMobile ? 0.1 : 0.2 }}
                      />
                      <motion.path 
                        d="M8 12L12 8M12 8L16 12M12 8V16" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: isMobile ? 0.5 : 0.7, delay: isMobile ? 0.7 : 1.2 }}
                      />
                    </svg>
                  </motion.div>
                </div>
                <div>
                  <p className="text-xl md:text-[28px] font-bold text-white">2×</p>
                  <p className="text-xs md:text-[16px] text-white/80">Global Traffic Growth</p>
                </div>
              </motion.div>

              {/* ROI Metric */}
              <motion.div
                variants={metricCardVariants}
                className="bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg border border-white/10 flex items-center overflow-hidden"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                custom={2}
              >
                <div className="relative mr-3 md:mr-5 flex-shrink-0">
                  <motion.div 
                    className="absolute inset-0 bg-amber-500/20 rounded-full"
                    variants={pulseVariants}
                    initial="hidden"
                    animate="visible"
                  />
                  <motion.div 
                    className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-lg border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] rounded-full shadow-inner"
                    variants={iconAnimationVariants}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        d="M21 6L3 6"
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: isMobile ? 0.1 : 0.2 }}
                      />
                      <motion.path 
                        d="M21 12L3 12"
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: isMobile ? 0.2 : 0.5 }}
                      />
                      <motion.path 
                        d="M21 18L3 18"
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: isMobile ? 0.3 : 0.8 }}
                      />
                      <motion.path 
                        d="M17 3L17 21"
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: isMobile ? 0.7 : 1.2 }}
                      />
                      <motion.path 
                        d="M14 6L20 6"
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: isMobile ? 0.9 : 1.5 }}
                      />
                    </svg>
                  </motion.div>
                </div>
                <div>
                  <p className="text-xl md:text-[28px] font-bold text-white">&lt;9-Month</p>
                  <p className="text-xs md:text-[16px] text-white/80">Payback Period</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Value Proposition One-Liner - In amber highlight box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-auto bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4"
        >
          <h3 className="text-base md:text-lg font-semibold text-white mb-2 flex items-center">
            <ArrowRight className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
            <span className="text-amber-400">Value Proposition</span>
          </h3>
          <p className="text-sm md:text-base text-white/90 italic">
            Aleph Corp amplifies SERES' global footprint, accelerating sales cycles through a friction-less, data-driven real-estate platform.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
