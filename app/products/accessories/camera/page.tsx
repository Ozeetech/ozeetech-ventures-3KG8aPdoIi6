import { Filter, Grid3X3, List } from "lucide-react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CameraAccessoriesPage() {
  const products = [
    {
      id: 1,
      name: "DJI OM 5 Smartphone Gimbal Stabilizer",
      price: 89999, // ₦89,999
      rating: 4.7,
      image: "https://store.dji.com/product/dji-om-5/poster/image.jpg",
      category: "Camera Accessories",
      badge: "Best Seller",
      href: "/products/accessories/camera/dji-om-5-gimbal",
      specs: ["3-axis stabilization", "Built-in extension rod", "ActiveTrack 4.0", "Magnetic phone clamp"],
    },
    {
      id: 2,
      name: "Joby GorillaPod Mobile Vlogging Kit",
      price: 49999, // ₦49,999
      rating: 4.5,
      image: "https://joby.com/cdn/shop/products/JB01533_GorillaPod_Mobile_Vlogging_Kit_01_1200x.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/joby-gorillapod-vlogging-kit",
      specs: ["Flexible tripod legs", "Beamo LED light", "Wavo mobile microphone", "Phone mount"],
    },
    {
      id: 3,
      name: "Moment Anamorphic Lens",
      price: 149999, // ₦149,999
      rating: 4.8,
      image:
        "https://cdn.shopify.com/s/files/1/1423/1382/products/Moment-Anamorphic-Lens-1.33x-Blue-Flare-Mounted-on-iPhone-13-Pro-Max_1024x1024.jpg",
      category: "Camera Accessories",
      badge: "Premium",
      href: "/products/accessories/camera/moment-anamorphic-lens",
      specs: ["1.33x anamorphic lens", "Cinematic blue flare", "Bayonet mount", "Includes lens cap"],
    },
    {
      id: 4,
      name: "Rode VideoMic ME-L",
      price: 59999, // ₦59,999
      rating: 4.6,
      image: "https://rode.com/assets/images/_1200x630_crop_center-center_82_none/VideoMic-ME-L-Header.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/rode-videomic-me-l",
      specs: ["Directional microphone", "Lightning connector", "Headphone monitoring", "Includes windshield"],
    },
    {
      id: 5,
      name: "Godox LEDM150 RGB LED Light",
      price: 79999, // ₦79,999
      rating: 4.4,
      image: "https://www.godox.com/Content/upload/2021410081/202104100816503258854.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/godox-ledm150-rgb-light",
      specs: ["RGB color modes", "2500-8500K adjustable", "Built-in battery", "Magnetic design"],
    },
    {
      id: 6,
      name: "SmallRig Mobile Video Cage",
      price: 39999, // ₦39,999
      rating: 4.5,
      image: "https://www.smallrig.com/media/catalog/product/cache/f9a220101c2d14810971f06c91903e3a/3/5/3551-01.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/smallrig-mobile-video-cage",
      specs: ["Universal phone mount", 'Multiple 1/4"-20 threads', "Cold shoe mounts", "Lightweight aluminum"],
    },
    {
      id: 7,
      name: "Zhiyun Smooth 5 Gimbal",
      price: 99999, // ₦99,999
      rating: 4.6,
      image: "https://www.zhiyun-tech.com/uploadfile/product/Smooth-5/Smooth-5-01.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/zhiyun-smooth-5-gimbal",
      specs: ["3-axis stabilization", "Fill light built-in", "Focus/zoom wheel", "Extended runtime"],
    },
    {
      id: 8,
      name: "Ulanzi ST-17 Phone Tripod Mount",
      price: 9999, // ₦9,999
      rating: 4.3,
      image:
        "https://cdn.shopify.com/s/files/1/0066/4322/0562/products/ulanzi-st-17-phone-tripod-mount-with-cold-shoe-1_1024x1024.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/ulanzi-st-17-tripod-mount",
      specs: ["Cold shoe mount", "Universal phone clamp", '1/4"-20 thread', "Arca-Swiss compatible"],
    },
    {
      id: 9,
      name: "Anker 633 MagGo 2-in-1 Wireless Charging Station",
      price: 44999, // ₦44,999
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/61kC4y42+JL._AC_UF1000,1000_QL80_.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/anker-633-maggo-charging-station",
      specs: ["MagSafe compatible", "Charges phone & AirPods", "Adjustable viewing angle", "Fast charging"],
    },
    {
      id: 10,
      name: "Sandisk Extreme PRO 256GB SD Card",
      price: 29999, // ₦29,999
      rating: 4.9,
      image:
        "https://www.westerndigital.com/content/dam/store/en-us/assets/products/memory-cards/extreme-pro-uhs-i-sd-card/gallery/extreme-pro-uhs-i-sd-card-front.png",
      category: "Camera Accessories",
      href: "/products/accessories/camera/sandisk-extreme-pro-256gb-sd-card",
      specs: ["256GB capacity", "Up to 170MB/s read speed", "V30, U3, Class 10", "Lifetime warranty"],
    },
    {
      id: 11,
      name: "Peak Design Mobile Tripod",
      price: 34999, // ₦34,999
      rating: 4.8,
      image:
        "https://cdn.shopify.com/s/files/1/2986/1172/products/20210426-PeakDesign-Mobile-0600-2x3-72-Tripod-1_1445x.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/peak-design-mobile-tripod",
      specs: ["Ultra-compact design", "MagSafe compatible", "Adjustable ball head", "Aluminum legs"],
    },
    {
      id: 12,
      name: "Lume Cube Panel Mini LED Light",
      price: 49999, // ₦49,999
      rating: 4.6,
      image: "https://cdn.shopify.com/s/files/1/0344/6469/files/Panel-Mini-Product-Images-1.jpg",
      category: "Camera Accessories",
      href: "/products/accessories/camera/lume-cube-panel-mini-led-light",
      specs: ["Adjustable brightness", "3200-5600K color temp", "Built-in battery", "Compact design"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Camera Accessories</h1>
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
            <span>Camera</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Camera Accessories</h2>
            <TabsList>
              <TabsTrigger value="all">All Accessories</TabsTrigger>
              <TabsTrigger value="gimbals">Gimbals</TabsTrigger>
              <TabsTrigger value="lighting">Lighting</TabsTrigger>
              <TabsTrigger value="mounts">Mounts & Tripods</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="gimbals" />
                    <label htmlFor="gimbals" className="ml-2 text-sm">
                      Gimbals & Stabilizers
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="lighting" />
                    <label htmlFor="lighting" className="ml-2 text-sm">
                      Lighting & Flash
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="mounts" />
                    <label htmlFor="mounts" className="ml-2 text-sm">
                      Mounts & Tripods
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="lenses" />
                    <label htmlFor="lenses" className="ml-2 text-sm">
                      Lenses
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="audio" />
                    <label htmlFor="audio" className="ml-2 text-sm">
                      Audio Equipment
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="storage" />
                    <label htmlFor="storage" className="ml-2 text-sm">
                      Memory & Storage
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="dji" />
                    <label htmlFor="dji" className="ml-2 text-sm">
                      DJI
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="joby" />
                    <label htmlFor="joby" className="ml-2 text-sm">
                      Joby
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="moment" />
                    <label htmlFor="moment" className="ml-2 text-sm">
                      Moment
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="rode" />
                    <label htmlFor="rode" className="ml-2 text-sm">
                      Rode
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="zhiyun" />
                    <label htmlFor="zhiyun" className="ml-2 text-sm">
                      Zhiyun
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider defaultValue={[0, 150000]} min={0} max={150000} step={5000} className="mb-6" />
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
                          <h3 className="font-medium mb-4">Category</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Switch id="gimbals-mobile" />
                              <label htmlFor="gimbals-mobile" className="ml-2 text-sm">
                                Gimbals & Stabilizers
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="lighting-mobile" />
                              <label htmlFor="lighting-mobile" className="ml-2 text-sm">
                                Lighting & Flash
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="mounts-mobile" />
                              <label htmlFor="mounts-mobile" className="ml-2 text-sm">
                                Mounts & Tripods
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="lenses-mobile" />
                              <label htmlFor="lenses-mobile" className="ml-2 text-sm">
                                Lenses
                              </label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-4">Price Range</h3>
                          <Slider defaultValue={[0, 150000]} min={0} max={150000} step={5000} className="mb-6" />
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

              <TabsContent value="gimbals" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.includes("Gimbal") ||
                        product.name.includes("Stabilizer") ||
                        product.specs.some((spec) => spec.includes("stabilization")),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="lighting" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.includes("LED") ||
                        product.name.includes("Light") ||
                        product.specs.some((spec) => spec.includes("light")),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="mounts" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.name.includes("Tripod") ||
                        product.name.includes("Mount") ||
                        product.specs.some((spec) => spec.includes("mount")),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mx-1">
                  1
                </Button>
                <Button variant="outline" className="mx-1">
                  2
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
