"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide1Props {
  direction: number
  onExplore?: (version: string) => void
}

export default function Slide1({ direction, onExplore }: Slide1Props) {
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
    duration: 0.6, // Consistent duration for the whole transition
    ease: "easeInOut",
  };

  // Slide transition variants - Updated
  const variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98, // Slightly adjusted scale
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: transition // Apply the unified transition
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.98, // Match initial scale
      transition: transition // Apply the unified transition
    }),
  }

  // Improved staggered animation for content container
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: isMobile ? 0.15 : 0.25,
        staggerChildren: isMobile ? 0.08 : 0.12,
        ease: "easeOut"
      }
    }
  }

  // Enhanced item animation variants with more dynamic movement
  const itemVariants = {
    hidden: { y: 25, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: isMobile ? 100 : 120, 
        damping: 18,
        mass: 1,
        opacity: { duration: isMobile ? 0.5 : 0.7 }
      }
    }
  }

  // Optimized letter animation variants with smoother motion
  const letterVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: isMobile ? 250 : 300,
        damping: isMobile ? 12 : 15
      }
    }
  }

  // Enhanced spark animation with more natural flicker
  const sparkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: [0, 0.4, 0.8, 0.4, 0], 
      scale: [0.2, 0.7, 1, 0.8, 0.2],
      transition: { 
        repeat: Infinity, 
        duration: isMobile ? 2 : 2.5, 
        repeatDelay: isMobile ? 0.6 : 0.8,
        ease: "easeInOut" 
      }
    }
  }

  // More dynamic forge animation with subtle rotation
  const forgeVariants = {
    hidden: { x: 0 },
    visible: {
      x: isMobile ? [0, -1, 0, 1, 0] : [0, -2, 0, 2, 0],
      rotate: isMobile ? [0, -0.3, 0, 0.3, 0] : [0, -0.5, 0, 0.5, 0],
      transition: { 
        repeat: Infinity, 
        duration: isMobile ? 1.2 : 1.5, 
        repeatDelay: isMobile ? 0.8 : 1,
        ease: [0.6, 0.05, 0.1, 0.9] // Custom easing for more organic feel
      }
    }
  }

  // New background animation for subtle movement
  const backgroundVariants = {
    hidden: { scale: 1.05, opacity: 0.8 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: isMobile ? 1.8 : 2.5,
        ease: "easeOut" 
      }
    }
  }

  // Content fade in animation
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
      {/* Background Image with gradient overlay and subtle animation */}
      <motion.div 
        className="absolute inset-0"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
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
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" 
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

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center px-5 md:px-16 lg:px-20 overflow-y-auto">
        <motion.div 
          className="max-w-3xl"
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: isMobile ? 0.08 : 0.12, delayChildren: isMobile ? 0.1 : 0.2 }}
        >
          {/* Logo with enhanced animation */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-6 md:mb-10 w-full max-w-[120px] md:max-w-[160px]"
          >
            <Image 
              src="/images/logo.png" 
              alt="Aleph Logo" 
              width={160} 
              height={80} 
              className="w-full brightness-0 invert drop-shadow-md" 
            />
          </motion.div>

          {/* Main heading with improved animation - Fixed layout */}
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            <motion.div 
              className="flex flex-col space-y-1 md:space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0.2 : 0.4, duration: 0.7, ease: "easeOut" }}
              >
                Digital Platform
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0.4 : 0.6, duration: 0.7, ease: "easeOut" }}
              >
                Proposal
              </motion.span>
            </motion.div>
          </motion.h1>

          {/* Tagline with optimized animations */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-3 md:mb-4 max-w-lg text-base md:text-xl lg:text-2xl font-medium tracking-wide text-white/90"
          >
            <div className="flex flex-wrap md:flex-nowrap items-center gap-1 overflow-hidden">
              <motion.div 
                className="relative inline-flex flex-wrap md:flex-nowrap"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.04,
                      delayChildren: isMobile ? 0.3 : 0.5
                    }
                  }
                }}
              >
                {/* Ignite with enhanced flame effect - Fixed color transition */}
                <span className="relative mr-1 md:mr-2">
                  {["I", "g", "n", "i", "t", "e"].map((char, index) => {
                    // Create a smoother gradient effect for the text
                    const colors = ['#ff6b00', '#ff7e00', '#ff9100', '#ffa500', '#ffb700', '#ffc800'];
                    return (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        transition={{ 
                          type: "spring", 
                          stiffness: 250, 
                          damping: 12,
                          delay: index * (isMobile ? 0.03 : 0.04) + (isMobile ? 0.07 : 0.1)
                        }}
                        className="inline-block font-bold"
                        style={{ color: colors[index] }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                  {/* Enhanced sparks animation */}
                  <motion.span 
                    className="absolute -right-1 -top-2 text-amber-400 text-xs md:text-sm"
                    variants={sparkVariants}
                  >
                    ✧
                  </motion.span>
                  <motion.span 
                    className="absolute -right-3 -top-1 text-amber-500 text-xs md:text-sm" 
                    variants={sparkVariants}
                    transition={{ delay: isMobile ? 0.2 : 0.3 }}
                  >
                    ✦
                  </motion.span>
                  <motion.span 
                    className="absolute -right-2 top-0 text-amber-300 text-[10px] md:text-xs" 
                    variants={sparkVariants}
                    transition={{ delay: isMobile ? 0.3 : 0.5 }}
                  >
                    ✦
                  </motion.span>
                </span>
                
                {/* "possibility" with subtle animation */}
                <motion.span 
                  className="mr-1 md:mr-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: isMobile ? 0.6 : 0.9, duration: isMobile ? 0.5 : 0.7 }}
                >
                  possibility.
                </motion.span>
                
                {/* Forge with enhanced effect */}
                <motion.span
                  variants={forgeVariants}
                  className="relative mr-1 md:mr-2 inline-block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-semibold text-transparent"
                >
                  Forge
                </motion.span>
                
                {/* Enhanced momentum animation */}
                <motion.span 
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    transition: { delay: isMobile ? 0.8 : 1.2, duration: isMobile ? 0.6 : 0.8, ease: [0.175, 0.885, 0.32, 1.05] }
                  }}
                >
                  momentum.
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Client info with fade effect */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-8 md:mb-10" 
          >
            <motion.span 
              className="text-sm md:text-md font-light text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isMobile ? 0.9 : 1.3, duration: isMobile ? 0.5 : 0.7 }}
            >
              For: SERES Inmobiliaria · Paraguay
            </motion.span>
          </motion.div>

          {/* Enhanced button animations - stack vertically on mobile */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full md:w-auto"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="w-full md:w-auto group relative overflow-hidden border-white/40 bg-transparent text-white transition-all duration-300 hover:border-white/80 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] backdrop-blur-sm"
                onClick={() => {
                  if (onExplore) {
                    onExplore('full');
                  }
                }}
              >
                <motion.span
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%', transition: { duration: 0.5, ease: "easeOut" } }}
                  className="absolute bottom-0 left-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                />
                
                <span className="relative z-10 flex items-center text-sm md:text-base font-medium">
                  Full Digital Platform
                  <motion.span 
                    className="ml-2 flex items-center"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full md:w-auto"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="w-full md:w-auto group relative overflow-hidden border-white/40 bg-transparent text-white transition-all duration-300 hover:border-white/80 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] backdrop-blur-sm"
                onClick={() => {
                  if (onExplore) {
                    onExplore('landing');
                  }
                }}
              >
                <motion.span
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%', transition: { duration: 0.5, ease: "easeOut" } }}
                  className="absolute bottom-0 left-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                />
                <span className="relative z-10 flex items-center text-sm md:text-base font-medium">
                  Landing Website
                  <motion.span 
                    className="ml-2 flex items-center"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full md:w-auto"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                variant="outline"
                className="w-full md:w-auto group relative overflow-hidden border-white/40 bg-transparent text-white transition-all duration-300 hover:border-white/80 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] backdrop-blur-sm"
                onClick={() => {
                  // Open WhatsApp chat with the given phone number
                  window.open("https://wa.me/13057532766", "_blank");
                }}
              >
                <motion.span
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%', transition: { duration: 0.5, ease: "easeOut" } }}
                  className="absolute bottom-0 left-0 z-10 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                />
                <span className="relative z-10 flex items-center text-sm md:text-base font-medium">
                  Contact Us
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="ml-2 flex items-center"
                  >
                    <Image 
                      src="/images/whatsapp-icon.png"
                      alt="WhatsApp Icon"
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Confidentiality Notice - Bottom Right with enhanced animation */}
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
