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
import { ProductPlaceholder } from "@/components/product-placeholder"

export default function ProductPage() {
  // Product data
  const product = {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 1699999, // ₦1,699,999
    rating: 4.7,
    reviewCount: 124,
    description:
      "Experience the ultimate Android flagship with the Samsung Galaxy S24 Ultra. Featuring the powerful Snapdragon 8 Gen 3 processor, a stunning 6.8-inch Dynamic AMOLED 2X display, and a revolutionary 200MP camera system with advanced AI capabilities. The built-in S Pen offers precision control for notes, sketches, and photo editing.",
    features: [
      "6.8-inch QHD+ Dynamic AMOLED 2X display with 120Hz adaptive refresh rate",
      "Snapdragon 8 Gen 3 for Galaxy processor for exceptional performance",
      "200MP main camera with advanced computational photography",
      "100x Space Zoom for incredible detail from a distance",
      "Built-in S Pen for notes, sketches, and precise control",
      "5000mAh battery with fast charging and wireless PowerShare",
      "IP68 water and dust resistance",
      "One UI 6.1 based on Android 14 with 7 years of OS updates",
    ],
    specs: {
      dimensions: "162.3 x 79.0 x 8.6 mm",
      weight: "232g",
      display: "6.8-inch QHD+ Dynamic AMOLED 2X, 120Hz adaptive refresh rate",
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      memory: "12GB LPDDR5X RAM",
      storage: "256GB/512GB/1TB UFS 4.0",
      battery: "5000mAh, 45W fast charging, 15W wireless charging",
      camera: "200MP main, 12MP ultrawide, 50MP telephoto (5x), 10MP telephoto (3x), 12MP front",
      os: "One UI 6.1 based on Android 14",
      connectivity: "5G, Wi-Fi 7, Bluetooth 5.3, UWB, NFC",
    },
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet", "Titanium Yellow"],
    storage: ["256GB", "512GB", "1TB"],
    inStock: true,
    category: "Smartphones",
    priceByStorage: {
      "256GB": 1699999, // ₦1,699,999
      "512GB": 1899999, // ₦1,899,999
      "1TB": 2199999, // ₦2,199,999
    },
  }

  // Related products
  const relatedProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1799999,
      rating: 4.9,
      image: "https://via.placeholder.com/400x400/1F2937/FFFFFF?text=iPhone+15+Pro+Max",
      category: "Smartphones",
      badge: "New",
      href: "/products/smartphones/iphone-15-pro-max",
    },
    {
      id: 5,
      name: "Google Pixel 8 Pro",
      price: 1299999,
      rating: 4.5,
      image: "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Pixel+8+Pro",
      category: "Smartphones",
      href: "/products/smartphones/google-pixel-8-pro",
    },
    {
      id: 7,
      name: "OnePlus 12",
      price: 1199999,
      rating: 4.6,
      image: "https://via.placeholder.com/400x400/EF4444/FFFFFF?text=OnePlus+12",
      category: "Smartphones",
      href: "/products/smartphones/oneplus-12",
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
            <Link href="/products/smartphones" className="hover:text-primary">
              Smartphones
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
              <ProductPlaceholder
                productName="Samsung Galaxy S24 Ultra Titanium Black"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.colors.map((color, index) => (
                <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <ProductPlaceholder productName={`Samsung S24 Ultra ${color}`} className="w-full h-full rounded-lg" />
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
                          <div className="font-medium">Alex K.</div>
                          <div className="text-sm text-muted-foreground">2 weeks ago</div>
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
                          The S24 Ultra is the best Android phone I've ever used. The camera system is incredible - the
                          200MP main camera captures stunning detail, and the 100x zoom is surprisingly usable. The S
                          Pen is a game-changer for productivity. Battery life easily lasts all day even with heavy use.
                          The titanium frame makes it feel premium and durable.
                        </p>
                      </div>
                      <div className="border-b pb-6">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">Priya M.</div>
                          <div className="text-sm text-muted-foreground">3 weeks ago</div>
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
                          Coming from the S22 Ultra, this is a significant upgrade. The AI features are actually useful,
                          especially for photo editing and translation. The display is gorgeous with perfect visibility
                          even in bright sunlight. My only complaint is that it's quite large and heavy, which makes
                          one-handed use difficult.
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
                  <span>For phones purchased from Ozeetech - there is absolutely nothing required.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>For phones purchased from other vendors - Receipt of purchase is required.</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>
                    Government Regulator ID (e.g. Permanent Voters Card, National ID, International Passport).
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Phone presented for swap must be from a verifiable store.</span>
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
