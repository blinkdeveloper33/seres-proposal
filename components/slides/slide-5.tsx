"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Users, ArrowRight, CheckCircle, Activity, Eye, MessageCircle, Calendar, FileCheck } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide5Props {
  direction: number
  onExit?: () => void
}

export default function Slide5({ direction, onExit }: Slide5Props) {
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

  // Personas data
  const personas = [
    {
      title: "Foreign Investor",
      description: "U.S., EU or Asian buyer seeking stable LATAM assets ≥ USD 300k.",
      color: "bg-amber-400/10 border-amber-400/30"
    },
    {
      title: "Local High-Net-Worth Buyer",
      description: "Paraguayan executive expanding property portfolio.",
      color: "bg-amber-400/10 border-amber-400/30"
    },
    {
      title: "Paraguayan Diaspora",
      description: "Ex-pat looking for a retirement or second-home purchase.",
      color: "bg-amber-400/10 border-amber-400/30"
    },
    {
      title: "Real-Estate Broker / Referral Partner",
      description: "External agent who can co-market SERES listings.",
      color: "bg-amber-400/10 border-amber-400/30"
    }
  ]

  // Journey data for the table
  const journeyStages = [
    {
      stage: "Discover",
      touchpoints: "Google search, social ads, referral link",
      goal: "Find credible property options in Paraguay",
      enablers: "Multilingual SEO, paid campaigns, broker landing pages",
      icon: <Eye className="h-5 w-5 text-white" />
    },
    {
      stage: "Explore",
      touchpoints: "Landing page, property filters, virtual galleries",
      goal: "Short-list properties that match budget & lifestyle",
      enablers: "Curated database, high-res imagery, 360° tours",
      icon: <Activity className="h-5 w-5 text-white" />
    },
    {
      stage: "Engage",
      touchpoints: "Save favourites, compare listings, request info",
      goal: "Validate details and initiate direct contact",
      enablers: "\"Save & compare\" feature, instant WhatsApp/CRM chat",
      icon: <MessageCircle className="h-5 w-5 text-white" />
    },
    {
      stage: "Decide",
      touchpoints: "Schedule viewing, negotiate terms, due diligence",
      goal: "Confirm purchase intent and secure financing",
      enablers: "Online booking calendar, document vault, cost calculators",
      icon: <Calendar className="h-5 w-5 text-white" />
    },
    {
      stage: "Close",
      touchpoints: "Digital contract, payment transfer, hand-over",
      goal: "Finalise the deal with minimal friction",
      enablers: "E-signature integration, secure payment instructions, post-sale concierge",
      icon: <FileCheck className="h-5 w-5 text-white" />
    }
  ]

  // Success signals
  const successSignals = [
    "≥ 65% of visitors reach the Explore stage.",
    "≥ 35% of Engaged users schedule a viewing.",
    "≥ 80% of scheduled viewings proceed to contract draft."
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
          alt="Target Audiences Background"
          fill
          priority
          className="object-cover brightness-[0.75]"
          style={{
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60"></div>
      </div>

      {/* Main Content - Responsive padding for mobile with extra space at bottom for navigation */}
      <div className="relative z-10 flex h-full w-full flex-col px-3 py-4 md:px-8 md:py-5 pb-10 md:pb-16 overflow-y-auto">
        {/* Title - Reduced vertical spacing */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-2 md:mb-3 text-2xl md:text-3xl font-extrabold text-white text-center md:text-left"
        >
          Target Audiences & User Journeys
        </motion.h1>

        {/* Primary Personas Section - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-3 md:mb-4"
        >
          <h2 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center">
            <Users className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
            Primary Personas
          </h2>

          <div className="grid grid-cols-2 gap-2">
            {personas.map((persona, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className={`rounded-lg p-2 border backdrop-blur-sm hover:bg-white/15 transition-colors duration-300 ${persona.color}`}
              >
                <div className="flex items-start">
                  <div className="mr-2 p-1.5 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] flex-shrink-0">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{persona.title}</h3>
                    <p className="text-xs text-white/70">{persona.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Journey Table - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-3 md:mb-4"
        >
          <h2 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center">
            <ArrowRight className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
            End-to-End User Journey
            <span className="ml-2 text-xs font-normal text-white/60">(simplified)</span>
          </h2>

          <div className="overflow-x-auto bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-2">
            <table className="w-full border-collapse text-xs md:text-sm">
              <thead>
                <tr>
                  <motion.th 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-left py-1.5 px-2 text-white font-semibold border-b border-white/20"
                  >
                    Stage
                  </motion.th>
                  <motion.th 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    className="text-left py-1.5 px-2 text-white font-semibold border-b border-white/20"
                  >
                    Key Touchpoints
                  </motion.th>
                  <motion.th 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-left py-1.5 px-2 text-white font-semibold border-b border-white/20"
                  >
                    User Goal
                  </motion.th>
                  <motion.th 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    className="text-left py-1.5 px-2 text-white font-semibold border-b border-white/20"
                  >
                    SERES Digital Enablers
                  </motion.th>
                </tr>
              </thead>
              <tbody>
                {journeyStages.map((stage, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                    className={index % 2 === 0 ? "bg-white/5 hover:bg-white/10 transition-colors duration-300" : "hover:bg-white/10 transition-colors duration-300"}
                  >
                    <td className="py-1 px-2 border-b border-white/10">
                      <div className="flex items-center">
                        <div className="mr-2 p-1.5 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] flex-shrink-0">
                          {React.cloneElement(stage.icon, { className: "h-3.5 w-3.5 text-white" })}
                        </div>
                        <span className="text-white/90 text-xs">{stage.stage}</span>
                      </div>
                    </td>
                    <td className="py-1 px-2 text-white/80 border-b border-white/10 text-xs">{stage.touchpoints}</td>
                    <td className="py-1 px-2 text-white/80 border-b border-white/10 text-xs">{stage.goal}</td>
                    <td className="py-1 px-2 text-white/80 border-b border-white/10 text-xs">{stage.enablers}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Journey Success Signals - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-2.5"
        >
          <h3 className="text-sm md:text-base font-semibold text-white mb-1.5 flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
            <span className="text-amber-400">Journey Success Signals</span>
          </h3>

          <div className="flex flex-wrap gap-x-4 gap-y-1 md:ml-2">
            {successSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                className="flex items-center text-white/90 text-xs basis-full md:basis-auto"
              >
                <span className="inline-block h-1.5 w-1.5 bg-amber-400 rounded-full mr-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                {signal}
              </motion.div>
            ))}
          </div>
          
          <p className="mt-2 text-xs text-white/90 italic">
            These personas and journeys guide every UX, content, and automation decision, converting traffic into deals.
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
          slide-5.tsx
        </p>
      </motion.div>
    </motion.div>
  )
} 