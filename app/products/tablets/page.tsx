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

export default function TabletsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([300000, 2500000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedStorage, setSelectedStorage] = useState<string[]>([])
  const [selectedScreenSizes, setSelectedScreenSizes] = useState<string[]>([])
  const productsPerPage = 12

  useEffect(() => {
    const generateProducts = () => {
      const tablets: Product[] = [
        // iPad Pro Series
        {
          id: "ipad-pro-12-9-m4-1tb",
          name: 'iPad Pro 12.9" M4 1TB Space Black',
          price: 2350000,
          rating: 4.9,
          reviews: 567,
          image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Pro",
          brand: "Apple",
          storage: "1TB",
          color: "Space Black",
          screenSize: "12.9-inch",
          inStock: true,
          specs: [
            "12.9-inch Liquid Retina XDR display with ProMotion",
            "Apple M4 chip with 10-core CPU and 10-core GPU",
            "12MP Wide and 10MP Ultra Wide cameras",
            "1TB storage with 16GB unified memory",
            "Thunderbolt/USB 4 connector for pro workflows",
            "Apple Pencil Pro and Magic Keyboard support",
            "Face ID for secure authentication",
            "Up to 10 hours of battery life",
          ],
          href: "/products/tablets/ipad-pro-12-9-m4",
        },
        {
          id: "ipad-pro-11-m4-512gb",
          name: 'iPad Pro 11" M4 512GB Silver',
          price: 1950000,
          originalPrice: 2050000,
          rating: 4.8,
          reviews: 423,
          image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Pro",
          brand: "Apple",
          storage: "512GB",
          color: "Silver",
          screenSize: "11-inch",
          inStock: true,
          specs: [
            "11-inch Liquid Retina display with ProMotion technology",
            "Apple M4 chip with 9-core CPU and 10-core GPU",
            "12MP Wide camera with Smart HDR 4",
            "512GB storage with 8GB unified memory",
            "Thunderbolt/USB 4 for high-speed connectivity",
            "Compatible with Apple Pencil Pro",
            "Face ID with TrueDepth camera system",
            "All-day battery life up to 10 hours",
          ],
          href: "/products/tablets/ipad-pro-11-m4",
        },

        // iPad Air Series
        {
          id: "ipad-air-13-m2-256gb",
          name: 'iPad Air 13" M2 256GB Blue',
          price: 1650000,
          rating: 4.7,
          reviews: 634,
          image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "New Size",
          brand: "Apple",
          storage: "256GB",
          color: "Blue",
          screenSize: "13-inch",
          inStock: true,
          specs: [
            "13-inch Liquid Retina display with P3 wide color",
            "Apple M2 chip with 8-core CPU and 10-core GPU",
            "12MP Wide camera with Center Stage",
            "256GB storage with advanced performance",
            "USB-C connector with support for accessories",
            "Apple Pencil (USB-C) and Magic Keyboard support",
            "Touch ID for secure unlock and payments",
            "Up to 10 hours of battery life",
          ],
          href: "/products/tablets/ipad-air-13-m2",
        },
        {
          id: "ipad-air-11-m2-128gb",
          name: 'iPad Air 11" M2 128GB Purple',
          price: 1350000,
          originalPrice: 1450000,
          rating: 4.6,
          reviews: 789,
          image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Popular",
          brand: "Apple",
          storage: "128GB",
          color: "Purple",
          screenSize: "11-inch",
          inStock: true,
          specs: [
            "11-inch Liquid Retina display with True Tone",
            "Apple M2 chip with 8-core CPU and 10-core GPU",
            "12MP Wide camera with Smart HDR 4",
            "128GB storage for apps and content",
            "USB-C connector for versatile connectivity",
            "Compatible with Apple Pencil (USB-C)",
            "Touch ID integrated into the top button",
            "All-day battery life up to 10 hours",
          ],
          href: "/products/tablets/ipad-air-11-m2",
        },

        // iPad Standard
        {
          id: "ipad-10-9-256gb",
          name: 'iPad 10.9" 256GB Yellow',
          price: 950000,
          rating: 4.5,
          reviews: 892,
          image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Value",
          brand: "Apple",
          storage: "256GB",
          color: "Yellow",
          screenSize: "10.9-inch",
          inStock: true,
          specs: [
            "10.9-inch Liquid Retina display with True Tone",
            "A14 Bionic chip with 6-core CPU",
            "12MP Wide camera with Center Stage",
            "256GB storage for photos and apps",
            "USB-C connector for modern accessories",
            "Apple Pencil (1st generation) support",
            "Touch ID for secure authentication",
            "Up to 10 hours of battery life",
          ],
          href: "/products/tablets/ipad-10-9",
        },

        // iPad Mini
        {
          id: "ipad-mini-6-512gb",
          name: "iPad Mini 6th Gen 512GB Space Gray",
          price: 1250000,
          rating: 4.6,
          reviews: 445,
          image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Compact",
          brand: "Apple",
          storage: "512GB",
          color: "Space Gray",
          screenSize: "8.3-inch",
          inStock: true,
          specs: [
            "8.3-inch Liquid Retina display with wide color",
            "A15 Bionic chip with 6-core CPU",
            "12MP Wide camera with Smart HDR 3",
            "512GB storage in ultra-portable design",
            "USB-C connector for fast data transfer",
            "Apple Pencil (2nd generation) support",
            "Touch ID integrated into the top button",
            "All-day battery life up to 10 hours",
          ],
          href: "/products/tablets/ipad-mini-6",
        },

        // Samsung Galaxy Tab S9 Series
        {
          id: "galaxy-tab-s9-ultra-1tb",
          name: "Samsung Galaxy Tab S9 Ultra 1TB Graphite",
          price: 2150000,
          rating: 4.7,
          reviews: 312,
          image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Ultra",
          brand: "Samsung",
          storage: "1TB",
          color: "Graphite",
          screenSize: "14.6-inch",
          inStock: true,
          specs: [
            "14.6-inch Dynamic AMOLED 2X display (2960 x 1848)",
            "Snapdragon 8 Gen 2 for Galaxy processor",
            "13MP + 6MP dual rear cameras with 4K video",
            "1TB storage with 16GB RAM",
            "S Pen included with advanced features",
            "11200mAh battery with 45W fast charging",
            "IP68 water and dust resistance",
            "One UI 5.1.1 with desktop-like experience",
          ],
          href: "/products/tablets/galaxy-tab-s9-ultra",
        },
        {
          id: "galaxy-tab-s9-plus-512gb",
          name: "Samsung Galaxy Tab S9+ 512GB Beige",
          price: 1750000,
          originalPrice: 1850000,
          rating: 4.6,
          reviews: 267,
          image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Plus",
          brand: "Samsung",
          storage: "512GB",
          color: "Beige",
          screenSize: "12.4-inch",
          inStock: true,
          specs: [
            "12.4-inch Dynamic AMOLED 2X display (2800 x 1752)",
            "Snapdragon 8 Gen 2 for Galaxy processor",
            "13MP + 6MP dual cameras with ultra-wide",
            "512GB storage with 12GB RAM",
            "S Pen with 4096 pressure levels",
            "10090mAh battery with 45W super fast charging",
            "IP68 rating for outdoor use",
            "Samsung DeX for productivity workflows",
          ],
          href: "/products/tablets/galaxy-tab-s9-plus",
        },
        {
          id: "galaxy-tab-s9-256gb",
          name: "Samsung Galaxy Tab S9 256GB Cream",
          price: 1350000,
          rating: 4.5,
          reviews: 445,
          image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Compact Pro",
          brand: "Samsung",
          storage: "256GB",
          color: "Cream",
          screenSize: "11-inch",
          inStock: true,
          specs: [
            "11-inch Dynamic AMOLED 2X display (2560 x 1600)",
            "Snapdragon 8 Gen 2 for Galaxy processor",
            "13MP + 6MP dual camera system",
            "256GB storage with 12GB RAM",
            "S Pen included for creative work",
            "8400mAh battery with fast charging",
            "IP68 water and dust protection",
            "One UI 5.1.1 with multitasking features",
          ],
          href: "/products/tablets/galaxy-tab-s9",
        },

        // Microsoft Surface Pro Series
        {
          id: "surface-pro-9-1tb",
          name: "Microsoft Surface Pro 9 1TB Platinum",
          price: 2050000,
          rating: 4.6,
          reviews: 234,
          image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "2-in-1",
          brand: "Microsoft",
          storage: "1TB",
          color: "Platinum",
          screenSize: "13-inch",
          inStock: true,
          specs: [
            "13-inch PixelSense Flow display (2880 x 1920)",
            "Intel Core i7-1255U processor",
            "10MP rear camera with 4K video recording",
            "1TB SSD storage with 32GB LPDDR5 RAM",
            "Surface Pen and Type Cover compatibility",
            "Up to 15.5 hours of battery life",
            "Windows 11 Pro with desktop applications",
            "Thunderbolt 4 and Surface Connect ports",
          ],
          href: "/products/tablets/surface-pro-9",
        },
        {
          id: "surface-pro-9-512gb",
          name: "Microsoft Surface Pro 9 512GB Sapphire",
          price: 1650000,
          originalPrice: 1750000,
          rating: 4.5,
          reviews: 189,
          image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Business",
          brand: "Microsoft",
          storage: "512GB",
          color: "Sapphire",
          screenSize: "13-inch",
          inStock: true,
          specs: [
            "13-inch PixelSense Flow touchscreen display",
            "Intel Core i5-1235U processor",
            "10MP rear and 5MP front cameras",
            "512GB SSD storage with 16GB LPDDR5 RAM",
            "Surface Pen support with 4096 pressure levels",
            "All-day battery life up to 15.5 hours",
            "Windows 11 with Microsoft 365 integration",
            "USB-C and Surface Connect connectivity",
          ],
          href: "/products/tablets/surface-pro-9-512gb",
        },

        // Lenovo Tab P12 Pro
        {
          id: "lenovo-tab-p12-pro-256gb",
          name: "Lenovo Tab P12 Pro 256GB Storm Grey",
          price: 1450000,
          rating: 4.4,
          reviews: 156,
          image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "OLED Display",
          brand: "Lenovo",
          storage: "256GB",
          color: "Storm Grey",
          screenSize: "12.6-inch",
          inStock: true,
          specs: [
            "12.6-inch OLED display (2560 x 1600) with HDR10",
            "MediaTek Dimensity 7050 processor",
            "13MP + 5MP dual rear cameras",
            "256GB storage with 8GB RAM",
            "Lenovo Precision Pen 3 included",
            "10200mAh battery with 30W fast charging",
            "Quad JBL speakers with Dolby Atmos",
            "Android 13 with productivity features",
          ],
          href: "/products/tablets/lenovo-tab-p12-pro",
        },

        // Huawei MatePad Pro
        {
          id: "huawei-matepad-pro-512gb",
          name: "Huawei MatePad Pro 12.6 512GB Space Gray",
          price: 1550000,
          rating: 4.5,
          reviews: 123,
          image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "HarmonyOS",
          brand: "Huawei",
          storage: "512GB",
          color: "Space Gray",
          screenSize: "12.6-inch",
          inStock: true,
          specs: [
            "12.6-inch OLED FullView display (2560 x 1600)",
            "Kirin 9000E flagship processor",
            "13MP + 8MP dual camera system",
            "512GB storage with 8GB RAM",
            "M-Pencil (2nd generation) support",
            "10050mAh battery with 40W fast charging",
            "Harman Kardon quad speakers",
            "HarmonyOS 3.1 with multi-device collaboration",
          ],
          href: "/products/tablets/huawei-matepad-pro",
        },

        // Xiaomi Pad 6 Pro
        {
          id: "xiaomi-pad-6-pro-256gb",
          name: "Xiaomi Pad 6 Pro 256GB Champagne Gold",
          price: 950000,
          originalPrice: 1050000,
          rating: 4.3,
          reviews: 198,
          image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Value Pro",
          brand: "Xiaomi",
          storage: "256GB",
          color: "Champagne Gold",
          screenSize: "11-inch",
          inStock: true,
          specs: [
            "11-inch 2.8K LCD display (2880 x 1800) 144Hz",
            "Snapdragon 8+ Gen 1 flagship processor",
            "50MP + 2MP dual rear cameras",
            "256GB storage with 8GB RAM",
            "Xiaomi Smart Pen (2nd Gen) compatibility",
            "8600mAh battery with 67W turbo charging",
            "Quad speakers tuned by Harman Kardon",
            "MIUI 14 for Pad with desktop mode",
          ],
          href: "/products/tablets/xiaomi-pad-6-pro",
        },

        // OPPO Pad Air
        {
          id: "oppo-pad-air-128gb",
          name: "OPPO Pad Air 128GB Silver",
          price: 750000,
          rating: 4.2,
          reviews: 167,
          image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Affordable",
          brand: "OPPO",
          storage: "128GB",
          color: "Silver",
          screenSize: "10.36-inch",
          inStock: true,
          specs: [
            "10.36-inch 2K display (2000 x 1200) with eye care",
            "Snapdragon 680 efficient processor",
            "8MP rear and 5MP front cameras",
            "128GB storage with 4GB RAM (expandable)",
            "OPPO Pencil support for creative work",
            "7100mAh battery with 18W fast charging",
            "Quad speakers with Hi-Res Audio",
            "ColorOS 12 for Pad with split-screen",
          ],
          href: "/products/tablets/oppo-pad-air",
        },

        // Amazon Fire Max 11
        {
          id: "fire-max-11-128gb",
          name: "Amazon Fire Max 11 128GB Gray",
          price: 450000,
          originalPrice: 550000,
          rating: 4.1,
          reviews: 234,
          image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=400&fit=crop&crop=center",
          category: "Tablets",
          badge: "Entertainment",
          brand: "Amazon",
          storage: "128GB",
          color: "Gray",
          screenSize: "11-inch",
          inStock: true,
          specs: [
            "11-inch display (2000 x 1200) with vivid colors",
            "Octa-core processor with 4GB RAM",
            "8MP rear and 8MP front cameras",
            "128GB storage (expandable up to 1TB)",
            "Amazon Appstore with popular apps",
            "14-hour battery life for entertainment",
            "Alexa hands-free with Show Mode",
            "Fire OS with parental controls",
          ],
          href: "/products/tablets/fire-max-11",
        },
      ]

      return tablets
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

    // Filter by selected screen sizes
    if (selectedScreenSizes.length > 0) {
      filtered = filtered.filter((product) => selectedScreenSizes.includes(product.screenSize))
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [products, activeFilter, priceRange, selectedBrands, selectedStorage, selectedScreenSizes])

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

  const toggleScreenSize = (screenSize: string) => {
    setSelectedScreenSizes((prev) =>
      prev.includes(screenSize) ? prev.filter((s) => s !== screenSize) : [...prev, screenSize],
    )
  }

  const resetFilters = () => {
    setPriceRange([300000, 2500000])
    setSelectedBrands([])
    setSelectedStorage([])
    setSelectedScreenSizes([])
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Premium Tablets & 2-in-1 Devices
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Discover powerful tablets for creativity, productivity, and entertainment. From iPad Pro to Surface Pro, find
          the perfect tablet with professional support and authentic warranty.
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
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
          <TabsTrigger value="all" className="text-sm">
            All Tablets
          </TabsTrigger>
          <TabsTrigger value="apple" className="text-sm">
            iPad
          </TabsTrigger>
          <TabsTrigger value="samsung" className="text-sm">
            Galaxy Tab
          </TabsTrigger>
          <TabsTrigger value="microsoft" className="text-sm">
            Surface
          </TabsTrigger>
          <TabsTrigger value="android" className="text-sm">
            Android
          </TabsTrigger>
          <TabsTrigger value="budget" className="text-sm">
            Budget
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
                min={300000}
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
                {["Apple", "Samsung", "Microsoft", "Lenovo", "Huawei", "Xiaomi", "OPPO", "Amazon"].map((brand) => (
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

            {/* Screen Size Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Screen Size</h3>
              <div className="space-y-2">
                {[
                  "8.3-inch",
                  "10.9-inch",
                  "11-inch",
                  "12.4-inch",
                  "12.6-inch",
                  "12.9-inch",
                  "13-inch",
                  "14.6-inch",
                ].map((screenSize) => (
                  <div key={screenSize} className="flex items-center">
                    <Checkbox
                      id={`screen-${screenSize}`}
                      checked={selectedScreenSizes.includes(screenSize)}
                      onCheckedChange={() => toggleScreenSize(screenSize)}
                    />
                    <label htmlFor={`screen-${screenSize}`} className="ml-2 text-sm cursor-pointer">
                      {screenSize}
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
                {filteredProducts.length} tablets
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
              <h3 className="text-lg font-medium mb-2">No tablets found</h3>
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
