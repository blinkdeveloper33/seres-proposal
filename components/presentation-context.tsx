"use client"

import React from 'react'
import { createContext, useContext, useState, type ReactNode } from "react"

type PresentationContextType = {
  currentSlide: number
  totalSlides: number
  nextSlide: () => void
  prevSlide: () => void
  goToSlide: (index: number) => void
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined)

export function PresentationProvider({ children, totalSlides = 1 }: { children: ReactNode; totalSlides?: number }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
    }
  }

  return (
    <PresentationContext.Provider
      value={{
        currentSlide,
        totalSlides,
        nextSlide,
        prevSlide,
        goToSlide,
      }}
    >
      {children}
    </PresentationContext.Provider>
  )
}

export function usePresentation() {
  const context = useContext(PresentationContext)
  if (context === undefined) {
    throw new Error("usePresentation must be used within a PresentationProvider")
  }
  return context
}
