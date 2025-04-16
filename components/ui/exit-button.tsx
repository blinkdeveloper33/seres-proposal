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
      className="absolute right-4 top-4 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 border-2 border-white/30"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <X className="h-6 w-6" />
      <span className="sr-only">Exit to first slide</span>
    </motion.button>
  )
} 