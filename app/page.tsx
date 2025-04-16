"use client"

import React, { useState, useEffect, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Slide1 from "@/components/slides/slide-1"
import Slide2 from "@/components/slides/slide-2"
import Slide3 from "@/components/slides/slide-3"
import Slide4 from "@/components/slides/slide-4"
import Slide5 from "@/components/slides/slide-5"
import Slide6 from "@/components/slides/slide-6"
import Slide7 from "@/components/slides/slide-7"
import Slide8 from "@/components/slides/slide-8"
import Slide9 from "@/components/slides/slide-9"
import Slide10 from "@/components/slides/slide-10"
import Slide11 from "@/components/slides/slide-11"
import Slide12 from "@/components/slides/slide-12"
import Slide13 from "@/components/slides/slide-13"
import Slide14 from "@/components/slides/slide-14"
import Slide15 from "@/components/slides/slide-15"

// Import landing website slides
import LandingSlide1 from "@/components/landing-slides/landing-slide-1"
import LandingSlide2 from "@/components/landing-slides/landing-slide-2"
import LandingSlide3 from "@/components/landing-slides/landing-slide-3"
import LandingSlide4 from "@/components/landing-slides/landing-slide-4"
import LandingSlide5 from "@/components/landing-slides/landing-slide-5"
import LandingSlide6 from "@/components/landing-slides/landing-slide-6"
import LandingSlide7 from "@/components/landing-slides/landing-slide-7"
import LandingSlide8 from "@/components/landing-slides/landing-slide-8"
import LandingSlide9 from "@/components/landing-slides/landing-slide-9"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState(0)
  const [proposalType, setProposalType] = useState<'none' | 'full' | 'landing'>('none')
  const totalFullSlides = 15
  const totalLandingSlides = 9
  const [imagesLoaded, setImagesLoaded] = useState(false)
  
  // Touch swipe handling
  const touchStartXRef = useRef<number | null>(null)
  const touchEndXRef = useRef<number | null>(null)
  const minSwipeDistance = 50 // Minimum swipe distance in pixels
  const slideLockTimer = useRef<NodeJS.Timeout | null>(null)
  const [swipeLocked, setSwipeLocked] = useState(false)

  // Get total slides based on proposal type
  const totalSlides = proposalType === 'full' ? totalFullSlides : 
                       proposalType === 'landing' ? totalLandingSlides : 0

  // Preload images to ensure they're available for the slides
  useEffect(() => {
    const imageUrls = ["/images/background.jpg", "/images/shared-background.jpg", "/images/logo.png"]

    let loadedCount = 0
    const totalImages = imageUrls.length

    imageUrls.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`)
        loadedCount++
        if (loadedCount === totalImages) {
          setImagesLoaded(true)
        }
      }
    })
  }, [])

  const nextSlide = () => {
    if (swipeLocked) return
    
    setSlideDirection(1)
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev))
    
    // Lock swipe temporarily to prevent multiple swipes
    setSwipeLocked(true)
    if (slideLockTimer.current) clearTimeout(slideLockTimer.current)
    slideLockTimer.current = setTimeout(() => setSwipeLocked(false), 700)
  }

  const prevSlide = () => {
    if (swipeLocked) return
    
    setSlideDirection(-1)
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
    
    // Lock swipe temporarily to prevent multiple swipes
    setSwipeLocked(true)
    if (slideLockTimer.current) clearTimeout(slideLockTimer.current)
    slideLockTimer.current = setTimeout(() => setSwipeLocked(false), 700)
  }

  const goToSlide = (index: number) => {
    if (swipeLocked) return
    
    setSlideDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    
    // Lock swipe temporarily to prevent multiple swipes
    setSwipeLocked(true)
    if (slideLockTimer.current) clearTimeout(slideLockTimer.current)
    slideLockTimer.current = setTimeout(() => setSwipeLocked(false), 700)
  }

  // New function to return to first slide
  const goToFirstSlide = () => {
    setSlideDirection(-1)
    setCurrentSlide(1) // Go to the first slide of the selected presentation type
  }
  
  // New function to return to the main slide (Slide1)
  const goToMainSlide = () => {
    setSlideDirection(-1)
    setProposalType('none')
    setCurrentSlide(0) // Go back to the main slide
  }

  // Handle selection from slide 1
  const handleExplore = (version: string) => {
    if (version === 'full') {
      setProposalType('full')
      setCurrentSlide(1) // Go to slide 2 of full presentation
    } else if (version === 'landing') {
      setProposalType('landing')
      setCurrentSlide(1) // Go to slide 2 of landing presentation
    }
    setSlideDirection(1)
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return
    
    const distance = touchStartXRef.current - touchEndXRef.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe && currentSlide < totalSlides - 1 && proposalType !== 'none') {
      nextSlide()
    } else if (isRightSwipe && currentSlide > 0) {
      prevSlide()
    }
    
    // Reset values
    touchStartXRef.current = null
    touchEndXRef.current = null
  }

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      }
    }

    // Listen for custom slide navigation event
    const handleSlideNavigation = (e: any) => {
      if (e.detail && typeof e.detail.index === 'number') {
        goToSlide(e.detail.index);
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("slideNavigation", handleSlideNavigation as EventListener)
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("slideNavigation", handleSlideNavigation as EventListener)
    }
  }, [currentSlide, totalSlides, proposalType, swipeLocked])

  // Clean up any timers
  useEffect(() => {
    return () => {
      if (slideLockTimer.current) {
        clearTimeout(slideLockTimer.current)
      }
    }
  }, [])

  if (!imagesLoaded) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className="text-white">Loading presentation...</div>
      </div>
    )
  }

  return (
    <main 
      className="relative h-screen w-screen overflow-hidden bg-black touch-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={slideDirection}>
        {currentSlide === 0 && (
          <Slide1 key="slide-1" direction={slideDirection} onExplore={handleExplore} />
        )}
        
        {/* Full Digital Platform Slides */}
        {proposalType === 'full' && (
          <>
            {currentSlide === 1 && <Slide2 key="slide-2" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 2 && <Slide3 key="slide-3" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 3 && <Slide4 key="slide-4" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 4 && <Slide5 key="slide-5" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 5 && <Slide6 key="slide-6" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 6 && <Slide7 key="slide-7" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 7 && <Slide8 key="slide-8" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 8 && <Slide9 key="slide-9" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 9 && <Slide10 key="slide-10" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 10 && <Slide11 key="slide-11" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 11 && <Slide12 key="slide-12" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 12 && <Slide13 key="slide-13" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 13 && <Slide14 key="slide-14" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 14 && <Slide15 key="slide-15" direction={slideDirection} onExit={goToFirstSlide} />}
          </>
        )}
        
        {/* Landing Website Slides */}
        {proposalType === 'landing' && (
          <>
            {currentSlide === 1 && <LandingSlide1 key="landing-slide-1" direction={slideDirection} onExit={goToMainSlide} />}
            {currentSlide === 2 && <LandingSlide2 key="landing-slide-2" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 3 && <LandingSlide3 key="landing-slide-3" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 4 && <LandingSlide4 key="landing-slide-4" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 5 && <LandingSlide5 key="landing-slide-5" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 6 && <LandingSlide6 key="landing-slide-6" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 7 && <LandingSlide7 key="landing-slide-7" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 8 && <LandingSlide8 key="landing-slide-8" direction={slideDirection} onExit={goToFirstSlide} />}
            {currentSlide === 9 && <LandingSlide9 key="landing-slide-9" direction={slideDirection} onExit={goToFirstSlide} />}
          </>
        )}
      </AnimatePresence>

      {/* Mobile swipe indicator - only shown briefly when the presentation starts */}
      {proposalType !== 'none' && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center md:hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 text-xs opacity-0 animate-[fadeInOut_3s_ease-in-out_1]">
            Swipe to navigate
          </div>
        </div>
      )}

      {/* Only show navigation after a proposal type is selected and not on the first slide */}
      {proposalType !== 'none' && currentSlide !== 1 && (
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 z-50 flex justify-center gap-3 md:gap-6 px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0 || swipeLocked}
            className="group h-7 w-7 md:h-10 md:w-10 rounded-full border border-white/10 bg-black/20 p-0 text-white/70 shadow-md md:shadow-lg transition-all duration-300 hover:bg-white/10 hover:text-white disabled:opacity-30 backdrop-blur-md touch-manipulation"
          >
            <ChevronLeft className="h-3.5 w-3.5 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
            <span className="sr-only">Previous slide</span>
          </Button>
          
          <div className="flex items-center gap-1.5 md:gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
                className={`relative h-1.5 w-1.5 md:h-2.5 md:w-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                  currentSlide === index 
                    ? "bg-white shadow-[0_0_5px_rgba(255,255,255,0.7)]" 
                    : "bg-white/20 hover:bg-white/50"
                }`}
              >
                {currentSlide === index && (
                  <span className="absolute -inset-1 animate-ping rounded-full bg-white/40 opacity-75 hidden md:block"></span>
                )}
              </button>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1 || swipeLocked}
            className="group h-7 w-7 md:h-10 md:w-10 rounded-full border border-white/10 bg-black/20 p-0 text-white/70 shadow-md md:shadow-lg transition-all duration-300 hover:bg-white/10 hover:text-white disabled:opacity-30 backdrop-blur-md touch-manipulation"
          >
            <ChevronRight className="h-3.5 w-3.5 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      )}
    </main>
  )
}
