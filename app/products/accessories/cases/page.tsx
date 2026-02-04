"use client"

import { useState } from "react"
import { Search, Grid, List, Shield, Truck, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"

const cases = [
  {
    id: "apple-leather-case-iphone15",
    name: "iPhone 15 Pro Max Leather Case with MagSafe",
    brand: "Apple",
    price: 45000,
    originalPrice: 52000,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 324,
    badge: "Original",
    badgeColor: "bg-green-500",
    features: ["MagSafe Compatible", "Genuine Leather", "Precise Cutouts"],
    inStock: true,
    category: "Premium",
  },
  {
    id: "samsung-silicone-case-s24",
    name: "Galaxy S24 Ultra Silicone Case",
    brand: "Samsung",
    price: 28000,
    originalPrice: 35000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 189,
    badge: "Best Seller",
    badgeColor: "bg-blue-500",
    features: ["Soft Touch", "Wireless Charging", "Slim Profile"],
    inStock: true,
    category: "Standard",
  },
  {
    id: "spigen-tough-armor-iphone15",
    name: "Spigen Tough Armor iPhone 15 Pro Case",
    brand: "Spigen",
    price: 32000,
    originalPrice: 38000,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 267,
    badge: "Military Grade",
    badgeColor: "bg-red-500",
    features: ["Military Grade", "Air Cushion", "Kickstand"],
    inStock: true,
    category: "Rugged",
  },
  {
    id: "otterbox-defender-iphone15",
    name: "OtterBox Defender Series iPhone 15 Case",
    brand: "OtterBox",
    price: 42000,
    originalPrice: 48000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 445,
    badge: "Ultimate Protection",
    badgeColor: "bg-purple-500",
    features: ["Ultimate Protection", "Port Covers", "Belt Clip"],
    inStock: true,
    category: "Rugged",
  },
  {
    id: "uag-pathfinder-samsung-s24",
    name: "UAG Pathfinder Galaxy S24 Ultra Case",
    brand: "UAG",
    price: 38000,
    originalPrice: 45000,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 156,
    badge: "Tactical",
    badgeColor: "bg-gray-600",
    features: ["Tactical Design", "Armor Shell", "Impact Resistant"],
    inStock: true,
    category: "Rugged",
  },
  {
    id: "bellroy-leather-wallet-iphone15",
    name: "Bellroy Leather Case Wallet iPhone 15 Pro",
    brand: "Bellroy",
    price: 55000,
    originalPrice: 62000,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 89,
    badge: "Premium",
    badgeColor: "bg-amber-500",
    features: ["Card Storage", "Premium Leather", "Slim Design"],
    inStock: true,
    category: "Premium",
  },
  {
    id: "clear-case-iphone15",
    name: "Crystal Clear iPhone 15 Pro Max Case",
    brand: "Generic",
    price: 12000,
    originalPrice: 15000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 234,
    badge: "Budget Friendly",
    badgeColor: "bg-green-600",
    features: ["Crystal Clear", "Anti-Yellow", "Wireless Charging"],
    inStock: true,
    category: "Basic",
  },
  {
    id: "magsafe-wallet-case-iphone15",
    name: "MagSafe Wallet Case iPhone 15 Pro",
    brand: "Apple",
    price: 48000,
    originalPrice: 55000,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 178,
    badge: "MagSafe",
    badgeColor: "bg-blue-600",
    features: ["MagSafe Compatible", "Card Storage", "Find My Support"],
    inStock: true,
    category: "Premium",
  },
  {
    id: "samsung-clear-view-s24",
    name: "Samsung Clear View Standing Cover S24 Ultra",
    brand: "Samsung",
    price: 35000,
    originalPrice: 42000,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 123,
    badge: "Smart Cover",
    badgeColor: "bg-indigo-500",
    features: ["Clear View", "Auto Sleep/Wake", "Standing Function"],
    inStock: true,
    category: "Smart",
  },
  {
    id: "waterproof-case-universal",
    name: "Universal Waterproof Phone Case",
    brand: "Generic",
    price: 18000,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 267,
    badge: "Waterproof",
    badgeColor: "bg-cyan-500",
    features: ["IPX8 Waterproof", "Universal Fit", "Touch Sensitive"],
    inStock: true,
    category: "Specialty",
  },
  {
    id: "gaming-case-cooling-fan",
    name: "Gaming Phone Case with Cooling Fan",
    brand: "Generic",
    price: 25000,
    originalPrice: 30000,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&h=500&fit=crop",
    rating: 4.1,
    reviews: 89,
    badge: "Gaming",
    badgeColor: "bg-red-600",
    features: ["Cooling Fan", "Gaming Triggers", "RGB Lighting"],
    inStock: true,
    category: "Gaming",
  },
  {
    id: "wireless-charging-case",
    name: "Wireless Charging Battery Case iPhone 15",
    brand: "Generic",
    price: 32000,
    originalPrice: 38000,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=500&h=500&fit=crop",
    rating: 4.0,
    reviews: 145,
    badge: "Battery Case",
    badgeColor: "bg-orange-500",
    features: ["5000mAh Battery", "Wireless Charging", "LED Indicator"],
    inStock: true,
    category: "Battery",
  },
]

export default function CasesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState("all")

  const brands = ["all", ...Array.from(new Set(cases.map((item) => item.brand)))]
  const categories = ["all", ...Array.from(new Set(cases.map((item) => item.category)))]

  const filteredCases = cases.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = selectedBrand === "all" || item.brand === selectedBrand
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory

    let matchesPrice = true
    if (priceRange === "under-20k") matchesPrice = item.price < 20000
    else if (priceRange === "20k-40k") matchesPrice = item.price >= 20000 && item.price <= 40000
    else if (priceRange === "above-40k") matchesPrice = item.price > 40000

    return matchesSearch && matchesBrand && matchesCategory && matchesPrice
  })

  const sortedCases = [...filteredCases].sort((a, b) => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Phone Cases</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protect your device with our collection of premium cases. From rugged protection to elegant leather, find
              the perfect case for your lifestyle.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-lg">
              <Shield className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">Original Products</h3>
                <p className="text-sm text-green-600">100% Authentic Cases</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Truck className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-800">Same Day Delivery</h3>
                <p className="text-sm text-blue-600">Lagos & Abuja</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-purple-50 rounded-lg">
              <Award className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="font-semibold text-purple-800">30-Day Support</h3>
                <p className="text-sm text-purple-600">Free Tech Support</p>
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
                  placeholder="Search cases..."
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
                <SelectItem value="under-20k">Under ₦20,000</SelectItem>
                <SelectItem value="20k-40k">₦20,000 - ₦40,000</SelectItem>
                <SelectItem value="above-40k">Above ₦40,000</SelectItem>
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
              Showing {sortedCases.length} of {cases.length} cases
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
          {sortedCases.map((caseItem) => (
            <ProductCard
              key={caseItem.id}
              product={{
                ...caseItem,
                href: `/products/accessories/cases/${caseItem.id}`,
              }}
              viewMode={viewMode}
            />
          ))}
        </div>

        {sortedCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cases found matching your criteria.</p>
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
