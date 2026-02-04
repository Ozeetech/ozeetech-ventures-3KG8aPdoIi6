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

export default function KeyboardsPage() {
  const products = [
    {
      id: 1,
      name: "Logitech MX Keys",
      price: 89999, // ₦89,999
      rating: 4.8,
      image:
        "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/mx-keys/gallery/deu-mx-keys-gallery-01.png",
      category: "Keyboards",
      badge: "Best Seller",
      href: "/products/accessories/keyboards/logitech-mx-keys",
      specs: ["Wireless", "Backlit", "Multi-device", "USB-C rechargeable"],
    },
    {
      id: 2,
      name: "Apple Magic Keyboard",
      price: 79999, // ₦79,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK2A3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628010471000",
      category: "Keyboards",
      badge: "Original",
      href: "/products/accessories/keyboards/apple-magic-keyboard",
      specs: ["Wireless", "Rechargeable", "Slim design", "Lightning port"],
    },
    {
      id: 3,
      name: "Keychron K2 Mechanical Keyboard",
      price: 59999, // ₦59,999
      rating: 4.9,
      image:
        "https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K2-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-blue-with-type-C-RGB-white-backlight_1800x1800.jpg",
      category: "Keyboards",
      href: "/products/accessories/keyboards/keychron-k2",
      specs: ["Mechanical", "Wireless/Wired", "RGB backlight", "Hot-swappable"],
    },
    {
      id: 4,
      name: "Microsoft Surface Keyboard",
      price: 69999, // ₦69,999
      rating: 4.6,
      image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4FsZr",
      category: "Keyboards",
      href: "/products/accessories/keyboards/microsoft-surface-keyboard",
      specs: ["Wireless", "Slim design", "Bluetooth", "AAA batteries"],
    },
    {
      id: 5,
      name: "Razer Huntsman Elite",
      price: 129999, // ₦129,999
      rating: 4.7,
      image:
        "https://assets3.razerzone.com/3JsrfkulQWDIHU9tkuQZGNQGGVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh78%2Fh25%2F9081444982814%2Fhuntsman-elite-1.jpg",
      category: "Keyboards",
      badge: "Premium",
      href: "/products/accessories/keyboards/razer-huntsman-elite",
      specs: ["Mechanical", "RGB lighting", "Optical switches", "Wrist rest"],
    },
    {
      id: 6,
      name: "Logitech K380",
      price: 24999, // ₦24,999
      rating: 4.5,
      image:
        "https://resource.logitech.com/content/dam/logitech/en/products/keyboards/k380s/gallery/k380s-top-graphite-gallery-1-1.png",
      category: "Keyboards",
      href: "/products/accessories/keyboards/logitech-k380",
      specs: ["Wireless", "Multi-device", "Compact", "2-year battery life"],
    },
    {
      id: 7,
      name: "Corsair K100 RGB",
      price: 149999, // ₦149,999
      rating: 4.8,
      image: "https://cwsmgmt.corsair.com/content/K100/img/K100_NA_RGB_01.png",
      category: "Keyboards",
      badge: "Gaming",
      href: "/products/accessories/keyboards/corsair-k100-rgb",
      specs: ["Mechanical", "RGB lighting", "Macro keys", "Media controls"],
    },
    {
      id: 8,
      name: "Dell KM7120W Keyboard and Mouse Combo",
      price: 49999, // ₦49,999
      rating: 4.4,
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/km7120w/global-spi/keyboard-mouse-km7120w-xkbt-800x550.png",
      category: "Keyboards",
      href: "/products/accessories/keyboards/dell-km7120w",
      specs: ["Wireless", "Keyboard and mouse combo", "Multi-device", "Quiet keys"],
    },
    {
      id: 9,
      name: "SteelSeries Apex Pro",
      price: 139999, // ₦139,999
      rating: 4.7,
      image:
        "https://media.steelseriescdn.com/thumbs/catalogue/products/01131-apex-pro/f2af7fce1f0b4c1d9f15825c2b0a8b1d.png.500x400_q100_crop-fit_optimize.png",
      category: "Keyboards",
      badge: "Gaming",
      href: "/products/accessories/keyboards/steelseries-apex-pro",
      specs: ["Adjustable mechanical switches", "OLED display", "RGB lighting", "Magnetic wrist rest"],
    },
    {
      id: 10,
      name: "Logitech G Pro X",
      price: 109999, // ₦109,999
      rating: 4.6,
      image:
        "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-x-keyboard/pro-x-keyboard-gallery-1.png",
      category: "Keyboards",
      href: "/products/accessories/keyboards/logitech-g-pro-x",
      specs: ["Hot-swappable switches", "Tenkeyless", "RGB lighting", "Detachable cable"],
    },
    {
      id: 11,
      name: "ASUS ROG Strix Scope NX",
      price: 99999, // ₦99,999
      rating: 4.5,
      image: "https://dlcdnwebimgs.asus.com/gain/F5D69A13-7F1A-4352-B74F-3F4AC1A608D6/w1000/h732",
      category: "Keyboards",
      badge: "Gaming",
      href: "/products/accessories/keyboards/asus-rog-strix-scope",
      specs: ["Mechanical", "RGB lighting", "Aluminum frame", "Extra-wide Ctrl key"],
    },
    {
      id: 12,
      name: "HP Pavilion Wireless Keyboard 600",
      price: 19999, // ₦19,999
      rating: 4.3,
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05573568.png",
      category: "Keyboards",
      href: "/products/accessories/keyboards/hp-pavilion-600",
      specs: ["Wireless", "Slim design", "Chiclet keys", "AAA batteries"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Computer Keyboards</h1>
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
            <span>Keyboards</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Keyboards</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="wireless">Wireless</TabsTrigger>
              <TabsTrigger value="mechanical">Mechanical</TabsTrigger>
              <TabsTrigger value="gaming">Gaming</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Keyboard Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="wireless" />
                    <label htmlFor="wireless" className="ml-2 text-sm">
                      Wireless
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="mechanical" />
                    <label htmlFor="mechanical" className="ml-2 text-sm">
                      Mechanical
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="membrane" />
                    <label htmlFor="membrane" className="ml-2 text-sm">
                      Membrane
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="gaming" />
                    <label htmlFor="gaming" className="ml-2 text-sm">
                      Gaming
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="ergonomic" />
                    <label htmlFor="ergonomic" className="ml-2 text-sm">
                      Ergonomic
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="logitech" />
                    <label htmlFor="logitech" className="ml-2 text-sm">
                      Logitech
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="apple" />
                    <label htmlFor="apple" className="ml-2 text-sm">
                      Apple
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="microsoft" />
                    <label htmlFor="microsoft" className="ml-2 text-sm">
                      Microsoft
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="razer" />
                    <label htmlFor="razer" className="ml-2 text-sm">
                      Razer
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="corsair" />
                    <label htmlFor="corsair" className="ml-2 text-sm">
                      Corsair
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="keychron" />
                    <label htmlFor="keychron" className="ml-2 text-sm">
                      Keychron
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="backlit" />
                    <label htmlFor="backlit" className="ml-2 text-sm">
                      Backlit
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="rgb" />
                    <label htmlFor="rgb" className="ml-2 text-sm">
                      RGB Lighting
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="numpad" />
                    <label htmlFor="numpad" className="ml-2 text-sm">
                      Numeric Keypad
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="multimedia" />
                    <label htmlFor="multimedia" className="ml-2 text-sm">
                      Multimedia Keys
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
                          <h3 className="font-medium mb-4">Keyboard Type</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Switch id="wireless-mobile" />
                              <label htmlFor="wireless-mobile" className="ml-2 text-sm">
                                Wireless
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="mechanical-mobile" />
                              <label htmlFor="mechanical-mobile" className="ml-2 text-sm">
                                Mechanical
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="gaming-mobile" />
                              <label htmlFor="gaming-mobile" className="ml-2 text-sm">
                                Gaming
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

              <TabsContent value="wireless" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((product) => product.specs.some((spec) => spec.toLowerCase().includes("wireless")))
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="mechanical" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((product) => product.specs.some((spec) => spec.toLowerCase().includes("mechanical")))
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="gaming" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.badge === "Gaming" ||
                        product.specs.some((spec) => spec.toLowerCase().includes("gaming")),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <div className="mt-12 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About Computer Keyboards</h2>
                <p className="mb-4">
                  Enhance your computing experience with our premium selection of keyboards. From wireless and
                  mechanical to gaming and ergonomic designs, we offer keyboards for every need and preference.
                </p>
                <p>
                  All our keyboards are carefully selected for quality, durability, and performance. We offer same-day
                  delivery in Lagos and nationwide shipping, with a 30-day free tech support on all purchases.
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
