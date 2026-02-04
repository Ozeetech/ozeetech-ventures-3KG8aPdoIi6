import Link from "next/link"
import {
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  Shield,
  Clock,
  RefreshCw,
  Headphones,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductPage() {
  // Product data
  const product = {
    id: 2,
    name: 'MacBook Pro 16" M3 Pro',
    price: 3749999, // ₦3,749,999
    rating: 4.8,
    reviewCount: 89,
    description:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M3 Pro chip, stunning Liquid Retina XDR display, and all-day battery life, this MacBook Pro delivers exceptional performance for demanding workflows like photo and video editing, 3D rendering, and software development.",
    features: [
      "16-inch Liquid Retina XDR display with extreme dynamic range and contrast ratio",
      "M3 Pro chip with 12-core CPU and 19-core GPU for exceptional performance",
      "Up to 32GB unified memory for fluid multitasking and pro workflows",
      "Up to 1TB SSD storage for instant access to files and apps",
      "Up to 22 hours of battery life, the longest in a Mac ever",
      "1080p FaceTime HD camera with advanced image signal processor",
      "Six-speaker sound system with force-cancelling woofers",
      "Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, and MagSafe 3 port",
    ],
    specs: {
      dimensions: "14.01 x 9.77 x 0.66 inches",
      weight: "4.8 pounds (2.2 kg)",
      display: "16-inch Liquid Retina XDR display (3456 x 2234)",
      processor: "Apple M3 Pro with 12-core CPU, 19-core GPU, 16-core Neural Engine",
      memory: "32GB unified memory",
      storage: "512GB/1TB/2TB/4TB/8TB SSD",
      battery: "100-watt-hour lithium-polymer battery, up to 22 hours",
      camera: "1080p FaceTime HD camera",
      os: "macOS Sonoma",
      connectivity: "Wi-Fi 6E (802.11ax), Bluetooth 5.3",
    },
    images: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054312",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-keyboard-202310?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1697558869763",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-keyboard-202310?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1697558869763",
    ],
    colors: ["Space Gray", "Silver"],
    storage: ["512GB", "1TB", "2TB"],
    inStock: true,
    category: "Laptops",
    priceByStorage: {
      "512GB": 3749999, // ₦3,749,999
      "1TB": 4199999, // ₦4,199,999
      "2TB": 4799999, // ₦4,799,999
    },
  }

  // Related products
  const relatedProducts = [
    {
      id: 4,
      name: "Dell XPS 15 (2025)",
      price: 2849999, // ₦2,849,999
      rating: 4.6,
      image:
        "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      category: "Laptops",
      href: "/products/laptops/dell-xps-15",
    },
    {
      id: 6,
      name: "ASUS ROG Zephyrus G16",
      price: 3299999, // ₦3,299,999
      rating: 4.7,
      image: "https://dlcdnwebimgs.asus.com/gain/E0C6E9A9-0A57-4FBE-ACCD-F39D539BC9D9/w1000/h732",
      category: "Laptops",
      badge: "Gaming",
      href: "/products/laptops/asus-rog-zephyrus-g16",
    },
    {
      id: 8,
      name: "Lenovo ThinkPad X1 Carbon",
      price: 2399999, // ₦2,399,999
      rating: 4.5,
      image: "https://p2-ofp.static.pub/fes/cms/2022/12/28/vc9rlhb8nh2ckm9oa5qvvvs5lfz5ky082283.png",
      category: "Laptops",
      badge: "Business",
      href: "/products/laptops/lenovo-thinkpad-x1-carbon",
    },
  ]

  // Format price in Nigerian Naira
  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString("en-NG")}`
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/laptops" className="hover:text-primary">
              Laptops
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : i < product.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="text-3xl font-bold">{formatPrice(product.price)}</div>

            <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900/30">
              <Truck className="h-4 w-4 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-800 dark:text-green-400 ml-2">Same Day Delivery Available</AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-500 ml-6">
                Same Day Delivery applies to orders within Lagos only. Orders made outside Lagos may take 2-5 Working
                Days for delivery.
              </AlertDescription>
            </Alert>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" className="rounded-full h-10 px-4">
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Storage</h3>
              <div className="flex flex-wrap gap-2">
                {product.storage.map((size) => (
                  <Button key={size} variant="outline" className="rounded-full h-10 px-4">
                    {size} - {formatPrice(product.priceByStorage[size as keyof typeof product.priceByStorage])}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-r-none">
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease quantity</span>
                </Button>
                <div className="h-10 px-4 flex items-center justify-center border-y">1</div>
                <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none">
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase quantity</span>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="sm:flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="secondary" className="sm:flex-1">
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="w-12 flex-none">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button size="lg" variant="outline" className="w-12 flex-none">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center">
                <Truck className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-sm">Free shipping in Lagos</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-sm">30-day returns</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="text-sm">1-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="py-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="py-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col py-2 border-b">
                      <span className="text-sm text-muted-foreground capitalize">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="text-center p-6 border rounded-lg">
                      <div className="text-5xl font-bold mb-2">{product.rating}</div>
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? "fill-primary text-primary"
                                : i < product.rating
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">Based on {product.reviewCount} reviews</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-6">
                      <div className="border-b pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">David L.</div>
                          <div className="text-sm text-muted-foreground">3 weeks ago</div>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm">
                          As a software developer, this MacBook Pro is a game-changer. The M3 Pro chip handles
                          everything I throw at it without breaking a sweat. Multiple Docker containers, several IDEs,
                          and dozens of Chrome tabs - all running simultaneously with no slowdown. The battery life is
                          incredible too, easily lasting a full workday.
                        </p>
                      </div>
                      <div className="border-b pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">Jessica R.</div>
                          <div className="text-sm text-muted-foreground">1 month ago</div>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm">
                          The display on this MacBook Pro is absolutely stunning - perfect for photo and video editing.
                          The M3 Pro chip makes editing 4K video feel like editing standard HD. My only minor complaint
                          is that it can get a bit warm during intensive tasks, but that's expected with this level of
                          performance.
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Service Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <RefreshCw className="h-5 w-5 mr-2 text-primary" />
                Swap Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>For devices purchased from Ozeetech - there is absolutely nothing required.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>For devices purchased from other vendors - Receipt of purchase is required.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Government Regulator ID (e.g. Permanent Voters Card, National ID, International Passport).
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Device presented for swap must be from a verifiable store.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Same Day Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Same Day Delivery applies to orders within Lagos only. Orders made outside Lagos may take 2-5 Working
                Days for payment confirmation, order processing and delivery.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Orders before 12pm will be delivered same day in Lagos</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Orders after 12pm will be delivered next day</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Free shipping within Lagos for orders above ₦50,000</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Headphones className="h-5 w-5 mr-2 text-primary" />
                30-Days Free Tech Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                At Ozeetech Ventures, we offer tech support for a month on all items purchased at our store, new or used
                i.e. software resolution, setup setbacks, account set-up etc. Terms & Conditions Apply.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Software troubleshooting and resolution</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Device setup assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Account configuration and setup</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
