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

export default function MobileGamingPage() {
  const products = [
    {
      id: 1,
      name: "Razer Kishi V2 Mobile Game Controller",
      price: 59999, // ₦59,999
      rating: 4.8,
      image:
        "https://assets3.razerzone.com/s8_5ZqTWQZQQAwmUZRu-TJYlgcs=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhc3%2Fh59%2F9392425295902%2Frazer-kishi-v2-for-android-500x500.png",
      category: "Mobile Gaming",
      badge: "Best Seller",
      href: "/products/accessories/mobile-gaming/razer-kishi-v2",
      specs: ["Universal fit", "Pass-through charging", "Low latency", "Ergonomic design"],
    },
    {
      id: 2,
      name: "GameSir X2 Type-C Mobile Gaming Controller",
      price: 39999, // ₦39,999
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      href: "/products/accessories/mobile-gaming/gamesir-x2-type-c",
      specs: ["Plug and play", "No latency", "Ergonomic design", "Compatible with cloud gaming"],
    },
    {
      id: 3,
      name: "Backbone One Mobile Controller for iPhone",
      price: 69999, // ₦69,999
      rating: 4.9,
      image: "https://m.media-amazon.com/images/I/61MkBjZLlYL._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      badge: "Premium",
      href: "/products/accessories/mobile-gaming/backbone-one-iphone",
      specs: ["Lightning connection", "Pass-through charging", "Companion app", "Premium build quality"],
    },
    {
      id: 4,
      name: "8BitDo SN30 Pro Bluetooth Gamepad",
      price: 29999, // ₦29,999
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/61-xQjOg13L._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      href: "/products/accessories/mobile-gaming/8bitdo-sn30-pro",
      specs: ["Bluetooth connection", "Retro design", "Rumble vibration", "20-hour battery life"],
    },
    {
      id: 5,
      name: "PUBG Mobile Game Controller Triggers",
      price: 4999, // ₦4,999
      rating: 4.3,
      image: "https://m.media-amazon.com/images/I/61Xj+YlxhKL._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      href: "/products/accessories/mobile-gaming/pubg-triggers",
      specs: ["Sensitive triggers", "Universal fit", "Easy installation", "Conductive material"],
    },
    {
      id: 6,
      name: "GameSir F4 Falcon Mobile Gaming Controller",
      price: 19999, // ₦19,999
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/61Ks3tn8NHL._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      href: "/products/accessories/mobile-gaming/gamesir-f4-falcon",
      specs: ["Clip-on design", "Mechanical triggers", "No Bluetooth needed", "40-hour battery life"],
    },
    {
      id: 7,
      name: "Razer Phone Cooling Fan",
      price: 24999, // ₦24,999
      rating: 4.5,
      image:
        "https://assets2.razerzone.com/images/pnx.assets/d451695b8864008a24e5c4e865c3b2b8/razer-phone-cooler-chroma-500x500.png",
      category: "Mobile Gaming",
      badge: "Cooling",
      href: "/products/accessories/mobile-gaming/razer-phone-cooling-fan",
      specs: ["RGB lighting", "Powerful cooling", "Universal fit", "USB-C powered"],
    },
    {
      id: 8,
      name: "Black Shark FunCooler Pro",
      price: 29999, // ₦29,999
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/61Ks3tn8NHL._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      href: "/products/accessories/mobile-gaming/black-shark-funcooler-pro",
      specs: ["Semiconductor cooling", "RGB lighting", "Universal fit", "Touch controls"],
    },
    {
      id: 9,
      name: "Anker PowerCore Play 6700 Gaming Power Bank",
      price: 19999, // ₦19,999
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/61dsg+TQqML._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      href: "/products/accessories/mobile-gaming/anker-powercore-play-6700",
      specs: ["6700mAh capacity", "Built-in phone holder", "Cooling fan", "Ergonomic design"],
    },
    {
      id: 10,
      name: "Asus ROG Cetra True Wireless Gaming Earbuds",
      price: 49999, // ₦49,999
      rating: 4.5,
      image: "https://dlcdnwebimgs.asus.com/gain/C8A2B335-7319-4F18-A4B9-3D14D2E1CCDB/w1000/h732",
      category: "Mobile Gaming",
      badge: "Low Latency",
      href: "/products/accessories/mobile-gaming/asus-rog-cetra-tws",
      specs: ["Low latency mode", "Active noise cancellation", "IPX4 water resistance", "10-hour battery life"],
    },
    {
      id: 11,
      name: "Mobile Gaming Finger Sleeves (Set of 10)",
      price: 2999, // ₦2,999
      rating: 4.2,
      image: "https://m.media-amazon.com/images/I/71Xj+YlxhKL._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      href: "/products/accessories/mobile-gaming/finger-sleeves",
      specs: ["Breathable material", "Sweat-resistant", "Ultra-thin", "Universal size"],
    },
    {
      id: 12,
      name: "GameSir F8 Pro Snowgon Mobile Cooling Grip",
      price: 34999, // ₦34,999
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/61Ks3tn8NHL._AC_UF1000,1000_QL80_.jpg",
      category: "Mobile Gaming",
      href: "/products/accessories/mobile-gaming/gamesir-f8-pro-snowgon",
      specs: ["Semiconductor cooling", "Ergonomic grip", "Adjustable clamp", "Pass-through charging"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Mobile Gaming Accessories</h1>
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
            <span>Mobile Gaming</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Mobile Gaming Accessories</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="controllers">Controllers</TabsTrigger>
              <TabsTrigger value="cooling">Cooling</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Accessory Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="controllers" />
                    <label htmlFor="controllers" className="ml-2 text-sm">
                      Controllers
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="cooling" />
                    <label htmlFor="cooling" className="ml-2 text-sm">
                      Cooling Solutions
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="triggers" />
                    <label htmlFor="triggers" className="ml-2 text-sm">
                      Triggers
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="audio" />
                    <label htmlFor="audio" className="ml-2 text-sm">
                      Gaming Audio
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="power" />
                    <label htmlFor="power" className="ml-2 text-sm">
                      Power Solutions
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Compatibility</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="android" />
                    <label htmlFor="android" className="ml-2 text-sm">
                      Android
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="ios" />
                    <label htmlFor="ios" className="ml-2 text-sm">
                      iOS
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="universal" />
                    <label htmlFor="universal" className="ml-2 text-sm">
                      Universal
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="razer" />
                    <label htmlFor="razer" className="ml-2 text-sm">
                      Razer
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="gamesir" />
                    <label htmlFor="gamesir" className="ml-2 text-sm">
                      GameSir
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="backbone" />
                    <label htmlFor="backbone" className="ml-2 text-sm">
                      Backbone
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="8bitdo" />
                    <label htmlFor="8bitdo" className="ml-2 text-sm">
                      8BitDo
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 70000]} min={0} max={70000} step={5000} className="mb-6" />
                <div className="flex items-center justify-between">
                  <div className="text-sm">₦0</div>
                  <div className="text-sm">₦70,000</div>
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
                          <h3 className="font-medium mb-4">Accessory Type</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Switch id="controllers-mobile" />
                              <label htmlFor="controllers-mobile" className="ml-2 text-sm">
                                Controllers
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="cooling-mobile" />
                              <label htmlFor="cooling-mobile" className="ml-2 text-sm">
                                Cooling Solutions
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="triggers-mobile" />
                              <label htmlFor="triggers-mobile" className="ml-2 text-sm">
                                Triggers
                              </label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-4">Price Range</h3>
                          <Slider defaultValue={[0, 70000]} min={0} max={70000} step={5000} className="mb-6" />
                          <div className="flex items-center justify-between">
                            <div className="text-sm">₦0</div>
                            <div className="text-sm">₦70,000</div>
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

              <TabsContent value="controllers" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.toLowerCase().includes("controller") ||
                        product.specs.some((spec) => spec.toLowerCase().includes("controller")),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="cooling" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.toLowerCase().includes("cool") ||
                        product.badge === "Cooling" ||
                        product.specs.some((spec) => spec.toLowerCase().includes("cool")),
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
                        !product.name.toLowerCase().includes("controller") &&
                        !product.name.toLowerCase().includes("cool") &&
                        product.badge !== "Cooling" &&
                        !product.specs.some(
                          (spec) => spec.toLowerCase().includes("controller") || spec.toLowerCase().includes("cool"),
                        ),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <div className="mt-12 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About Mobile Gaming Accessories</h2>
                <p className="mb-4">
                  Elevate your mobile gaming experience with our premium selection of gaming accessories. From
                  controllers and cooling solutions to triggers and audio gear, we offer everything you need to gain a
                  competitive edge.
                </p>
                <p>
                  All our mobile gaming accessories are carefully selected for quality, performance, and compatibility.
                  We offer same-day delivery in Lagos and nationwide shipping, with a 30-day free tech support on all
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
