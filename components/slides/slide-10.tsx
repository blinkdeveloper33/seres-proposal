"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { CalendarCheck, CheckCircle, Milestone } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide10Props {
  direction: number
}

export default function Slide10({ direction }: Slide10Props) {
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

  // Table row animation variants
  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + custom * 0.1, duration: 0.4 }
    })
  }

  // Roadmap data
  const roadmapData = [
    { phase: "Discovery & Alignment", duration: "Week 1-2", outputs: "Goals, personas, technical spec, sitemap", approval: "Scope sign-off" },
    { phase: "UX/UI Design", duration: "Week 3-4", outputs: "High-fidelity Figma prototype, style guide", approval: "Prototype sign-off" },
    { phase: "Development Sprint 1", duration: "Week 5-6", outputs: "Landing page, CMS schema, multilingual engine", approval: "Sprint demo #1" },
    { phase: "Development Sprint 2", duration: "Week 7-8", outputs: "Property catalogue, search filters, lead funnel", approval: "Sprint demo #2" },
    { phase: "QA & UAT", duration: "Week 9-10", outputs: "Functional tests, accessibility audit, content load", approval: "UAT acceptance" },
    { phase: "Launch & Handover", duration: "Week 11-12", outputs: "Production deploy, training, analytics dashboard", approval: "Go-live ✓" },
    { phase: "Post-Launch Optimisation", duration: "Month +1", outputs: "KPI review, backlog prioritisation", approval: "Roadmap v2" },
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//pawel-czerwinski-SD1VYMwGICo-unsplash.jpg"
          alt="Roadmap Background"
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
          Project Roadmap & Milestones
        </motion.h1>

        <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg md:text-xl font-semibold text-amber-400 mb-4 md:mb-6 text-center md:text-left"
        >
            12-Week Delivery Plan
        </motion.h2>

        {/* Roadmap Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="overflow-x-auto bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-3 shadow-lg"
        >
          <table className="w-full border-collapse text-sm md:text-base min-w-[600px]">
            <thead>
              <tr className="border-b border-white/20">
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="py-2 px-3 text-left text-white font-semibold"
                >
                  Phase
                </motion.th>
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="py-2 px-3 text-center text-white font-semibold"
                >
                  Duration
                </motion.th>
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="py-2 px-3 text-left text-white font-semibold"
                >
                  Primary Outputs
                </motion.th>
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="py-2 px-3 text-left text-white font-semibold"
                >
                  Approval Gate
                </motion.th>
              </tr>
            </thead>
            <tbody>
              {roadmapData.map((row, index) => (
                <motion.tr
                  key={index}
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  className={`border-b border-white/10 ${index === roadmapData.length - 2 ? 'bg-amber-500/10 hover:bg-amber-500/20' : (index % 2 === 0 ? "bg-white/5 hover:bg-white/10" : "hover:bg-white/10")} transition-colors duration-300`}
                >
                  <td className="py-2.5 px-3 text-white/90 font-medium flex items-center">
                     <Milestone className="h-4 w-4 mr-2 text-amber-400 flex-shrink-0" />
                     {row.phase}
                  </td>
                  <td className="py-2.5 px-3 text-center text-white/80">{row.duration}</td>
                  <td className="py-2.5 px-3 text-white/80">{row.outputs}</td>
                  <td className="py-2.5 px-3 text-white/80 flex items-center">
                     {row.approval === "Go-live ✓" ? 
                       <CheckCircle className="h-4 w-4 mr-1.5 text-green-400 flex-shrink-0" /> : 
                       <CalendarCheck className="h-4 w-4 mr-1.5 text-white/50 flex-shrink-0" />} 
                     {row.approval}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </motion.div>
  )
} 