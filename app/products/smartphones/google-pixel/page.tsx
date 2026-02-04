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

export default function GooglePixelPage() {
  const products = [
    {
      id: 1,
      name: "Google Pixel 8 Pro",
      price: 1299999, // ₦1,299,999
      rating: 4.8,
      image:
        "https://lh3.googleusercontent.com/Gj-5KGxAFAUNVR9kxPxXCdGQZfPMvMGps4H_3GS_nKDQRKQQZEGLEcW6CKPKkQ7Qva0UQGqQXSbT-4Q_n-OZJrT3YV0UHxn9=rw-e365-w1440",
      category: "Smartphones",
      badge: "Flagship",
      href: "/products/smartphones/google-pixel/pixel-8-pro",
      specs: ["Google Tensor G3", '6.7" LTPO OLED', "50MP triple camera", "7 years of updates"],
    },
    {
      id: 2,
      name: "Google Pixel 8",
      price: 999999, // ₦999,999
      rating: 4.7,
      image:
        "https://lh3.googleusercontent.com/eSTPgCMq5vjNzfsXwerd3x5Z1YKIhgZP_R2t7rRZ-hyygP1_vedWCxNGZ9yCVwDvhv5l0HShsHSyXVpM6rWN5oBkSA1vRg=rw-e365-w1440",
      category: "Smartphones",
      href: "/products/smartphones/google-pixel/pixel-8",
      specs: ["Google Tensor G3", '6.2" OLED', "50MP dual camera", "7 years of updates"],
    },
    {
      id: 3,
      name: "Google Pixel 7a",
      price: 699999, // ₦699,999
      rating: 4.6,
      image:
        "https://lh3.googleusercontent.com/Z1YLFvX9g6hcxYqCwXeZhbEFBmPg8AAyQcQPLPM38z_Vp_vwwdLAZWC6UvmQnwOXYEpKgAYhgP2YKPVgDQST-_4XPL8GdDOJHA=rw-e365-w1440",
      category: "Smartphones",
      badge: "Mid-range",
      href: "/products/smartphones/google-pixel/pixel-7a",
      specs: ["Google Tensor G2", '6.1" OLED', "64MP main camera", "5 years of updates"],
    },
    {
      id: 4,
      name: "Google Pixel 7 Pro",
      price: 1099999, // ₦1,099,999
      rating: 4.7,
      image:
        "https://lh3.googleusercontent.com/9obrCzPH0MeLtEVZNrZZXU-M1yMQJYUoO9O6hGGEVx3qQDyOJvqNuRjQp2aBRKJGf9a3UcRJrEUYcA6is0aDzs5UWX4EtZE=rw-e365-w1440",
      category: "Smartphones",
      href: "/products/smartphones/google-pixel/pixel-7-pro",
      specs: ["Google Tensor G2", '6.7" LTPO OLED', "50MP triple camera", "5 years of updates"],
    },
    {
      id: 5,
      name: "Google Pixel 7",
      price: 899999, // ₦899,999
      rating: 4.6,
      image:
        "https://lh3.googleusercontent.com/Z1YLFvX9g6hcxYqCwXeZhbEFBmPg8AAyQcQPLPM38z_Vp_vwwdLAZWC6UvmQnwOXYEpKgAYhgP2YKPVgDQST-_4XPL8GdDOJHA=rw-e365-w1440",
      category: "Smartphones",
      href: "/products/smartphones/google-pixel/pixel-7",
      specs: ["Google Tensor G2", '6.3" OLED', "50MP dual camera", "5 years of updates"],
    },
    {
      id: 6,
      name: "Google Pixel Fold",
      price: 1899999, // ₦1,899,999
      rating: 4.5,
      image:
        "https://lh3.googleusercontent.com/MjmRnNzXTBGZ-ITwOh-0HvBwMJTeOJLgRwDLzFEkEPQJxS_5wReWf9n1m-r9jFdV_Jd_v3VaZ4HJlXQlmwEiKPT3x-0wxA=rw-e365-w1440",
      category: "Smartphones",
      badge: "Foldable",
      href: "/products/smartphones/google-pixel/pixel-fold",
      specs: ["Google Tensor G2", '7.6" inner + 5.8" outer display', "48MP triple camera", "Foldable design"],
    },
    {
      id: 7,
      name: "Google Pixel Tablet",
      price: 899999, // ₦899,999
      rating: 4.4,
      image:
        "https://lh3.googleusercontent.com/9ggCjJxGGPzWjYLl3qYP-OUzGMO_J5i3EiQKYKRvXlYKC0rZJCneu7vNrZpHbWzn0WZbQ5P0ZmQEkJl5Yjv-HNLV-qrJW4LtUw=rw-e365-w1440",
      category: "Tablets",
      href: "/products/tablets/google-pixel-tablet",
      specs: ['11" 2560 x 1600 display', "Google Tensor G2", "8GB RAM, 256GB storage", "Charging speaker dock"],
    },
    {
      id: 8,
      name: "Google Pixel Buds Pro",
      price: 199999, // ₦199,999
      rating: 4.6,
      image:
        "https://lh3.googleusercontent.com/SzRzfS-OwUGOCmpnNxk9vbrDZjlA6Cj0jBMIRTusESYZ8q6WRc3JvYnIHXA8HLg-GQqnSuKrYVlOTL-_uiGOQQF9Kn9KoA=rw-e365-w1440",
      category: "Audio",
      href: "/products/audio/google-pixel-buds-pro",
      specs: ["Active noise cancellation", "11mm drivers", "7 hours battery life", "Wireless charging case"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Google Pixel Devices</h1>
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
            <span>Google Pixel</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Google Pixel Devices</h2>
            <TabsList>
              <TabsTrigger value="all">All Devices</TabsTrigger>
              <TabsTrigger value="phones">Phones</TabsTrigger>
              <TabsTrigger value="tablets">Tablets</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Device Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="smartphones" />
                    <label htmlFor="smartphones" className="ml-2 text-sm">
                      Smartphones
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="tablets" />
                    <label htmlFor="tablets" className="ml-2 text-sm">
                      Tablets
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="earbuds" />
                    <label htmlFor="earbuds" className="ml-2 text-sm">
                      Earbuds
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="watches" />
                    <label htmlFor="watches" className="ml-2 text-sm">
                      Watches
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Model</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="pixel8" />
                    <label htmlFor="pixel8" className="ml-2 text-sm">
                      Pixel 8 Series
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="pixel7" />
                    <label htmlFor="pixel7" className="ml-2 text-sm">
                      Pixel 7 Series
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="pixelfold" />
                    <label htmlFor="pixelfold" className="ml-2 text-sm">
                      Pixel Fold
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="pixeltablet" />
                    <label htmlFor="pixeltablet" className="ml-2 text-sm">
                      Pixel Tablet
                    </label>
                  </div>
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
                          <h3 className="font-medium mb-4">Device Type</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Switch id="smartphones-mobile" />
                              <label htmlFor="smartphones-mobile" className="ml-2 text-sm">
                                Smartphones
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="tablets-mobile" />
                              <label htmlFor="tablets-mobile" className="ml-2 text-sm">
                                Tablets
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch id="earbuds-mobile" />
                              <label htmlFor="earbuds-mobile" className="ml-2 text-sm">
                                Earbuds
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

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="phones" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter(
                      (product) =>
                        product.category === "Smartphones" &&
                        !product.name.includes("Tablet") &&
                        !product.name.includes("Buds"),
                    )
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="tablets" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((product) => product.category === "Tablets" || product.name.includes("Tablet"))
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="accessories" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((product) => product.category === "Audio" || product.name.includes("Buds"))
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </TabsContent>

              <div className="mt-12 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About Google Pixel</h2>
                <p className="mb-4">
                  Google Pixel devices are known for their exceptional camera quality, clean Android experience, and
                  long-term software support. With the latest Tensor processors designed by Google, these devices offer
                  advanced AI capabilities and smooth performance.
                </p>
                <p>
                  The Pixel lineup includes smartphones, tablets, earbuds, and watches, all designed to work seamlessly
                  together in the Google ecosystem. All Pixel phones come with at least 5 years of security updates,
                  with the Pixel 8 series offering an unprecedented 7 years of OS and security updates.
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
