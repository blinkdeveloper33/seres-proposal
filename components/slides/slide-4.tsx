"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, LineChart, Timer, BarChart4, Globe2, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide4Props {
  direction: number
  onExit?: () => void
}

export default function Slide4({ direction, onExit }: Slide4Props) {
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

  // Objectives data with icons
  const objectives = [
    {
      text: "Double qualified lead volume generated through SERES' website.",
      icon: <BarChart4 className="h-5 w-5 flex-shrink-0" />
    },
    {
      text: "Cut average lead-response time from 24 hours to < 2 hours via automated routing.",
      icon: <Timer className="h-5 w-5 flex-shrink-0" />
    },
    {
      text: "Raise lead-to-deal conversion from 8% to > 12%.",
      icon: <LineChart className="h-5 w-5 flex-shrink-0" />
    },
    {
      text: "Expand global reach so that ≥ 40% of site traffic originates outside LATAM.",
      icon: <Globe2 className="h-5 w-5 flex-shrink-0" />
    },
    {
      text: "Reduce listing time-to-market from 7–10 days to < 24 hours with a self-service CMS.",
      icon: <Timer className="h-5 w-5 flex-shrink-0" />
    },
    {
      text: "Strengthen brand authority by ranking on page 1 of Google for at least five high-value multilingual keywords.",
      icon: <Search className="h-5 w-5 flex-shrink-0" />
    }
  ]

  // Metrics data for the table
  const metrics = [
    {
      metric: "Qualified leads / month",
      baseline: "~120",
      target: "≥ 240",
      impact: "Larger sales funnel"
    },
    {
      metric: "Avg. response time",
      baseline: "24 h",
      target: "≤ 2 h",
      impact: "Higher prospect satisfaction"
    },
    {
      metric: "Lead-to-deal conversion",
      baseline: "8 %",
      target: "≥ 12 %",
      impact: "45 % more closed sales"
    },
    {
      metric: "International traffic share",
      baseline: "22 %",
      target: "≥ 40 %",
      impact: "Diversified buyer base"
    },
    {
      metric: "Time to publish new listing",
      baseline: "7–10 d",
      target: "< 24 h",
      impact: "Faster monetisation of inventory"
    },
    {
      metric: "Top-10 Google rankings (EN/ES/PT)",
      baseline: "0",
      target: "≥ 5",
      impact: "Sustained organic growth"
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
          alt="Project Objectives Background"
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

      {/* Main Content - Responsive padding for mobile with extra space at bottom for navigation */}
      <div className="relative z-10 flex h-full w-full flex-col px-3 py-4 md:px-12 md:py-8 pb-10 md:pb-24 overflow-y-auto">
        {/* Title - Responsive font size */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 md:mb-6 text-2xl md:text-4xl font-extrabold text-white text-center md:text-left"
        >
          Project Objectives & Success Metrics
        </motion.h1>

        {/* Content container - using grid for responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
          {/* Strategic Objectives Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4 flex items-center">
              <CheckCircle2 className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Strategic Objectives
              <span className="ml-2 text-xs md:text-sm font-normal text-white/60">(12-month horizon)</span>
            </h2>

            <div className="space-y-2 md:space-y-3">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-white/10 hover:bg-white/15 transition-colors duration-300"
                >
                  <div className="mr-2 md:mr-3 mt-0.5 p-1.5 md:p-2 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] flex-shrink-0">
                    {objective.icon}
                  </div>
                  <p className="text-xs md:text-base text-white/90">{index + 1}. {objective.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Metrics Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4 flex items-center">
              <LineChart className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
              Key Success Metrics & Targets
            </h2>

            <div className="overflow-x-auto bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-2 md:p-3">
              <table className="w-full border-collapse text-xs md:text-base">
                <thead>
                  <tr>
                    <motion.th 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-left py-1.5 md:py-2 px-2 md:px-3 text-white font-semibold border-b border-white/20"
                    >
                      Metric
                    </motion.th>
                    <motion.th 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55, duration: 0.5 }}
                      className="text-center py-1.5 md:py-2 px-2 md:px-3 text-white font-semibold border-b border-white/20"
                    >
                      Baseline
                    </motion.th>
                    <motion.th 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-center py-1.5 md:py-2 px-2 md:px-3 text-white font-semibold border-b border-white/20"
                    >
                      Target
                    </motion.th>
                    <motion.th 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.65, duration: 0.5 }}
                      className="text-left py-1.5 md:py-2 px-2 md:px-3 text-white font-semibold border-b border-white/20"
                    >
                      Impact
                    </motion.th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((metric, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                      className={index % 2 === 0 ? "bg-white/5 hover:bg-white/10 transition-colors duration-300" : "hover:bg-white/10 transition-colors duration-300"}
                    >
                      <td className="py-1.5 md:py-2 px-2 md:px-3 text-white/90 border-b border-white/10 text-xs md:text-base">{metric.metric}</td>
                      <td className="py-1.5 md:py-2 px-2 md:px-3 text-center text-white/80 border-b border-white/10 text-xs md:text-base">{metric.baseline}</td>
                      <td className="py-1.5 md:py-2 px-2 md:px-3 text-center text-amber-400 font-medium border-b border-white/10 text-xs md:text-base">{metric.target}</td>
                      <td className="py-1.5 md:py-2 px-2 md:px-3 text-white/80 border-b border-white/10 text-xs md:text-base">{metric.impact}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Why These Targets Matter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-3 md:mt-5 bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-3 md:p-4"
            >
              <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2 flex items-center">
                <CheckCircle2 className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />
                <span className="text-amber-400">Why These Targets Matter</span>
              </h3>
              <p className="text-[10px] md:text-sm text-white/90">
                Measurable success criteria to track our progress, ensure we deliver exceptional ROI, and create a sustainable competitive advantage in Paraguay's evolving real estate market.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 