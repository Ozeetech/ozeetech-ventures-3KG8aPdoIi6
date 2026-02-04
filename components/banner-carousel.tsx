"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type BannerItem = {
  image: string
  title: string
  description: string
  link: string
  buttonText: string
}

const banners: BannerItem[] = [
  {
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=500&fit=crop&crop=center",
    title: "New iPhone Collection",
    description: "Discover the latest iPhone models with amazing features.",
    link: "/products/smartphones/brands/apple",
    buttonText: "Shop iPhones",
  },
  {
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=500&fit=crop&crop=center",
    title: "Premium Laptops",
    description: "Experience powerful performance with our premium laptops.",
    link: "/products/laptops",
    buttonText: "Shop Laptops",
  },
  {
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=1200&h=500&fit=crop&crop=center",
    title: "Wireless Audio",
    description: "Immerse yourself in superior sound with our wireless audio collection.",
    link: "/products/audio",
    buttonText: "Shop Audio",
  },
]

export function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1))
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <div className="relative w-full h-full">
            <Image
              src={banner.image || "/placeholder.svg"}
              alt={banner.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-md text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{banner.title}</h2>
                <p className="mb-4 text-white/90">{banner.description}</p>
                <Button asChild className="bg-white text-black hover:bg-white/90">
                  <Link href={banner.link}>{banner.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 text-white border-white/30 hover:bg-black/40 hover:text-white rounded-full"
        onClick={prevSlide}
        aria-label="Previous banner"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 text-white border-white/30 hover:bg-black/40 hover:text-white rounded-full"
        onClick={nextSlide}
        aria-label="Next banner"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setCurrentIndex(index)
                setTimeout(() => setIsTransitioning(false), 500)
              }
            }}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
