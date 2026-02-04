"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { Pagination } from "@/components/ui/pagination"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"

// Generate 200 camera products
const generateCameraProducts = () => {
  const brands = [
    "Canon",
    "Nikon",
    "Sony",
    "Fujifilm",
    "Panasonic",
    "Olympus",
    "Leica",
    "Pentax",
    "Hasselblad",
    "GoPro",
  ]
  const types = [
    "DSLR",
    "Mirrorless",
    "Point & Shoot",
    "Action Camera",
    "Medium Format",
    "Film Camera",
    "Instant Camera",
  ]
  const models = [
    "EOS R5",
    "EOS R6",
    "EOS 5D",
    "EOS 90D",
    "Z9",
    "Z8",
    "Z7",
    "Z6",
    "D850",
    "D780",
    "A7 IV",
    "A7R V",
    "A1",
    "A6700",
    "X-T5",
    "X-H2",
    "X100VI",
    "GFX 100S",
    "Lumix S5",
    "Lumix GH6",
    "OM-1",
    "PEN-F",
    "M11",
    "Q3",
    "K-3 III",
    "X2D 100C",
    "HERO12",
    "HERO11",
    "MAX",
  ]
  const lenses = [
    "Kit Lens",
    "24-70mm f/2.8",
    "70-200mm f/2.8",
    "16-35mm f/2.8",
    "50mm f/1.4",
    "85mm f/1.4",
    "100-400mm f/4.5-5.6",
  ]
  const sensors = ["Full Frame", "APS-C", "Micro Four Thirds", "1-inch", "Medium Format"]
  const resolutions = ["20MP", "24MP", "26MP", "30MP", "33MP", "45MP", "50MP", "61MP", "100MP"]
  const features = [
    "4K Video",
    "8K Video",
    "In-body Stabilization",
    "Weather Sealed",
    "Dual Card Slots",
    "Flip Screen",
    "Eye AF",
    "Animal AF",
    "Bird AF",
    "High-speed Continuous Shooting",
  ]

  const products = []

  for (let i = 1; i <= 200; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)]
    const type = types[Math.floor(Math.random() * types.length)]
    const model = models[Math.floor(Math.random() * models.length)]
    const lens = type === "DSLR" || type === "Mirrorless" ? lenses[Math.floor(Math.random() * lenses.length)] : ""
    const sensor = sensors[Math.floor(Math.random() * sensors.length)]
    const resolution = resolutions[Math.floor(Math.random() * resolutions.length)]

    // Select 3-5 random features
    const numFeatures = Math.floor(Math.random() * 3) + 3
    const productFeatures = []
    const featuresCopy = [...features]
    for (let j = 0; j < numFeatures; j++) {
      const randomIndex = Math.floor(Math.random() * featuresCopy.length)
      productFeatures.push(featuresCopy[randomIndex])
      featuresCopy.splice(randomIndex, 1)
    }

    // Generate price between 50,000 and 3,000,000 Naira
    const basePrice = Math.floor(Math.random() * (3000000 - 50000) + 50000)
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
    const image = `/placeholder.svg?height=400&width=400&text=Camera+${brand}+${model}`

    const productName = lens ? `${brand} ${model} ${type} with ${lens}` : `${brand} ${model} ${type}`

    products.push({
      id: i,
      name: productName,
      price: price,
      originalPrice: originalPrice,
      rating: rating,
      image: image,
      category: "Cameras",
      badge: badge,
      href: `/products/cameras/${brand.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, "-")}-${i}`,
      specs: [
        `${type}`,
        `${sensor} Sensor, ${resolution}`,
        ...productFeatures,
        lens ? `Lens: ${lens}` : "",
        `ISO Range: 100-${Math.pow(2, Math.floor(Math.random() * 7) + 10)}`,
        `Max Shutter Speed: 1/${Math.pow(2, Math.floor(Math.random() * 5) + 10)}s`,
      ].filter(Boolean),
      featured: i <= 8,
    })
  }

  return products
}

const allCameraProducts = generateCameraProducts()

export default function CamerasPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState(allCameraProducts)
  const [filters, setFilters] = useState({
    brands: [] as string[],
    types: [] as string[],
    priceRange: [0, 3000000] as [number, number],
    sensors: [] as string[],
  })
  const [showFilters, setShowFilters] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const productsPerPage = 20
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  // Extract unique brands, types, and sensors for filters
  const uniqueBrands = Array.from(new Set(allCameraProducts.map((p) => p.name.split(" ")[0])))
  const uniqueTypes = Array.from(new Set(allCameraProducts.map((p) => p.specs[0])))
  const uniqueSensors = Array.from(
    new Set(
      allCameraProducts.map((p) => {
        const sensorSpec = p.specs[1]
        return sensorSpec.split(",")[0].trim()
      }),
    ),
  )

  // Apply filters
  useEffect(() => {
    let result = allCameraProducts

    // Filter by tab
    if (activeTab !== "all") {
      if (activeTab === "Mirrorless" || activeTab === "DSLR") {
        result = result.filter((p) => p.specs[0] === activeTab)
      } else {
        result = result.filter((p) => p.name.toLowerCase().includes(activeTab.toLowerCase()))
      }
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.name.split(" ")[0]))
    }

    // Filter by types
    if (filters.types.length > 0) {
      result = result.filter((p) => filters.types.includes(p.specs[0]))
    }

    // Filter by price range
    result = result.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

    // Filter by sensors
    if (filters.sensors.length > 0) {
      result = result.filter((p) => {
        const sensorSpec = p.specs[1]
        const sensor = sensorSpec.split(",")[0].trim()
        return filters.sensors.includes(sensor)
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

  const handleTypeChange = (type: string) => {
    setFilters((prev) => {
      const newTypes = prev.types.includes(type) ? prev.types.filter((t) => t !== type) : [...prev.types, type]
      return { ...prev, types: newTypes }
    })
  }

  const handleSensorChange = (sensor: string) => {
    setFilters((prev) => {
      const newSensors = prev.sensors.includes(sensor)
        ? prev.sensors.filter((s) => s !== sensor)
        : [...prev.sensors, sensor]
      return { ...prev, sensors: newSensors }
    })
  }

  const handlePriceChange = (value: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: value }))
  }

  const resetFilters = () => {
    setFilters({
      brands: [],
      types: [],
      priceRange: [0, 3000000],
      sensors: [],
    })
    setActiveTab("all")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cameras</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Mobile filter toggle */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          {(filters.brands.length > 0 ||
            filters.types.length > 0 ||
            filters.sensors.length > 0 ||
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
              filters.types.length > 0 ||
              filters.sensors.length > 0 ||
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

          {/* Type Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Camera Type</h3>
            <div className="space-y-2">
              {uniqueTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type}`}
                    checked={filters.types.includes(type)}
                    onCheckedChange={() => handleTypeChange(type)}
                  />
                  <label htmlFor={`type-${type}`} className="text-sm cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Sensor Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Sensor Type</h3>
            <div className="space-y-2">
              {uniqueSensors.map((sensor) => (
                <div key={sensor} className="flex items-center space-x-2">
                  <Checkbox
                    id={`sensor-${sensor}`}
                    checked={filters.sensors.includes(sensor)}
                    onCheckedChange={() => handleSensorChange(sensor)}
                  />
                  <label htmlFor={`sensor-${sensor}`} className="text-sm cursor-pointer">
                    {sensor}
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
                All Cameras
              </TabsTrigger>
              <TabsTrigger value="Mirrorless" className="px-4">
                Mirrorless
              </TabsTrigger>
              <TabsTrigger value="DSLR" className="px-4">
                DSLR
              </TabsTrigger>
              <TabsTrigger value="Canon" className="px-4">
                Canon
              </TabsTrigger>
              <TabsTrigger value="Sony" className="px-4">
                Sony
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No cameras match your filters</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your filters or browse all cameras</p>
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
                      cameras
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
            <TabsContent value="Mirrorless" className="mt-6">
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

            <TabsContent value="DSLR" className="mt-6">
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

            <TabsContent value="Canon" className="mt-6">
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
          </Tabs>
        </div>
      </div>
    </div>
  )
}
