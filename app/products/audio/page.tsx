"use client"

import { useState, useEffect } from "react"
import { Filter, SlidersHorizontal, X, Grid3X3, List, Shield, Truck, Headphones } from 'lucide-react'
import { ProductCard } from "@/components/product-card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext
} from "@/components/ui/pagination"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Product = {
  id: string
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  badge?: string | null
  specs: string[]
  href: string
  brand: string
  type: string
}

export default function AudioPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([50000, 1000000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const productsPerPage = 12

  useEffect(() => {
    const generateProducts = () => {
      const audioProducts: Product[] = [
        // Premium Headphones
        {
          id: "sony-wh-1000xm5",
          name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
          price: 450000,
          originalPrice: 520000,
          rating: 4.8,
          reviews: 892,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Bestseller",
          brand: "Sony",
          type: "Headphones",
          specs: [
            "Industry-leading noise cancellation",
            "30-hour battery life",
            "Multipoint connection support",
            "Touch sensor controls",
            "Multipoint Bluetooth pairing",
            "Quick charge (10 mins = 5 hrs)",
            "Call quality enhancement",
          ],
          href: "/products/audio/sony-wh-1000xm5",
        },
        {
          id: "bose-qc45",
          name: "Bose QuietComfort 45 Noise Canceling Headphones",
          price: 520000,
          rating: 4.7,
          reviews: 634,
          image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Premium",
          brand: "Bose",
          type: "Headphones",
          specs: [
            "Balanced noise cancellation",
            "24-hour battery life",
            "Foldable design with carrying case",
            "Bluetooth 5.3 connectivity",
            "Comfortable over-ear design",
            "Easy-to-use touch controls",
            "Works with all Bluetooth devices",
          ],
          href: "/products/audio/bose-qc45",
        },
        {
          id: "airpods-pro-gen2",
          name: "Apple AirPods Pro 2nd Generation",
          price: 320000,
          originalPrice: 380000,
          rating: 4.9,
          reviews: 1156,
          image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Apple Exclusive",
          brand: "Apple",
          type: "Earbuds",
          specs: [
            "Active Noise Cancellation",
            "Adaptive Audio technology",
            "6-hour battery per charge",
            "30-hour total battery life",
            "MagSafe charging case",
            "Transparency mode",
            "Spatial audio with dynamic head tracking",
          ],
          href: "/products/audio/airpods-pro-gen2",
        },
        {
          id: "samsung-galaxy-buds3",
          name: "Samsung Galaxy Buds3 Pro",
          price: 280000,
          rating: 4.6,
          reviews: 523,
          image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Samsung",
          brand: "Samsung",
          type: "Earbuds",
          specs: [
            "Intelligent Active Noise Cancellation",
            "360-degree surround sound",
            "8-hour battery life per charge",
            "26-hour total battery life",
            "IPX7 water resistance",
            "Wireless charging case",
            "Touch and voice controls",
          ],
          href: "/products/audio/samsung-galaxy-buds3",
        },
        {
          id: "jbl-tour-pro",
          name: "JBL Tour Pro 2 True Wireless Earbuds",
          price: 250000,
          originalPrice: 300000,
          rating: 4.5,
          reviews: 387,
          image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "JBL",
          brand: "JBL",
          type: "Earbuds",
          specs: [
            "Smart Ambient technology",
            "10-hour battery life per charge",
            "Total 80 hours with case",
            "Voice control compatible",
            "Water and dust resistant",
            "Adaptive noise cancellation",
            "Multi-device connectivity",
          ],
          href: "/products/audio/jbl-tour-pro",
        },
        {
          id: "beats-studio3",
          name: "Beats Studio3 Wireless Over-Ear Headphones",
          price: 380000,
          rating: 4.4,
          reviews: 267,
          image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Beats",
          brand: "Beats",
          type: "Headphones",
          specs: [
            "Pure Adaptive Noise Canceling",
            "40-hour battery life",
            "Fast Fuel charging",
            "Apple W1 chip for iOS connectivity",
            "Comfortable design for all-day wear",
            "Premium build quality",
            "Compatible with all Bluetooth devices",
          ],
          href: "/products/audio/beats-studio3",
        },

        // Smart Speakers
        {
          id: "homepod-mini",
          name: "Apple HomePod mini Smart Speaker",
          price: 150000,
          rating: 4.5,
          reviews: 445,
          image: "https://images.unsplash.com/photo-1495481852822-97d6c8b8b1e0?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Smart",
          brand: "Apple",
          type: "Smart Speaker",
          specs: [
            "Siri voice assistant",
            "360-degree audio",
            "Room awareness feature",
            "HomeKit hub compatibility",
            "Temperature and humidity sensor",
            "Automatic handoff",
            "Thread connectivity support",
          ],
          href: "/products/audio/homepod-mini",
        },
        {
          id: "google-home-mini",
          name: "Google Home Mini Smart Speaker",
          price: 120000,
          originalPrice: 150000,
          rating: 4.3,
          reviews: 623,
          image: "https://images.unsplash.com/photo-1495481852822-97d6c8b8b1e0?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Google",
          brand: "Google",
          type: "Smart Speaker",
          specs: [
            "Google Assistant integration",
            "Compact smart home control",
            "Multiple color options",
            "WiFi and Bluetooth connectivity",
            "Adjustable volume control",
            "Privacy controls",
            "Compatible with thousands of devices",
          ],
          href: "/products/audio/google-home-mini",
        },
        {
          id: "amazon-echo-dot",
          name: "Amazon Echo Dot 4th Generation",
          price: 100000,
          rating: 4.2,
          reviews: 756,
          image: "https://images.unsplash.com/photo-1495481852822-97d6c8b8b1e0?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Amazon",
          brand: "Amazon",
          type: "Smart Speaker",
          specs: [
            "Alexa voice assistant",
            "Connected home control",
            "Music streaming integration",
            "Drop-in calling feature",
            "Improved audio quality",
            "LED display for time",
            "Compatible with smart home devices",
          ],
          href: "/products/audio/amazon-echo-dot",
        },

        // Portable Speakers
        {
          id: "jbl-charge-5",
          name: "JBL Charge 5 Portable Waterproof Speaker",
          price: 180000,
          rating: 4.6,
          reviews: 534,
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Portable",
          brand: "JBL",
          type: "Portable Speaker",
          specs: [
            "20-hour battery life",
            "IP67 waterproof rating",
            "PartyBoost wireless pairing",
            "Powerful JBL Original Sound",
            "PowerBank feature to charge devices",
            "Compact and durable design",
            "Bluetooth 5.1 connectivity",
          ],
          href: "/products/audio/jbl-charge-5",
        },
        {
          id: "beats-pill",
          name: "Beats Pill Portable Speaker",
          price: 220000,
          rating: 4.4,
          reviews: 298,
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Beats",
          brand: "Beats",
          type: "Portable Speaker",
          specs: [
            "Legendary Beats sound quality",
            "15-hour battery life",
            "Portable and lightweight design",
            "Apple H1 chip for faster pairing",
            "IPX4 water resistance",
            "Premium build quality",
            "Multi-device connectivity",
          ],
          href: "/products/audio/beats-pill",
        },
        {
          id: "sony-ult-power-sound",
          name: "Sony ULT Power Sound Portable Speaker",
          price: 200000,
          originalPrice: 250000,
          rating: 4.5,
          reviews: 412,
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
          category: "Audio",
          badge: "Sony",
          brand: "Sony",
          type: "Portable Speaker",
          specs: [
            "ULT Power Sound technology",
            "24-hour battery life",
            "IP67 waterproof design",
            "Multipoint Bluetooth connection",
            "Quick charge capability",
            "Durable and compact design",
            "Bass-heavy sound signature",
          ],
          href: "/products/audio/sony-ult-power-sound",
        },
      ]

      return audioProducts
    }

    const generatedProducts = generateProducts()
    setProducts(generatedProducts)
    setFilteredProducts(generatedProducts)
    setLoading(false)
  }, [])

  useEffect(() => {
    let filtered = [...products]

    if (activeFilter !== "all") {
      filtered = filtered.filter((product) => product.brand.toLowerCase() === activeFilter.toLowerCase())
    }

    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand))
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter((product) => selectedTypes.includes(product.type))
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [products, activeFilter, priceRange, selectedBrands, selectedTypes])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const toggleType = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const resetFilters = () => {
    setPriceRange([50000, 1000000])
    setSelectedBrands([])
    setSelectedTypes([])
    setActiveFilter("all")
  }

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString("en-NG")}`
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex h-96 items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Premium Audio & Sound Systems
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Discover our premium audio collection including wireless headphones, earbuds, smart speakers, and portable speakers with exceptional sound quality.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-700">Authentic Products</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Truck className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Same Day Delivery</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
            <Headphones className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">30-Day Support</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter} className="mb-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
          <TabsTrigger value="all" className="text-sm">All Audio</TabsTrigger>
          <TabsTrigger value="sony" className="text-sm">Sony</TabsTrigger>
          <TabsTrigger value="apple" className="text-sm">Apple</TabsTrigger>
          <TabsTrigger value="bose" className="text-sm">Bose</TabsTrigger>
          <TabsTrigger value="jbl" className="text-sm">JBL</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:hidden">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center bg-transparent"
            onClick={() => setFiltersOpen(!filtersOpen)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            {filtersOpen ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        <div className={`w-full lg:w-1/4 ${filtersOpen ? "block" : "hidden lg:block"}`}>
          <Card className="p-6 sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Reset
              </Button>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={priceRange}
                min={50000}
                max={1000000}
                step={50000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-3"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{formatPrice(priceRange[0])}</span>
                <span>{formatPrice(priceRange[1])}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Brand</h3>
              <div className="space-y-2">
                {["Sony", "Apple", "Bose", "JBL", "Beats", "Samsung", "Google", "Amazon"].map((brand) => (
                  <div key={brand} className="flex items-center">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <label htmlFor={`brand-${brand}`} className="ml-2 text-sm cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Type</h3>
              <div className="space-y-2">
                {["Headphones", "Earbuds", "Smart Speaker", "Portable Speaker"].map((type) => (
                  <div key={type} className="flex items-center">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={() => toggleType(type)}
                    />
                    <label htmlFor={`type-${type}`} className="ml-2 text-sm cursor-pointer">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:hidden">
              <Button variant="outline" className="w-full bg-transparent" onClick={() => setFiltersOpen(false)}>
                <X className="mr-2 h-4 w-4" />
                Close
              </Button>
            </div>
          </Card>
        </div>

        <div className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {currentProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No audio products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          ) : (
            <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} showDiscount={true} viewMode={viewMode} />
              ))}
            </div>
          )}

          {filteredProducts.length > productsPerPage && (
            <div className="mt-12">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
