"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Zap, DatabaseZap, Edit3, Filter, Languages, BarChartHorizontal, Sparkles, ArrowRight } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide6Props {
  direction: number
  onExit?: () => void
}

export default function Slide6({ direction, onExit }: Slide6Props) {
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

  // Content data for Slide 6
  const deliverables = [
    {
      title: "High-Impact Landing Experience",
      icon: <Zap className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />,
      text: "Hero imagery, trust badges, and a clear value proposition drive first-time visitors to explore the portfolio or start a conversation instantly.",
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      title: "Dynamic Property Catalogue",
      icon: <DatabaseZap className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />,
      text: "A curated database that supports advanced filtering (price, location, amenities, stage of development) and real-time availability.",
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      title: "Self-Service CMS",
      icon: <Edit3 className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />,
      text: "Non-technical staff can publish or update listings, blog posts, and success stories in < 15 minutes, eliminating developer bottlenecks.",
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      title: "Friction-less Lead Funnel",
      icon: <Filter className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />,
      text: "Persistent WhatsApp CTA, short inquiry forms, and automatic CRM routing reduce response time from hours to minutes.",
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      title: "Multilingual & SEO-Optimised Architecture",
      icon: <Languages className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />,
      text: "English, Spanish, and Portuguese versions share one code-base but maintain unique URL structures and metadata to rank independently.",
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      title: "Data-Driven Insights Layer",
      icon: <BarChartHorizontal className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />,
      text: "GA4 events, funnel tracking, and a lightweight BI dashboard surface KPIs such as listing views, drop-off points, and deal velocity.",
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
    {
      title: "Future-Ready Foundation",
      icon: <Sparkles className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />,
      text: "Modular design allows rapid add-ons—3-D virtual tours, AR overlays, mortgage calculators—without re-platforming.",
      color: "bg-gradient-to-br from-amber-400 to-yellow-500"
    },
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
          alt="Solution Overview Background"
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
          className="mb-4 md:mb-6 text-3xl md:text-4xl font-extrabold text-white text-center md:text-left"
        >
          Solution Overview
        </motion.h1>
        
        <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg md:text-xl font-semibold text-amber-400 mb-4 md:mb-6 text-center md:text-left"
        >
            What Aleph Corp Will Deliver
        </motion.h2>

        {/* Content Grid - Adapt columns based on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-3">
                 <div className={`mr-3 p-2 rounded-full text-white ${item.color} flex-shrink-0 shadow-lg transform hover:scale-105 transition-transform duration-200 border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]`}>
                   {item.icon}
                 </div>
                 <h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-xs md:text-sm text-white/80 flex-grow">{item.text}</p>
            </motion.div>
          ))}
          
        </div>

        {/* Final Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + deliverables.length * 0.05, duration: 0.6 }} // Delay based on number of cards
          className="mt-6 bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4"
        >
          <p className="text-sm md:text-base text-white/90 italic text-center">
            A comprehensive digital solution designed to elevate SERES' brand, streamline operations, and capture the growing international market.
          </p>
        </motion.div>

      </div>

      {/* Filename Label - Bottom Left */}
      <motion.div
        className="absolute bottom-2 md:bottom-4 left-3 md:left-6 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[9px] md:text-[10px] font-light text-white/50" style={{ letterSpacing: '0.05em' }}>
          slide-6.tsx
        </p>
      </motion.div>
    </motion.div>
  )
} 