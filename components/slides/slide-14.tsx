"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ShieldAlert, CheckSquare } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide14Props {
  direction: number
  onExit?: () => void
}

export default function Slide14({ direction, onExit }: Slide14Props) {
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

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + custom * 0.2, duration: 0.5 }
    })
  }

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: 0.5 + custom * 0.1, duration: 0.4 }
    })
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.7 + custom * 0.08, duration: 0.4 }
    })
  }

  // Risk data
  const riskData = [
    { risk: "Schedule slippage", impact: "Delayed go-live", mitigation: "Agile sprints, weekly demos, buffer weeks 9-10" },
    { risk: "Low content adoption", impact: "Thin catalogue", mitigation: "CMS training, content calendar, editor roles" },
    { risk: "Security breach", impact: "Data loss / fines", mitigation: "TLS 1.3, WAF, daily encrypted backups, pen-tests" },
    { risk: "Regulatory change", impact: "Legal exposure", mitigation: "Quarterly legal review, GDPR & Ley 6534 mapping" },
    { risk: "User adoption lag", impact: "ROI delay", mitigation: "Pre-launch marketing, SEO plan, sales-team enablement" },
  ]
  
  const complianceItems = [
      "GDPR consent banners", 
      "Cookie policy", 
      "Ley 6534 data-retention", 
      "WCAG 2.1 AA accessibility", 
      "ISO 27001-aligned processes"
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
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//milad-fakurian-UGSK1GGAz8E-unsplash.jpg"
          alt="Risk Background"
          fill
          priority
          className="object-cover brightness-[0.75]"
          style={{
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60"></div>
      </div>

      {/* Main Content - Use grid for layout */}
      <div className="relative z-10 flex h-full w-full flex-col px-4 py-6 md:px-12 md:py-8 pb-16 md:pb-24 overflow-y-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 text-3xl md:text-4xl font-extrabold text-white text-center md:text-left"
        >
          Risk Mitigation & Compliance
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Risk Table (Spans 3 columns on large screens) */}
          <motion.div
            custom={0}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
               <ShieldAlert className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
               Risk Mitigation Plan
            </h2>
            <div className="overflow-x-auto bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-3 shadow-lg">
              <table className="w-full border-collapse text-sm md:text-base min-w-[550px]">
                <thead>
                  <tr className="border-b border-white/20">
                    <motion.th 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="py-2 px-3 text-left text-white font-semibold"
                    >
                      Risk
                    </motion.th>
                    <motion.th 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      className="py-2 px-3 text-left text-white font-semibold"
                    >
                      Impact
                    </motion.th>
                    <motion.th 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="py-2 px-3 text-left text-white font-semibold"
                    >
                      Mitigation
                    </motion.th>
                  </tr>
                </thead>
                <tbody>
                  {riskData.map((row, index) => (
                    <motion.tr
                      key={index}
                      custom={index}
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      className={`border-b border-white/10 last:border-b-0 ${index % 2 === 0 ? "bg-white/5 hover:bg-white/10" : "hover:bg-white/10"} transition-colors duration-300`}
                    >
                      <td className="py-2.5 px-3 text-white/90 font-medium">{row.risk}</td>
                      <td className="py-2.5 px-3 text-white/80 italic">{row.impact}</td>
                      <td className="py-2.5 px-3 text-white/80">{row.mitigation}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Compliance Checklist (Spans 2 columns on large screens) */}
          <motion.div
            custom={1}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
               <CheckSquare className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
               Compliance Checklist
            </h2>
            <ul className="space-y-2.5 list-none">
              {complianceItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  custom={index} 
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center"
                >
                  <CheckSquare size={16} className="text-green-400 mr-2.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
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
          slide-14.tsx
        </p>
      </motion.div>
    </motion.div>
  )
} 