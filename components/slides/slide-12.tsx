"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Coins, PiggyBank, CalendarClock, Receipt } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide12Props {
  direction: number
}

export default function Slide12({ direction }: Slide12Props) {
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
      transition: { delay: 0.4 + custom * 0.08, duration: 0.4 }
    })
  }

  // Budget data
  const budgetData = [
    { workstream: "Discovery & Strategy", estimate: 8000 },
    { workstream: "UX/UI Design", estimate: 15000 },
    { workstream: "Front-end & CMS Development", estimate: 45000 },
    { workstream: "QA, Accessibility, UAT", estimate: 8000 },
    { workstream: "Launch, Training, Documentation", estimate: 4000 },
    { workstream: "Total Fixed Investment", estimate: 80000, isTotal: true },
    { workstream: "Cloud hosting, CDN, backups (monthly)", estimate: 500, isRecurring: true },
    { workstream: "Licences (CMS, analytics, WhatsApp API)", estimate: 250, isRecurring: true },
    { workstream: "Optional enhancement pool (v2 features)", estimate: 15000, isOptional: true },
  ]

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString('en-US')}`
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
          alt="Budget Background"
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
          Budget & Investment Breakdown
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-sm text-white/70 mb-4 md:mb-6 text-center md:text-left"
        >
            (USD, one-time unless noted)
        </motion.p>

        {/* Budget Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="overflow-x-auto bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-3 shadow-lg mb-6 md:mb-8"
        >
          <table className="w-full border-collapse text-sm md:text-base min-w-[500px]">
            <thead>
              <tr className="border-b border-white/20">
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="py-2 px-3 text-left text-white font-semibold"
                >
                  Workstream
                </motion.th>
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="py-2 px-3 text-right text-white font-semibold"
                >
                  Estimate
                </motion.th>
              </tr>
            </thead>
            <tbody>
              {budgetData.map((row, index) => (
                <motion.tr
                  key={index}
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  className={`border-b border-white/10 last:border-b-0 ${row.isTotal ? 'bg-amber-500/20 font-bold' : (row.isRecurring || row.isOptional ? 'bg-white/5 italic' : 'hover:bg-white/10')} transition-colors duration-300`}
                >
                  <td className={`py-2.5 px-3 ${row.isTotal ? 'text-white' : 'text-white/90'}`}>
                      {row.workstream}
                      {row.isOptional && <span className="text-xs text-white/60 ml-1">(Optional)</span>}
                  </td>
                  <td className={`py-2.5 px-3 text-right ${row.isTotal ? 'text-amber-300' : (row.isRecurring ? 'text-white/70' : 'text-white/80')}`}>
                    {formatCurrency(row.estimate)}
                    {row.isRecurring && <span className="text-xs text-white/60"> / mo</span>}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        
        {/* Payment Schedule */}
         <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + budgetData.length * 0.04, duration: 0.6 }} // Delay based on table rows
            className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 text-center"
          >
            <h3 className="text-base md:text-lg font-semibold text-white mb-2 flex items-center justify-center">
               <Receipt className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
               <span className="text-amber-400">Payment Schedule</span>
            </h3>
            <p className="text-sm md:text-base text-white/90 italic">
              30% at contract signing, 40% at mid-project milestone (Sprint Demo #2), 30% upon successful launch.
            </p>
          </motion.div>

      </div>
    </motion.div>
  )
} 