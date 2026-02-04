"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Latest iPhone 15 Pro Max",
    subtitle: "Experience the power of A17 Pro chip",
    description: "Now available with titanium design and advanced camera system",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&h=600&fit=crop",
    cta: "Shop Now",
    price: "From ₦1,850,000",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    subtitle: "AI-powered photography redefined",
    description: "Capture stunning photos with the new 200MP camera and S Pen precision",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=1200&h=600&fit=crop",
    cta: "Explore",
    price: "From ₦1,750,000",
  },
  {
    id: 3,
    title: "MacBook Pro M3 Max",
    subtitle: "Supercharged for pros",
    description: "Up to 22 hours of battery life with the most advanced chip ever built for a personal computer",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=600&fit=crop",
    cta: "Learn More",
    price: "From ₦3,250,000",
  },
  {
    id: 4,
    title: "Premium Audio Collection",
    subtitle: "Immersive sound experience",
    description: "Discover our range of premium headphones and speakers from top brands",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop",
    cta: "Shop Audio",
    price: "From ₦420,000",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10 seconds
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg bg-gray-100">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-2 opacity-90">{slide.subtitle}</p>
                <p className="text-sm md:text-base lg:text-lg mb-6 opacity-80 max-w-2xl mx-auto">{slide.description}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                    {slide.cta}
                  </Button>
                  <span className="text-lg md:text-xl font-semibold">{slide.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

// Default export for backward compatibility
export default HeroSlideshow
