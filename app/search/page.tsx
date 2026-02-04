"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ChevronRight, Search, X, Sliders } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ProductCard } from "@/components/product-card"

// Sample product data
const allProducts = [
  { id: 1, name: "iPhone 15 Pro Max", price: 1299.99, category: "Smartphones", image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop" },
  { id: 2, name: "Samsung Galaxy S24", price: 999.99, category: "Smartphones", image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop" },
  { id: 3, name: "MacBook Pro 16", price: 2499.99, category: "Laptops", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop" },
  { id: 4, name: "iPad Pro", price: 1099.99, category: "Tablets", image: "https://images.unsplash.com/photo-1483058712002-4426c947278d?w=400&h=400&fit=crop" },
  { id: 5, name: "AirPods Pro", price: 249.99, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
  { id: 6, name: "Sony WH-1000XM5", price: 399.99, category: "Audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
  { id: 7, name: "Canon EOS R5", price: 3899.99, category: "Cameras", image: "https://images.unsplash.com/photo-1612198188060-c7a6a1c9fbc1?w=400&h=400&fit=crop" },
  { id: 8, name: "PlayStation 5", price: 499.99, category: "Gaming", image: "https://images.unsplash.com/photo-1606841837239-c5a1a8a07af7?w=400&h=400&fit=crop" },
  { id: 9, name: "Apple Watch Ultra", price: 799.99, category: "Wearables", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
  { id: 10, name: "USB-C Cable", price: 19.99, category: "Accessories", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop" },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState("relevance")
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const categories = Array.from(new Set(allProducts.map(p => p.category)))

  const filteredProducts = useMemo(() => {
    let results = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesSearch && matchesCategory && matchesPrice
    })

    // Sort results
    switch (sortBy) {
      case "price-low":
        results.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        results.sort((a, b) => b.price - a.price)
        break
      case "name":
        results.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return results
  }, [searchQuery, selectedCategories, priceRange, sortBy])

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setPriceRange([0, 5000])
    setSortBy("relevance")
  }

  const hasActiveFilters = searchQuery || selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000 || sortBy !== "relevance"

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Search Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Search Products</h1>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          {/* Mobile Filter Button */}
          <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden bg-transparent">
                <Sliders className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                {/* Categories */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Categories</Label>
                  {categories.map(cat => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox
                        id={`mobile-${cat}`}
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={() => toggleCategory(cat)}
                      />
                      <label htmlFor={`mobile-${cat}`} className="text-sm cursor-pointer">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Price Range</Label>
                  <Slider
                    min={0}
                    max={5000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                {/* Categories */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Categories</Label>
                  {categories.map(cat => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox
                        id={cat}
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={() => toggleCategory(cat)}
                      />
                      <label htmlFor={cat} className="text-sm cursor-pointer">
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Price Range</Label>
                  <Slider
                    min={0}
                    max={5000}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sort Options */}
            <div className="flex justify-between items-center flex-wrap gap-2">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm bg-background"
              >
                <option value="relevance">Most Relevant</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
