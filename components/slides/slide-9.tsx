"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Laptop, Database, Layers, Server, Key, Share2, ShieldCheck, Activity, GitBranch, Scaling, ArrowRight } from "lucide-react"
import { Merriweather } from 'next/font/google'
import ExitButton from '@/components/ui/exit-button'

// Initialize the Merriweather font
const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

interface Slide9Props {
  direction: number
  onExit?: () => void
}

export default function Slide9({ direction, onExit }: Slide9Props) {
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
        delay: isMobile ? 0.2 + (custom * 0.08) : 0.3 + (custom * 0.1) // Faster stagger
      }
    })
  }
  
  // List item animation variants
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + custom * 0.06, duration: 0.3 } // Faster stagger
    })
  }

  // Content data for Slide 9
  const techStack = [
    {
      title: "Frontend Stack",
      icon: <Laptop className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "Next.js with React, server-side rendering and incremental static regeneration for SEO; Tailwind utility CSS; TypeScript for type-safety.",
    },
    {
      title: "Headless CMS",
      icon: <Database className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "Strapi (self-hosted) or Sanity (SaaS) powering multilingual content, role-based permissions, and webhooks for instant cache revalidation.",
    },
    {
      title: "API Layer",
      icon: <Layers className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "GraphQL gateway exposing listings, media, and lead-capture endpoints; REST fall-back for third-party integrations.",
    },
    {
      title: "Data Storage",
      icon: <Server className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "PostgreSQL on AWS RDS for structured data; Amazon S3 for images and documents; CloudFront CDN for global asset delivery.",
    },
    {
      title: "Authentication & Roles",
      icon: <Key className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "JSON Web Tokens with refresh flow, RBAC: Admin, Editor, Sales Agent, Read-Only. Single Sign-On ready (OAuth 2.0).",
    },
    {
      title: "Third-Party Integrations",
      icon: <Share2 className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      items: [
        "HubSpot CRM for lead orchestration.",
        "WhatsApp Business API for instant chat.",
        "Google Calendar API for tour bookings.",
        "GA4 + server-side GTM for analytics.",
      ],
    },
    {
      title: "Security Posture",
      icon: <ShieldCheck className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "TLS 1.3 everywhere, AWS WAF shielding, daily encrypted backups, IAM least-privilege, GDPR / Ley 6534 compliance, automated dependency scanning.",
    },
    {
      title: "Observability",
      icon: <Activity className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "CloudWatch logs, Datadog APM, uptime alerts to Slack; monthly performance reports.",
    },
    {
      title: "Deployment & CI/CD",
      icon: <GitBranch className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "GitHub Actions → Vercel (or AWS Amplify) with blue-green deployments; rollbacks < 60 seconds.",
    },
    {
      title: "Scalability & Future-Proofing",
      icon: <Scaling className="mr-2 text-amber-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] transform hover:scale-105 transition-transform duration-200" />,
      text: "Micro-service-ready; API rate-limit tiers; plug-in architecture for 3-D tours, AR overlays, and mobile-app API without re-platforming.",
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
          alt="Technical Architecture Background"
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
          Technical Architecture
        </motion.h1>

        {/* Content Grid - 3 Columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/15 transition-colors duration-300 flex flex-col"
            >
              <h2 className="text-base md:text-lg font-semibold text-white mb-2 flex items-center">
                {item.icon}
                {item.title}
              </h2>
              {item.text && (
                 <p className="text-xs md:text-sm text-white/80 flex-grow">{item.text}</p>
              )}
              {item.items && (
                <ul className="space-y-1 list-none mt-1 flex-grow">
                  {item.items.map((subItem, subIndex) => (
                    <motion.li 
                      key={subIndex} 
                      custom={subIndex} 
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-start"
                    >
                      <span className="inline-block h-1.5 w-1.5 bg-amber-400 rounded-full mr-2 mt-[5px] flex-shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"></span>
                      <span className="text-xs md:text-sm text-white/80">{subItem}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

        </div>
        
         {/* Final Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + techStack.length * 0.05, duration: 0.6 }} // Delay based on number of cards
          className="mt-6 bg-gradient-to-r from-amber-500/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/30 rounded-lg p-4"
        >
          <p className="text-xs md:text-sm text-white/90 italic text-center">
            This modern, scalable stack ensures performance, security, and future adaptability for SERES' digital ambitions.
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
          slide-9.tsx
        </p>
      </motion.div>
    </motion.div>
  )
} 