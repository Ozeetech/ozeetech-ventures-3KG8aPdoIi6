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
  image: string
  category: string
  badge?: string | null
  specs: string[]
  href: string
  brand: string
  processor: string
  ram: string
  storage: string
  type: string
}

export default function ComputersPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeFilter, setActiveFilter] = useState("all")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([300000, 5000000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedProcessors, setSelectedProcessors] = useState<string[]>([])
  const productsPerPage = 12

  useEffect(() => {
    const generateProducts = () => {
      const computers: Product[] = [
        // Apple iMac & Mac Studio
        {
          id: "imac-24-m3",
          name: 'Apple iMac 24" M3 8GB 256GB Blue',
          price: 2150000,
          rating: 4.8,
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "All-in-One",
          brand: "Apple",
          processor: "M3",
          ram: "8GB",
          storage: "256GB SSD",
          type: "All-in-One",
          specs: [
            "24-inch 4.5K Retina display (4480 x 2520)",
            "Apple M3 chip with 8-core CPU",
            "10-core GPU for creative workflows",
            "256GB SSD storage, 8GB unified memory",
            "macOS Sonoma with desktop apps",
            "1080p FaceTime HD camera with Center Stage",
            "Six-speaker system with force-cancelling woofers",
            "Magic Keyboard and Magic Mouse included",
          ],
          href: "/products/computers/imac-24-m3",
        },
        {
          id: "mac-studio-m2-max",
          name: "Apple Mac Studio M2 Max 32GB 512GB",
          price: 3850000,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Pro",
          brand: "Apple",
          processor: "M2 Max",
          ram: "32GB",
          storage: "512GB SSD",
          type: "Desktop",
          specs: [
            "Apple M2 Max chip with 12-core CPU",
            "38-core GPU for professional workflows",
            "512GB SSD storage, 32GB unified memory",
            "macOS Sonoma with pro applications",
            "Four Thunderbolt 4 ports, two USB-A ports",
            "HDMI port, 10Gb Ethernet, headphone jack",
            "Wi-Fi 6E and Bluetooth 5.3 connectivity",
            "Compact aluminum design, whisper-quiet operation",
          ],
          href: "/products/computers/mac-studio-m2-max",
        },
        {
          id: "mac-pro-m2-ultra",
          name: "Apple Mac Pro M2 Ultra 64GB 1TB",
          price: 8500000,
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Workstation",
          brand: "Apple",
          processor: "M2 Ultra",
          ram: "64GB",
          storage: "1TB SSD",
          type: "Workstation",
          specs: [
            "Apple M2 Ultra chip with 24-core CPU",
            "76-core GPU for extreme workflows",
            "1TB SSD storage, 64GB unified memory",
            "macOS Sonoma with professional tools",
            "Eight Thunderbolt 4 ports, three USB-A ports",
            "Two HDMI ports, 10Gb Ethernet, audio jack",
            "PCIe expansion slots for professional cards",
            "Rack-mountable design with advanced cooling",
          ],
          href: "/products/computers/mac-pro-m2-ultra",
        },

        // Dell OptiPlex & Precision
        {
          id: "dell-optiplex-7010",
          name: "Dell OptiPlex 7010 Intel Core i7 16GB 512GB",
          price: 850000,
          originalPrice: 950000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Business",
          brand: "Dell",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "512GB SSD",
          type: "Desktop",
          specs: [
            "Intel Core i7-13700 processor (up to 5.2GHz)",
            "Intel UHD Graphics 770 integrated",
            "512GB PCIe NVMe SSD, 16GB DDR4 RAM",
            "Windows 11 Pro with business features",
            "Multiple USB ports, HDMI, DisplayPort",
            "Ethernet, Wi-Fi 6E, Bluetooth 5.2",
            "Tool-free chassis for easy upgrades",
            "3-year ProSupport warranty included",
          ],
          href: "/products/computers/dell-optiplex-7010",
        },
        {
          id: "dell-precision-3660",
          name: "Dell Precision 3660 Intel Xeon 32GB 1TB RTX A2000",
          price: 2850000,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Workstation",
          brand: "Dell",
          processor: "Intel Xeon",
          ram: "32GB",
          storage: "1TB SSD",
          type: "Workstation",
          specs: [
            "Intel Xeon W-1370P processor (up to 5.1GHz)",
            "NVIDIA RTX A2000 12GB professional graphics",
            "1TB PCIe NVMe SSD, 32GB DDR4 ECC RAM",
            "Windows 11 Pro for Workstations",
            "Multiple display outputs, USB-C, Thunderbolt",
            "10GbE networking, Wi-Fi 6E, Bluetooth",
            "ISV certifications for professional software",
            "5-year ProSupport Plus warranty",
          ],
          href: "/products/computers/dell-precision-3660",
        },

        // HP EliteDesk & Z Workstations
        {
          id: "hp-elitedesk-800-g9",
          name: "HP EliteDesk 800 G9 Intel Core i5 16GB 256GB",
          price: 750000,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Compact",
          brand: "HP",
          processor: "Intel Core i5",
          ram: "16GB",
          storage: "256GB SSD",
          type: "Desktop",
          specs: [
            "Intel Core i5-12500 processor (up to 4.6GHz)",
            "Intel UHD Graphics 770 integrated",
            "256GB PCIe NVMe SSD, 16GB DDR4 RAM",
            "Windows 11 Pro with HP Wolf Security",
            "Multiple USB ports, HDMI, DisplayPort",
            "Gigabit Ethernet, Wi-Fi 6E, Bluetooth 5.3",
            "Ultra-small form factor design",
            "3-year HP Care Pack warranty",
          ],
          href: "/products/computers/hp-elitedesk-800-g9",
        },
        {
          id: "hp-z4-g5",
          name: "HP Z4 G5 Intel Xeon 64GB 1TB RTX A4000",
          price: 4250000,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Workstation",
          brand: "HP",
          processor: "Intel Xeon",
          ram: "64GB",
          storage: "1TB SSD",
          type: "Workstation",
          specs: [
            "Intel Xeon W-2245 processor (up to 4.5GHz)",
            "NVIDIA RTX A4000 16GB professional graphics",
            "1TB PCIe NVMe SSD, 64GB DDR4 ECC RAM",
            "Windows 11 Pro for Workstations",
            "Multiple PCIe slots for expansion cards",
            "Thunderbolt 4, USB-C, multiple display outputs",
            "ISV certifications for CAD/3D applications",
            "3-year HP Z Care warranty with next-day support",
          ],
          href: "/products/computers/hp-z4-g5",
        },

        // Lenovo ThinkCentre & ThinkStation
        {
          id: "lenovo-thinkcentre-m90q",
          name: "Lenovo ThinkCentre M90q Intel Core i7 16GB 512GB",
          price: 950000,
          originalPrice: 1050000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Tiny",
          brand: "Lenovo",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "512GB SSD",
          type: "Desktop",
          specs: [
            "Intel Core i7-12700T processor (up to 4.7GHz)",
            "Intel UHD Graphics 770 integrated",
            "512GB PCIe NVMe SSD, 16GB DDR4 RAM",
            "Windows 11 Pro with ThinkShield security",
            "Multiple USB ports, HDMI, DisplayPort",
            "Gigabit Ethernet, Wi-Fi 6E, Bluetooth 5.1",
            "Ultra-compact 1L chassis design",
            "3-year Premier Support warranty",
          ],
          href: "/products/computers/lenovo-thinkcentre-m90q",
        },
        {
          id: "lenovo-thinkstation-p360",
          name: "Lenovo ThinkStation P360 Intel Xeon 32GB 1TB RTX A5000",
          price: 3650000,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Workstation",
          brand: "Lenovo",
          processor: "Intel Xeon",
          ram: "32GB",
          storage: "1TB SSD",
          type: "Workstation",
          specs: [
            "Intel Xeon W-1370P processor (up to 5.1GHz)",
            "NVIDIA RTX A5000 24GB professional graphics",
            "1TB PCIe NVMe SSD, 32GB DDR4 ECC RAM",
            "Windows 11 Pro for Workstations",
            "Multiple PCIe slots, Thunderbolt 4 ports",
            "10GbE networking, Wi-Fi 6E, Bluetooth",
            "ISV certifications for professional workflows",
            "3-year ThinkStation Premier Support",
          ],
          href: "/products/computers/lenovo-thinkstation-p360",
        },

        // Gaming Desktops
        {
          id: "alienware-aurora-r15",
          name: "Alienware Aurora R15 Intel Core i9 RTX 4080 32GB",
          price: 4850000,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Gaming",
          brand: "Alienware",
          processor: "Intel Core i9",
          ram: "32GB",
          storage: "1TB SSD",
          type: "Gaming",
          specs: [
            "Intel Core i9-13900F processor (up to 5.6GHz)",
            "NVIDIA GeForce RTX 4080 16GB GDDR6X",
            "1TB PCIe NVMe SSD, 32GB DDR5-4800 RAM",
            "Windows 11 Home with gaming optimizations",
            "Liquid cooling system with RGB lighting",
            "Multiple USB ports, HDMI, DisplayPort",
            "Killer Wi-Fi 6E, Bluetooth 5.2",
            "AlienFX customizable RGB lighting system",
          ],
          href: "/products/computers/alienware-aurora-r15",
        },
        {
          id: "hp-omen-45l",
          name: "HP OMEN 45L Intel Core i7 RTX 4070 16GB 1TB",
          price: 2850000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Gaming",
          brand: "HP",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "1TB SSD",
          type: "Gaming",
          specs: [
            "Intel Core i7-13700F processor (up to 5.2GHz)",
            "NVIDIA GeForce RTX 4070 12GB GDDR6X",
            "1TB PCIe NVMe SSD, 16GB DDR4-3200 RAM",
            "Windows 11 Home with OMEN Gaming Hub",
            "RGB lighting with customizable effects",
            "Multiple USB ports, HDMI 2.1, DisplayPort",
            "Wi-Fi 6E, Bluetooth 5.3, Gigabit Ethernet",
            "Tool-less upgradability for future expansion",
          ],
          href: "/products/computers/hp-omen-45l",
        },

        // All-in-One PCs
        {
          id: "hp-envy-34-aio",
          name: 'HP ENVY 34" All-in-One Intel Core i7 16GB 512GB',
          price: 1950000,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "All-in-One",
          brand: "HP",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "512GB SSD",
          type: "All-in-One",
          specs: [
            "34-inch 5K curved display (5120 x 2160)",
            "Intel Core i7-12700 processor (up to 4.9GHz)",
            "NVIDIA GeForce RTX 3060 6GB dedicated graphics",
            "512GB PCIe NVMe SSD, 16GB DDR4 RAM",
            "Windows 11 Home with productivity features",
            "5MP webcam with Windows Hello face recognition",
            "Bang & Olufsen quad speakers with subwoofer",
            "Wireless keyboard and mouse included",
          ],
          href: "/products/computers/hp-envy-34-aio",
        },
        {
          id: "dell-inspiron-27-7000",
          name: "Dell Inspiron 27 7000 All-in-One AMD Ryzen 7 16GB",
          price: 1450000,
          originalPrice: 1550000,
          rating: 4.3,
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "All-in-One",
          brand: "Dell",
          processor: "AMD Ryzen 7",
          ram: "16GB",
          storage: "512GB SSD",
          type: "All-in-One",
          specs: [
            "27-inch 4K UHD display (3840 x 2160)",
            "AMD Ryzen 7 5700U processor (up to 4.3GHz)",
            "AMD Radeon graphics with 8 compute units",
            "512GB PCIe NVMe SSD, 16GB DDR4 RAM",
            "Windows 11 Home with Dell applications",
            "1080p webcam with privacy shutter",
            "Dual speakers with Waves MaxxAudio Pro",
            "Wireless keyboard and mouse included",
          ],
          href: "/products/computers/dell-inspiron-27-7000",
        },

        // Mini PCs
        {
          id: "intel-nuc-13-pro",
          name: "Intel NUC 13 Pro Intel Core i7 16GB 512GB",
          price: 850000,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Mini PC",
          brand: "Intel",
          processor: "Intel Core i7",
          ram: "16GB",
          storage: "512GB SSD",
          type: "Mini PC",
          specs: [
            "Intel Core i7-1360P processor (up to 5.0GHz)",
            "Intel Iris Xe graphics with 96 execution units",
            "512GB PCIe NVMe SSD, 16GB DDR4 RAM",
            "Windows 11 Pro with enterprise features",
            "Multiple USB ports, HDMI, DisplayPort",
            "Thunderbolt 4, Wi-Fi 6E, Bluetooth 5.3",
            "Ultra-compact 4x4 inch form factor",
            "VESA mount compatible for monitor mounting",
          ],
          href: "/products/computers/intel-nuc-13-pro",
        },
        {
          id: "asus-pn64-mini-pc",
          name: "ASUS PN64 Mini PC AMD Ryzen 7 32GB 1TB",
          price: 1150000,
          rating: 4.5,
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop&crop=center",
          category: "Computers",
          badge: "Mini PC",
          brand: "ASUS",
          processor: "AMD Ryzen 7",
          ram: "32GB",
          storage: "1TB SSD",
          type: "Mini PC",
          specs: [
            "AMD Ryzen 7 6800U processor (up to 4.7GHz)",
            "AMD Radeon 680M integrated graphics",
            "1TB PCIe NVMe SSD, 32GB DDR5 RAM",
            "Windows 11 Pro with ASUS software suite",
            "Multiple USB ports, HDMI 2.1, DisplayPort",
            "Wi-Fi 6E, Bluetooth 5.2, Gigabit Ethernet",
            "Compact design with efficient cooling",
            "2-year international warranty",
          ],
          href: "/products/computers/asus-pn64-mini-pc",
        },
      ]

      return computers
    }

    const generatedProducts = generateProducts()
    setProducts(generatedProducts)
    setFilteredProducts(generatedProducts)
    setLoading(false)
  }, [])

  // Apply filters
  useEffect(() => {
    let filtered = [...products]

    // Filter by category/type
    if (activeFilter !== "all") {
      filtered = filtered.filter(
        (product) =>
          product.type.toLowerCase().includes(activeFilter.toLowerCase()) ||
          product.brand.toLowerCase().includes(activeFilter.toLowerCase()),
      )
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand))
    }

    // Filter by selected types
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((product) => selectedTypes.includes(product.type))
    }

    // Filter by selected processors
    if (selectedProcessors.length > 0) {
      filtered = filtered.filter((product) => selectedProcessors.some((proc) => product.processor.includes(proc)))
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [products, activeFilter, priceRange, selectedBrands, selectedTypes, selectedProcessors])

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

  const toggleProcessor = (processor: string) => {
    setSelectedProcessors((prev) =>
      prev.includes(processor) ? prev.filter((p) => p !== processor) : [...prev, processor],
    )
  }

  const resetFilters = () => {
    setPriceRange([300000, 5000000])
    setSelectedBrands([])
    setSelectedTypes([])
    setSelectedProcessors([])
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
          Desktop Computers & Workstations
        </h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
          Powerful desktop computers for work, gaming, and professional applications. From compact mini PCs to high-end
          workstations with professional support.
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
            All Computers
          </TabsTrigger>
          <TabsTrigger value="desktop" className="text-sm">
            Desktop
          </TabsTrigger>
          <TabsTrigger value="all-in-one" className="text-sm">
            All-in-One
          </TabsTrigger>
          <TabsTrigger value="workstation" className="text-sm">
            Workstation
          </TabsTrigger>
          <TabsTrigger value="gaming" className="text-sm">
            Gaming
          </TabsTrigger>
          <TabsTrigger value="mini" className="text-sm">
            Mini PC
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
                max={5000000}
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
                {["Apple", "Dell", "HP", "Lenovo", "Alienware", "Intel", "ASUS"].map((brand) => (
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

            {/* Type Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Type</h3>
              <div className="space-y-2">
                {["Desktop", "All-in-One", "Workstation", "Gaming", "Mini PC"].map((type) => (
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

            {/* Processor Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Processor</h3>
              <div className="space-y-2">
                {[
                  "Intel Core i5",
                  "Intel Core i7",
                  "Intel Core i9",
                  "Intel Xeon",
                  "AMD Ryzen 7",
                  "M2 Max",
                  "M2 Ultra",
                  "M3",
                ].map((processor) => (
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
                {filteredProducts.length} computers
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
              <h3 className="text-lg font-medium mb-2">No computers found</h3>
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
