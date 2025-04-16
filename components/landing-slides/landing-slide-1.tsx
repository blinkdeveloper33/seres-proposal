"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide1Props {
  direction: number
  onExit?: () => void
}

export default function LandingSlide1({ direction, onExit }: LandingSlide1Props) {
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

  // Fade in animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
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
      
      {/* Background Image with gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: isMobile ? 1.2 : 1.8 }}
      >
        <Image
          src="/images/background.jpg"
          alt="Beautiful landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.65]"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40" 
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 1.2 : 1.8 }}
        />
      </motion.div>

      {/* Copyright Notice - Top Right */}
      <motion.div
        className="absolute right-3 md:right-6 top-2 md:top-4 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: isMobile ? 1 : 1.5, duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[10px] md:text-xs font-light tracking-[0.05em] text-white/70" style={{ letterSpacing: '0.05em' }}>
          © 2024 Aleph Digital • Miami, Florida • All Rights Reserved
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 py-6 md:px-12 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Image
            src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres/logo.png"
            alt="SERES Logo"
            width={180}
            height={180}
            className="mx-auto mb-8"
          />
          
          <h1 className="mb-3 text-4xl md:text-6xl font-bold text-white">
            <span className="block mb-2">Modern, Multilingual</span>
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              Landing Website
            </span>
          </h1>
          
          <div className="mt-6 mb-10 flex flex-col items-center space-y-3">
            <div className="flex items-center">
              <span className="text-white/60 w-28 text-right mr-3">Client:</span>
              <span className="text-white font-medium">SERES Inmobiliaria</span>
            </div>
            <div className="flex items-center">
              <span className="text-white/60 w-28 text-right mr-3">Partner:</span>
              <span className="text-white font-medium">Aleph Corp</span>
            </div>
            <div className="flex items-center">
              <span className="text-white/60 w-28 text-right mr-3">Date:</span>
              <span className="text-white font-medium">April 2025</span>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 p-[2px]">
              <div className="rounded-full bg-black/40 backdrop-blur-sm px-6 py-2.5">
                <span className="text-amber-200 font-medium">Digital Product Studio</span>
              </div>
            </div>
          </div>
          
          {/* Get Started Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16"
          >
            <button
              onClick={() => {
                if (direction !== undefined) {
                  // Use the parent navigation to go to slide 2
                  // This works differently than the exit button
                  const nextSlideIndex = 2;
                  const event = new CustomEvent('slideNavigation', { detail: { index: nextSlideIndex } });
                  window.dispatchEvent(event);
                }
              }}
              className="px-8 py-3 text-lg md:text-xl font-medium text-white bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Confidentiality Notice - Bottom Right */}
      <motion.div
        className="absolute bottom-2 md:bottom-4 right-3 md:right-6 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: isMobile ? 1.2 : 1.7, duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[10px] md:text-xs font-light tracking-[0.05em] text-white/70" style={{ fontVariant: 'small-caps', letterSpacing: '0.1em' }}>
          Confidential Document • Proprietary Information
        </p>
      </motion.div>
    </motion.div>
  )
} 