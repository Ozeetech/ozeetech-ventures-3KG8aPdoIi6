import Link from "next/link"
import { ChevronRight, Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AppleChargersPage() {
  const products = [
    {
      id: 1,
      name: "Apple 20W USB-C Power Adapter",
      price: 19999, // ₦19,999
      rating: 4.8,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1542406417329",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/20w-usb-c-power-adapter",
      specs: ["20W fast charging", "USB-C port", "Compatible with iPhone & iPad", "Compact design"],
    },
    {
      id: 2,
      name: "Apple 30W USB-C Power Adapter",
      price: 29999, // ₦29,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7W2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1590183391000",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/30w-usb-c-power-adapter",
      specs: ["30W fast charging", "USB-C port", "Compatible with MacBook Air", "Compact design"],
    },
    {
      id: 3,
      name: "Apple 35W Dual USB-C Port Power Adapter",
      price: 39999, // ₦39,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNWM3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1652736144126",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/35w-dual-usb-c-power-adapter",
      specs: ["35W total output", "Dual USB-C ports", "Charge two devices at once", "Compact design"],
    },
    {
      id: 4,
      name: "Apple 67W USB-C Power Adapter",
      price: 49999, // ₦49,999
      rating: 4.8,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLYU3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634345473000",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/67w-usb-c-power-adapter",
      specs: ["67W fast charging", "USB-C port", "Compatible with MacBook Pro", "Fast charge capable"],
    },
    {
      id: 5,
      name: "Apple 96W USB-C Power Adapter",
      price: 59999, // ₦59,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MX0J2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634345473000",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/96w-usb-c-power-adapter",
      specs: ["96W fast charging", "USB-C port", "Compatible with 16-inch MacBook Pro", "Fast charge capable"],
    },
    {
      id: 6,
      name: "Apple 140W USB-C Power Adapter",
      price: 69999, // ₦69,999
      rating: 4.9,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLYU3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634345473000",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/140w-usb-c-power-adapter",
      specs: ["140W fast charging", "USB-C port", "Compatible with 16-inch MacBook Pro", "Fast charge capable"],
    },
    {
      id: 7,
      name: "Apple MagSafe Charger",
      price: 29999, // ₦29,999
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661269793559",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/magsafe-charger",
      specs: ["15W wireless charging", "MagSafe technology", "Compatible with iPhone 12 and newer", "USB-C connection"],
    },
    {
      id: 8,
      name: "Apple MagSafe Duo Charger",
      price: 79999, // ₦79,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXF3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661269793559",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/magsafe-duo-charger",
      specs: ["Charges iPhone and Apple Watch", "Foldable design", "MagSafe technology", "USB-C connection"],
    },
    {
      id: 9,
      name: "Apple MagSafe Battery Pack",
      price: 59999, // ₦59,999
      rating: 4.4,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJWY3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1625613219000",
      category: "Chargers",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/magsafe-battery-pack",
      specs: ["Wireless charging", "MagSafe compatible", "Smart charging features", "Compact design"],
    },
    {
      id: 10,
      name: "Apple USB-C to Lightning Cable (1m)",
      price: 14999, // ₦14,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632956386000",
      category: "Cables",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/usb-c-lightning-cable-1m",
      specs: ["Fast charging support", "USB-C to Lightning", "1 meter length", "Durable design"],
    },
    {
      id: 11,
      name: "Apple USB-C to Lightning Cable (2m)",
      price: 19999, // ₦19,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632956386000",
      category: "Cables",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/usb-c-lightning-cable-2m",
      specs: ["Fast charging support", "USB-C to Lightning", "2 meter length", "Durable design"],
    },
    {
      id: 12,
      name: "Apple USB-C Charge Cable (2m)",
      price: 19999, // ₦19,999
      rating: 4.8,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLL82?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1623374547000",
      category: "Cables",
      badge: "Original",
      href: "/products/accessories/original-chargers/apple/usb-c-charge-cable-2m",
      specs: ["USB-C to USB-C", "2 meter length", "Fast charging support", "Durable design"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Apple Original Chargers</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/accessories" className="hover:text-primary">
              Accessories
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/accessories/original-chargers" className="hover:text-primary">
              Original Chargers
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Apple</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Apple Chargers</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="adapters">Adapters</TabsTrigger>
              <TabsTrigger value="wireless">Wireless</TabsTrigger>
              <TabsTrigger value="cables">Cables</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Charger Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="usb-c" />
                    <label htmlFor="usb-c" className="ml-2 text-sm">
                      USB-C Adapters
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="magsafe" />
                    <label htmlFor="magsafe" className="ml-2 text-sm">
                      MagSafe
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="cables" />
                    <label htmlFor="cables" className="ml-2 text-sm">
                      Cables
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="wireless" />
                    <label htmlFor="wireless" className="ml-2 text-sm">
                      Wireless Chargers
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Compatibility</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="iphone" />
                    <label htmlFor="iphone" className="ml-2 text-sm">
                      iPhone
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="ipad" />
                    <label htmlFor="ipad" className="ml-2 text-sm">
                      iPad
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="macbook" />
                    <label htmlFor="macbook" className="ml-2 text-sm">
                      MacBook
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="watch" />
                    <label htmlFor="watch" className="ml-2 text-sm">
                      Apple Watch
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Power Output</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="20w" />
                    <label htmlFor="20w" className="ml-2 text-sm">
                      20W
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="30w" />
                    <label htmlFor="30w" className="ml-2 text-sm">
                      30W
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="60w-plus" />
                    <label htmlFor="60w-plus" className="ml-2 text-sm">
                      60W+
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 80000]} min={0} max={80000} step={5000} className="mb-6" />
                <div className="flex items-center justify-between">
                  <div className="text-sm">₦0</div>
                  <div className="text-sm">₦80,000</div>
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
                          <h3 className="font-medium mb-4">Charger Type</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Switch id="usb-c-mobile" />
                              <label htmlFor="usb-c-mobile" className="ml-2 text-sm">
                                USB-C Adapters
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="magsafe-mobile" />
                              <label htmlFor="magsafe-mobile" className="ml-2 text-sm">
                                MagSafe
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="cables-mobile" />
                              <label htmlFor="cables-mobile" className="ml-2 text-sm">
                                Cables
                              </label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-4">Price Range</h3>
                          <Slider defaultValue={[0, 80000]} min={0} max={80000} step={5000} className="mb-6" />
                          <div className="flex items-center justify-between">
                            <div className="text-sm">₦0</div>
                            <div className="text-sm">₦80,000</div>
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

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="adapters" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.toLowerCase().includes("adapter") || product.name.toLowerCase().includes("power"),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="wireless" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.toLowerCase().includes("magsafe") ||
                        product.specs.some((spec) => spec.toLowerCase().includes("wireless")),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="cables" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((product) => product.name.toLowerCase().includes("cable") || product.category === "Cables")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <div className="mt-12 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About Apple Original Chargers</h2>
                <p className="mb-4">
                  All our Apple chargers are 100% genuine and original, sourced directly from authorized channels. These
                  chargers are designed specifically for Apple devices to ensure optimal charging performance and device
                  safety.
                </p>
                <p>
                  We offer same-day delivery in Lagos and nationwide shipping, with a 30-day free tech support on all
                  purchases. Every charger comes with Apple's standard warranty.
                </p>
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
        </Tabs>
      </div>
    </div>
  )
}
