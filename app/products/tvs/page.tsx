"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { Pagination } from "@/components/ui/pagination"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

// Generate 200 TV products
const generateTVProducts = () => {
  const brands = ["Samsung", "LG", "Sony", "TCL", "Hisense", "Philips", "Panasonic", "Toshiba", "Vizio", "Sharp"]
  const series = ["QLED", "OLED", "Neo QLED", "Crystal UHD", "NanoCell", "Bravia", "The Frame", "Master Series", "ULED"]
  const sizes = ['32"', '43"', '50"', '55"', '58"', '65"', '70"', '75"', '77"', '82"', '85"', '98"']
  const resolutions = ["HD", "Full HD", "4K Ultra HD", "8K Ultra HD"]
  const features = [
    "Smart TV",
    "HDR",
    "HDR10+",
    "Dolby Vision",
    "Dolby Atmos",
    "HDMI 2.1",
    "120Hz Refresh Rate",
    "Gaming Mode",
    "Voice Control",
    "Bluetooth",
    "Wi-Fi",
    "AirPlay",
    "Chromecast",
    "Ambient Mode",
    "Local Dimming",
  ]

  const products = []

  for (let i = 1; i <= 200; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)]
    const productSeries = series[Math.floor(Math.random() * series.length)]
    const size = sizes[Math.floor(Math.random() * sizes.length)]
    const resolution = resolutions[Math.floor(Math.random() * resolutions.length)]

    // Select 4-7 random features
    const numFeatures = Math.floor(Math.random() * 4) + 4
    const productFeatures = []
    const featuresCopy = [...features]
    for (let j = 0; j < numFeatures; j++) {
      const randomIndex = Math.floor(Math.random() * featuresCopy.length)
      productFeatures.push(featuresCopy[randomIndex])
      featuresCopy.splice(randomIndex, 1)
    }

    // Generate model number
    const modelYear = Math.floor(Math.random() * 4) + 2020
    const modelSeries = String.fromCharCode(65 + Math.floor(Math.random() * 10))
    const modelNumber = Math.floor(Math.random() * 900) + 100
    const model = `${modelYear} ${modelSeries}${modelNumber}`

    // Generate price between 80,000 and 5,000,000 Naira
    const basePrice = Math.floor(Math.random() * (5000000 - 80000) + 80000)
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
    const image = `/placeholder.svg?height=400&width=400&text=TV+${brand}+${size}`

    products.push({
      id: i,
      name: `${brand} ${size} ${productSeries} ${resolution} Smart TV (${model})`,
      price: price,
      originalPrice: originalPrice,
      rating: rating,
      image: image,
      category: "TVs",
      badge: badge,
      href: `/products/tvs/${brand.toLowerCase()}-${size.replace('"', "")}-${i}`,
      specs: [
        `${size} Screen Size`,
        `${resolution} Resolution`,
        ...productFeatures,
        `Model: ${model}`,
        `Connectivity: HDMI, USB, Wi-Fi, Bluetooth`,
        `Audio: ${Math.floor(Math.random() * 30) + 20}W Output`,
      ],
      featured: i <= 8,
    })
  }

  return products
}

const allTVProducts = generateTVProducts()

export default function TVsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState(allTVProducts)
  const [filters, setFilters] = useState({
    brands: [] as string[],
    sizes: [] as string[],
    priceRange: [0, 5000000] as [number, number],
    resolutions: [] as string[],
  })
  const [showFilters, setShowFilters] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const productsPerPage = 20
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  // Extract unique brands, sizes, and resolutions for filters
  const uniqueBrands = Array.from(new Set(allTVProducts.map((p) => p.name.split(" ")[0])))
  const uniqueSizes = Array.from(new Set(allTVProducts.map((p) => p.specs[0].split(" ")[0])))
  const uniqueResolutions = Array.from(
    new Set(
      allTVProducts.map((p) => {
        const resolutionSpec = p.specs[1]
        return resolutionSpec.split(" ")[0] + " " + resolutionSpec.split(" ")[1]
      }),
    ),
  )

  // Apply filters
  useEffect(() => {
    let result = allTVProducts

    // Filter by tab
    if (activeTab !== "all") {
      result = result.filter((p) => p.name.toLowerCase().includes(activeTab.toLowerCase()))
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.name.split(" ")[0]))
    }

    // Filter by sizes
    if (filters.sizes.length > 0) {
      result = result.filter((p) => filters.sizes.includes(p.specs[0].split(" ")[0]))
    }

    // Filter by price range
    result = result.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

    // Filter by resolutions
    if (filters.resolutions.length > 0) {
      result = result.filter((p) => {
        const resolutionSpec = p.specs[1]
        const resolution = resolutionSpec.split(" ")[0] + " " + resolutionSpec.split(" ")[1]
        return filters.resolutions.includes(resolution)
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

  const handleSizeChange = (size: string) => {
    setFilters((prev) => {
      const newSizes = prev.sizes.includes(size) ? prev.sizes.filter((s) => s !== size) : [...prev.sizes, size]
      return { ...prev, sizes: newSizes }
    })
  }

  const handleResolutionChange = (resolution: string) => {
    setFilters((prev) => {
      const newResolutions = prev.resolutions.includes(resolution)
        ? prev.resolutions.filter((r) => r !== resolution)
        : [...prev.resolutions, resolution]
      return { ...prev, resolutions: newResolutions }
    })
  }

  const handlePriceChange = (value: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: value }))
  }

  const resetFilters = () => {
    setFilters({
      brands: [],
      sizes: [],
      priceRange: [0, 5000000],
      resolutions: [],
    })
    setActiveTab("all")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">TVs & Displays</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mobile filter toggle */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          {(filters.brands.length > 0 ||
            filters.sizes.length > 0 ||
            filters.resolutions.length > 0 ||
            filters.priceRange[0] > 0 ||
            filters.priceRange[1] < 5000000) && (
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
              filters.sizes.length > 0 ||
              filters.resolutions.length > 0 ||
              filters.priceRange[0] > 0 ||
              filters.priceRange[1] < 5000000) && (
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
                defaultValue={[0, 5000000]}
                value={filters.priceRange}
                max={5000000}
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

          {/* Size Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Screen Size</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {uniqueSizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={filters.sizes.includes(size)}
                    onCheckedChange={() => handleSizeChange(size)}
                  />
                  <label htmlFor={`size-${size}`} className="text-sm cursor-pointer">
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Resolution Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Resolution</h3>
            <div className="space-y-2">
              {uniqueResolutions.map((resolution) => (
                <div key={resolution} className="flex items-center space-x-2">
                  <Checkbox
                    id={`resolution-${resolution}`}
                    checked={filters.resolutions.includes(resolution)}
                    onCheckedChange={() => handleResolutionChange(resolution)}
                  />
                  <label htmlFor={`resolution-${resolution}`} className="text-sm cursor-pointer">
                    {resolution}
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
                All TVs
              </TabsTrigger>
              <TabsTrigger value="Samsung" className="px-4">
                Samsung
              </TabsTrigger>
              <TabsTrigger value="LG" className="px-4">
                LG
              </TabsTrigger>
              <TabsTrigger value="Sony" className="px-4">
                Sony
              </TabsTrigger>
              <TabsTrigger value="TCL" className="px-4">
                TCL
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No TVs match your filters</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your filters or browse all TVs</p>
                  <Button onClick={resetFilters} className="mt-4">
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm text-muted-foreground">
                      Showing {Math.min(filteredProducts.length, startIndex + 1)}-
                      {Math.min(filteredProducts.length, startIndex + productsPerPage)} of {filteredProducts.length} TVs
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
            <TabsContent value="Samsung" className="mt-6">
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

            <TabsContent value="LG" className="mt-6">
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

            <TabsContent value="Sony" className="mt-6">
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

            <TabsContent value="TCL" className="mt-6">
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
