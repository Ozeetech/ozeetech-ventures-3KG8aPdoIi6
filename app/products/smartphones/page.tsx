"use client"

import { useState, useEffect } from "react"
import { Filter, SlidersHorizontal, X, Grid3X3, List, Shield, Truck, Headphones } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Pagination } from "@/components/ui/pagination"
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
  storage: string
  color: string
  screenSize: string
  inStock: boolean
}

export default function SmartphonesPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([200000, 2500000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedStorage, setSelectedStorage] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const productsPerPage = 12

  useEffect(() => {
    const generateProducts = () => {
      const smartphones: Product[] = [
        // iPhone 15 Series
        {
          id: "iphone-15-pro-max-1tb",
          name: "iPhone 15 Pro Max 1TB Natural Titanium",
          price: 2350000,
          rating: 4.9,
          reviews: 1247,
          image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Pro Max",
          brand: "Apple",
          storage: "1TB",
          color: "Natural Titanium",
          screenSize: "6.7-inch",
          inStock: true,
          specs: [
            "6.7-inch Super Retina XDR display with ProMotion",
            "A17 Pro chip with 6-core GPU",
            "Pro camera system with 48MP Main camera",
            "5x Telephoto camera with 120mm focal length",
            "Action button and USB-C connector",
            "Up to 29 hours video playback",
            "Face ID for secure authentication",
            "iOS 17 with advanced features",
          ],
          href: "/products/smartphones/iphone-15-pro-max",
        },
        {
          id: "iphone-15-pro-512gb",
          name: "iPhone 15 Pro 512GB Blue Titanium",
          price: 2050000,
          originalPrice: 2150000,
          rating: 4.8,
          reviews: 892,
          image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Pro",
          brand: "Apple",
          storage: "512GB",
          color: "Blue Titanium",
          screenSize: "6.1-inch",
          inStock: true,
          specs: [
            "6.1-inch Super Retina XDR display with ProMotion",
            "A17 Pro chip with 6-core GPU",
            "Pro camera system with 48MP Main camera",
            "3x Telephoto camera with 77mm focal length",
            "Action button replaces Ring/Silent switch",
            "Up to 23 hours video playback",
            "Face ID with TrueDepth camera system",
            "iOS 17 with customizable Lock Screen",
          ],
          href: "/products/smartphones/iphone-15-pro",
        },
        {
          id: "iphone-15-plus-256gb",
          name: "iPhone 15 Plus 256GB Pink",
          price: 1650000,
          rating: 4.7,
          reviews: 634,
          image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Plus",
          brand: "Apple",
          storage: "256GB",
          color: "Pink",
          screenSize: "6.7-inch",
          inStock: true,
          specs: [
            "6.7-inch Super Retina XDR display",
            "A16 Bionic chip with 5-core GPU",
            "Advanced dual-camera system with 48MP Main",
            "2x Telephoto with 2x optical zoom",
            "USB-C connector for universal compatibility",
            "Up to 26 hours video playback",
            "Face ID for secure unlock and payments",
            "iOS 17 with Interactive Widgets",
          ],
          href: "/products/smartphones/iphone-15-plus",
        },
        {
          id: "iphone-15-128gb",
          name: "iPhone 15 128GB Blue",
          price: 1350000,
          originalPrice: 1450000,
          rating: 4.6,
          reviews: 1156,
          image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Popular",
          brand: "Apple",
          storage: "128GB",
          color: "Blue",
          screenSize: "6.1-inch",
          inStock: true,
          specs: [
            "6.1-inch Super Retina XDR display",
            "A16 Bionic chip with 5-core GPU",
            "Advanced dual-camera system with 48MP Main",
            "2x Telephoto with 2x optical zoom",
            "USB-C connector replaces Lightning",
            "Up to 20 hours video playback",
            "Face ID with advanced security features",
            "iOS 17 with StandBy mode",
          ],
          href: "/products/smartphones/iphone-15",
        },

        // Samsung Galaxy S24 Series
        {
          id: "samsung-s24-ultra-1tb",
          name: "Samsung Galaxy S24 Ultra 1TB Titanium Black",
          price: 2150000,
          rating: 4.8,
          reviews: 743,
          image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Ultra",
          brand: "Samsung",
          storage: "1TB",
          color: "Titanium Black",
          screenSize: "6.8-inch",
          inStock: true,
          specs: [
            "6.8-inch Dynamic AMOLED 2X display (3120 x 1440)",
            "Snapdragon 8 Gen 3 for Galaxy processor",
            "200MP main camera with 100x Space Zoom",
            "12GB RAM with 1TB internal storage",
            "S Pen with AI-powered features",
            "5000mAh battery with 45W fast charging",
            "IP68 water and dust resistance",
            "One UI 6.1 with Galaxy AI features",
          ],
          href: "/products/smartphones/samsung-s24-ultra",
        },
        {
          id: "samsung-s24-plus-512gb",
          name: "Samsung Galaxy S24+ 512GB Marble Gray",
          price: 1750000,
          originalPrice: 1850000,
          rating: 4.7,
          reviews: 521,
          image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Plus",
          brand: "Samsung",
          storage: "512GB",
          color: "Marble Gray",
          screenSize: "6.7-inch",
          inStock: true,
          specs: [
            "6.7-inch Dynamic AMOLED 2X display (3120 x 1440)",
            "Snapdragon 8 Gen 3 for Galaxy processor",
            "50MP triple camera system with OIS",
            "12GB RAM with 512GB internal storage",
            "4900mAh battery with 45W super fast charging",
            "IP68 rating for water and dust protection",
            "Wireless PowerShare and wireless charging",
            "One UI 6.1 with advanced AI capabilities",
          ],
          href: "/products/smartphones/samsung-s24-plus",
        },
        {
          id: "samsung-s24-256gb",
          name: "Samsung Galaxy S24 256GB Onyx Black",
          price: 1450000,
          rating: 4.6,
          reviews: 892,
          image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Compact",
          brand: "Samsung",
          storage: "256GB",
          color: "Onyx Black",
          screenSize: "6.2-inch",
          inStock: true,
          specs: [
            "6.2-inch Dynamic AMOLED 2X display (2340 x 1080)",
            "Snapdragon 8 Gen 3 for Galaxy processor",
            "50MP triple camera with advanced AI",
            "8GB RAM with 256GB internal storage",
            "4000mAh battery with 25W fast charging",
            "IP68 water and dust resistance rating",
            "Wireless charging and reverse wireless charging",
            "One UI 6.1 with Galaxy AI integration",
          ],
          href: "/products/smartphones/samsung-s24",
        },

        // Google Pixel 8 Series
        {
          id: "pixel-8-pro-512gb",
          name: "Google Pixel 8 Pro 512GB Bay Blue",
          price: 1850000,
          rating: 4.7,
          reviews: 456,
          image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Pro",
          brand: "Google",
          storage: "512GB",
          color: "Bay Blue",
          screenSize: "6.7-inch",
          inStock: true,
          specs: [
            "6.7-inch LTPO OLED display with 120Hz refresh rate",
            "Google Tensor G3 chip with Titan M security",
            "50MP triple camera system with computational photography",
            "12GB RAM with 512GB UFS 3.1 storage",
            "Magic Eraser and Best Take photo features",
            "5050mAh battery with 30W fast charging",
            "IP68 rating and Corning Gorilla Glass Victus 2",
            "Android 14 with 7 years of security updates",
          ],
          href: "/products/smartphones/pixel-8-pro",
        },
        {
          id: "pixel-8-256gb",
          name: "Google Pixel 8 256GB Rose Gold",
          price: 1350000,
          originalPrice: 1450000,
          rating: 4.6,
          reviews: 623,
          image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "AI Camera",
          brand: "Google",
          storage: "256GB",
          color: "Rose Gold",
          screenSize: "6.2-inch",
          inStock: true,
          specs: [
            "6.2-inch OLED display with 120Hz adaptive refresh",
            "Google Tensor G3 with advanced AI capabilities",
            "50MP dual camera with computational photography",
            "8GB RAM with 256GB UFS 3.1 storage",
            "Live Translate and Call Screen features",
            "4575mAh battery with 27W fast charging",
            "IP68 water resistance and durable design",
            "Pure Android 14 with guaranteed updates",
          ],
          href: "/products/smartphones/pixel-8",
        },

        // OnePlus 12 Series
        {
          id: "oneplus-12-512gb",
          name: "OnePlus 12 512GB Silky Black",
          price: 1650000,
          rating: 4.6,
          reviews: 387,
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Fast Charging",
          brand: "OnePlus",
          storage: "512GB",
          color: "Silky Black",
          screenSize: "6.82-inch",
          inStock: true,
          specs: [
            "6.82-inch LTPO AMOLED display with 120Hz",
            "Snapdragon 8 Gen 3 flagship processor",
            "50MP Hasselblad triple camera system",
            "16GB RAM with 512GB UFS 4.0 storage",
            "100W SuperVOOC fast charging technology",
            "5400mAh battery with 50W wireless charging",
            "OxygenOS 14 based on Android 14",
            "Alert Slider and premium build quality",
          ],
          href: "/products/smartphones/oneplus-12",
        },
        {
          id: "oneplus-12r-256gb",
          name: "OnePlus 12R 256GB Cool Blue",
          price: 1250000,
          originalPrice: 1350000,
          rating: 4.5,
          reviews: 294,
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Value",
          brand: "OnePlus",
          storage: "256GB",
          color: "Cool Blue",
          screenSize: "6.78-inch",
          inStock: true,
          specs: [
            "6.78-inch LTPO AMOLED display with 120Hz",
            "Snapdragon 8 Gen 2 high-performance processor",
            "50MP triple camera with OIS stabilization",
            "12GB RAM with 256GB UFS 3.1 storage",
            "100W SuperVOOC charging (0-100% in 26 mins)",
            "5500mAh large capacity battery",
            "OxygenOS 14 with clean Android experience",
            "Premium design with flagship features",
          ],
          href: "/products/smartphones/oneplus-12r",
        },

        // Xiaomi 14 Series
        {
          id: "xiaomi-14-ultra-512gb",
          name: "Xiaomi 14 Ultra 512GB Black",
          price: 1950000,
          rating: 4.7,
          reviews: 312,
          image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Ultra",
          brand: "Xiaomi",
          storage: "512GB",
          color: "Black",
          screenSize: "6.73-inch",
          inStock: true,
          specs: [
            "6.73-inch LTPO AMOLED display with 120Hz",
            "Snapdragon 8 Gen 3 flagship processor",
            "50MP Leica quad camera system with 1-inch sensor",
            "16GB RAM with 512GB UFS 4.0 storage",
            "90W HyperCharge and 80W wireless charging",
            "5300mAh battery with reverse wireless charging",
            "MIUI 15 based on Android 14",
            "IP68 rating and premium ceramic build",
          ],
          href: "/products/smartphones/xiaomi-14-ultra",
        },
        {
          id: "xiaomi-14-256gb",
          name: "Xiaomi 14 256GB White",
          price: 1450000,
          rating: 4.5,
          reviews: 445,
          image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Leica Camera",
          brand: "Xiaomi",
          storage: "256GB",
          color: "White",
          screenSize: "6.36-inch",
          inStock: true,
          specs: [
            "6.36-inch LTPO AMOLED display with 120Hz",
            "Snapdragon 8 Gen 3 high-performance chip",
            "50MP Leica triple camera with advanced optics",
            "12GB RAM with 256GB UFS 4.0 storage",
            "90W wired and 50W wireless fast charging",
            "4610mAh battery with intelligent power management",
            "MIUI 15 with enhanced privacy features",
            "Premium glass and metal construction",
          ],
          href: "/products/smartphones/xiaomi-14",
        },

        // Nothing Phone (2a)
        {
          id: "nothing-phone-2a-256gb",
          name: "Nothing Phone (2a) 256GB Black",
          price: 850000,
          originalPrice: 950000,
          rating: 4.4,
          reviews: 267,
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Unique Design",
          brand: "Nothing",
          storage: "256GB",
          color: "Black",
          screenSize: "6.7-inch",
          inStock: true,
          specs: [
            "6.7-inch AMOLED display with 120Hz refresh rate",
            "MediaTek Dimensity 7200 Pro processor",
            "50MP dual camera system with ultra-wide",
            "12GB RAM with 256GB UFS 3.1 storage",
            "Glyph Interface with customizable LED patterns",
            "5000mAh battery with 45W fast charging",
            "Nothing OS 2.5 based on Android 14",
            "Transparent design with unique aesthetics",
          ],
          href: "/products/smartphones/nothing-phone-2a",
        },

        // Realme GT 5 Pro
        {
          id: "realme-gt5-pro-512gb",
          name: "Realme GT 5 Pro 512GB Racing Yellow",
          price: 1150000,
          rating: 4.4,
          reviews: 198,
          image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Gaming",
          brand: "Realme",
          storage: "512GB",
          color: "Racing Yellow",
          screenSize: "6.78-inch",
          inStock: true,
          specs: [
            "6.78-inch LTPO AMOLED display with 144Hz",
            "Snapdragon 8 Gen 3 gaming-optimized processor",
            "50MP triple camera with periscope telephoto",
            "16GB RAM with 512GB UFS 4.0 storage",
            "240W SuperDart charging (0-100% in 9 mins)",
            "5400mAh battery with advanced cooling system",
            "Realme UI 5.0 based on Android 14",
            "Gaming triggers and performance optimization",
          ],
          href: "/products/smartphones/realme-gt5-pro",
        },

        // OPPO Find X7 Ultra
        {
          id: "oppo-find-x7-ultra-512gb",
          name: "OPPO Find X7 Ultra 512GB Ocean Blue",
          price: 1750000,
          rating: 4.6,
          reviews: 156,
          image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center",
          category: "Smartphones",
          badge: "Camera Pro",
          brand: "OPPO",
          storage: "512GB",
          color: "Ocean Blue",
          screenSize: "6.82-inch",
          inStock: true,
          specs: [
            "6.82-inch LTPO AMOLED curved display with 120Hz",
            "Snapdragon 8 Gen 3 flagship processor",
            "50MP quad camera system with Hasselblad tuning",
            "16GB RAM with 512GB UFS 4.0 storage",
            "100W SuperVOOC and 50W wireless charging",
            "5400mAh battery with intelligent power management",
            "ColorOS 14 based on Android 14",
            "Premium vegan leather and metal design",
          ],
          href: "/products/smartphones/oppo-find-x7-ultra",
        },
      ]

      return smartphones
    }

    const generatedProducts = generateProducts()
    setProducts(generatedProducts)
    setFilteredProducts(generatedProducts)
    setLoading(false)
  }, [])

  // Apply filters
  useEffect(() => {
    let filtered = [...products]

    // Filter by brand
    if (activeFilter !== "all") {
      filtered = filtered.filter((product) => product.brand.toLowerCase() === activeFilter.toLowerCase())
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand))
    }

    // Filter by selected storage
    if (selectedStorage.length > 0) {
      filtered = filtered.filter((product) => selectedStorage.includes(product.storage))
    }

    // Filter by selected colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) => selectedColors.includes(product.color))
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [products, activeFilter, priceRange, selectedBrands, selectedStorage, selectedColors])

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

  const toggleStorage = (storage: string) => {
    setSelectedStorage((prev) => (prev.includes(storage) ? prev.filter((s) => s !== storage) : [...prev, storage]))
  }

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const resetFilters = () => {
    setPriceRange([200000, 2500000])
    setSelectedBrands([])
    setSelectedStorage([])
    setSelectedColors([])
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
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Latest Smartphones & Mobile Devices
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Discover the newest flagship smartphones with cutting-edge technology, premium cameras, and lightning-fast
          performance. All devices come with authentic warranty and professional support.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-700">Original Products</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
            <Truck className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Same Day Delivery</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
            <Headphones className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">30-Day Tech Support</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter} className="mb-8">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-7 h-auto">
          <TabsTrigger value="all" className="text-sm">
            All Phones
          </TabsTrigger>
          <TabsTrigger value="apple" className="text-sm">
            iPhone
          </TabsTrigger>
          <TabsTrigger value="samsung" className="text-sm">
            Samsung
          </TabsTrigger>
          <TabsTrigger value="google" className="text-sm">
            Pixel
          </TabsTrigger>
          <TabsTrigger value="oneplus" className="text-sm">
            OnePlus
          </TabsTrigger>
          <TabsTrigger value="xiaomi" className="text-sm">
            Xiaomi
          </TabsTrigger>
          <TabsTrigger value="others" className="text-sm">
            Others
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
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

        {/* Filters Sidebar */}
        <div className={`w-full lg:w-1/4 ${filtersOpen ? "block" : "hidden lg:block"}`}>
          <Card className="p-6 sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center">
                <Filter className="mr-2 h-5 w-5" /> Filters
              </h2>
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Reset All
              </Button>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={priceRange}
                min={200000}
                max={2500000}
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

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Brand</h3>
              <div className="space-y-2">
                {["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Nothing", "Realme", "OPPO"].map((brand) => (
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

            {/* Storage Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Storage</h3>
              <div className="space-y-2">
                {["128GB", "256GB", "512GB", "1TB"].map((storage) => (
                  <div key={storage} className="flex items-center">
                    <Checkbox
                      id={`storage-${storage}`}
                      checked={selectedStorage.includes(storage)}
                      onCheckedChange={() => toggleStorage(storage)}
                    />
                    <label htmlFor={`storage-${storage}`} className="ml-2 text-sm cursor-pointer">
                      {storage}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Color</h3>
              <div className="space-y-2">
                {[
                  "Natural Titanium",
                  "Blue Titanium",
                  "Pink",
                  "Blue",
                  "Titanium Black",
                  "Marble Gray",
                  "Onyx Black",
                  "Bay Blue",
                  "Rose Gold",
                  "Silky Black",
                  "Cool Blue",
                  "Black",
                  "White",
                ].map((color) => (
                  <div key={color} className="flex items-center">
                    <Checkbox
                      id={`color-${color}`}
                      checked={selectedColors.includes(color)}
                      onCheckedChange={() => toggleColor(color)}
                    />
                    <label htmlFor={`color-${color}`} className="ml-2 text-sm cursor-pointer">
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Close Button */}
            <div className="lg:hidden">
              <Button variant="outline" className="w-full bg-transparent" onClick={() => setFiltersOpen(false)}>
                <X className="mr-2 h-4 w-4" />
                Close Filters
              </Button>
            </div>
          </Card>
        </div>

        {/* Products Section */}
        <div className="w-full lg:w-3/4">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} smartphones
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          {currentProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No smartphones found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your filters or search criteria</p>
              <Button onClick={resetFilters}>Reset All Filters</Button>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} showDiscount={true} viewMode={viewMode} />
              ))}
            </div>
          )}

          {/* Pagination */}
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
