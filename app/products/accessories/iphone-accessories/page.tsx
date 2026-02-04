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

export default function iPhoneAccessoriesPage() {
  const products = [
    {
      id: 1,
      name: "Apple MagSafe Charger",
      price: 29999, // ₦29,999
      rating: 4.8,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661269793559",
      category: "Accessories",
      badge: "Original",
      href: "/products/accessories/iphone-accessories/magsafe-charger",
      specs: ["15W wireless charging", "MagSafe technology", "Compatible with iPhone 12 and newer", "USB-C connection"],
    },
    {
      id: 2,
      name: "Apple MagSafe Battery Pack",
      price: 59999, // ₦59,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJWY3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1625613219000",
      category: "Accessories",
      href: "/products/accessories/iphone-accessories/magsafe-battery-pack",
      specs: ["Wireless charging", "MagSafe compatible", "Smart charging features", "Compact design"],
    },
    {
      id: 3,
      name: "Apple AirTag",
      price: 19999, // ₦19,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-single-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
      category: "Accessories",
      badge: "Best Seller",
      href: "/products/accessories/iphone-accessories/airtag",
      specs: ["Precision finding", "Built-in speaker", "Replaceable battery", "IP67 water resistance"],
    },
    {
      id: 4,
      name: "Apple Leather Wallet with MagSafe",
      price: 34999, // ₦34,999
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPY3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661458144539",
      category: "Accessories",
      href: "/products/accessories/iphone-accessories/leather-wallet",
      specs: ["Genuine leather", "MagSafe compatible", "Holds up to 3 cards", "Find My support"],
    },
    {
      id: 5,
      name: "Apple 20W USB-C Power Adapter",
      price: 19999, // ₦19,999
      rating: 4.8,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1542406417329",
      category: "Accessories",
      href: "/products/accessories/iphone-accessories/20w-power-adapter",
      specs: ["20W fast charging", "USB-C port", "Compatible with iPhone & iPad", "Compact design"],
    },
    {
      id: 6,
      name: "Apple USB-C to Lightning Cable (1m)",
      price: 14999, // ₦14,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM0A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632956386000",
      category: "Accessories",
      href: "/products/accessories/iphone-accessories/usb-c-lightning-cable",
      specs: ["Fast charging support", "USB-C to Lightning", "1 meter length", "Durable design"],
    },
    {
      id: 7,
      name: "Apple MagSafe Duo Charger",
      price: 79999, // ₦79,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXF3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661269793559",
      category: "Accessories",
      badge: "Premium",
      href: "/products/accessories/iphone-accessories/magsafe-duo-charger",
      specs: ["Charges iPhone and Apple Watch", "Foldable design", "MagSafe technology", "USB-C connection"],
    },
    {
      id: 8,
      name: "Apple iPhone 16 Pro Clear Case with MagSafe",
      price: 24999, // ₦24,999
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPRY3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693594191626",
      category: "Accessories",
      href: "/products/accessories/iphone-accessories/iphone-16-pro-clear-case",
      specs: ["Clear polycarbonate", "MagSafe compatible", "Slim design", "Scratch-resistant"],
    },
    {
      id: 9,
      name: "Apple iPhone 16 Silicone Case with MagSafe",
      price: 29999, // ₦29,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693594197616",
      category: "Accessories",
      href: "/products/accessories/iphone-accessories/iphone-16-silicone-case",
      specs: ["Silicone exterior", "Microfiber lining", "MagSafe compatible", "Multiple colors available"],
    },
    {
      id: 10,
      name: "Apple iPhone 16 Pro Leather Case with MagSafe",
      price: 39999, // ₦39,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT4J3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693594197616",
      category: "Accessories",
      badge: "Premium",
      href: "/products/accessories/iphone-accessories/iphone-16-pro-leather-case",
      specs: ["Genuine leather", "MagSafe compatible", "Premium finish", "Develops patina over time"],
    },
    {
      id: 11,
      name: "Apple iPhone Screen Protector",
      price: 14999, // ₦14,999
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXYA2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1580420165023",
      category: "Accessories",
      href: "/products/accessories/iphone-accessories/screen-protector",
      specs: ["Tempered glass", "Oleophobic coating", "Easy installation", "9H hardness"],
    },
    {
      id: 12,
      name: "Apple EarPods with Lightning Connector",
      price: 12999, // ₦12,999
      rating: 4.4,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MMTN2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1473703488187",
      category: "Accessories",
      href: "/products/accessories/iphone-accessories/earpods-lightning",
      specs: ["Lightning connector", "Built-in remote", "Microphone", "Comfortable design"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">iPhone Accessories</h1>
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
            <span>iPhone Accessories</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse iPhone Accessories</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cases">Cases</TabsTrigger>
              <TabsTrigger value="chargers">Chargers</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Product Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="cases" />
                    <label htmlFor="cases" className="ml-2 text-sm">
                      Cases
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="chargers" />
                    <label htmlFor="chargers" className="ml-2 text-sm">
                      Chargers
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="cables" />
                    <label htmlFor="cables" className="ml-2 text-sm">
                      Cables
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="screen-protectors" />
                    <label htmlFor="screen-protectors" className="ml-2 text-sm">
                      Screen Protectors
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="power-banks" />
                    <label htmlFor="power-banks" className="ml-2 text-sm">
                      Power Banks
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Compatibility</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="iphone16" />
                    <label htmlFor="iphone16" className="ml-2 text-sm">
                      iPhone 16 Series
                    </label>
                  </div>
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
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="apple" defaultChecked />
                    <label htmlFor="apple" className="ml-2 text-sm">
                      Apple
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="belkin" />
                    <label htmlFor="belkin" className="ml-2 text-sm">
                      Belkin
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="anker" />
                    <label htmlFor="anker" className="ml-2 text-sm">
                      Anker
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="spigen" />
                    <label htmlFor="spigen" className="ml-2 text-sm">
                      Spigen
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
                          <h3 className="font-medium mb-4">Product Type</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Switch id="cases-mobile" />
                              <label htmlFor="cases-mobile" className="ml-2 text-sm">
                                Cases
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="chargers-mobile" />
                              <label htmlFor="chargers-mobile" className="ml-2 text-sm">
                                Chargers
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

              <TabsContent value="cases" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((product) => product.name.toLowerCase().includes("case"))
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="chargers" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.toLowerCase().includes("charger") ||
                        product.name.toLowerCase().includes("adapter") ||
                        product.name.toLowerCase().includes("cable"),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="other" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        !product.name.toLowerCase().includes("case") &&
                        !product.name.toLowerCase().includes("charger") &&
                        !product.name.toLowerCase().includes("adapter") &&
                        !product.name.toLowerCase().includes("cable"),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <div className="mt-12 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About iPhone Accessories</h2>
                <p className="mb-4">
                  Enhance your iPhone experience with our premium selection of Apple original and MFi-certified
                  accessories. From protective cases and screen protectors to fast chargers and MagSafe accessories, we
                  offer everything you need to get the most out of your device.
                </p>
                <p>
                  All our iPhone accessories are carefully selected for quality, compatibility, and performance. We
                  offer same-day delivery in Lagos and nationwide shipping, with a 30-day free tech support on all
                  purchases.
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
