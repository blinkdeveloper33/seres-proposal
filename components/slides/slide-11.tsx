"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Users2, Clock, RefreshCw, ArrowRight } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide11Props {
  direction: number
}

export default function Slide11({ direction }: Slide11Props) {
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
      transition: { delay: 0.5 + custom * 0.08, duration: 0.4 }
    })
  }

  // Content data
  const roles = {
    title: "Roles & Responsibilities",
    icon: <Users2 className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    items: [
      "SERES – Content owners, legal/compliance approvals, sales-team feedback.",
      "Aleph Corp – DevOps, feature delivery, security patches, performance monitoring."
    ]
  }

  const slas = {
    title: "Service-Level Commitments",
    icon: <Clock className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    items: [
      "Critical bug fix < 24 h, high-priority feature patch every two weeks.",
      "Monthly CMS, dependency, and security updates."
    ]
  }

  const evolution = {
    title: "Evolution Roadmap",
    icon: <RefreshCw className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    items: [
      "v2 (Q3 2025) – 3-D virtual tours, mortgage calculator, broker portal API.",
      "v3 (2026) – Mobile app, AR neighbourhood overlays, AI price-trend insights."
    ]
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
          alt="Governance Background"
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
          Governance & Maintenance
        </motion.h1>

        {/* Content Sections - Using flex for vertical layout on mobile */}
        <div className="flex flex-col space-y-6 md:space-y-8">

          {/* Roles & Responsibilities */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 flex items-center">
              {roles.icon}
              {roles.title}
            </h2>
            <ul className="space-y-2 list-none">
              {roles.items.map((item, index) => (
                <motion.li 
                  key={index} 
                  custom={index} 
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start"
                >
                  <span className="inline-block h-2 w-2 bg-amber-400 rounded-full mr-2 mt-[7px] flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                  <span className="text-sm md:text-base text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Service-Level Commitments */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 flex items-center">
              {slas.icon}
              {slas.title}
            </h2>
            <ul className="space-y-2 list-none">
              {slas.items.map((item, index) => (
                <motion.li 
                  key={index} 
                  custom={roles.items.length + index} // Adjust delay index
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start"
                >
                  <span className="inline-block h-2 w-2 bg-amber-400 rounded-full mr-2 mt-[7px] flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                  <span className="text-sm md:text-base text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Evolution Roadmap */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 md:p-5"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 flex items-center">
              {evolution.icon}
              <span className="text-amber-400">{evolution.title}</span>
            </h2>
            <ul className="space-y-2 list-none">
              {evolution.items.map((item, index) => (
                <motion.li 
                  key={index} 
                  custom={roles.items.length + slas.items.length + index} // Adjust delay index
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start"
                >
                  <span className="inline-block h-2 w-2 bg-amber-400 rounded-full mr-2 mt-[7px] flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                  <span className="text-sm md:text-base text-white/90 italic">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </motion.div>
  )
} 