"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, BarChart, CreditCard, DollarSign, Globe, LineChart, PieChart, Search, TrendingUp, XCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide3Props {
  direction: number
  onExit?: () => void
}

export default function Slide3({ direction, onExit }: Slide3Props) {
  // State to detect if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false)
  // State for image slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Images for the slider
  const images = [
    "https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//alan-martinez-Bps6b03ijzE-unsplash.jpg",
    "https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//barnaby-11ubTrmM7ng-unsplash.jpg",
    "https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//regina-bordon-slGzmer3U8U-unsplash.jpg"
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

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [images.length])

  // Navigate slider
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

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

  // Slider animation variants
  const sliderVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.3
      }
    }
  }

  // Image transition variants
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  }

  // Economic tailwinds data (condensed)
  const economicTailwinds = [
    {
      description: "4% GDP growth (2024) with investment-grade credit rating from Moody's unlocking cheaper capital",
      icon: <LineChart className="h-5 w-5 md:h-6 md:w-6" />,
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      description: "Zero foreign ownership restrictions and ultra-low property tax (0.1–1%) in South America",
      icon: <DollarSign className="h-5 w-5 md:h-6 md:w-6" />,
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      description: "Pro-business incentives attracted USD 514M in foreign projects during 2024",
      icon: <CreditCard className="h-5 w-5 md:h-6 md:w-6" />,
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    }
  ]

  // Digital pain points data (condensed)
  const digitalPainPoints = [
    {
      description: "Lead capture limited to email forms; response time > 24h",
      icon: <XCircle className="h-5 w-5 md:h-6 md:w-6" />,
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      description: "No multilingual SEO; 62% of non-Spanish visitors bounce",
      icon: <Globe className="h-5 w-5 md:h-6 md:w-6" />,
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      description: "Listings require developer updates; 7–10 days time-to-market",
      icon: <Search className="h-5 w-5 md:h-6 md:w-6" />,
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    }
  ]

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
          alt="Market Opportunity Background"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.75]"
          style={{
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full w-full flex-col md:flex-row px-3 py-4 md:px-12 md:py-8 pb-16 md:pb-24 overflow-y-auto">
        {/* Left Column - Key Info */}
        <div className="flex flex-col w-full md:w-1/2 md:pr-8 md:justify-between md:h-full">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 md:mb-5 text-2xl md:text-4xl font-extrabold text-white text-center md:text-left"
          >
            Market Opportunity
          </motion.h1>

          {/* Headline Opportunity Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-3 md:mb-5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4"
          >
            <h2 className="text-base md:text-xl font-semibold text-white mb-2 flex items-center">
              <TrendingUp className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Accelerating Growth
            </h2>
            <p className="text-xs md:text-base text-white/90">
              Foreign appetite for Paraguayan property is accelerating with 
              <span className="text-amber-400 font-semibold"> 15-20% </span> 
              YoY price growth and a residential market projected at
              <span className="text-amber-400 font-semibold"> USD 155.8B </span> 
              by 2025.
            </p>
          </motion.div>

          {/* Economic Tailwinds Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-3 md:mb-5"
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2 flex items-center">
              <BarChart className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Economic Tailwinds
            </h3>
            <div className="space-y-2 md:space-y-3">
              {economicTailwinds.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-2 md:p-3 hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="flex items-center">
                    <div className={`mr-3 p-1.5 md:p-2 rounded-full text-white ${item.color} flex-shrink-0 shadow-lg transform hover:scale-105 transition-transform duration-200 border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]`}>
                      {item.icon}
                    </div>
                    <p className="text-[10px] md:text-sm text-white/80">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Digital Pain Points Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:mb-0"
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2 flex items-center">
              <XCircle className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Digital Pain Points
            </h3>
            <div className="space-y-2 md:space-y-3">
              {digitalPainPoints.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-2 md:p-3 hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="flex items-center">
                    <div className={`mr-3 p-1.5 md:p-2 rounded-full text-white ${item.color} flex-shrink-0 shadow-lg transform hover:scale-105 transition-transform duration-200 border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]`}>
                      {item.icon}
                    </div>
                    <p className="text-[10px] md:text-sm text-white/80">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Image Slider & Digital Demand */}
        <div className="flex flex-col w-full md:w-1/2 mt-3 md:mt-0 md:justify-between md:h-full">
          {/* Digital Demand Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-3 md:mb-5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4"
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-2 flex items-center">
              <PieChart className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Digital Demand Surge
            </h3>
            <ul className="space-y-1.5 md:space-y-2 text-[10px] md:text-sm text-white/80">
              <li className="flex items-start">
                <ArrowRight size={12} className="text-amber-400 mr-2 mt-0.5 flex-shrink-0 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
                <span>Google queries for "buy property in Paraguay" <span className="text-amber-400 font-semibold">+40% YoY</span></span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={12} className="text-amber-400 mr-2 mt-0.5 flex-shrink-0 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
                <span>March 2025 traffic: iinfocasas.com.py <span className="text-amber-400 font-semibold">193k visits (+254%)</span>, remax.com.py <span className="text-amber-400 font-semibold">27k (+89%)</span></span>
              </li>
              <li className="flex items-start">
                <ArrowRight size={12} className="text-amber-400 mr-2 mt-0.5 flex-shrink-0 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
                <span>Visitor geography: <span className="text-amber-400 font-semibold">35% U.S., 25% EU, 30% Brazil/Argentina</span></span>
              </li>
            </ul>
          </motion.div>

          {/* Why Act Now Section - Moved directly under Digital Demand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-3 md:mb-5 bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-3 md:p-4"
          >
            <h3 className="text-sm md:text-lg font-semibold text-white mb-1.5 md:mb-2 flex items-center">
              <TrendingUp className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              <span className="text-amber-400">Why Act Now</span>
            </h3>
            <p className="text-[10px] md:text-sm text-white/90 italic">
              A brief window exists to dominate search rankings and secure foreign buyers before competitors replicate Paraguay's open-door policies and digitalize their funnels.
            </p>
          </motion.div>

          {/* Image Slider */}
          <motion.div
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            className="relative w-full h-[140px] md:h-[260px] rounded-xl overflow-hidden flex-grow mb-3 md:mb-6"
          >
            <div className="absolute inset-0 bg-black/20 z-10 rounded-xl"></div>
            
            {/* Images */}
            {images.map((src, index) => (
              <motion.div
                key={index}
                custom={currentImageIndex > index ? -1 : 1}
                variants={imageVariants}
                initial="enter"
                animate={index === currentImageIndex ? "center" : "exit"}
                exit="exit"
                className="absolute inset-0"
                style={{ display: index === currentImageIndex ? 'block' : 'none' }}
              >
                <Image 
                  src={src}
                  alt={`Paraguay Real Estate ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                  priority={index === 0}
                />
              </motion.div>
            ))}
            
            {/* Navigation Buttons - Improved for touch */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-amber-400/80 hover:bg-amber-400 rounded-full p-1 md:p-1.5 transition duration-200 border border-black/20 shadow-lg touch-manipulation"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-black" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-amber-400/80 hover:bg-amber-400 rounded-full p-1 md:p-1.5 transition duration-200 border border-black/20 shadow-lg touch-manipulation"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-black" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5 md:space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-amber-400' : 'bg-white/40'
                  } drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] touch-manipulation`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 