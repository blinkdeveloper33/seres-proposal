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
      className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white/70 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <X className="h-5 w-5" />
      <span className="sr-only">Exit to first slide</span>
    </motion.button>
  )
} 