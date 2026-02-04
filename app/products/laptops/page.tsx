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
  image: string
  category: string
  badge?: string | null
  specs: string[]
  href: string
  brand: string
  processor: string
  ram: string
  storage: string
  screenSize: string
}

export default function LaptopsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([500000, 4000000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedProcessors, setSelectedProcessors] = useState<string[]>([])
  const [selectedRAM, setSelectedRAM] = useState<string[]>([])
  const productsPerPage = 12

  useEffect(() => {
    const generateProducts = () => {
      const laptops: Product[] = [
        // MacBook Models
        {
          id: "macbook-pro-16-m3-max",
          name: 'MacBook Pro 16" M3 Max 1TB Space Black',
          price: 3250000,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Pro",
          brand: "Apple",
          processor: "M3 Max",
          ram: "36GB",
          storage: "1TB SSD",
          screenSize: "16-inch",
          specs: [
            "16-inch Liquid Retina XDR display (3456 x 2234)",
            "Apple M3 Max chip with 16-core CPU",
            "40-core GPU for professional workflows",
            "1TB SSD storage, 36GB unified memory",
            "macOS Sonoma with advanced pro features",
            "Up to 22 hours battery life",
            "Thunderbolt 4 ports, MagSafe 3 charging",
            "Studio-quality three-mic array",
          ],
          href: "/products/laptops/macbook-pro-16-m3-max",
        },
        {
          id: "macbook-pro-14-m3-pro",
          name: 'MacBook Pro 14" M3 Pro 512GB Silver',
          price: 2450000,
          originalPrice: 2550000,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "New",
          brand: "Apple",
          processor: "M3 Pro",
          ram: "18GB",
          storage: "512GB SSD",
          screenSize: "14-inch",
          specs: [
            "14-inch Liquid Retina XDR display (3024 x 1964)",
            "Apple M3 Pro chip with 12-core CPU",
            "18-core GPU for creative professionals",
            "512GB SSD storage, 18GB unified memory",
            "macOS Sonoma with pro applications",
            "Up to 18 hours battery life",
            "Three Thunderbolt 4 ports, HDMI port",
            "1080p FaceTime HD camera with advanced ISP",
          ],
          href: "/products/laptops/macbook-pro-14-m3-pro",
        },
        {
          id: "macbook-air-15-m2",
          name: 'MacBook Air 15" M2 256GB Midnight',
          price: 1850000,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: null,
          brand: "Apple",
          processor: "M2",
          ram: "8GB",
          storage: "256GB SSD",
          screenSize: "15.3-inch",
          specs: [
            "15.3-inch Liquid Retina display (2880 x 1864)",
            "Apple M2 chip with 8-core CPU",
            "10-core GPU for everyday creative tasks",
            "256GB SSD storage, 8GB unified memory",
            "macOS Sonoma, ultra-thin 11.5mm design",
            "Up to 18 hours battery life",
            "Two Thunderbolt ports, MagSafe 3",
            "1080p FaceTime HD camera, four-speaker system",
          ],
          href: "/products/laptops/macbook-air-15-m2",
        },
        {
          id: "macbook-air-13-m2",
          name: 'MacBook Air 13" M2 512GB Starlight',
          price: 1650000,
          originalPrice: 1750000,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Popular",
          brand: "Apple",
          processor: "M2",
          ram: "8GB",
          storage: "512GB SSD",
          screenSize: "13.6-inch",
          specs: [
            "13.6-inch Liquid Retina display (2560 x 1664)",
            "Apple M2 chip with 8-core CPU",
            "10-core GPU for creative workflows",
            "512GB SSD storage, 8GB unified memory",
            "macOS Sonoma, lightweight 1.24kg design",
            "Up to 18 hours battery life",
            "Two Thunderbolt ports, 3.5mm headphone jack",
            "1080p FaceTime HD camera with advanced ISP",
          ],
          href: "/products/laptops/macbook-air-13-m2",
        },

        // Dell XPS Models
        {
          id: "dell-xps-15-9530",
          name: "Dell XPS 15 9530 Intel Core i7 32GB 1TB RTX 4060",
          price: 2100000,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: null,
          brand: "Dell",
          processor: "Intel Core i7",
          ram: "32GB",
          storage: "1TB SSD",
          screenSize: "15.6-inch",
          specs: [
            "15.6-inch 4K OLED InfinityEdge display (3840 x 2400)",
            "Intel Core i7-13700H processor (up to 5.0GHz)",
            "NVIDIA GeForce RTX 4060 8GB GDDR6",
            "1TB PCIe NVMe SSD, 32GB DDR5-4800 RAM",
            "Windows 11 Pro, premium aluminum build",
            "Up to 13 hours battery life, 86Wh battery",
            "Thunderbolt 4, USB-C, SD card reader",
            "Quad speakers tuned by Waves MaxxAudio Pro",
          ],
          href: "/products/laptops/dell-xps-15-9530",
        },
        {
          id: "dell-xps-13-plus",
          name: "Dell XPS 13 Plus Intel Core i5 16GB 512GB",
          price: 1450000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Compact",
          brand: "Dell",
          processor: "Intel Core i5",
          ram: "16GB",
          storage: "512GB SSD",
          screenSize: "13.4-inch",
          specs: [
            "13.4-inch FHD+ InfinityEdge display (1920 x 1200)",
            "Intel Core i5-1340P processor (up to 4.6GHz)",
            "Intel Iris Xe graphics with 80 execution units",
            "512GB PCIe NVMe SSD, 16GB LPDDR5-5200 RAM",
            "Windows 11 Home, ultra-portable 1.26kg design",
            "Up to 12 hours battery life, 55Wh battery",
            "Two Thunderbolt 4 ports with Power Delivery",
            "720p HD webcam with Windows Hello IR camera",
          ],
          href: "/products/laptops/dell-xps-13-plus",
        },

        // HP Spectre & ENVY Models
        {
          id: "hp-spectre-x360-16",
          name: "HP Spectre x360 16 Intel Core i7 16GB 1TB OLED",
          price: 1950000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "2-in-1",
          brand: "HP",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "1TB SSD",
          screenSize: "16-inch",
          specs: [
            "16-inch 3K+ OLED touchscreen (3072 x 1920)",
            "Intel Core i7-1355U processor (up to 5.0GHz)",
            "Intel Iris Xe graphics with 96 execution units",
            "1TB PCIe NVMe SSD, 16GB DDR4-3200 RAM",
            "Windows 11 Home, 360° convertible hinge",
            "Up to 17 hours battery life, 83Wh battery",
            "Thunderbolt 4, USB-A, microSD card reader",
            "HP Spectre Rechargeable MPP 2.0 Tilt Pen included",
          ],
          href: "/products/laptops/hp-spectre-x360-16",
        },
        {
          id: "hp-envy-x360-15",
          name: "HP ENVY x360 15 AMD Ryzen 7 16GB 512GB",
          price: 1250000,
          originalPrice: 1350000,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Sale",
          brand: "HP",
          processor: "AMD Ryzen 7",
          ram: "16GB",
          storage: "512GB SSD",
          screenSize: "15.6-inch",
          specs: [
            "15.6-inch FHD IPS touchscreen (1920 x 1080)",
            "AMD Ryzen 7 5825U processor (up to 4.5GHz)",
            "AMD Radeon graphics with 8 compute units",
            "512GB PCIe NVMe SSD, 16GB DDR4-3200 RAM",
            "Windows 11 Home, 360° convertible design",
            "Up to 13 hours battery life, 51Wh battery",
            "USB-C, USB-A, HDMI 2.1, SD card reader",
            "HP Digital Pen support, fingerprint reader",
          ],
          href: "/products/laptops/hp-envy-x360-15",
        },

        // Lenovo ThinkPad & Yoga Models
        {
          id: "lenovo-thinkpad-x1-carbon",
          name: "Lenovo ThinkPad X1 Carbon Gen 11 Intel Core i7 32GB",
          price: 2200000,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Business",
          brand: "Lenovo",
          processor: "Intel Core i7",
          ram: "32GB",
          storage: "1TB SSD",
          screenSize: "14-inch",
          specs: [
            "14-inch 2.8K OLED display (2880 x 1800)",
            "Intel Core i7-1365U processor (up to 5.2GHz)",
            "Intel Iris Xe graphics with 96 execution units",
            "1TB PCIe NVMe SSD, 32GB LPDDR5-5600 RAM",
            "Windows 11 Pro, carbon fiber reinforced build",
            "Up to 15 hours battery life, 57Wh battery",
            "Two Thunderbolt 4, USB-A, HDMI 2.1",
            "1080p webcam with ThinkShutter privacy cover",
          ],
          href: "/products/laptops/lenovo-thinkpad-x1-carbon",
        },
        {
          id: "lenovo-yoga-9i-14",
          name: "Lenovo Yoga 9i 14 Intel Core i7 16GB 1TB OLED",
          price: 1750000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Premium",
          brand: "Lenovo",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "1TB SSD",
          screenSize: "14-inch",
          specs: [
            "14-inch 4K OLED touchscreen (3840 x 2400)",
            "Intel Core i7-1360P processor (up to 5.0GHz)",
            "Intel Iris Xe graphics with 96 execution units",
            "1TB PCIe NVMe SSD, 16GB LPDDR5-5200 RAM",
            "Windows 11 Home, 360° convertible hinge",
            "Up to 14 hours battery life, 75Wh battery",
            "Two Thunderbolt 4, USB-A, headphone jack",
            "Lenovo Digital Pen included, Dolby Atmos speakers",
          ],
          href: "/products/laptops/lenovo-yoga-9i-14",
        },

        // ASUS ROG & ZenBook Models
        {
          id: "asus-rog-zephyrus-g14",
          name: "ASUS ROG Zephyrus G14 AMD Ryzen 9 RTX 4060 16GB",
          price: 2350000,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Gaming",
          brand: "ASUS",
          processor: "AMD Ryzen 9",
          ram: "16GB",
          storage: "1TB SSD",
          screenSize: "14-inch",
          specs: [
            "14-inch QHD IPS display (2560 x 1600, 165Hz)",
            "AMD Ryzen 9 7940HS processor (up to 5.2GHz)",
            "NVIDIA GeForce RTX 4060 8GB GDDR6",
            "1TB PCIe NVMe SSD, 16GB DDR5-5600 RAM",
            "Windows 11 Home, AniMe Matrix LED display",
            "Up to 10 hours battery life, 76Wh battery",
            "USB-C with DisplayPort, USB-A, HDMI 2.1",
            "Dolby Atmos quad speakers, RGB keyboard",
          ],
          href: "/products/laptops/asus-rog-zephyrus-g14",
        },
        {
          id: "asus-zenbook-pro-14",
          name: "ASUS ZenBook Pro 14 OLED Intel Core i7 16GB RTX 3050",
          price: 1850000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Creator",
          brand: "ASUS",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "512GB SSD",
          screenSize: "14.5-inch",
          specs: [
            "14.5-inch 2.8K OLED touchscreen (2880 x 1800)",
            "Intel Core i7-12700H processor (up to 4.7GHz)",
            "NVIDIA GeForce RTX 3050 Ti 4GB GDDR6",
            "512GB PCIe NVMe SSD, 16GB DDR5-4800 RAM",
            "Windows 11 Home, premium aluminum build",
            "Up to 9 hours battery life, 63Wh battery",
            "Thunderbolt 4, USB-A, HDMI 2.1, SD card",
            "ASUS DialPad for creative control, Harman Kardon audio",
          ],
          href: "/products/laptops/asus-zenbook-pro-14",
        },

        // Microsoft Surface Models
        {
          id: "surface-laptop-5-15",
          name: "Microsoft Surface Laptop 5 15 Intel Core i7 16GB",
          price: 1950000,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: null,
          brand: "Microsoft",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "512GB SSD",
          screenSize: "15-inch",
          specs: [
            "15-inch PixelSense touchscreen (2496 x 1664)",
            "Intel Core i7-1255U processor (up to 4.7GHz)",
            "Intel Iris Xe graphics with 96 execution units",
            "512GB PCIe NVMe SSD, 16GB LPDDR5X-5200 RAM",
            "Windows 11 Home, Alcantara fabric keyboard",
            "Up to 17 hours battery life, Surface Connect",
            "USB-C, USB-A, Surface Connect, headphone jack",
            "1080p HD webcam with Windows Hello face sign-in",
          ],
          href: "/products/laptops/surface-laptop-5-15",
        },
        {
          id: "surface-pro-9",
          name: "Microsoft Surface Pro 9 Intel Core i5 8GB 256GB",
          price: 1350000,
          originalPrice: 1450000,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "2-in-1",
          brand: "Microsoft",
          processor: "Intel Core i5",
          ram: "8GB",
          storage: "256GB SSD",
          screenSize: "13-inch",
          specs: [
            "13-inch PixelSense Flow display (2880 x 1920)",
            "Intel Core i5-1235U processor (up to 4.4GHz)",
            "Intel Iris Xe graphics with 80 execution units",
            "256GB PCIe NVMe SSD, 8GB LPDDR5-5200 RAM",
            "Windows 11 Home, detachable tablet design",
            "Up to 15.5 hours battery life, Surface Connect",
            "Two USB-C with Thunderbolt 4, Surface Connect",
            "5MP front camera with Windows Hello, 10MP rear camera",
          ],
          href: "/products/laptops/surface-pro-9",
        },

        // Gaming Laptops
        {
          id: "msi-katana-15",
          name: "MSI Katana 15 Intel Core i7 RTX 4060 16GB 1TB",
          price: 1850000,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "Gaming",
          brand: "MSI",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "1TB SSD",
          screenSize: "15.6-inch",
          specs: [
            "15.6-inch FHD IPS display (1920 x 1080, 144Hz)",
            "Intel Core i7-13620H processor (up to 4.9GHz)",
            "NVIDIA GeForce RTX 4060 8GB GDDR6",
            "1TB PCIe NVMe SSD, 16GB DDR5-4800 RAM",
            "Windows 11 Home, gaming-focused design",
            "Up to 7 hours battery life, Cooler Boost 5",
            "USB-C, USB-A, HDMI 2.1, Ethernet, SD card",
            "SteelSeries RGB keyboard, Nahimic 3 audio",
          ],
          href: "/products/laptops/msi-katana-15",
        },
        {
          id: "acer-predator-helios-300",
          name: "Acer Predator Helios 300 Intel Core i7 RTX 4070 32GB",
          price: 2650000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop&crop=center",
          category: "Laptops",
          badge: "High Performance",
          brand: "Acer",
          processor: "Intel Core i7",
          ram: "32GB",
          storage: "1TB SSD",
          screenSize: "15.6-inch",
          specs: [
            "15.6-inch QHD IPS display (2560 x 1440, 165Hz)",
            "Intel Core i7-13700HX processor (up to 5.0GHz)",
            "NVIDIA GeForce RTX 4070 8GB GDDR6",
            "1TB PCIe NVMe SSD, 32GB DDR5-4800 RAM",
            "Windows 11 Home, AeroBlade 3D cooling",
            "Up to 6 hours battery life, 90Wh battery",
            "Thunderbolt 4, USB-A, HDMI 2.1, Ethernet",
            "4-zone RGB keyboard, DTS:X Ultra audio",
          ],
          href: "/products/laptops/acer-predator-helios-300",
        },
      ]

      return laptops
    }

    const generatedProducts = generateProducts()
    setProducts(generatedProducts)
    setFilteredProducts(generatedProducts)
    setLoading(false)
  }, [])

  // Apply filters
  useEffect(() => {
    let filtered = [...products]

    // Filter by category/brand
    if (activeFilter !== "all") {
      filtered = filtered.filter((product) => product.brand.toLowerCase().includes(activeFilter.toLowerCase()))
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand))
    }

    // Filter by selected processors
    if (selectedProcessors.length > 0) {
      filtered = filtered.filter((product) => selectedProcessors.some((proc) => product.processor.includes(proc)))
    }

    // Filter by selected RAM
    if (selectedRAM.length > 0) {
      filtered = filtered.filter((product) => selectedRAM.includes(product.ram))
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [products, activeFilter, priceRange, selectedBrands, selectedProcessors, selectedRAM])

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

  const toggleProcessor = (processor: string) => {
    setSelectedProcessors((prev) =>
      prev.includes(processor) ? prev.filter((p) => p !== processor) : [...prev, processor],
    )
  }

  const toggleRAM = (ram: string) => {
    setSelectedRAM((prev) => (prev.includes(ram) ? prev.filter((r) => r !== ram) : [...prev, ram]))
  }

  const resetFilters = () => {
    setPriceRange([500000, 4000000])
    setSelectedBrands([])
    setSelectedProcessors([])
    setSelectedRAM([])
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
          Professional Laptops & Computers
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Discover our premium collection of laptops for work, gaming, and creativity. All products come with authentic
          warranty and professional support.
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
            All Laptops
          </TabsTrigger>
          <TabsTrigger value="Apple" className="text-sm">
            MacBook
          </TabsTrigger>
          <TabsTrigger value="Dell" className="text-sm">
            Dell
          </TabsTrigger>
          <TabsTrigger value="HP" className="text-sm">
            HP
          </TabsTrigger>
          <TabsTrigger value="Lenovo" className="text-sm">
            Lenovo
          </TabsTrigger>
          <TabsTrigger value="ASUS" className="text-sm">
            ASUS
          </TabsTrigger>
          <TabsTrigger value="Microsoft" className="text-sm">
            Surface
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
                min={500000}
                max={4000000}
                step={100000}
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
                {["Apple", "Dell", "HP", "Lenovo", "ASUS", "Microsoft", "MSI", "Acer"].map((brand) => (
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

            {/* Processor Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Processor</h3>
              <div className="space-y-2">
                {["Intel Core i5", "Intel Core i7", "AMD Ryzen 7", "AMD Ryzen 9", "M2", "M3 Pro", "M3 Max"].map(
                  (processor) => (
                    <div key={processor} className="flex items-center">
                      <Checkbox
                        id={`processor-${processor}`}
                        checked={selectedProcessors.includes(processor)}
                        onCheckedChange={() => toggleProcessor(processor)}
                      />
                      <label htmlFor={`processor-${processor}`} className="ml-2 text-sm cursor-pointer">
                        {processor}
                      </label>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* RAM Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">RAM</h3>
              <div className="space-y-2">
                {["8GB", "16GB", "18GB", "32GB", "36GB"].map((ram) => (
                  <div key={ram} className="flex items-center">
                    <Checkbox
                      id={`ram-${ram}`}
                      checked={selectedRAM.includes(ram)}
                      onCheckedChange={() => toggleRAM(ram)}
                    />
                    <label htmlFor={`ram-${ram}`} className="ml-2 text-sm cursor-pointer">
                      {ram}
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
                {filteredProducts.length} laptops
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
              <h3 className="text-lg font-medium mb-2">No laptops found</h3>
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
