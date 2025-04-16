"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ListOrdered, Mail, Phone, User, CheckCircle } from "lucide-react"
import { Merriweather } from 'next/font/google'
import { Button } from '@/components/ui/button'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide15Props {
  direction: number
  onExit?: () => void
}

export default function Slide15({ direction, onExit }: Slide15Props) {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 + custom * 0.1, duration: 0.4 }
    })
  }

  // Content data
  const nextSteps = [
    "Confirm scope & budget – sign Master Services Agreement and Statement of Work.",
    "Kick-off meeting – schedule for the first Monday after contract execution.",
    "Provide assets – SERES to deliver brand files, initial property data, and CRM credentials.",
    "Aleph Corp spins up project repo & Slack channel – within 24h of kick-off.",
    "Weekly progress reviews – every Thursday, 30 min, until launch."
  ]
  
  const contactInfo = {
      name: "Alejandro Neira",
      title: "Managing Director, Aleph Corp",
      phone: "+1 305 555 0123",
      email: "alejandro@alephcorp.com"
  }
  
  const callToAction = "Approve the proposal today and we'll have SERES' new digital growth engine live in twelve weeks."

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
          alt="Next Steps Background"
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
          Next Steps & Call to Action
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 flex-grow">
            
          {/* Next Steps List */}
          <motion.div
            custom={0}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/15 transition-colors duration-300"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
               <ListOrdered className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
               Immediate Next Steps
            </h2>
            <ol className="space-y-3 list-none">
              {nextSteps.map((item, index) => (
                <motion.li 
                  key={index} 
                  custom={index} 
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start"
                >
                   <span className="inline-flex items-center justify-center h-5 w-5 md:h-6 md:w-6 rounded-full bg-amber-400 text-black text-xs md:text-sm font-bold mr-3 mt-0.5 flex-shrink-0 shadow-md">{index + 1}</span>
                  <span className="text-sm md:text-base text-white/90">{item}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Contact Info & CTA */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <motion.div
                custom={1}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/15 transition-colors duration-300"
            >
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center">
                   <User className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]" />
                   Primary Contact
                </h2>
                <div className="space-y-2">
                    <p className="text-base md:text-lg text-white font-medium">{contactInfo.name}</p>
                    <p className="text-sm md:text-base text-white/80">{contactInfo.title}</p>
                    <div className="flex items-center text-sm text-white/70 pt-1">
                        <Phone size={14} className="mr-2" />
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-amber-400 transition-colors">{contactInfo.phone}</a>
                    </div>
                     <div className="flex items-center text-sm text-white/70">
                        <Mail size={14} className="mr-2" />
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-400 transition-colors">{contactInfo.email}</a>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
                custom={2}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4 md:p-5 flex-grow flex flex-col justify-center text-center"
            >
                <p className="text-base md:text-lg text-white/90 italic mb-4">
                    {`"${callToAction}"`}
                </p>
                <Button 
                    size="lg"
                    className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-base md:text-lg shadow-lg transition duration-300 transform hover:scale-105 mx-auto"
                >
                   <CheckCircle className="mr-2 h-5 w-5" /> Approve Proposal
                </Button>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  )
} 