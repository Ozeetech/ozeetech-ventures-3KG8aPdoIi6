import Link from "next/link"
import { ChevronRight, Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ProductCard } from "@/components/product-card"

export default function ApplePage() {
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1799999, // ₦1,799,999
      rating: 4.9,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-select-202309-Natural-Titanium?wid=1200&hei=1200&fmt=jpeg&qlt=95&.v=1692845702708",
      category: "Smartphones",
      badge: "New",
      href: "/products/smartphones/iphone-15-pro-max",
      specs: ["A17 Pro chip", '6.7" Super Retina XDR', "48MP camera system", "Titanium design"],
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 1599999, // ₦1,599,999
      rating: 4.8,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702839",
      category: "Smartphones",
      badge: "New",
      href: "/products/smartphones/iphone-15-pro",
      specs: ["A17 Pro chip", '6.1" Super Retina XDR', "48MP camera system", "Titanium design"],
    },
    {
      id: 3,
      name: "iPhone 15 Plus",
      price: 1399999, // ₦1,399,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-plus-finish-select-202309-6-7inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923781972",
      category: "Smartphones",
      href: "/products/smartphones/iphone-15-plus",
      specs: ["A16 Bionic chip", '6.7" Super Retina XDR', "48MP main camera", "Dynamic Island"],
    },
    {
      id: 4,
      name: "iPhone 15",
      price: 1199999, // ₦1,199,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972",
      category: "Smartphones",
      href: "/products/smartphones/iphone-15",
      specs: ["A16 Bionic chip", '6.1" Super Retina XDR', "48MP main camera", "Dynamic Island"],
    },
    {
      id: 5,
      name: "iPhone 14 Pro Max",
      price: 1499999, // ₦1,499,999
      rating: 4.8,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896",
      category: "Smartphones",
      href: "/products/smartphones/iphone-14-pro-max",
      specs: ["A16 Bionic chip", '6.7" Super Retina XDR', "48MP main camera", "Dynamic Island"],
    },
    {
      id: 6,
      name: "iPhone 14 Pro",
      price: 1299999, // ₦1,299,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896",
      category: "Smartphones",
      href: "/products/smartphones/iphone-14-pro",
      specs: ["A16 Bionic chip", '6.1" Super Retina XDR', "48MP main camera", "Dynamic Island"],
    },
    {
      id: 7,
      name: "iPhone 14 Plus",
      price: 1099999, // ₦1,099,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-plus-finish-select-202209-6-7inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027942322",
      category: "Smartphones",
      href: "/products/smartphones/iphone-14-plus",
      specs: ["A15 Bionic chip", '6.7" Super Retina XDR', "12MP dual camera", "Emergency SOS via satellite"],
    },
    {
      id: 8,
      name: "iPhone 14",
      price: 899999, // ₦899,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026939322",
      category: "Smartphones",
      href: "/products/smartphones/iphone-14",
      specs: ["A15 Bionic chip", '6.1" Super Retina XDR', "12MP dual camera", "Emergency SOS via satellite"],
    },
    {
      id: 9,
      name: "iPhone SE (2022)",
      price: 599999, // ₦599,999
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202207-product-red?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316263304",
      category: "Smartphones",
      href: "/products/smartphones/iphone-se-2022",
      specs: ["A15 Bionic chip", '4.7" Retina HD', "12MP camera", "Touch ID"],
    },
    {
      id: 10,
      name: "iPhone 13",
      price: 799999, // ₦799,999
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656712888128",
      category: "Smartphones",
      href: "/products/smartphones/iphone-13",
      specs: ["A15 Bionic chip", '6.1" Super Retina XDR', "12MP dual camera", "Up to 19 hours video playback"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Apple iPhones</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/smartphones" className="hover:text-primary">
              Smartphones
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Apple</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 space-y-6">
            <div>
              <h3 className="font-medium mb-4">Model</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Switch id="iphone15" />
                  <label htmlFor="iphone15" className="ml-2 text-sm">
                    iPhone 15 Series
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="iphone14" />
                  <label htmlFor="iphone14" className="ml-2 text-sm">
                    iPhone 14 Series
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="iphone13" />
                  <label htmlFor="iphone13" className="ml-2 text-sm">
                    iPhone 13 Series
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="iphonese" />
                  <label htmlFor="iphonese" className="ml-2 text-sm">
                    iPhone SE
                  </label>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-4">Price Range</h3>
              <Slider defaultValue={[0, 2000000]} min={0} max={2000000} step={50000} className="mb-6" />
              <div className="flex items-center justify-between">
                <div className="text-sm">₦0</div>
                <div className="text-sm">₦2,000,000</div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-4">Storage</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Switch id="storage1" />
                  <label htmlFor="storage1" className="ml-2 text-sm">
                    128GB
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="storage2" />
                  <label htmlFor="storage2" className="ml-2 text-sm">
                    256GB
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="storage3" />
                  <label htmlFor="storage3" className="ml-2 text-sm">
                    512GB
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="storage4" />
                  <label htmlFor="storage4" className="ml-2 text-sm">
                    1TB
                  </label>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-4">Color</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Switch id="color1" />
                  <label htmlFor="color1" className="ml-2 text-sm">
                    Natural Titanium
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="color2" />
                  <label htmlFor="color2" className="ml-2 text-sm">
                    Blue Titanium
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="color3" />
                  <label htmlFor="color3" className="ml-2 text-sm">
                    White Titanium
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="color4" />
                  <label htmlFor="color4" className="ml-2 text-sm">
                    Black Titanium
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="color5" />
                  <label htmlFor="color5" className="ml-2 text-sm">
                    Blue
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="color6" />
                  <label htmlFor="color6" className="ml-2 text-sm">
                    Pink
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="color7" />
                  <label htmlFor="color7" className="ml-2 text-sm">
                    Yellow
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="color8" />
                  <label htmlFor="color8" className="ml-2 text-sm">
                    Green
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
                        <h3 className="font-medium mb-4">Model</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Switch id="iphone15-mobile" />
                            <label htmlFor="iphone15-mobile" className="ml-2 text-sm">
                              iPhone 15 Series
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="iphone14-mobile" />
                            <label htmlFor="iphone14-mobile" className="ml-2 text-sm">
                              iPhone 14 Series
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="iphone13-mobile" />
                            <label htmlFor="iphone13-mobile" className="ml-2 text-sm">
                              iPhone 13 Series
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="iphonese-mobile" />
                            <label htmlFor="iphonese-mobile" className="ml-2 text-sm">
                              iPhone SE
                            </label>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-4">Price Range</h3>
                        <Slider defaultValue={[0, 2000000]} min={0} max={2000000} step={50000} className="mb-6" />
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
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-1">
                1
              </Button>
              <Button variant="outline" className="mx-1">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
