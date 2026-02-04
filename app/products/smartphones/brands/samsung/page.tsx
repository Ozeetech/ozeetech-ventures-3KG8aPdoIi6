import Link from "next/link"
import { ChevronRight, Filter, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ProductCard } from "@/components/product-card"

export default function SamsungPage() {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      price: 1699999, // ₦1,699,999
      rating: 4.7,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/2401/gallery/africa-en-galaxy-s24-ultra-s928-sm-s928bzkcafr-thumb-539972069",
      category: "Smartphones",
      badge: "New",
      href: "/products/smartphones/samsung-galaxy-s24-ultra",
      specs: ["Snapdragon 8 Gen 3", '6.8" Dynamic AMOLED 2X', "200MP main camera", "S Pen included"],
    },
    {
      id: 2,
      name: "Samsung Galaxy S24+",
      price: 1299999, // ₦1,299,999
      rating: 4.6,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/2401/gallery/africa-en-galaxy-s24-plus-s926-sm-s926bzkcmea-thumb-539972039",
      category: "Smartphones",
      badge: "New",
      href: "/products/smartphones/samsung-galaxy-s24-plus",
      specs: ["Snapdragon 8 Gen 3", '6.7" Dynamic AMOLED 2X', "50MP main camera", "4900mAh battery"],
    },
    {
      id: 3,
      name: "Samsung Galaxy S24",
      price: 999999, // ₦999,999
      rating: 4.6,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/2401/gallery/africa-en-galaxy-s24-s931-sm-s931bzkcmea-thumb-539972009",
      category: "Smartphones",
      badge: "New",
      href: "/products/smartphones/samsung-galaxy-s24",
      specs: ["Snapdragon 8 Gen 3", '6.2" Dynamic AMOLED 2X', "50MP main camera", "4000mAh battery"],
    },
    {
      id: 4,
      name: "Samsung Galaxy Z Fold 5",
      price: 1899999, // ₦1,899,999
      rating: 4.5,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f946blbgmea/gallery/africa-en-galaxy-z-fold5-f946-sm-f946blbgmea-thumb-537243458",
      category: "Smartphones",
      href: "/products/smartphones/samsung-galaxy-z-fold-5",
      specs: ["Snapdragon 8 Gen 2", '7.6" Dynamic AMOLED 2X', "50MP triple camera", "Foldable design"],
    },
    {
      id: 5,
      name: "Samsung Galaxy Z Flip 5",
      price: 1299999, // ₦1,299,999
      rating: 4.4,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f731blgamea/gallery/africa-en-galaxy-z-flip5-f731-sm-f731blgamea-thumb-537243458",
      category: "Smartphones",
      href: "/products/smartphones/samsung-galaxy-z-flip-5",
      specs: ["Snapdragon 8 Gen 2", '6.7" Dynamic AMOLED 2X', "12MP dual camera", "Flip design"],
    },
    {
      id: 6,
      name: "Samsung Galaxy S23 Ultra",
      price: 1499999, // ₦1,499,999
      rating: 4.7,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/2302/gallery/africa-en-galaxy-s23-ultra-s918-sm-s918bzgcafa-thumb-534863401",
      category: "Smartphones",
      href: "/products/smartphones/samsung-galaxy-s23-ultra",
      specs: ["Snapdragon 8 Gen 2", '6.8" Dynamic AMOLED 2X', "200MP main camera", "S Pen included"],
    },
    {
      id: 7,
      name: "Samsung Galaxy S23+",
      price: 1099999, // ₦1,099,999
      rating: 4.6,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/2302/gallery/africa-en-galaxy-s23-plus-s916-sm-s916bzkcafa-thumb-534863365",
      category: "Smartphones",
      href: "/products/smartphones/samsung-galaxy-s23-plus",
      specs: ["Snapdragon 8 Gen 2", '6.6" Dynamic AMOLED 2X', "50MP main camera", "4700mAh battery"],
    },
    {
      id: 8,
      name: "Samsung Galaxy S23",
      price: 899999, // ₦899,999
      rating: 4.5,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/2302/gallery/africa-en-galaxy-s23-s911-sm-s911bzkcafa-thumb-534863329",
      category: "Smartphones",
      href: "/products/smartphones/samsung-galaxy-s23",
      specs: ["Snapdragon 8 Gen 2", '6.1" Dynamic AMOLED 2X', "50MP main camera", "3900mAh battery"],
    },
    {
      id: 9,
      name: "Samsung Galaxy A54 5G",
      price: 499999, // ₦499,999
      rating: 4.3,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a546elgdafa/gallery/africa-en-galaxy-a54-5g-a546-sm-a546elgdafa-thumb-535986128",
      category: "Smartphones",
      href: "/products/smartphones/samsung-galaxy-a54-5g",
      specs: ["Exynos 1380", '6.4" Super AMOLED', "50MP main camera", "5000mAh battery"],
    },
    {
      id: 10,
      name: "Samsung Galaxy A34 5G",
      price: 349999, // ₦349,999
      rating: 4.2,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a346elgdafa/gallery/africa-en-galaxy-a34-5g-a346-sm-a346elgdafa-thumb-535986128",
      category: "Smartphones",
      href: "/products/smartphones/samsung-galaxy-a34-5g",
      specs: ["Dimensity 1080", '6.6" Super AMOLED', "48MP main camera", "5000mAh battery"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Samsung Galaxy</h1>
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
            <span>Samsung</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 space-y-6">
            <div>
              <h3 className="font-medium mb-4">Series</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Switch id="s-series" />
                  <label htmlFor="s-series" className="ml-2 text-sm">
                    Galaxy S Series
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="z-series" />
                  <label htmlFor="z-series" className="ml-2 text-sm">
                    Galaxy Z Series
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="a-series" />
                  <label htmlFor="a-series" className="ml-2 text-sm">
                    Galaxy A Series
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="note-series" />
                  <label htmlFor="note-series" className="ml-2 text-sm">
                    Galaxy Note Series
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
              <h3 className="font-medium mb-4">Features</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Switch id="feature1" />
                  <label htmlFor="feature1" className="ml-2 text-sm">
                    S Pen Support
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="feature2" />
                  <label htmlFor="feature2" className="ml-2 text-sm">
                    Foldable
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="feature3" />
                  <label htmlFor="feature3" className="ml-2 text-sm">
                    5G
                  </label>
                </div>
                <div className="flex items-center">
                  <Switch id="feature4" />
                  <label htmlFor="feature4" className="ml-2 text-sm">
                    Water Resistant
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
                        <h3 className="font-medium mb-4">Series</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Switch id="s-series-mobile" />
                            <label htmlFor="s-series-mobile" className="ml-2 text-sm">
                              Galaxy S Series
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="z-series-mobile" />
                            <label htmlFor="z-series-mobile" className="ml-2 text-sm">
                              Galaxy Z Series
                            </label>
                          </div>
                          <div className="flex items-center">
                            <Switch id="a-series-mobile" />
                            <label htmlFor="a-series-mobile" className="ml-2 text-sm">
                              Galaxy A Series
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
