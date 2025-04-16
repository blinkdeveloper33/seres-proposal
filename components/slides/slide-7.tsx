"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Languages, LayoutGrid, SearchCode, Target, CalendarDays, BarChartBig, ShieldCheck, Accessibility, Smartphone, Expand } from "lucide-react"
import { Merriweather } from 'next/font/google'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide7Props {
  direction: number
}

export default function Slide7({ direction }: Slide7Props) {
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
        delay: isMobile ? 0.2 + (custom * 0.06) : 0.3 + (custom * 0.08) // Faster stagger for more items
      }
    })
  }

  // List item animation variants
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 + custom * 0.05, duration: 0.3 }
    })
  }

  // Content data for Slide 7
  const functionalities = [
    {
      title: "Multilingual Engine",
      icon: <Languages className="h-5 w-5 flex-shrink-0" />,
      points: [
        "Automatic language detection and manual toggle.",
        "Independent keyword sets and hreflang tags for SEO dominance."
      ]
    },
    {
      title: "Property Management Module",
      icon: <LayoutGrid className="h-5 w-5 flex-shrink-0" />,
      points: [
        "CRUD interface for listings, bulk image upload with compression, geo-tagging, and amenity check-boxes.",
        "Saved-search alerts and \"favourites\" for registered users."
      ]
    },
    {
      title: "Advanced Search & Filters",
      icon: <SearchCode className="h-5 w-5 flex-shrink-0" />,
      points: [
        "Price sliders, neighbourhood drop-downs, bedroom/bathroom counts, and construction status.",
        "Instant results via client-side rendering; no page reloads."
      ]
    },
    {
      title: "Lead-Capture & CRM Integration",
      icon: <Target className="h-5 w-5 flex-shrink-0" />,
      points: [
        "One-click WhatsApp chat and embedded web-to-lead forms.",
        "Auto-assign rules push prospects into HubSpot (or chosen CRM) with source, listing ID, and language context."
      ]
    },
    {
      title: "Booking & Calendar Sync",
      icon: <CalendarDays className="h-5 w-5 flex-shrink-0" />,
      points: [
        "Prospects schedule virtual or in-person tours; confirmations sync to Google Calendar and send email/SMS reminders."
      ]
    },
    {
      title: "Analytics & Reporting",
      icon: <BarChartBig className="h-5 w-5 flex-shrink-0" />,
      points: [
        "GA4 + custom events for listing views, CTA clicks, and form submissions.",
        "Weekly dashboard email summarising traffic, leads, and top-performing properties."
      ]
    },
    {
      title: "Security & Compliance",
      icon: <ShieldCheck className="h-5 w-5 flex-shrink-0" />,
      points: [
        "SSL/TLS, daily automated backups, role-based access control, GDPR/Ley 6534 data-privacy compliance, and Web Application Firewall."
      ]
    },
    {
      title: "Performance & Accessibility",
      icon: <Accessibility className="h-5 w-5 flex-shrink-0" />,
      points: [
        "Core Web Vitals targets: LCP < 2s, CLS < 0.1.",
        "WCAG 2.1 AA: alt-text, keyboard navigation, high-contrast modes."
      ]
    },
    {
      title: "Responsive Design System",
      icon: <Smartphone className="h-5 w-5 flex-shrink-0" />,
      points: [
        "Mobile-first grids, reusable components, and dark-mode readiness ensure consistent UX on phones, tablets, and desktops."
      ]
    },
    {
      title: "Scalability Hooks",
      icon: <Expand className="h-5 w-5 flex-shrink-0" />,
      points: [
        "API endpoints for future mobile app or partner portal.",
        "Micro-service-friendly architecture (Next.js frontend, headless CMS, REST/GraphQL layer)."
      ]
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="https://wbqhilueipkcyowudqzz.supabase.co/storage/v1/object/public/seres//pawel-czerwinski-SD1VYMwGICo-unsplash.jpg"
          alt="Core Functionalities Background"
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
          Core Functionalities
        </motion.h1>

        {/* Content Grid - Adapt columns based on screen size, aiming for 2 columns on medium/large */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          
          {functionalities.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300 flex flex-col"
            >
              <h2 className="text-base md:text-lg font-semibold text-white mb-2 flex items-center">
                <span className="mr-3 p-2 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-lg transform hover:scale-105 transition-transform duration-200 border border-black/20 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] flex-shrink-0">
                  {item.icon}
                </span>
                <span className="text-amber-400 mr-2 font-bold">{index + 1}.</span>
                {item.title}
              </h2>
              <ul className="space-y-1 list-none ml-1 md:ml-2 flex-grow mt-1">
                {item.points.map((point, pointIndex) => (
                  <motion.li 
                    key={pointIndex} 
                    custom={pointIndex} 
                    variants={listItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-start"
                  >
                    <span className="inline-block h-1.5 w-1.5 bg-amber-400 rounded-full mr-2 mt-[6px] flex-shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"></span>
                    <span className="text-xs md:text-sm text-white/80">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.div>
  )
} 