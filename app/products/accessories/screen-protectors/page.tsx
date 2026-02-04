"use client"

import { useState } from "react"
import { Search, Grid, List, Shield, Award, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/product-card"

const screenProtectors = [
  {
    id: "tempered-glass-iphone15-pro",
    name: "Tempered Glass Screen Protector iPhone 15 Pro Max",
    brand: "Generic",
    price: 15000,
    originalPrice: 18000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 456,
    badge: "9H Hardness",
    badgeColor: "bg-blue-500",
    features: ["9H Hardness", "Anti-Fingerprint", "Case Friendly"],
    inStock: true,
    category: "Tempered Glass",
  },
  {
    id: "privacy-screen-protector-iphone15",
    name: "Privacy Screen Protector iPhone 15 Pro",
    brand: "Generic",
    price: 22000,
    originalPrice: 28000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 234,
    badge: "Privacy Protection",
    badgeColor: "bg-purple-500",
    features: ["Privacy Filter", "Anti-Spy", "9H Hardness"],
    inStock: true,
    category: "Privacy",
  },
  {
    id: "samsung-s24-ultra-protector",
    name: "Samsung Galaxy S24 Ultra Screen Protector",
    brand: "Samsung",
    price: 18000,
    originalPrice: 22000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 189,
    badge: "Original",
    badgeColor: "bg-green-500",
    features: ["Ultra Clear", "Bubble-Free", "Easy Installation"],
    inStock: true,
    category: "Tempered Glass",
  },
  {
    id: "hydrogel-film-universal",
    name: "Hydrogel Film Screen Protector (Universal)",
    brand: "Generic",
    price: 12000,
    originalPrice: 15000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 345,
    badge: "Self-Healing",
    badgeColor: "bg-teal-500",
    features: ["Self-Healing", "Flexible", "HD Clear"],
    inStock: true,
    category: "Hydrogel",
  },
  {
    id: "anti-blue-light-protector",
    name: "Anti-Blue Light Screen Protector iPhone 15",
    brand: "Generic",
    price: 20000,
    originalPrice: 25000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 167,
    badge: "Eye Protection",
    badgeColor: "bg-orange-500",
    features: ["Blue Light Filter", "Eye Protection", "9H Hardness"],
    inStock: true,
    category: "Anti-Blue Light",
  },
  {
    id: "matte-screen-protector-ipad",
    name: 'Matte Screen Protector iPad Pro 12.9"',
    brand: "Generic",
    price: 25000,
    originalPrice: 30000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 123,
    badge: "Paper-Like",
    badgeColor: "bg-amber-500",
    features: ["Paper-Like Feel", "Anti-Glare", "Apple Pencil Compatible"],
    inStock: true,
    category: "Matte",
  },
  {
    id: "camera-lens-protector-iphone15",
    name: "Camera Lens Protector iPhone 15 Pro Max",
    brand: "Generic",
    price: 11000,
    originalPrice: 14000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 278,
    badge: "Camera Protection",
    badgeColor: "bg-red-500",
    features: ["Camera Lens Protection", "9H Hardness", "HD Clear"],
    inStock: true,
    category: "Camera Lens",
  },
  {
    id: "macbook-screen-protector-14",
    name: 'MacBook Pro 14" Screen Protector',
    brand: "Generic",
    price: 32000,
    originalPrice: 38000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.1,
    reviews: 89,
    badge: "Laptop Protection",
    badgeColor: "bg-gray-600",
    features: ["Anti-Glare", "Easy Removal", "Bubble-Free"],
    inStock: true,
    category: "Laptop",
  },
  {
    id: "apple-watch-protector-ultra",
    name: "Apple Watch Ultra Screen Protector",
    brand: "Generic",
    price: 16000,
    originalPrice: 20000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 156,
    badge: "Watch Protection",
    badgeColor: "bg-indigo-500",
    features: ["Curved Edge", "HD Clear", "Easy Installation"],
    inStock: true,
    category: "Smartwatch",
  },
  {
    id: "gaming-phone-protector",
    name: "Gaming Phone Screen Protector (Anti-Fingerprint)",
    brand: "Generic",
    price: 17000,
    originalPrice: 21000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 234,
    badge: "Gaming Optimized",
    badgeColor: "bg-pink-500",
    features: ["Touch Sensitive", "Anti-Fingerprint", "Gaming Optimized"],
    inStock: true,
    category: "Gaming",
  },
  {
    id: "foldable-phone-protector",
    name: "Foldable Phone Screen Protector",
    brand: "Generic",
    price: 28000,
    originalPrice: 35000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.0,
    reviews: 67,
    badge: "Foldable Compatible",
    badgeColor: "bg-cyan-500",
    features: ["Foldable Design", "Ultra-Thin", "Self-Healing"],
    inStock: true,
    category: "Foldable",
  },
  {
    id: "tablet-screen-protector-universal",
    name: 'Universal Tablet Screen Protector 10.1"',
    brand: "Generic",
    price: 19000,
    originalPrice: 24000,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
    rating: 4.1,
    reviews: 145,
    badge: "Universal Fit",
    badgeColor: "bg-green-600",
    features: ["Universal Fit", "HD Clear", "Scratch Resistant"],
    inStock: true,
    category: "Tablet",
  },
]

export default function ScreenProtectorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState("all")

  const brands = ["all", ...Array.from(new Set(screenProtectors.map((item) => item.brand)))]
  const categories = ["all", ...Array.from(new Set(screenProtectors.map((item) => item.category)))]

  const filteredProtectors = screenProtectors.filter((item) => {
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

  const sortedProtectors = [...filteredProtectors].sort((a, b) => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Screen Protectors</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protect your device's screen with our premium collection of screen protectors. From tempered glass to
              privacy filters, find the perfect protection for your smartphone, tablet, or laptop.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-blue-800">9H Hardness</h3>
                <p className="text-sm text-blue-600">Maximum Scratch Protection</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 rounded-lg">
              <Eye className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">HD Clarity</h3>
                <p className="text-sm text-green-600">Crystal Clear Display</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-purple-50 rounded-lg">
              <Award className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="font-semibold text-purple-800">Easy Installation</h3>
                <p className="text-sm text-purple-600">Bubble-Free Application</p>
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
                  placeholder="Search screen protectors..."
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
              Showing {sortedProtectors.length} of {screenProtectors.length} screen protectors
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
          {sortedProtectors.map((protector) => (
            <ProductCard
              key={protector.id}
              product={{
                ...protector,
                href: `/products/accessories/screen-protectors/${protector.id}`,
              }}
              viewMode={viewMode}
            />
          ))}
        </div>

        {sortedProtectors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No screen protectors found matching your criteria.</p>
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
