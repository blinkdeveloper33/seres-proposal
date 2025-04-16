"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { TrendingUp, Target, DollarSign } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide13Props {
  direction: number
  onExit?: () => void
}

export default function Slide13({ direction, onExit }: Slide13Props) {
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

  // ROI data
  const roiData = [
    { metric: "Qualified leads / mo", baseline: "120", month12: "240", month24: "320" },
    { metric: "Closed deals / mo (12% conv.)", baseline: "10", month12: "29", month24: "38" },
    { metric: "Avg. deal value (commission)", baseline: "$7,500", month12: "$7,500", month24: "$7,500" },
    { metric: "Monthly commission revenue", baseline: "$75k", month12: "$218k", month24: "$285k" },
    { metric: "Cumulative net profit", baseline: "–", month12: "$1.3M", month24: "$3.7M", isHighlight: true },
    { metric: "Investment payback", baseline: "—", month12: "< 9 months", month24: "—" },
  ]

  const formatValue = (value: string) => {
    if (value.includes('$') || value.includes('%')) {
      return value
    }
    if (value === '–' || value === '—') {
        return value
    }
    return parseInt(value).toLocaleString('en-US');
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
    
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//milad-fakurian-UGSK1GGAz8E-unsplash.jpg"
          alt="ROI Background"
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
          ROI & KPI Forecast (24 Months)
        </motion.h1>

        {/* ROI Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="overflow-x-auto bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-3 shadow-lg mb-6 md:mb-8"
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
                  Metric
                </motion.th>
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="py-2 px-3 text-center text-white font-semibold"
                >
                  Baseline
                </motion.th>
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="py-2 px-3 text-center text-white font-semibold"
                >
                  Month 12
                </motion.th>
                <motion.th 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="py-2 px-3 text-center text-white font-semibold"
                >
                  Month 24
                </motion.th>
              </tr>
            </thead>
            <tbody>
              {roiData.map((row, index) => (
                <motion.tr
                  key={index}
                  custom={index}
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  className={`border-b border-white/10 last:border-b-0 ${row.isHighlight ? 'bg-amber-500/20 font-medium' : (index % 2 === 0 ? "bg-white/5 hover:bg-white/10" : "hover:bg-white/10")} transition-colors duration-300`}
                >
                  <td className={`py-2.5 px-3 ${row.isHighlight ? 'text-white' : 'text-white/90'} flex items-center`}>
                    {index === 0 && <Target className="h-4 w-4 mr-2 text-amber-400 flex-shrink-0" />}
                    {index === 3 && <DollarSign className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />}
                    {index === 4 && <TrendingUp className="h-4 w-4 mr-2 text-amber-300 flex-shrink-0" />}
                    {row.metric}
                   </td>
                  <td className="py-2.5 px-3 text-center text-white/80">{formatValue(row.baseline)}</td>
                  <td className={`py-2.5 px-3 text-center ${row.isHighlight ? 'text-amber-300' : 'text-white/80'}`}>{formatValue(row.month12)}</td>
                  <td className={`py-2.5 px-3 text-center ${row.isHighlight ? 'text-amber-300' : 'text-white/80'}`}>{formatValue(row.month24)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        
        {/* Assumptions Note */}
         <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + roiData.length * 0.06, duration: 0.6 }} // Delay based on table rows
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center"
          >
            <p className="text-xs md:text-sm text-white/80 italic">
              Assumes steady traffic growth (2× year 1, 1.3× year 2) and stable 3% brokerage fee on average deal value.
            </p>
          </motion.div>

      </div>
    </motion.div>
  )
} 