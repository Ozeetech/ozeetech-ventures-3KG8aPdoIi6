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

export default function UsbHubsPage() {
  const products = [
    {
      id: 1,
      name: "Anker 4-Port USB 3.0 Hub",
      price: 9999, // ₦9,999
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/61Xj+YlxhKL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Hubs",
      href: "/products/accessories/usb-hubs/anker-4-port-usb-3",
      specs: ["4 USB 3.0 ports", "5Gbps transfer speed", "Compact design", "18-month warranty"],
    },
    {
      id: 2,
      name: "Satechi USB-C Hub Multiport Adapter",
      price: 29999, // ₦29,999
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Hubs",
      badge: "Premium",
      href: "/products/accessories/usb-hubs/satechi-usb-c-multiport",
      specs: ["HDMI output", "USB-C PD charging", "SD card reader", "3 USB 3.0 ports"],
    },
    {
      id: 3,
      name: "Anker 7-in-1 USB-C Hub",
      price: 24999, // ₦24,999
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/61dsg+TQqML._AC_UF1000,1000_QL80_.jpg",
      category: "USB Hubs",
      href: "/products/accessories/usb-hubs/anker-7-in-1-usb-c-hub",
      specs: ["4K HDMI", "100W Power Delivery", "SD/microSD card reader", "2 USB 3.0 ports"],
    },
    {
      id: 4,
      name: "UGREEN USB-C to 4-Port USB 3.0 Hub",
      price: 12999, // ₦12,999
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/61Ks3tn8NHL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Hubs",
      href: "/products/accessories/usb-hubs/ugreen-usb-c-to-4-port-usb-3",
      specs: ["4 USB 3.0 ports", "5Gbps transfer speed", "Slim design", "Braided cable"],
    },
    {
      id: 5,
      name: "Belkin USB-C 11-in-1 Dock",
      price: 69999, // ₦69,999
      rating: 4.9,
      image: "https://m.media-amazon.com/images/I/61i+QbshSPL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Hubs",
      badge: "Premium",
      href: "/products/accessories/usb-hubs/belkin-usb-c-11-in-1-dock",
      specs: ["Dual 4K HDMI", "Gigabit Ethernet", "SD card reader", "85W Power Delivery"],
    },
    {
      id: 6,
      name: "Anker USB-C to Ethernet Adapter",
      price: 9999, // ₦9,999
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/61Xj+YlxhKL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Adapters",
      href: "/products/accessories/usb-hubs/anker-usb-c-to-ethernet",
      specs: ["Gigabit Ethernet", "USB-C connection", "Plug and play", "Aluminum casing"],
    },
    {
      id: 7,
      name: "CalDigit TS4 Thunderbolt 4 Dock",
      price: 149999, // ₦149,999
      rating: 4.9,
      image: "https://m.media-amazon.com/images/I/71B5JT-eAYL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Hubs",
      badge: "Premium",
      href: "/products/accessories/usb-hubs/caldigit-ts4-thunderbolt-4",
      specs: ["18 ports", "Thunderbolt 4", "98W charging", "8K display support"],
    },
    {
      id: 8,
      name: "UGREEN USB 3.0 to HDMI Adapter",
      price: 14999, // ₦14,999
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/61Ks3tn8NHL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Adapters",
      href: "/products/accessories/usb-hubs/ugreen-usb-3-to-hdmi",
      specs: ["1080p resolution", "USB 3.0", "Plug and play", "Compatible with Windows/Mac"],
    },
    {
      id: 9,
      name: "Anker 10-in-1 USB-C Hub",
      price: 34999, // ₦34,999
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/61dsg+TQqML._AC_UF1000,1000_QL80_.jpg",
      category: "USB Hubs",
      href: "/products/accessories/usb-hubs/anker-10-in-1-usb-c-hub",
      specs: ["4K HDMI", "Ethernet port", "SD/microSD card reader", "100W Power Delivery"],
    },
    {
      id: 10,
      name: "Apple USB-C Digital AV Multiport Adapter",
      price: 39999, // ₦39,999
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUF82?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1590183261000",
      category: "USB Adapters",
      badge: "Original",
      href: "/products/accessories/usb-hubs/apple-usb-c-digital-av-multiport",
      specs: ["HDMI port", "USB-A port", "USB-C charging port", "4K support"],
    },
    {
      id: 11,
      name: "UGREEN USB-C to VGA Adapter",
      price: 9999, // ₦9,999
      rating: 4.3,
      image: "https://m.media-amazon.com/images/I/61Ks3tn8NHL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Adapters",
      href: "/products/accessories/usb-hubs/ugreen-usb-c-to-vga",
      specs: ["1080p resolution", "USB-C connection", "Compatible with laptops/phones", "Aluminum shell"],
    },
    {
      id: 12,
      name: "Anker USB-C SD Card Reader",
      price: 7999, // ₦7,999
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/61Xj+YlxhKL._AC_UF1000,1000_QL80_.jpg",
      category: "USB Adapters",
      href: "/products/accessories/usb-hubs/anker-usb-c-sd-card-reader",
      specs: ["SD/microSD slots", "USB 3.0 speed", "Compact design", "Plug and play"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">USB Hubs & Adapters</h1>
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
            <span>USB Hubs & Adapters</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse USB Hubs & Adapters</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="hubs">USB Hubs</TabsTrigger>
              <TabsTrigger value="adapters">Adapters</TabsTrigger>
              <TabsTrigger value="docks">Docking Stations</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Product Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="usb-hubs" />
                    <label htmlFor="usb-hubs" className="ml-2 text-sm">
                      USB Hubs
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="adapters" />
                    <label htmlFor="adapters" className="ml-2 text-sm">
                      Adapters
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="docking-stations" />
                    <label htmlFor="docking-stations" className="ml-2 text-sm">
                      Docking Stations
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="card-readers" />
                    <label htmlFor="card-readers" className="ml-2 text-sm">
                      Card Readers
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Connection Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="usb-c" />
                    <label htmlFor="usb-c" className="ml-2 text-sm">
                      USB-C
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="usb-a" />
                    <label htmlFor="usb-a" className="ml-2 text-sm">
                      USB-A
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="thunderbolt" />
                    <label htmlFor="thunderbolt" className="ml-2 text-sm">
                      Thunderbolt
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="anker" />
                    <label htmlFor="anker" className="ml-2 text-sm">
                      Anker
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="ugreen" />
                    <label htmlFor="ugreen" className="ml-2 text-sm">
                      UGREEN
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="belkin" />
                    <label htmlFor="belkin" className="ml-2 text-sm">
                      Belkin
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="satechi" />
                    <label htmlFor="satechi" className="ml-2 text-sm">
                      Satechi
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="apple" />
                    <label htmlFor="apple" className="ml-2 text-sm">
                      Apple
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 150000]} min={0} max={150000} step={10000} className="mb-6" />
                <div className="flex items-center justify-between">
                  <div className="text-sm">₦0</div>
                  <div className="text-sm">₦150,000</div>
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
                              <Switch id="usb-hubs-mobile" />
                              <label htmlFor="usb-hubs-mobile" className="ml-2 text-sm">
                                USB Hubs
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="adapters-mobile" />
                              <label htmlFor="adapters-mobile" className="ml-2 text-sm">
                                Adapters
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="docking-stations-mobile" />
                              <label htmlFor="docking-stations-mobile" className="ml-2 text-sm">
                                Docking Stations
                              </label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-4">Price Range</h3>
                          <Slider defaultValue={[0, 150000]} min={0} max={150000} step={10000} className="mb-6" />
                          <div className="flex items-center justify-between">
                            <div className="text-sm">₦0</div>
                            <div className="text-sm">₦150,000</div>
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

              <TabsContent value="hubs" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((product) => product.name.toLowerCase().includes("hub") || product.category === "USB Hubs")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="adapters" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.toLowerCase().includes("adapter") || product.category === "USB Adapters",
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="docks" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.toLowerCase().includes("dock") || product.name.toLowerCase().includes("docking"),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <div className="mt-12 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About USB Hubs & Adapters</h2>
                <p className="mb-4">
                  Expand your device's connectivity options with our premium selection of USB hubs and adapters. From
                  simple USB hubs to full-featured docking stations, we offer solutions for all your connectivity needs.
                </p>
                <p>
                  All our USB hubs and adapters are carefully selected for quality, compatibility, and performance. We
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
