"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { Pagination } from "@/components/ui/pagination"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"
import { AccessoriesNavigation } from "@/components/accessories-navigation"
import { CategoryCount } from "./category-count"

// Generate 200 accessory products
const generateAccessoryProducts = () => {
  const categories = [
    "Chargers",
    "Cables",
    "Power Banks",
    "Cases",
    "Screen Protectors",
    "Keyboards",
    "Mice",
    "USB Hubs",
    "Adapters",
    "Mobile Gaming",
    "Camera Accessories",
    "Stands",
    "Mounts",
    "Storage",
    "Cleaning Kits",
  ]

  const brands = [
    "Apple",
    "Samsung",
    "Anker",
    "Belkin",
    "Spigen",
    "Logitech",
    "OtterBox",
    "UGREEN",
    "Baseus",
    "AUKEY",
    "RAVPower",
    "Mophie",
    "JBL",
    "SanDisk",
    "WD",
  ]

  const compatibilities = [
    "iPhone",
    "Samsung Galaxy",
    "iPad",
    "MacBook",
    "Android",
    "Windows",
    "USB-C",
    "Lightning",
    "Micro USB",
    "Universal",
    "Thunderbolt",
    "HDMI",
  ]

  const products = []

  for (let i = 1; i <= 200; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const brand = brands[Math.floor(Math.random() * brands.length)]

    // Generate product name based on category
    let productName = ""
    let specs = []

    switch (category) {
      case "Chargers":
        const chargerTypes = ["Wall Charger", "Car Charger", "Wireless Charger", "GaN Charger", "Multi-Port Charger"]
        const chargerType = chargerTypes[Math.floor(Math.random() * chargerTypes.length)]
        const wattage = [18, 20, 25, 30, 45, 65, 100][Math.floor(Math.random() * 7)]
        productName = `${brand} ${wattage}W ${chargerType}`
        specs = [
          `${wattage}W Power Delivery`,
          `${Math.floor(Math.random() * 3) + 1} Ports`,
          `Fast Charging`,
          `Compatible with ${compatibilities[Math.floor(Math.random() * compatibilities.length)]}`,
        ]
        break

      case "Cables":
        const cableTypes = ["Charging Cable", "Data Cable", "Braided Cable", "Coiled Cable"]
        const cableType = cableTypes[Math.floor(Math.random() * cableTypes.length)]
        const cableLength = [0.5, 1, 1.5, 2, 3][Math.floor(Math.random() * 5)]
        const connector = [
          "USB-C to USB-C",
          "USB-C to Lightning",
          "USB-A to USB-C",
          "USB-A to Lightning",
          "USB-A to Micro USB",
        ][Math.floor(Math.random() * 5)]
        productName = `${brand} ${connector} ${cableType} ${cableLength}m`
        specs = [
          `${cableLength}m Length`,
          `${connector}`,
          `Fast Charging Support`,
          `Durable ${Math.random() > 0.5 ? "Nylon" : "TPE"} Material`,
        ]
        break

      case "Power Banks":
        const capacity = [5000, 10000, 15000, 20000, 25000, 30000][Math.floor(Math.random() * 6)]
        productName = `${brand} ${capacity}mAh Power Bank`
        specs = [
          `${capacity}mAh Capacity`,
          `${Math.floor(Math.random() * 2) + 1} USB-A Ports`,
          `${Math.floor(Math.random() * 2) + 1} USB-C Ports`,
          `Fast Charging`,
          `Compact Design`,
        ]
        break

      case "Cases":
        const deviceTypes = ["iPhone", "Samsung Galaxy", "Google Pixel", "iPad"]
        const deviceType = deviceTypes[Math.floor(Math.random() * deviceTypes.length)]
        const caseTypes = ["Protective Case", "Slim Case", "Wallet Case", "Clear Case", "Rugged Case", "Folio Case"]
        const caseType = caseTypes[Math.floor(Math.random() * caseTypes.length)]
        const model =
          deviceType === "iPhone"
            ? ["13", "14", "15", "15 Pro", "15 Pro Max"][Math.floor(Math.random() * 5)]
            : deviceType === "Samsung Galaxy"
              ? ["S23", "S23+", "S23 Ultra", "S24", "S24+", "S24 Ultra"][Math.floor(Math.random() * 6)]
              : deviceType === "Google Pixel"
                ? ["7", "7 Pro", "8", "8 Pro"][Math.floor(Math.random() * 4)]
                : ["Pro", "Air", "Mini"][Math.floor(Math.random() * 3)]
        productName = `${brand} ${caseType} for ${deviceType} ${model}`
        specs = [
          `For ${deviceType} ${model}`,
          `${caseType}`,
          `${Math.random() > 0.5 ? "Wireless Charging Compatible" : "Screen Protection"}`,
          `${Math.random() > 0.5 ? "Military-Grade Drop Protection" : "Slim Profile"}`,
        ]
        break

      case "Screen Protectors":
        const screenDevices = ["iPhone", "Samsung Galaxy", "iPad", "MacBook"]
        const screenDevice = screenDevices[Math.floor(Math.random() * screenDevices.length)]
        const protectorTypes = ["Tempered Glass", "Privacy Glass", "Anti-Glare", "Paper-Feel", "Nano Liquid"]
        const protectorType = protectorTypes[Math.floor(Math.random() * protectorTypes.length)]
        const screenModel =
          screenDevice === "iPhone"
            ? ["13", "14", "15", "15 Pro", "15 Pro Max"][Math.floor(Math.random() * 5)]
            : screenDevice === "Samsung Galaxy"
              ? ["S23", "S23+", "S23 Ultra", "S24", "S24+", "S24 Ultra"][Math.floor(Math.random() * 6)]
              : screenDevice === "iPad"
                ? ["Pro", "Air", "Mini"][Math.floor(Math.random() * 3)]
                : ["Pro", "Air"][Math.floor(Math.random() * 2)]
        productName = `${brand} ${protectorType} Screen Protector for ${screenDevice} ${screenModel}`
        specs = [
          `For ${screenDevice} ${screenModel}`,
          `${protectorType}`,
          `${Math.random() > 0.5 ? "9H Hardness" : "Oleophobic Coating"}`,
          `${Math.random() > 0.5 ? "Easy Installation" : "Bubble-Free"}`,
        ]
        break

      case "Keyboards":
        const keyboardTypes = [
          "Mechanical Keyboard",
          "Wireless Keyboard",
          "Bluetooth Keyboard",
          "Ergonomic Keyboard",
          "Foldable Keyboard",
        ]
        const keyboardType = keyboardTypes[Math.floor(Math.random() * keyboardTypes.length)]
        productName = `${brand} ${keyboardType}`
        specs = [
          `${keyboardType}`,
          `${Math.random() > 0.5 ? "RGB Backlit" : "Compact Design"}`,
          `${Math.random() > 0.5 ? "Rechargeable Battery" : "Multi-Device Support"}`,
          `${Math.random() > 0.5 ? "Mechanical Switches" : "Quiet Keys"}`,
        ]
        break

      case "Mice":
        const mouseTypes = ["Wireless Mouse", "Bluetooth Mouse", "Gaming Mouse", "Ergonomic Mouse", "Trackball Mouse"]
        const mouseType = mouseTypes[Math.floor(Math.random() * mouseTypes.length)]
        productName = `${brand} ${mouseType}`
        specs = [
          `${mouseType}`,
          `${Math.random() > 0.5 ? "Adjustable DPI" : "Silent Clicks"}`,
          `${Math.random() > 0.5 ? "Rechargeable Battery" : "Long Battery Life"}`,
          `${Math.random() > 0.5 ? "Ergonomic Design" : "Compact Size"}`,
        ]
        break

      case "USB Hubs":
        const hubPorts = Math.floor(Math.random() * 8) + 3
        const hubTypes = ["USB-C Hub", "Thunderbolt Hub", "USB 3.0 Hub", "Multiport Adapter"]
        const hubType = hubTypes[Math.floor(Math.random() * hubTypes.length)]
        productName = `${brand} ${hubPorts}-Port ${hubType}`
        specs = [
          `${hubPorts} Ports`,
          `${hubType}`,
          `${Math.random() > 0.5 ? "HDMI Output" : "SD Card Reader"}`,
          `${Math.random() > 0.5 ? "Power Delivery" : "Data Transfer"}`,
        ]
        break

      case "Adapters":
        const adapterTypes = [
          "USB-C to HDMI",
          "USB-C to VGA",
          "USB-C to Ethernet",
          "HDMI to DisplayPort",
          "Audio Adapter",
        ]
        const adapterType = adapterTypes[Math.floor(Math.random() * adapterTypes.length)]
        productName = `${brand} ${adapterType} Adapter`
        specs = [
          `${adapterType}`,
          `${Math.random() > 0.5 ? "4K Support" : "Plug and Play"}`,
          `${Math.random() > 0.5 ? "Compact Design" : "Durable Construction"}`,
          `Compatible with ${compatibilities[Math.floor(Math.random() * compatibilities.length)]}`,
        ]
        break

      case "Mobile Gaming":
        const gamingTypes = ["Game Controller", "Gaming Grip", "Cooling Fan", "Trigger Buttons", "Gaming Headset"]
        const gamingType = gamingTypes[Math.floor(Math.random() * gamingTypes.length)]
        productName = `${brand} Mobile ${gamingType}`
        specs = [
          `${gamingType}`,
          `${Math.random() > 0.5 ? "Bluetooth Connection" : "Wired Connection"}`,
          `${Math.random() > 0.5 ? "Rechargeable Battery" : "Ergonomic Design"}`,
          `Compatible with ${compatibilities[Math.floor(Math.random() * compatibilities.length)]}`,
        ]
        break

      default:
        const genericTypes = ["Premium", "Pro", "Ultra", "Essential", "Advanced"]
        const genericType = genericTypes[Math.floor(Math.random() * genericTypes.length)]
        productName = `${brand} ${genericType} ${category}`
        specs = [
          `${category}`,
          `${Math.random() > 0.5 ? "High Quality" : "Durable Design"}`,
          `${Math.random() > 0.5 ? "Compact Size" : "Lightweight"}`,
          `Compatible with ${compatibilities[Math.floor(Math.random() * compatibilities.length)]}`,
        ]
    }

    // Generate price based on category
    let minPrice, maxPrice
    switch (category) {
      case "Chargers":
        minPrice = 5000
        maxPrice = 50000
        break
      case "Cables":
        minPrice = 2000
        maxPrice = 15000
        break
      case "Power Banks":
        minPrice = 8000
        maxPrice = 40000
        break
      case "Cases":
        minPrice = 3000
        maxPrice = 25000
        break
      case "Screen Protectors":
        minPrice = 2000
        maxPrice = 15000
        break
      case "Keyboards":
        minPrice = 10000
        maxPrice = 100000
        break
      case "Mice":
        minPrice = 5000
        maxPrice = 50000
        break
      case "USB Hubs":
        minPrice = 8000
        maxPrice = 60000
        break
      case "Adapters":
        minPrice = 3000
        maxPrice = 25000
        break
      case "Mobile Gaming":
        minPrice = 5000
        maxPrice = 40000
        break
      default:
        minPrice = 3000
        maxPrice = 30000
    }

    const basePrice = Math.floor(Math.random() * (maxPrice - minPrice) + minPrice)
    // Round to nearest hundred
    const price = Math.round(basePrice / 100) * 100

    // 30% chance of having a discount
    const hasDiscount = Math.random() < 0.3
    const originalPrice = hasDiscount
      ? price + Math.round((price * (Math.random() * 0.3 + 0.1)) / 100) * 100
      : undefined

    // 20% chance of having a badge
    const hasBadge = Math.random() < 0.2
    const badges = ["New", "Bestseller", "Limited", "Sale", "Premium"]
    const badge = hasBadge ? badges[Math.floor(Math.random() * badges.length)] : undefined

    // Generate rating between 3.5 and 5.0
    const rating = Number.parseFloat((Math.random() * 1.5 + 3.5).toFixed(1))

    // Generate image URL
    const imageNumber = (i % 20) + 1 // Cycle through 20 images
    const image = `/placeholder.svg?height=400&width=400&text=Accessory+${category}+${brand}`

    // Add color variants
    const colors = ["Black", "White", "Silver", "Gold", "Blue", "Red", "Green", "Pink"]
    const color = colors[Math.floor(Math.random() * colors.length)]

    // Add warranty
    specs.push(`${Math.floor(Math.random() * 2) + 1} Year Warranty`)

    products.push({
      id: i,
      name: `${productName} (${color})`,
      price: price,
      originalPrice: originalPrice,
      rating: rating,
      image: image,
      category: "Accessories",
      subcategory: category,
      badge: badge,
      href: `/products/accessories/${category.toLowerCase().replace(/\s+/g, "-")}/${brand.toLowerCase()}-${i}`,
      specs: specs,
      featured: i <= 8,
    })
  }

  return products
}

const allAccessoryProducts = generateAccessoryProducts()

export default function AccessoriesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState(allAccessoryProducts)
  const [filters, setFilters] = useState({
    brands: [] as string[],
    categories: [] as string[],
    priceRange: [0, 100000] as [number, number],
    compatibilities: [] as string[],
  })
  const [showFilters, setShowFilters] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const productsPerPage = 20
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)

  // Extract unique brands, categories, and compatibilities for filters
  const uniqueBrands = Array.from(
    new Set(
      allAccessoryProducts.map((p) => {
        const nameParts = p.name.split(" ")
        return nameParts[0]
      }),
    ),
  )

  const uniqueCategories = Array.from(new Set(allAccessoryProducts.map((p) => p.subcategory)))

  const allCompatibilities = allAccessoryProducts.flatMap((p) => {
    const compatSpec = p.specs.find((s) => s.includes("Compatible with"))
    return compatSpec ? [compatSpec.replace("Compatible with ", "")] : []
  })
  const uniqueCompatibilities = Array.from(new Set(allCompatibilities))

  // Count products by category
  const categoryCounts = uniqueCategories.reduce(
    (acc, category) => {
      acc[category] = allAccessoryProducts.filter((p) => p.subcategory === category).length
      return acc
    },
    {} as Record<string, number>,
  )

  // Apply filters
  useEffect(() => {
    let result = allAccessoryProducts

    // Filter by tab
    if (activeTab !== "all") {
      result = result.filter((p) => p.subcategory === activeTab)
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      result = result.filter((p) => {
        const nameParts = p.name.split(" ")
        return filters.brands.includes(nameParts[0])
      })
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.subcategory))
    }

    // Filter by price range
    result = result.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

    // Filter by compatibilities
    if (filters.compatibilities.length > 0) {
      result = result.filter((p) => {
        const compatSpec = p.specs.find((s) => s.includes("Compatible with"))
        if (!compatSpec) return false
        const compat = compatSpec.replace("Compatible with ", "")
        return filters.compatibilities.includes(compat)
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

  const handleCompatibilityChange = (compatibility: string) => {
    setFilters((prev) => {
      const newCompatibilities = prev.compatibilities.includes(compatibility)
        ? prev.compatibilities.filter((c) => c !== compatibility)
        : [...prev.compatibilities, compatibility]
      return { ...prev, compatibilities: newCompatibilities }
    })
  }

  const handlePriceChange = (value: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: value }))
  }

  const resetFilters = () => {
    setFilters({
      brands: [],
      categories: [],
      priceRange: [0, 100000],
      compatibilities: [],
    })
    setActiveTab("all")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Accessories</h1>

      <AccessoriesNavigation />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8">
        {uniqueCategories.map((category) => (
          <CategoryCount
            key={category}
            category={category}
            count={categoryCounts[category]}
            href={`/products/accessories/${category.toLowerCase().replace(/\s+/g, "-")}`}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Mobile filter toggle */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>

          {(filters.brands.length > 0 ||
            filters.categories.length > 0 ||
            filters.compatibilities.length > 0 ||
            filters.priceRange[0] > 0 ||
            filters.priceRange[1] < 100000) && (
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
              filters.compatibilities.length > 0 ||
              filters.priceRange[0] > 0 ||
              filters.priceRange[1] < 100000) && (
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
                defaultValue={[0, 100000]}
                value={filters.priceRange}
                max={100000}
                step={1000}
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
            <div className="space-y-2 max-h-48 overflow-y-auto">
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

          {/* Compatibility Filter */}
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Compatibility</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {uniqueCompatibilities.map((compatibility) => (
                <div key={compatibility} className="flex items-center space-x-2">
                  <Checkbox
                    id={`compatibility-${compatibility}`}
                    checked={filters.compatibilities.includes(compatibility)}
                    onCheckedChange={() => handleCompatibilityChange(compatibility)}
                  />
                  <label htmlFor={`compatibility-${compatibility}`} className="text-sm cursor-pointer">
                    {compatibility}
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
                All Accessories
              </TabsTrigger>
              <TabsTrigger value="Chargers" className="px-4">
                Chargers
              </TabsTrigger>
              <TabsTrigger value="Cables" className="px-4">
                Cables
              </TabsTrigger>
              <TabsTrigger value="Cases" className="px-4">
                Cases
              </TabsTrigger>
              <TabsTrigger value="Power Banks" className="px-4">
                Power Banks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No accessories match your filters</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your filters or browse all accessories</p>
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
                      accessories
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
            <TabsContent value="Chargers" className="mt-6">
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

            <TabsContent value="Cables" className="mt-6">
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

            <TabsContent value="Cases" className="mt-6">
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

            <TabsContent value="Power Banks" className="mt-6">
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
