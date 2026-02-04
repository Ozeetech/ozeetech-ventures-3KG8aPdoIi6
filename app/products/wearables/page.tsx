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

export default function WearablesPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([100000, 1500000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const productsPerPage = 12

  useEffect(() => {
    const generateProducts = () => {
      const wearables: Product[] = [
        // Apple Watches
        {
          id: "apple-watch-ultra-2",
          name: "Apple Watch Ultra 2 49mm Titanium",
          price: 1250000,
          rating: 4.9,
          reviews: 445,
          image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Ultra",
          brand: "Apple",
          type: "Smartwatch",
          specs: [
            "49mm titanium case",
            "S9 SiP chip",
            "Always-On Retina display",
            "Double Tap gesture control",
            "36-hour battery life",
            "Water resistant to 100 meters",
            "Action button for quick tasks",
            "Advanced health sensors",
          ],
          href: "/products/wearables/apple-watch-ultra-2",
        },
        {
          id: "apple-watch-series-9",
          name: "Apple Watch Series 9 41mm Silver Aluminum",
          price: 850000,
          originalPrice: 950000,
          rating: 4.8,
          reviews: 623,
          image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Popular",
          brand: "Apple",
          type: "Smartwatch",
          specs: [
            "41mm aluminum case",
            "S9 SiP chip",
            "Retina display with always-on",
            "Double Tap gesture support",
            "18-hour battery life",
            "Water resistant to 50 meters",
            "Fall detection",
            "ECG and blood oxygen",
          ],
          href: "/products/wearables/apple-watch-series-9",
        },
        {
          id: "apple-watch-se-2",
          name: "Apple Watch SE 2nd Generation 40mm",
          price: 450000,
          rating: 4.6,
          reviews: 345,
          image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Affordable",
          brand: "Apple",
          type: "Smartwatch",
          specs: [
            "40mm aluminum case",
            "S8 chip",
            "Retina display",
            "18-hour battery life",
            "Water resistant to 50 meters",
            "Fall detection",
            "Fitness tracking",
            "Sleep tracking",
          ],
          href: "/products/wearables/apple-watch-se-2",
        },

        // Samsung Galaxy Watches
        {
          id: "samsung-galaxy-watch-6-classic",
          name: "Samsung Galaxy Watch 6 Classic 47mm",
          price: 950000,
          rating: 4.7,
          reviews: 234,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Classic",
          brand: "Samsung",
          type: "Smartwatch",
          specs: [
            "47mm stainless steel",
            "Exynos W930 processor",
            "Dynamic AMOLED display",
            "Rotating bezel control",
            "3 days battery life",
            "5ATM water resistance",
            "GPS + Bluetooth",
            "Health sensors suite",
          ],
          href: "/products/wearables/samsung-galaxy-watch-6-classic",
        },
        {
          id: "samsung-galaxy-watch-6",
          name: "Samsung Galaxy Watch 6 40mm Silver",
          price: 750000,
          originalPrice: 850000,
          rating: 4.6,
          reviews: 412,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Value",
          brand: "Samsung",
          type: "Smartwatch",
          specs: [
            "40mm aluminum",
            "Exynos W930 chip",
            "Dynamic AMOLED 2",
            "Touch control",
            "40-hour battery",
            "5ATM water resistance",
            "GPS + Cellular",
            "Advanced fitness tracking",
          ],
          href: "/products/wearables/samsung-galaxy-watch-6",
        },

        // Garmin Smartwatches
        {
          id: "garmin-forerunner-965",
          name: "Garmin Forerunner 965 Black",
          price: 1150000,
          rating: 4.8,
          reviews: 267,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Running",
          brand: "Garmin",
          type: "Smartwatch",
          specs: [
            "AMOLED display",
            "11-day battery life",
            "Multi-band GPS",
            "Running metrics",
            "Training Load balance",
            "5ATM water resistance",
            "Sports tracking",
            "Recovery metrics",
          ],
          href: "/products/wearables/garmin-forerunner-965",
        },
        {
          id: "garmin-fenix-7x",
          name: "Garmin Fenix 7X Titanium",
          price: 1450000,
          rating: 4.9,
          reviews: 189,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Premium",
          brand: "Garmin",
          type: "Smartwatch",
          specs: [
            "AMOLED + E Ink display",
            "21-day battery",
            "Multi-band GNSS",
            "Outdoor navigation",
            "10ATM water resistance",
            "Titanium case",
            "Training",
            "Health monitoring",
          ],
          href: "/products/wearables/garmin-fenix-7x",
        },

        // Fitbit Trackers
        {
          id: "fitbit-charge-6",
          name: "Fitbit Charge 6 Black",
          price: 380000,
          originalPrice: 450000,
          rating: 4.5,
          reviews: 523,
          image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Fitness",
          brand: "Fitbit",
          type: "Fitness Tracker",
          specs: [
            "AMOLED touchscreen",
            "7-day battery",
            "Heart rate & SpO2",
            "Stress management",
            "Sleep tracking",
            "5ATM water resistance",
            "Workout tracking",
            "Google Fit integration",
          ],
          href: "/products/wearables/fitbit-charge-6",
        },
        {
          id: "fitbit-sense-2",
          name: "Fitbit Sense 2 Gold",
          price: 520000,
          rating: 4.6,
          reviews: 345,
          image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Health",
          brand: "Fitbit",
          type: "Smartwatch",
          specs: [
            "AMOLED display",
            "6-day battery",
            "ECG app",
            "EDA sensor",
            "Heart rate",
            "SpO2 monitoring",
            "Sleep tools",
            "Stress management",
          ],
          href: "/products/wearables/fitbit-sense-2",
        },

        // Xiaomi Smart Bands
        {
          id: "xiaomi-band-8",
          name: "Xiaomi Smart Band 8 Black",
          price: 180000,
          originalPrice: 220000,
          rating: 4.4,
          reviews: 834,
          image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Budget",
          brand: "Xiaomi",
          type: "Fitness Tracker",
          specs: [
            "AMOLED display",
            "14-day battery",
            "Heart rate monitor",
            "Blood oxygen",
            "Sleep tracking",
            "5ATM water resistance",
            "150+ sports modes",
            "Stress monitoring",
          ],
          href: "/products/wearables/xiaomi-band-8",
        },
        {
          id: "xiaomi-watch-s1",
          name: "Xiaomi Watch S1 Active Black",
          price: 450000,
          rating: 4.5,
          reviews: 278,
          image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Active",
          brand: "Xiaomi",
          type: "Smartwatch",
          specs: [
            "AMOLED display",
            "12-day battery",
            "GPS + Bluetooth",
            "Heart rate",
            "SpO2 tracking",
            "5ATM water resistance",
            "Sports tracking",
            "Health monitoring",
          ],
          href: "/products/wearables/xiaomi-watch-s1",
        },

        // Samsung Galaxy Buds (Wearables section)
        {
          id: "samsung-galaxy-buds-pro",
          name: "Samsung Galaxy Buds Pro 2 White",
          price: 320000,
          originalPrice: 380000,
          rating: 4.7,
          reviews: 567,
          image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Audio",
          brand: "Samsung",
          type: "Earbuds",
          specs: [
            "Active noise cancellation",
            "360-degree sound",
            "IPX7 water resistance",
            "8-hour battery",
            "Seamless Samsung integration",
            "Touch controls",
            "Ambient mode",
            "Wireless charging case",
          ],
          href: "/products/wearables/samsung-galaxy-buds-pro",
        },

        // Huawei Watch
        {
          id: "huawei-watch-4-pro",
          name: "Huawei Watch 4 Pro Black",
          price: 650000,
          rating: 4.6,
          reviews: 156,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Premium",
          brand: "Huawei",
          type: "Smartwatch",
          specs: [
            "AMOLED display",
            "16-day battery",
            "Titanium case",
            "Multi-band GNSS",
            "Health sensors",
            "5ATM water resistance",
            "HarmonyOS",
            "Offline voice assistant",
          ],
          href: "/products/wearables/huawei-watch-4-pro",
        },

        // OnePlus Watch
        {
          id: "oneplus-watch-2",
          name: "OnePlus Watch 2 Radiant Steel",
          price: 520000,
          rating: 4.5,
          reviews: 234,
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
          category: "Wearables",
          badge: "Performance",
          brand: "OnePlus",
          type: "Smartwatch",
          specs: [
            "Dual display system",
            "100-hour battery",
            "Snapdragon processor",
            "AMOLED + E Ink",
            "GPS + Cellular",
            "Health tracking",
            "Wear OS 4",
            "Premium design",
          ],
          href: "/products/wearables/oneplus-watch-2",
        },
      ]

      return wearables
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
    setPriceRange([100000, 1500000])
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Premium Wearables & Smart Devices
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Discover smartwatches, fitness trackers, and wearable tech with advanced health monitoring and lifestyle integration.
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
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
          <TabsTrigger value="all" className="text-sm">All Wearables</TabsTrigger>
          <TabsTrigger value="apple" className="text-sm">Apple</TabsTrigger>
          <TabsTrigger value="samsung" className="text-sm">Samsung</TabsTrigger>
          <TabsTrigger value="garmin" className="text-sm">Garmin</TabsTrigger>
          <TabsTrigger value="fitbit" className="text-sm">Fitbit</TabsTrigger>
          <TabsTrigger value="xiaomi" className="text-sm">Xiaomi</TabsTrigger>
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
              <Button variant="ghost" size="sm" onClick={resetFilters}>Reset</Button>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={priceRange}
                min={100000}
                max={1500000}
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
                {["Apple", "Samsung", "Garmin", "Fitbit", "Xiaomi", "Huawei", "OnePlus"].map((brand) => (
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
                {["Smartwatch", "Fitness Tracker", "Earbuds"].map((type) => (
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
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} wearables
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
              <h3 className="text-lg font-medium mb-2">No wearables found</h3>
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
