"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Paintbrush, Palette, Component, Smartphone, Accessibility, ClipboardCheck, Figma, ArrowRight } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide8Props {
  direction: number
  onExit?: () => void
}

export default function Slide8({ direction, onExit }: Slide8Props) {
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
  
  // List item animation variants
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + custom * 0.08, duration: 0.4 }
    })
  }

  // Content data
  const designPrinciples = {
    title: "Design Principles",
    icon: <Paintbrush className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    text: "Luxury real-estate aesthetic, absolute clarity of information, and instant trust. Every screen must feel premium yet approachable."
  }

  const visualIdentity = {
    title: "Visual Identity",
    icon: <Palette className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    items: [
      "Colour palette anchored in SERES blue, complemented by deep navy, off-white, and subtle gold accents.",
      "Primary typeface: Inter; secondary accent: Playfair Display for headlines.",
      "Photography style: high-resolution architectural shots, aerial drone imagery, and lifestyle vignettes that evoke aspiration."
    ]
  }

  const componentLibrary = {
    title: "Component Library",
    icon: <Component className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    text: "Reusable navigation bar, mega-menu for property categories, card-based listing grids, price-slider, amenity chips, sticky WhatsApp CTA, modal enquiry forms, toast notifications, and a branded loader animation."
  }
  
  const responsiveBehavior = {
    title: "Responsive Behaviour",
    icon: <Smartphone className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    text: "Mobile-first breakpoints; thumb-friendly filters; one-hand navigation on 6-inch screens; tablet-optimised grid for on-site sales teams."
  }

  const accessibility = {
    title: "Accessibility Commitments",
    icon: <Accessibility className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    text: "WCAG 2.1 AA colour contrast, keyboard navigation, screen-reader-friendly alt text, focus indicators, and optional high-contrast mode."
  }
  
  const brandConsistency = {
    title: "Brand Consistency Toolkit",
    icon: <ClipboardCheck className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    text: "Figma design system file with colour tokens, typography scale, spacing rules, and ready-to-ship variants for buttons, inputs, and cards—ensuring future features ship 40% faster."
  }
  
  const interactivePrototype = {
    title: "Interactive Prototype",
    icon: <Figma className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
    text: "Clickable Figma prototype covering the full buyer journey: landing → filter → listing detail → WhatsApp chat → booking flow. Ready for stakeholder sign-off and user testing."
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
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//pawel-czerwinski-SD1VYMwGICo-unsplash.jpg"
          alt="UX/UI Design Background"
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
          UX / UI & Design System
        </motion.h1>

        {/* Content Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-4 md:space-y-6">
            {/* Design Principles */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center">
                {designPrinciples.icon}
                {designPrinciples.title}
              </h2>
              <p className="text-sm md:text-base text-white/90">{designPrinciples.text}</p>
            </motion.div>

            {/* Visual Identity */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center">
                {visualIdentity.icon}
                {visualIdentity.title}
              </h2>
              <ul className="space-y-2 list-none">
                {visualIdentity.items.map((item, index) => (
                  <motion.li 
                    key={index} 
                    custom={index} 
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start"
                  >
                    <span className="inline-block h-2 w-2 bg-amber-400 rounded-full mr-2 mt-[6px] flex-shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"></span>
                    <span className="text-sm md:text-base text-white/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
             {/* Component Library */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center">
                {componentLibrary.icon}
                {componentLibrary.title}
              </h2>
              <p className="text-sm md:text-base text-white/90">{componentLibrary.text}</p>
            </motion.div>
            
            {/* Interactive Prototype */}
             <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4"
            >
              <h3 className="text-base md:text-lg font-semibold text-white mb-2 flex items-center">
                {interactivePrototype.icon}
                <span className="text-amber-400">{interactivePrototype.title}</span>
              </h3>
              <p className="text-xs md:text-sm text-white/90 italic">{interactivePrototype.text}</p>
            </motion.div>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col space-y-4 md:space-y-6">
             {/* Responsive Behaviour */}
             <motion.div
              custom={4}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center">
                {responsiveBehavior.icon}
                {responsiveBehavior.title}
              </h2>
              <p className="text-sm md:text-base text-white/90">{responsiveBehavior.text}</p>
            </motion.div>
            
            {/* Accessibility */}
            <motion.div
              custom={5}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center">
                {accessibility.icon}
                {accessibility.title}
              </h2>
              <p className="text-sm md:text-base text-white/90">{accessibility.text}</p>
            </motion.div>
            
            {/* Brand Consistency */}
            <motion.div
              custom={6}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300"
            >
              <h2 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center">
                {brandConsistency.icon}
                {brandConsistency.title}
              </h2>
              <p className="text-sm md:text-base text-white/90">{brandConsistency.text}</p>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  )
} 