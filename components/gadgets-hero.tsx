"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const gadgetCategories = [
  {
    id: 1,
    name: "Smartphones",
    description: "Latest iPhone, Samsung, and Android devices",
    image: "https://via.placeholder.com/400x300/1f2937/ffffff?text=Smartphones",
    href: "/products/smartphones",
    featured: ["iPhone 15 Pro", "Samsung S24 Ultra", "Google Pixel 8"],
  },
  {
    id: 2,
    name: "Laptops & Computers",
    description: "MacBooks, Windows laptops, and desktop computers",
    image: "https://via.placeholder.com/400x300/374151/ffffff?text=Laptops",
    href: "/products/laptops",
    featured: ["MacBook Pro M3", "Dell XPS", "HP Spectre"],
  },
  {
    id: 3,
    name: "Audio Devices",
    description: "Headphones, earbuds, and premium speakers",
    image: "https://via.placeholder.com/400x300/7c3aed/ffffff?text=Audio",
    href: "/products/audio",
    featured: ["AirPods Pro", "Sony WH-1000XM5", "Bose QuietComfort"],
  },
  {
    id: 4,
    name: "Gaming Gear",
    description: "Consoles, controllers, and gaming accessories",
    image: "https://via.placeholder.com/400x300/dc2626/ffffff?text=Gaming",
    href: "/products/gaming",
    featured: ["PlayStation 5", "Xbox Series X", "Nintendo Switch"],
  },
  {
    id: 5,
    name: "Smart Watches",
    description: "Apple Watch, Samsung Galaxy Watch, and fitness trackers",
    image: "https://via.placeholder.com/400x300/059669/ffffff?text=Wearables",
    href: "/products/wearables",
    featured: ["Apple Watch Ultra", "Galaxy Watch 6", "Fitbit Sense"],
  },
  {
    id: 6,
    name: "Tablets & iPads",
    description: "iPad Pro, Samsung tablets, and Android tablets",
    image: "https://via.placeholder.com/400x300/ea580c/ffffff?text=Tablets",
    href: "/products/tablets",
    featured: ["iPad Pro M2", "Samsung Tab S9", "Surface Pro"],
  },
  {
    id: 7,
    name: "Cameras",
    description: "DSLR, mirrorless, and action cameras",
    image: "https://via.placeholder.com/400x300/0891b2/ffffff?text=Cameras",
    href: "/products/cameras",
    featured: ["Canon EOS R5", "Sony A7 IV", "GoPro Hero 12"],
  },
  {
    id: 8,
    name: "Accessories",
    description: "Chargers, cases, cables, and tech accessories",
    image: "https://via.placeholder.com/400x300/7c2d12/ffffff?text=Accessories",
    href: "/products/accessories",
    featured: ["MagSafe Charger", "USB-C Hubs", "Wireless Chargers"],
  },
]

export default function GadgetsHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(gadgetCategories.length / 4))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Math.ceil(gadgetCategories.length / 4)) % Math.ceil(gadgetCategories.length / 4),
    )
    setIsAutoPlaying(false)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(gadgetCategories.length / 4))
    setIsAutoPlaying(false)
  }

  const getVisibleCategories = () => {
    const itemsPerSlide = 4
    const startIndex = currentSlide * itemsPerSlide
    return gadgetCategories.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Explore All Gadgets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the latest technology from smartphones to smart homes. Premium gadgets with authentic warranty and
            nationwide delivery across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800" asChild>
              <Link href="/products">
                Shop All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/deals">View Special Deals</Link>
            </Button>
          </div>
        </div>

        {/* Gadgets Showcase */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            aria-label="Previous gadgets"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
            aria-label="Next gadgets"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Gadgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
            {getVisibleCategories().map((category, index) => (
              <Link
                key={category.id}
                href={category.href}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{category.description}</p>

                  {/* Featured Items */}
                  <div className="space-y-1 mb-4">
                    {category.featured.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="text-xs text-gray-500 flex items-center">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                    Explore Collection
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-colors duration-300" />
              </Link>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(gadgetCategories.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Premium Products</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Top Brands</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Customer Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-gray-900">36 States</div>
            <div className="text-sm text-gray-600">Nationwide Delivery</div>
          </div>
        </div>
      </div>
    </section>
  )
}
