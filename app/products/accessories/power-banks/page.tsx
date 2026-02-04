"use client"

import { useState } from "react"
import { Search, Grid, List, Battery, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"

const powerBanks = [
  {
    id: "anker-powercore-26800",
    name: "Anker PowerCore 26800mAh Portable Charger",
    brand: "Anker",
    price: 65000,
    originalPrice: 75000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 567,
    badge: "High Capacity",
    badgeColor: "bg-green-500",
    features: ["26800mAh", "3 USB Ports", "Fast Charging"],
    inStock: true,
    category: "High Capacity",
  },
  {
    id: "samsung-wireless-powerbank-10000",
    name: "Samsung Wireless Power Bank 10000mAh",
    brand: "Samsung",
    price: 45000,
    originalPrice: 52000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 234,
    badge: "Wireless",
    badgeColor: "bg-blue-500",
    features: ["Wireless Charging", "10000mAh", "USB-C PD"],
    inStock: true,
    category: "Wireless",
  },
  {
    id: "apple-magsafe-battery-pack",
    name: "Apple MagSafe Battery Pack",
    brand: "Apple",
    price: 85000,
    originalPrice: 95000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 189,
    badge: "MagSafe",
    badgeColor: "bg-purple-500",
    features: ["MagSafe Compatible", "Wireless Charging", "Compact Design"],
    inStock: true,
    category: "MagSafe",
  },
  {
    id: "xiaomi-redmi-power-bank-20000",
    name: "Xiaomi Redmi Power Bank 20000mAh",
    brand: "Xiaomi",
    price: 32000,
    originalPrice: 38000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 345,
    badge: "Best Value",
    badgeColor: "bg-orange-500",
    features: ["20000mAh", "18W Fast Charging", "Dual Input"],
    inStock: true,
    category: "Standard",
  },
  {
    id: "ravpower-pd-pioneer-20000",
    name: "RAVPower PD Pioneer 20000mAh Power Bank",
    brand: "RAVPower",
    price: 55000,
    originalPrice: 62000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 167,
    badge: "PD Fast Charging",
    badgeColor: "bg-red-500",
    features: ["60W PD Charging", "20000mAh", "LED Display"],
    inStock: true,
    category: "Fast Charging",
  },
  {
    id: "aukey-basix-pro-20000",
    name: "AUKEY Basix Pro 20000mAh Wireless Power Bank",
    brand: "AUKEY",
    price: 42000,
    originalPrice: 48000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 123,
    badge: "Wireless + Wired",
    badgeColor: "bg-indigo-500",
    features: ["Wireless + Wired", "20000mAh", "18W PD"],
    inStock: true,
    category: "Wireless",
  },
  {
    id: "romoss-sense8-30000",
    name: "ROMOSS Sense8+ 30000mAh Power Bank",
    brand: "ROMOSS",
    price: 38000,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 234,
    badge: "Ultra High Capacity",
    badgeColor: "bg-green-600",
    features: ["30000mAh", "3 USB Ports", "LED Display"],
    inStock: true,
    category: "High Capacity",
  },
  {
    id: "belkin-boost-charge-10000",
    name: "Belkin BOOST↑CHARGE 10000mAh Power Bank",
    brand: "Belkin",
    price: 35000,
    originalPrice: 42000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 156,
    badge: "Compact",
    badgeColor: "bg-teal-500",
    features: ["Compact Design", "10000mAh", "USB-C PD"],
    inStock: true,
    category: "Compact",
  },
  {
    id: "solar-power-bank-25000",
    name: "Solar Power Bank 25000mAh with LED Flashlight",
    brand: "Generic",
    price: 28000,
    originalPrice: 35000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.1,
    reviews: 189,
    badge: "Solar Charging",
    badgeColor: "bg-yellow-500",
    features: ["Solar Charging", "25000mAh", "LED Flashlight"],
    inStock: true,
    category: "Solar",
  },
  {
    id: "mini-power-bank-5000",
    name: "Ultra Compact Mini Power Bank 5000mAh",
    brand: "Generic",
    price: 18000,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 267,
    badge: "Ultra Compact",
    badgeColor: "bg-pink-500",
    features: ["Ultra Compact", "5000mAh", "Lightweight"],
    inStock: true,
    category: "Compact",
  },
  {
    id: "laptop-power-bank-50000",
    name: "Laptop Power Bank 50000mAh 65W PD",
    brand: "Generic",
    price: 75000,
    originalPrice: 85000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 89,
    badge: "Laptop Compatible",
    badgeColor: "bg-gray-600",
    features: ["Laptop Charging", "50000mAh", "65W PD"],
    inStock: true,
    category: "Laptop",
  },
  {
    id: "power-bank-with-cables",
    name: "Power Bank 15000mAh with Built-in Cables",
    brand: "Generic",
    price: 25000,
    originalPrice: 30000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7e0e?w=500&h=500&fit=crop",
    rating: 4.0,
    reviews: 145,
    badge: "Built-in Cables",
    badgeColor: "bg-cyan-500",
    features: ["Built-in Cables", "15000mAh", "4 Cables Included"],
    inStock: true,
    category: "All-in-One",
  },
]

export default function PowerBanksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [capacityRange, setCapacityRange] = useState("all")

  const brands = ["all", ...Array.from(new Set(powerBanks.map((item) => item.brand)))]
  const categories = ["all", ...Array.from(new Set(powerBanks.map((item) => item.category)))]

  const filteredPowerBanks = powerBanks.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = selectedBrand === "all" || item.brand === selectedBrand
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory

    return matchesSearch && matchesBrand && matchesCategory
  })

  const sortedPowerBanks = [...filteredPowerBanks].sort((a, b) => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Power Banks & Portable Chargers</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Never run out of power with our premium collection of power banks. From compact 5000mAh to high-capacity
              50000mAh, find the perfect portable charger for your needs.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-lg">
              <Battery className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">High Capacity</h3>
                <p className="text-sm text-green-600">Up to 50,000mAh Available</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Zap className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-800">Fast Charging</h3>
                <p className="text-sm text-blue-600">Up to 65W Power Delivery</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-purple-50 rounded-lg">
              <Shield className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="font-semibold text-purple-800">Safety Certified</h3>
                <p className="text-sm text-purple-600">Multiple Protection Systems</p>
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
                  placeholder="Search power banks..."
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

            <Select value={capacityRange} onValueChange={setCapacityRange}>
              <SelectTrigger>
                <SelectValue placeholder="Capacity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Capacities</SelectItem>
                <SelectItem value="under-10k">Under 10,000mAh</SelectItem>
                <SelectItem value="10k-20k">10,000 - 20,000mAh</SelectItem>
                <SelectItem value="above-20k">Above 20,000mAh</SelectItem>
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
              Showing {sortedPowerBanks.length} of {powerBanks.length} power banks
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
          {sortedPowerBanks.map((powerBank) => (
            <ProductCard
              key={powerBank.id}
              product={{
                ...powerBank,
                href: `/products/accessories/power-banks/${powerBank.id}`,
              }}
              viewMode={viewMode}
            />
          ))}
        </div>

        {sortedPowerBanks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No power banks found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedBrand("all")
                setSelectedCategory("all")
                setCapacityRange("all")
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
