"use client"

import { useState } from "react"
import { Search, Grid, List, Zap, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"

const cables = [
  {
    id: "apple-usbc-lightning-cable",
    name: "Apple USB-C to Lightning Cable (2m)",
    brand: "Apple",
    price: 35000,
    originalPrice: 42000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 456,
    badge: "Original",
    badgeColor: "bg-green-500",
    features: ["Fast Charging", "Data Sync", "2m Length"],
    inStock: true,
    category: "Lightning",
  },
  {
    id: "samsung-usbc-cable-25w",
    name: "Samsung USB-C to USB-C Cable 25W",
    brand: "Samsung",
    price: 18000,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 234,
    badge: "Fast Charging",
    badgeColor: "bg-blue-500",
    features: ["25W Fast Charging", "USB-C to USB-C", "1.5m Length"],
    inStock: true,
    category: "USB-C",
  },
  {
    id: "anker-powerline-usbc",
    name: "Anker PowerLine III USB-C Cable",
    brand: "Anker",
    price: 22000,
    originalPrice: 28000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 189,
    badge: "Durable",
    badgeColor: "bg-purple-500",
    features: ["35,000 Bend Lifespan", "100W Power", "USB 3.1 Gen 2"],
    inStock: true,
    category: "USB-C",
  },
  {
    id: "belkin-boost-charge-cable",
    name: "Belkin BOOST↑CHARGE USB-C Cable with Lightning",
    brand: "Belkin",
    price: 28000,
    originalPrice: 35000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 167,
    badge: "MFi Certified",
    badgeColor: "bg-green-600",
    features: ["MFi Certified", "Fast Charging", "Durable Design"],
    inStock: true,
    category: "Lightning",
  },
  {
    id: "apple-20w-usbc-charger",
    name: "Apple 20W USB-C Power Adapter",
    brand: "Apple",
    price: 32000,
    originalPrice: 38000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 345,
    badge: "Original",
    badgeColor: "bg-green-500",
    features: ["20W Fast Charging", "Compact Design", "Universal USB-C"],
    inStock: true,
    category: "Charger",
  },
  {
    id: "samsung-45w-charger",
    name: "Samsung 45W USB-C Super Fast Charger",
    brand: "Samsung",
    price: 25000,
    originalPrice: 30000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 278,
    badge: "Super Fast",
    badgeColor: "bg-red-500",
    features: ["45W Super Fast", "PPS Technology", "Compact Design"],
    inStock: true,
    category: "Charger",
  },
  {
    id: "anker-nano-charger-20w",
    name: "Anker Nano 20W USB-C Charger",
    brand: "Anker",
    price: 15000,
    originalPrice: 18000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 456,
    badge: "Compact",
    badgeColor: "bg-blue-600",
    features: ["Ultra Compact", "20W Power", "Universal Compatibility"],
    inStock: true,
    category: "Charger",
  },
  {
    id: "multi-cable-3in1",
    name: "3-in-1 Multi Charging Cable (Lightning/USB-C/Micro)",
    brand: "Generic",
    price: 12000,
    originalPrice: 15000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 189,
    badge: "Versatile",
    badgeColor: "bg-orange-500",
    features: ["3-in-1 Design", "Universal Compatibility", "Tangle-Free"],
    inStock: true,
    category: "Multi-Cable",
  },
  {
    id: "wireless-charger-15w",
    name: "15W Wireless Charging Pad",
    brand: "Generic",
    price: 18000,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 234,
    badge: "Wireless",
    badgeColor: "bg-indigo-500",
    features: ["15W Fast Wireless", "LED Indicator", "Case Friendly"],
    inStock: true,
    category: "Wireless",
  },
  {
    id: "car-charger-dual-usb",
    name: "Dual USB Car Charger 36W",
    brand: "Generic",
    price: 14000,
    originalPrice: 18000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.1,
    reviews: 156,
    badge: "Car Charger",
    badgeColor: "bg-gray-600",
    features: ["Dual USB Ports", "36W Total Output", "LED Display"],
    inStock: true,
    category: "Car Charger",
  },
  {
    id: "magnetic-cable-usbc",
    name: "Magnetic USB-C Charging Cable",
    brand: "Generic",
    price: 16000,
    originalPrice: 20000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    rating: 4.0,
    reviews: 123,
    badge: "Magnetic",
    badgeColor: "bg-purple-600",
    features: ["Magnetic Connection", "360° Rotation", "LED Indicator"],
    inStock: true,
    category: "Magnetic",
  },
  {
    id: "retractable-cable-lightning",
    name: "Retractable Lightning Cable",
    brand: "Generic",
    price: 13000,
    originalPrice: 16000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    rating: 3.9,
    reviews: 89,
    badge: "Retractable",
    badgeColor: "bg-teal-500",
    features: ["Retractable Design", "Tangle-Free", "Compact"],
    inStock: true,
    category: "Lightning",
  },
]

export default function CablesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState("all")

  const brands = ["all", ...Array.from(new Set(cables.map((item) => item.brand)))]
  const categories = ["all", ...Array.from(new Set(cables.map((item) => item.category)))]

  const filteredCables = cables.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = selectedBrand === "all" || item.brand === selectedBrand
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory

    let matchesPrice = true
    if (priceRange === "under-15k") matchesPrice = item.price < 15000
    else if (priceRange === "15k-25k") matchesPrice = item.price >= 15000 && item.price <= 25000
    else if (priceRange === "above-25k") matchesPrice = item.price > 25000

    return matchesSearch && matchesBrand && matchesCategory && matchesPrice
  })

  const sortedCables = [...filteredCables].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cables & Chargers</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Power up with our premium collection of cables and chargers. From fast charging to data transfer, we have
              everything you need to keep your devices connected.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Zap className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-800">Fast Charging</h3>
                <p className="text-sm text-blue-600">Up to 100W Power Delivery</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-lg">
              <Shield className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">Original Products</h3>
                <p className="text-sm text-green-600">MFi Certified & Authentic</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-purple-50 rounded-lg">
              <Award className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="font-semibold text-purple-800">Warranty Included</h3>
                <p className="text-sm text-purple-600">30-Day Free Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search cables & chargers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand === "all" ? "All Brands" : brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-15k">Under ₦15,000</SelectItem>
                <SelectItem value="15k-25k">₦15,000 - ₦25,000</SelectItem>
                <SelectItem value="above-25k">Above ₦25,000</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600">
              Showing {sortedCables.length} of {cables.length} products
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
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
        </div>

        {/* Products Grid - Fixed: passing product object instead of individual props */}
        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {sortedCables.map((cable) => (
            <ProductCard
              key={cable.id}
              product={{
                ...cable,
                href: `/products/accessories/cables/${cable.id}`,
              }}
              viewMode={viewMode}
            />
          ))}
        </div>

        {sortedCables.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cables or chargers found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedBrand("all")
                setSelectedCategory("all")
                setPriceRange("all")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
