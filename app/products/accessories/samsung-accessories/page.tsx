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

export default function SamsungAccessoriesPage() {
  const products = [
    {
      id: 1,
      name: "Samsung 45W Super Fast Charger",
      price: 24999, // ₦24,999
      rating: 4.7,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-t4510xbegjp/gallery/africa-en-45w-power-adapter-ep-t4510-ep-t4510xbegjp-534797153",
      category: "Accessories",
      badge: "Original",
      href: "/products/accessories/samsung-accessories/45w-super-fast-charger",
      specs: ["45W super fast charging", "USB-C port", "Compatible with Galaxy devices", "PD protocol support"],
    },
    {
      id: 2,
      name: "Samsung 15W Wireless Charger Duo",
      price: 39999, // ₦39,999
      rating: 4.6,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-p5400tbegeu/gallery/africa-en-wireless-charger-duo-ep-p5400-ep-p5400tbegeu-530833476",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/wireless-charger-duo",
      specs: ["15W wireless charging", "Charges 2 devices simultaneously", "Built-in cooling fan", "LED indicator"],
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra Silicone Case",
      price: 19999, // ₦19,999
      rating: 4.8,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-ps928tbegeu/gallery/africa-en-silicone-cover-galaxy-s24-ultra-ef-ps928tbegeu-537240556",
      category: "Accessories",
      badge: "Best Seller",
      href: "/products/accessories/samsung-accessories/s24-ultra-silicone-case",
      specs: ["Silicone material", "Slim design", "Precise cutouts", "Soft-touch finish"],
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra Clear Standing Cover",
      price: 24999, // ₦24,999
      rating: 4.5,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-js928ctegeu/gallery/africa-en-clear-standing-cover-galaxy-s24-ultra-ef-js928ctegeu-537240546",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/s24-ultra-clear-standing-cover",
      specs: ["Built-in kickstand", "Clear design", "Military-grade protection", "Anti-yellowing technology"],
    },
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra Leather Case",
      price: 29999, // ₦29,999
      rating: 4.7,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-vs928lbegeu/gallery/africa-en-leather-cover-galaxy-s24-ultra-ef-vs928lbegeu-537240551",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/s24-ultra-leather-case",
      specs: ["Genuine leather", "Premium finish", "Slim profile", "Precise cutouts"],
    },
    {
      id: 6,
      name: "Samsung USB-C to USB-C Cable (1.8m)",
      price: 9999, // ₦9,999
      rating: 4.6,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-da705bbegww/gallery/africa-en-usb-type-c-data-cable-1-8m-ep-da705-ep-da705bbegww-534797148",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/usb-c-cable",
      specs: ["USB-C to USB-C", "1.8 meter length", "Fast charging support", "Data transfer"],
    },
    {
      id: 7,
      name: "Samsung 25W Travel Adapter",
      price: 14999, // ₦14,999
      rating: 4.5,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-ta800nbegww/gallery/africa-en-travel-adapter-25w-ep-ta800-ep-ta800nbegww-534797143",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/25w-travel-adapter",
      specs: ["25W fast charging", "USB-C port", "Compact design", "Super Fast Charging compatible"],
    },
    {
      id: 8,
      name: "Samsung Galaxy Buds3 Pro Case",
      price: 12999, // ₦12,999
      rating: 4.4,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-pg998tbegeu/gallery/africa-en-galaxy-buds-pro-case-ef-pg998-ef-pg998tbegeu-530833481",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/galaxy-buds3-pro-case",
      specs: ["Protective case", "Shock resistant", "Carabiner included", "Compatible with Galaxy Buds3 Pro"],
    },
    {
      id: 9,
      name: "Samsung Galaxy Watch6 Leather Band",
      price: 19999, // ₦19,999
      rating: 4.6,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/et-shr88sbegeu/gallery/africa-en-galaxy-watch4-classic-band-et-shr88-et-shr88sbegeu-530833486",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/galaxy-watch6-leather-band",
      specs: ["Genuine leather", "Quick release pins", "Multiple sizes available", "Comfortable fit"],
    },
    {
      id: 10,
      name: "Samsung Galaxy Tab S9 Book Cover",
      price: 29999, // ₦29,999
      rating: 4.7,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-bt970pbegeu/gallery/africa-en-book-cover-tab-s9-plus-ef-bt970-ef-bt970pbegeu-537243463",
      category: "Accessories",
      badge: "Premium",
      href: "/products/accessories/samsung-accessories/galaxy-tab-s9-book-cover",
      specs: ["Adjustable viewing angles", "S Pen holder", "Auto sleep/wake", "Premium finish"],
    },
    {
      id: 11,
      name: "Samsung Galaxy S24 Ultra Screen Protector",
      price: 14999, // ₦14,999
      rating: 4.5,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-ug998ctegeu/gallery/africa-en-screen-protector-galaxy-s24-ultra-ef-ug998-ef-ug998ctegeu-537240561",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/s24-ultra-screen-protector",
      specs: ["Tempered glass", "9H hardness", "Oleophobic coating", "Full coverage"],
    },
    {
      id: 12,
      name: "Samsung 10,000mAh Power Bank",
      price: 24999, // ₦24,999
      rating: 4.6,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/eb-p3300xjegeu/gallery/africa-en-power-bank-10000mah-eb-p3300-eb-p3300xjegeu-530833491",
      category: "Accessories",
      href: "/products/accessories/samsung-accessories/10000mah-power-bank",
      specs: ["10,000mAh capacity", "25W fast charging", "USB-C input/output", "Compact design"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Samsung Accessories</h1>
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
            <span>Samsung Accessories</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Samsung Accessories</h2>
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
                    <Switch id="s24" />
                    <label htmlFor="s24" className="ml-2 text-sm">
                      Galaxy S24 Series
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="s23" />
                    <label htmlFor="s23" className="ml-2 text-sm">
                      Galaxy S23 Series
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="tabs9" />
                    <label htmlFor="tabs9" className="ml-2 text-sm">
                      Galaxy Tab S9 Series
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="watch6" />
                    <label htmlFor="watch6" className="ml-2 text-sm">
                      Galaxy Watch6 Series
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="samsung" defaultChecked />
                    <label htmlFor="samsung" className="ml-2 text-sm">
                      Samsung
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="spigen" />
                    <label htmlFor="spigen" className="ml-2 text-sm">
                      Spigen
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="otterbox" />
                    <label htmlFor="otterbox" className="ml-2 text-sm">
                      OtterBox
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="anker" />
                    <label htmlFor="anker" className="ml-2 text-sm">
                      Anker
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 40000]} min={0} max={40000} step={5000} className="mb-6" />
                <div className="flex items-center justify-between">
                  <div className="text-sm">₦0</div>
                  <div className="text-sm">₦40,000</div>
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
                          <Slider defaultValue={[0, 40000]} min={0} max={40000} step={5000} className="mb-6" />
                          <div className="flex items-center justify-between">
                            <div className="text-sm">₦0</div>
                            <div className="text-sm">₦40,000</div>
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
                    .filter(
                      (product) =>
                        product.name.toLowerCase().includes("case") || product.name.toLowerCase().includes("cover"),
                    )
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
                        product.name.toLowerCase().includes("cable") ||
                        product.name.toLowerCase().includes("power bank"),
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
                        !product.name.toLowerCase().includes("cover") &&
                        !product.name.toLowerCase().includes("charger") &&
                        !product.name.toLowerCase().includes("adapter") &&
                        !product.name.toLowerCase().includes("cable") &&
                        !product.name.toLowerCase().includes("power bank"),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <div className="mt-12 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About Samsung Accessories</h2>
                <p className="mb-4">
                  Enhance your Samsung Galaxy experience with our premium selection of original Samsung accessories.
                  From protective cases and screen protectors to fast chargers and wireless accessories, we offer
                  everything you need to get the most out of your device.
                </p>
                <p>
                  All our Samsung accessories are carefully selected for quality, compatibility, and performance. We
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
