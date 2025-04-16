"use client"

import React from 'react'
import { motion } from "framer-motion"
import { X } from "lucide-react"

interface ExitButtonProps {
  onClick: () => void
}

export default function ExitButton({ onClick }: ExitButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute right-3 top-3 md:right-4 md:top-4 z-[100] flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm md:bg-gradient-to-r md:from-amber-500 md:to-yellow-500 text-white shadow-md md:shadow-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 border border-white/20 md:border-2 md:border-white/30 touch-manipulation"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <X className="h-4 w-4 md:h-5 md:w-5" />
      <span className="sr-only">Exit to first slide</span>
    </motion.button>
  )
} 