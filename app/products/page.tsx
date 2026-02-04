import { Filter, Grid3X3, List } from "lucide-react"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ProductCard } from "@/components/product-card"
import { Pagination } from "@/components/ui/pagination"
import { Skeleton } from "@/components/ui/skeleton"

// Generate a large array of products for demonstration
const generateProducts = (count: number) => {
  const categories = ["Smartphones", "Laptops", "Audio", "Wearables", "Accessories"]
  const badges = ["New", "Bestseller", "Sale", "Gaming", "Business", null]

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1} with a longer name to test truncation`,
    price: Math.floor(Math.random() * 1000000) + 10000, // Random price in Naira
    originalPrice: Math.random() > 0.7 ? Math.floor(Math.random() * 1500000) + 500000 : undefined,
    rating: Math.floor(Math.random() * 50) / 10 + 3, // Random rating between 3.0 and 8.0
    image: `/placeholder.svg?height=400&width=400&text=Product${i + 1}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    badge: Math.random() > 0.6 ? badges[Math.floor(Math.random() * badges.length)] : undefined,
    href: `/products/${categories[Math.floor(Math.random() * categories.length)].toLowerCase()}/product-${i + 1}`,
    specs: [
      "8GB RAM, 128GB Storage",
      "6.1-inch Super Retina XDR display",
      "A15 Bionic chip",
      "Dual-camera system",
      "Face ID",
    ],
  }))
}

// This would typically come from a database
const allProducts = generateProducts(200)

export default function ProductsPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1
  const productsPerPage = 12
  const totalPages = Math.ceil(allProducts.length / productsPerPage)

  // Get products for current page
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const products = allProducts.slice(startIndex, endIndex)

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <span>/</span>
            <span>Products</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 space-y-6">
            <div>
              <h3 className="font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Switch id="smartphones" />
                  <label htmlFor="smartphones" className="ml-2 text-sm">
                    Smartphones
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="laptops" />
                  <label htmlFor="laptops" className="ml-2 text-sm">
                    Laptops
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="audio" />
                  <label htmlFor="audio" className="ml-2 text-sm">
                    Audio
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="wearables" />
                  <label htmlFor="wearables" className="ml-2 text-sm">
                    Wearables
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="accessories" />
                  <label htmlFor="accessories" className="ml-2 text-sm">
                    Accessories
                  </label>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-4">Price Range</h3>
              <Slider defaultValue={[0, 2000]} min={0} max={2000} step={10} className="mb-6" />
              <div className="flex items-center justify-between">
                <div className="text-sm">₦0</div>
                <div className="text-sm">₦2,000,000</div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-4">Brand</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Switch id="brand1" />
                  <label htmlFor="brand1" className="ml-2 text-sm">
                    Apple
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="brand2" />
                  <label htmlFor="brand2" className="ml-2 text-sm">
                    Samsung
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="brand3" />
                  <label htmlFor="brand3" className="ml-2 text-sm">
                    Google
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="brand4" />
                  <label htmlFor="brand4" className="ml-2 text-sm">
                    Dell
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="brand5" />
                  <label htmlFor="brand5" className="ml-2 text-sm">
                    Lenovo
                  </label>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-4">Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Switch id="rating4" />
                  <label htmlFor="rating4" className="ml-2 text-sm">
                    4 Stars & Above
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="rating3" />
                  <label htmlFor="rating3" className="ml-2 text-sm">
                    3 Stars & Above
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="rating2" />
                  <label htmlFor="rating2" className="ml-2 text-sm">
                    2 Stars & Above
                  </label>
                </div>
              </div>
            </div>

            <Button className="w-full mt-4">Apply Filters</Button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden mr-2">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>Narrow down your product search with filters.</SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 py-4">
                      <div>
                        <h3 className="font-medium mb-4">Categories</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Switch id="smartphones-mobile" />
                            <label htmlFor="smartphones-mobile" className="ml-2 text-sm">
                              Smartphones
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="laptops-mobile" />
                            <label htmlFor="laptops-mobile" className="ml-2 text-sm">
                              Laptops
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="audio-mobile" />
                            <label htmlFor="audio-mobile" className="ml-2 text-sm">
                              Audio
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="wearables-mobile" />
                            <label htmlFor="wearables-mobile" className="ml-2 text-sm">
                              Wearables
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="accessories-mobile" />
                            <label htmlFor="accessories-mobile" className="ml-2 text-sm">
                              Accessories
                            </label>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-4">Price Range</h3>
                        <Slider defaultValue={[0, 2000]} min={0} max={2000} step={10} className="mb-6" />
                        <div className="flex items-center justify-between">
                          <div className="text-sm">₦0</div>
                          <div className="text-sm">₦2,000,000</div>
                        </div>
                      </div>

                      <Button className="w-full mt-4">Apply Filters</Button>
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Grid3X3 className="h-4 w-4" />
                    <span className="sr-only">Grid view</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <List className="h-4 w-4" />
                    <span className="sr-only">List view</span>
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Select defaultValue="featured">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Suspense fallback={<ProductGridSkeleton count={productsPerPage} />}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} showDiscount={true} />
                ))}
              </Suspense>
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/products" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-[300px] w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="flex gap-2">
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ))}
    </>
  )
}
