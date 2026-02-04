"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { Pagination } from "@/components/ui/pagination"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

// Generate 200 gaming products
const generateGamingProducts = () => {
  const categories = [
    "Consoles",
    "Controllers",
    "Headsets",
    "Gaming Chairs",
    "Gaming Monitors",
    "Gaming Laptops",
    "Gaming Accessories",
  ]
  const brands = {
    Consoles: ["Sony", "Microsoft", "Nintendo", "Valve", "Meta"],
    Controllers: ["Sony", "Microsoft", "Nintendo", "Razer", "Logitech", "PowerA", "8BitDo", "Scuf"],
    Headsets: ["SteelSeries", "HyperX", "Razer", "Logitech", "Corsair", "Astro", "Sony", "Microsoft"],
    "Gaming Chairs": ["Secretlab", "DXRacer", "AKRacing", "Noblechairs", "Corsair", "Cougar", "GTRacing"],
    "Gaming Monitors": ["ASUS", "Acer", "LG", "Samsung", "MSI", "Dell", "BenQ", "AOC", "Gigabyte"],
    "Gaming Laptops": ["ASUS", "Acer", "MSI", "Lenovo", "HP", "Dell", "Razer", "Gigabyte"],
    "Gaming Accessories": ["Razer", "Logitech", "Corsair", "SteelSeries", "HyperX", "ASUS", "MSI"],
  }

  const models = {
    Consoles: [
      "PlayStation 5",
      "PlayStation 5 Digital",
      "Xbox Series X",
      "Xbox Series S",
      "Nintendo Switch",
      "Nintendo Switch OLED",
      "Steam Deck",
      "Quest 3",
    ],
    Controllers: [
      "DualSense",
      "Xbox Wireless",
      "Pro Controller",
      "Wolverine",
      "G915",
      "Enhanced",
      "SN30 Pro",
      "Instinct Pro",
    ],
    Headsets: ["Arctis", "Cloud", "Kraken", "G Pro X", "Virtuoso", "A50", "Pulse 3D", "Xbox Wireless"],
    "Gaming Chairs": ["Titan Evo", "Racing", "Core", "Epic", "T3", "Armor", "Pro"],
    "Gaming Monitors": [
      "ROG Swift",
      "Predator",
      "UltraGear",
      "Odyssey",
      "Optix",
      "Alienware",
      "ZOWIE",
      "AGON",
      "AORUS",
    ],
    "Gaming Laptops": ["ROG Zephyrus", "Predator Helios", "GE Raider", "Legion", "Omen", "Alienware", "Blade", "AORUS"],
    "Gaming Accessories": ["BlackShark", "G502", "K100", "QcK", "Alloy", "ROG Gladius", "Clutch"],
  }

  const specs = {
    Consoles: [
      "4K Gaming",
      "8K Ready",
      "120Hz Output",
      "Ray Tracing",
      "SSD Storage",
      "Backward Compatible",
      "Digital Only",
      "Disc Drive",
      "Portable",
      "OLED Display",
      "HDR Support",
    ],
    Controllers: [
      "Wireless",
      "Bluetooth",
      "USB-C",
      "Haptic Feedback",
      "Adaptive Triggers",
      "Programmable Buttons",
      "Customizable",
      "RGB Lighting",
      "Rechargeable Battery",
      "Motion Controls",
    ],
    Headsets: [
      "Wireless",
      "Surround Sound",
      "Noise Cancelling Mic",
      "RGB Lighting",
      "Memory Foam Earpads",
      "Bluetooth",
      "Multi-Platform",
      "Long Battery Life",
      "Lightweight",
      "Detachable Mic",
    ],
    "Gaming Chairs": [
      "Ergonomic Design",
      "Lumbar Support",
      "4D Armrests",
      "Reclining",
      "Premium Materials",
      "Memory Foam",
      "Breathable Fabric",
      "PU Leather",
      "Steel Frame",
      "Adjustable Height",
    ],
    "Gaming Monitors": [
      "144Hz",
      "165Hz",
      "240Hz",
      "360Hz",
      "1ms Response Time",
      "IPS Panel",
      "VA Panel",
      "HDR",
      "G-Sync",
      "FreeSync",
      "Curved",
      "Ultra-wide",
      "4K",
      "1440p",
      "RGB Lighting",
    ],
    "Gaming Laptops": [
      "RTX 4090",
      "RTX 4080",
      "RTX 4070",
      "RTX 4060",
      "Intel Core i9",
      "Intel Core i7",
      "AMD Ryzen 9",
      "AMD Ryzen 7",
      "32GB RAM",
      "16GB RAM",
      "1TB SSD",
      "2TB SSD",
      "QHD Display",
      "240Hz Display",
    ],
    "Gaming Accessories": [
      "RGB Lighting",
      "Programmable Buttons",
      "Wireless",
      "Mechanical Switches",
      "Optical Switches",
      "Customizable",
      "Software Support",
      "Low Latency",
      "Ergonomic Design",
      "Premium Build",
    ],
  }

  const products = []

  for (let i = 1; i <= 200; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const brandList = brands[category as keyof typeof brands]
    const brand = brandList[Math.floor(Math.random() * brandList.length)]

    const modelList = models[category as keyof typeof models]
    const model = modelList[Math.floor(Math.random() * modelList.length)]

    const specList = specs[category as keyof typeof specs]
    // Select 3-5 random specs
    const numSpecs = Math.floor(Math.random() * 3) + 3
    const productSpecs = []
    const specsCopy = [...specList]
    for (let j = 0; j < numSpecs; j++) {
      const randomIndex = Math.floor(Math.random() * specsCopy.length)
      productSpecs.push(specsCopy[randomIndex])
      specsCopy.splice(randomIndex, 1)
    }

    // Generate price based on category
    let minPrice, maxPrice
    switch (category) {
      case "Consoles":
        minPrice = 200000
        maxPrice = 800000
        break
      case "Controllers":
        minPrice = 20000
        maxPrice = 150000
        break
      case "Headsets":
        minPrice = 15000
        maxPrice = 200000
        break
      case "Gaming Chairs":
        minPrice = 80000
        maxPrice = 500000
        break
      case "Gaming Monitors":
        minPrice = 100000
        maxPrice = 1200000
        break
      case "Gaming Laptops":
        minPrice = 500000
        maxPrice = 3000000
        break
      case "Gaming Accessories":
        minPrice = 5000
        maxPrice = 100000
        break
      default:
        minPrice = 10000
        maxPrice = 500000
    }

    const basePrice = Math.floor(Math.random() * (maxPrice - minPrice) + minPrice)
    // Round to nearest thousand
    const price = Math.round(basePrice / 1000) * 1000

    // 30% chance of having a discount
    const hasDiscount = Math.random() < 0.3
    const originalPrice = hasDiscount
      ? price + Math.round((price * (Math.random() * 0.3 + 0.1)) / 1000) * 1000
      : undefined

    // 20% chance of having a badge
    const hasBadge = Math.random() < 0.2
    const badges = ["New", "Bestseller", "Limited", "Sale", "Premium"]
    const badge = hasBadge ? badges[Math.floor(Math.random() * badges.length)] : undefined

    // Generate rating between 3.5 and 5.0
    const rating = Number.parseFloat((Math.random() * 1.5 + 3.5).toFixed(1))

    // Generate image URL
    const imageNumber = (i % 20) + 1 // Cycle through 20 images
    const image = `/placeholder.svg?height=400&width=400&text=Gaming+${category}+${brand}`

    // Generate model variant or color
    const variants = ["Black", "White", "Red", "Blue", "Green", "RGB", "Limited Edition", "Pro", "Elite", "Standard"]
    const variant = variants[Math.floor(Math.random() * variants.length)]

    const productName = `${brand} ${model} ${variant} ${category.slice(0, -1)}`

    products.push({
      id: i,
      name: productName,
      price: price,
      originalPrice: originalPrice,
      rating: rating,
      image: image,
      category: "Gaming",
      subcategory: category,
      badge: badge,
      href: `/products/gaming/${brand.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, "-")}-${i}`,
      specs: [
        `${category.slice(0, -1)}`,
        `Brand: ${brand}`,
        ...productSpecs,
        `Model: ${model} ${variant}`,
        `Warranty: 1 Year`,
      ],
      featured: i <= 8,
    })
  }

  return products
}

const allGamingProducts = generateGamingProducts()

export default function GamingPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState(allGamingProducts)
  const [filters, setFilters] = useState({
    brands: [] as string[],
    categories: [] as string[],
    priceRange: [0, 3000000] as [number, number],
    features: [] as string[],
  })
  const [showFilters, setShowFilters] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const productsPerPage = 20
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  // Extract unique brands, categories, and features for filters
  const uniqueBrands = Array.from(new Set(allGamingProducts.map((p) => p.specs[1].split(": ")[1])))
  const uniqueCategories = Array.from(new Set(allGamingProducts.map((p) => p.subcategory)))

  // Get all features from specs (excluding first two and last two items)
  const allFeatures = allGamingProducts.flatMap((p) => p.specs.slice(2, -2))
  const uniqueFeatures = Array.from(new Set(allFeatures))

  // Apply filters
  useEffect(() => {
    let result = allGamingProducts

    // Filter by tab
    if (activeTab !== "all") {
      if (
        activeTab === "Consoles" ||
        activeTab === "Controllers" ||
        activeTab === "Headsets" ||
        activeTab === "Chairs" ||
        activeTab === "Monitors" ||
        activeTab === "Laptops"
      ) {
        result = result.filter((p) => p.subcategory.includes(activeTab))
      } else {
        result = result.filter((p) => p.specs[1].includes(activeTab))
      }
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.specs[1].split(": ")[1]))
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.subcategory))
    }

    // Filter by price range
    result = result.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

    // Filter by features
    if (filters.features.length > 0) {
      result = result.filter((p) => {
        const productFeatures = p.specs.slice(2, -2)
        return filters.features.some((f) => productFeatures.includes(f))
      })
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [filters, activeTab])

  const handleBrandChange = (brand: string) => {
    setFilters((prev) => {
      const newBrands = prev.brands.includes(brand) ? prev.brands.filter((b) => b !== brand) : [...prev.brands, brand]
      return { ...prev, brands: newBrands }
    })
  }

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category]
      return { ...prev, categories: newCategories }
    })
  }

  const handleFeatureChange = (feature: string) => {
    setFilters((prev) => {
      const newFeatures = prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature]
      return { ...prev, features: newFeatures }
    })
  }

  const handlePriceChange = (value: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: value }))
  }

  const resetFilters = () => {
    setFilters({
      brands: [],
      categories: [],
      priceRange: [0, 3000000],
      features: [],
    })
    setActiveTab("all")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gaming Products</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mobile filter toggle */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          {(filters.brands.length > 0 ||
            filters.categories.length > 0 ||
            filters.features.length > 0 ||
            filters.priceRange[0] > 0 ||
            filters.priceRange[1] < 3000000) && (
            <Button variant="ghost" onClick={resetFilters} className="text-sm">
              Reset Filters
            </Button>
          )}
        </div>

        {/* Filters sidebar */}
        <div className={`${showFilters ? "block" : "hidden"} lg:block lg:w-1/4 space-y-6`}>
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="hidden lg:flex justify-between items-center">
            <h2 className="text-lg font-semibold">Filters</h2>
            {(filters.brands.length > 0 ||
              filters.categories.length > 0 ||
              filters.features.length > 0 ||
              filters.priceRange[0] > 0 ||
              filters.priceRange[1] < 3000000) && (
              <Button variant="ghost" onClick={resetFilters} className="text-sm">
                Reset
              </Button>
            )}
          </div>

          {/* Price Range Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Price Range</h3>
            <div className="px-2">
              <Slider
                defaultValue={[0, 3000000]}
                value={filters.priceRange}
                max={3000000}
                step={50000}
                onValueChange={handlePriceChange}
                className="mb-6"
              />
              <div className="flex justify-between text-sm">
                <span>₦{filters.priceRange[0].toLocaleString()}</span>
                <span>₦{filters.priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Category</h3>
            <div className="space-y-2">
              {uniqueCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Brand</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {uniqueBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                  />
                  <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Features Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Features</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {uniqueFeatures.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={`feature-${feature}`}
                    checked={filters.features.includes(feature)}
                    onCheckedChange={() => handleFeatureChange(feature)}
                  />
                  <label htmlFor={`feature-${feature}`} className="text-sm cursor-pointer">
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product listing */}
        <div className="lg:w-3/4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start sm:justify-center">
              <TabsTrigger value="all" className="px-4">
                All Gaming
              </TabsTrigger>
              <TabsTrigger value="Consoles" className="px-4">
                Consoles
              </TabsTrigger>
              <TabsTrigger value="Controllers" className="px-4">
                Controllers
              </TabsTrigger>
              <TabsTrigger value="Headsets" className="px-4">
                Headsets
              </TabsTrigger>
              <TabsTrigger value="Chairs" className="px-4">
                Gaming Chairs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No gaming products match your filters</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your filters or browse all gaming products</p>
                  <Button onClick={resetFilters} className="mt-4">
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-muted-foreground">
                      Showing {Math.min(filteredProducts.length, startIndex + 1)}-
                      {Math.min(filteredProducts.length, startIndex + productsPerPage)} of {filteredProducts.length}{" "}
                      gaming products
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentProducts.map((product) => (
                      <ProductCard key={product.id} product={product} showDiscount={true} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="mt-8 flex justify-center">
                      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                    </div>
                  )}
                </>
              )}
            </TabsContent>

            {/* Other tabs have the same content structure */}
            <TabsContent value="Consoles" className="mt-6">
              {/* Same structure as "all" tab */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} showDiscount={true} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
              )}
            </TabsContent>

            <TabsContent value="Controllers" className="mt-6">
              {/* Same structure as "all" tab */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} showDiscount={true} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
              )}
            </TabsContent>

            <TabsContent value="Headsets" className="mt-6">
              {/* Same structure as "all" tab */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} showDiscount={true} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
              )}
            </TabsContent>

            <TabsContent value="Chairs" className="mt-6">
              {/* Same structure as "all" tab */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} showDiscount={true} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
