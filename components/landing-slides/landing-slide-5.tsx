"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface LandingSlide5Props {
  direction: number
  onExit?: () => void
}

export default function LandingSlide5({ direction, onExit }: LandingSlide5Props) {
  // State to detect if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false)
  // State for carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    {
      src: "https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//anton-lukin-oqkFQjB10sE-unsplash.jpg",
      alt: "Target Audience Image 1"
    },
    {
      src: "https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//river-kao-SSOMkTC5Szo-unsplash.jpg",
      alt: "Target Audience Image 2"
    }
  ]
  
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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    
    return () => clearInterval(timer)
  }, [images.length])

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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
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

      {/* Main Content */}
      <div className="relative h-full w-full flex flex-col md:flex-row">
        {/* Image Carousel - Full height on mobile, half width on desktop */}
        <div className="relative h-2/5 md:h-full md:w-1/2">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentImageIndex === index ? 1 : 0,
                zIndex: currentImageIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black/90"></div>
            </motion.div>
          ))}
          
          {/* Carousel Controls - Adjusted for better touch targets */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:justify-between md:px-4">
            <button 
              onClick={prevImage}
              className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full mr-4 hover:bg-white/30 transition-colors touch-manipulation"
              aria-label="Previous image"
            >
              <ArrowLeft className="h-5 w-5 text-white" />
            </button>
            <button 
              onClick={nextImage}
              className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full hover:bg-white/30 transition-colors touch-manipulation"
              aria-label="Next image"
            >
              <ArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Content - 3/5 height on mobile, half width on desktop */}
        <div className="relative flex-1 bg-black/90 p-4 md:p-8 flex flex-col overflow-y-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 md:mb-4 text-2xl md:text-4xl font-extrabold text-white"
          >
            Target Audiences & User Journeys
          </motion.h1>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 overflow-y-auto">
            {/* Primary Audiences */}
            <motion.div
              variants={featureVariants}
              custom={0}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4 hover:bg-white/15 transition-colors duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">Primary Audiences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="text-white/90">
                  <h4 className="text-amber-400 font-semibold mb-1 md:mb-2 text-sm md:text-base">High-Income Professionals</h4>
                  <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
                    <li>• Ages 35-55</li>
                    <li>• Seeking premium properties</li>
                    <li>• Prioritize location and amenities</li>
                  </ul>
                </div>
                <div className="text-white/90">
                  <h4 className="text-amber-400 font-semibold mb-1 md:mb-2 text-sm md:text-base">Investors</h4>
                  <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
                    <li>• Both local and international</li>
                    <li>• Seeking steady ROI opportunities</li>
                    <li>• Value market data and analytics</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* User Journeys */}
            <motion.div
              variants={featureVariants}
              custom={1}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4 hover:bg-white/15 transition-colors duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">User Journeys</h3>
              <div className="space-y-2 md:space-y-3 text-white/90 text-xs md:text-sm">
                <p><span className="text-amber-400 font-semibold">Discovery:</span> Users find SERES through search engines, social media, or referrals.</p>
                <p><span className="text-amber-400 font-semibold">Engagement:</span> Browse projects, learn about company values, view property highlights.</p>
                <p><span className="text-amber-400 font-semibold">Contact:</span> Easily reach out via form or WhatsApp for more information or to schedule viewings.</p>
              </div>
            </motion.div>

            {/* Website Optimization Strategy - Moved directly under User Journeys */}
            <motion.div
              variants={featureVariants}
              custom={2}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-3 md:p-4"
            >
              <h3 className="text-base md:text-lg font-semibold text-amber-400 mb-1.5 md:mb-2">
                Website Optimization Strategy
              </h3>
              <p className="text-white/90 text-xs md:text-sm">
                Our design and content strategy is specifically tailored to engage these target audiences, with clear paths to conversion and features that address their specific needs and concerns.
              </p>
            </motion.div>
          </div>

          {/* Empty div to keep layout consistent */}
          <div className="mt-auto"></div>
        </div>
      </div>

      {/* Filename Label - Bottom Left */}
      <motion.div
        className="absolute bottom-2 md:bottom-4 left-3 md:left-6 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[9px] md:text-[10px] font-light text-white/50" style={{ letterSpacing: '0.05em' }}>
          landing-slide-5.tsx
        </p>
      </motion.div>
    </motion.div>
  )
} 