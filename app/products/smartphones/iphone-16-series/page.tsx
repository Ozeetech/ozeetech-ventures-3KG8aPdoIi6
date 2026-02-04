"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Heart,
  ShoppingCart,
  Truck,
  Shield,
  Headphones,
  CheckCircle,
  Smartphone,
  Camera,
  Battery,
  Cpu,
  Zap,
  MessageCircle,
  Phone,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function iPhone16SeriesPage() {
  const [selectedModel, setSelectedModel] = useState("pro-max")
  const [selectedColor, setSelectedColor] = useState("natural-titanium")
  const [selectedStorage, setSelectedStorage] = useState("256gb")

  const models = {
    "pro-max": {
      name: "iPhone 16 Pro Max",
      basePrice: 2450000,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=600&fit=crop&crop=center",
      display: "6.9-inch Super Retina XDR",
      chip: "A18 Pro chip",
      camera: "48MP Fusion + 48MP Ultra Wide + 12MP Telephoto",
      battery: "Up to 33 hours video playback",
      colors: ["natural-titanium", "blue-titanium", "white-titanium", "black-titanium"],
      storageOptions: ["256gb", "512gb", "1tb"],
      features: [
        "Camera Control button",
        "Action Button",
        "Dynamic Island",
        "Always-On display",
        "ProMotion technology",
        "Titanium design",
        "USB-C connector",
        "Face ID",
        "5G capable",
        "Water resistant IP68",
      ],
    },
    pro: {
      name: "iPhone 16 Pro",
      basePrice: 2150000,
      image: "https://images.unsplash.com/photo-1695048071774-204d82f3b4c3?w=500&h=600&fit=crop&crop=center",
      display: "6.3-inch Super Retina XDR",
      chip: "A18 Pro chip",
      camera: "48MP Fusion + 48MP Ultra Wide + 12MP Telephoto",
      battery: "Up to 27 hours video playback",
      colors: ["natural-titanium", "blue-titanium", "white-titanium", "black-titanium"],
      storageOptions: ["128gb", "256gb", "512gb", "1tb"],
      features: [
        "Camera Control button",
        "Action Button",
        "Dynamic Island",
        "Always-On display",
        "ProMotion technology",
        "Titanium design",
        "USB-C connector",
        "Face ID",
        "5G capable",
        "Water resistant IP68",
      ],
    },
    plus: {
      name: "iPhone 16 Plus",
      basePrice: 1750000,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=600&fit=crop&crop=center&sat=-20&bri=10",
      display: "6.7-inch Super Retina XDR",
      chip: "A18 chip",
      camera: "48MP Fusion + 12MP Ultra Wide",
      battery: "Up to 27 hours video playback",
      colors: ["black", "white", "pink", "teal", "ultramarine"],
      storageOptions: ["128gb", "256gb", "512gb"],
      features: [
        "Camera Control button",
        "Action Button",
        "Dynamic Island",
        "Ceramic Shield front",
        "Color-infused glass back",
        "USB-C connector",
        "Face ID",
        "5G capable",
        "Water resistant IP68",
        "Spatial Audio playback",
      ],
    },
    standard: {
      name: "iPhone 16",
      basePrice: 1450000,
      image: "https://images.unsplash.com/photo-1695048071774-204d82f3b4c3?w=500&h=600&fit=crop&crop=center&sat=-30",
      display: "6.1-inch Super Retina XDR",
      chip: "A18 chip",
      camera: "48MP Fusion + 12MP Ultra Wide",
      battery: "Up to 22 hours video playback",
      colors: ["black", "white", "pink", "teal", "ultramarine"],
      storageOptions: ["128gb", "256gb", "512gb"],
      features: [
        "Camera Control button",
        "Action Button",
        "Dynamic Island",
        "Ceramic Shield front",
        "Color-infused glass back",
        "USB-C connector",
        "Face ID",
        "5G capable",
        "Water resistant IP68",
        "Spatial Audio playback",
      ],
    },
  }

  const storagePrice = {
    "128gb": 0,
    "256gb": 200000,
    "512gb": 400000,
    "1tb": 600000,
  }

  const colorNames = {
    "natural-titanium": "Natural Titanium",
    "blue-titanium": "Blue Titanium",
    "white-titanium": "White Titanium",
    "black-titanium": "Black Titanium",
    black: "Black",
    white: "White",
    pink: "Pink",
    teal: "Teal",
    ultramarine: "Ultramarine",
  }

  const currentModel = models[selectedModel as keyof typeof models]
  const currentPrice = currentModel.basePrice + storagePrice[selectedStorage as keyof typeof storagePrice]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const reviews = [
    {
      name: "Adebayo Ogundimu",
      location: "Lagos, Nigeria",
      rating: 5,
      comment:
        "Amazing phone! The camera quality is outstanding and delivery was super fast. Ozeetech Ventures is definitely trustworthy. The A18 Pro chip is incredibly fast for all my business apps.",
      date: "2 weeks ago",
      verified: true,
    },
    {
      name: "Fatima Abdullahi",
      location: "Abuja, Nigeria",
      rating: 5,
      comment:
        "Love my new iPhone 16 Pro Max! The titanium design feels premium and the battery lasts all day. Same day delivery as promised. Customer service was excellent throughout the process.",
      date: "1 month ago",
      verified: true,
    },
    {
      name: "Chinedu Okwu",
      location: "Port Harcourt, Nigeria",
      rating: 4,
      comment:
        "Great phone with excellent build quality. The Camera Control button is very useful for photography. Ozeetech provided detailed setup assistance and answered all my questions.",
      date: "3 weeks ago",
      verified: true,
    },
    {
      name: "Aisha Mohammed",
      location: "Kano, Nigeria",
      rating: 5,
      comment:
        "The camera control button is a game changer for content creation! Perfect for my Instagram business. The team at Ozeetech was very professional and helpful with the purchase process.",
      date: "1 week ago",
      verified: true,
    },
    {
      name: "Emeka Okafor",
      location: "Enugu, Nigeria",
      rating: 5,
      comment:
        "Upgraded from iPhone 14 Pro and the difference is remarkable. The A18 Pro handles everything smoothly. Delivery to Enugu was prompt and the phone was perfectly packaged.",
      date: "4 days ago",
      verified: true,
    },
    {
      name: "Blessing Adeyemi",
      location: "Ibadan, Nigeria",
      rating: 5,
      comment:
        "Excellent service from Ozeetech! They helped me choose the right storage option and color. The phone arrived exactly as described with all accessories. Highly recommend!",
      date: "5 days ago",
      verified: true,
    },
  ]

  const relatedProducts = [
    {
      name: "AirPods Pro 2nd Generation",
      price: 420000,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&h=200&fit=crop&crop=center",
      href: "/products/audio/airpods-pro-2",
    },
    {
      name: "iPhone 16 Pro Max Silicone Case",
      price: 45000,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=200&h=200&fit=crop&crop=center",
      href: "/products/accessories/iphone-16-case",
    },
    {
      name: "MagSafe Charger",
      price: 65000,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=200&h=200&fit=crop&crop=center",
      href: "/products/accessories/magsafe-charger",
    },
    {
      name: "iPhone 16 Screen Protector",
      price: 15000,
      image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=200&h=200&fit=crop&crop=center",
      href: "/products/accessories/screen-protector",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-ozeetech-blue">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/smartphones" className="hover:text-ozeetech-blue">
              Smartphones
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-ozeetech-blue font-medium">iPhone 16 Series</span>
          </nav>
        </div>
      </div>

      {/* WhatsApp Contact Banner */}
      <div className="bg-ozeetech-green text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">
              💬 Need help choosing the right iPhone? WhatsApp us:{" "}
              <a href="https://wa.me/2349069178853" className="underline font-bold hover:text-green-200">
                09069178853
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Images */}
          <div className="space-y-6">
            <div className="relative">
              <Image
                src={currentModel.image || "/placeholder.svg"}
                alt={currentModel.name}
                width={600}
                height={700}
                className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-ozeetech-orange text-white px-3 py-1">New Release</Badge>
              <Badge className="absolute top-4 right-4 bg-ozeetech-green text-white px-3 py-1">In Stock</Badge>
            </div>

            {/* Product Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-ozeetech-blue cursor-pointer"
                >
                  <Image
                    src={currentModel.image || "/placeholder.svg"}
                    alt={`${currentModel.name} view ${i}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-8">
            {/* Product Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-ozeetech-blue mb-4">{currentModel.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(4.9/5 from 1,247 reviews)</span>
              </div>
              <div className="text-3xl font-bold text-ozeetech-orange mb-2">{formatPrice(currentPrice)}</div>
              <p className="text-gray-600">
                💬 Contact us on WhatsApp{" "}
                <a href="https://wa.me/2349069178853" className="text-ozeetech-green font-medium underline">
                  09069178853
                </a>{" "}
                to confirm current price due to exchange rate fluctuations.
              </p>
            </div>

            {/* Model Selection */}
            <div>
              <h3 className="text-lg font-semibold text-ozeetech-blue mb-4">Choose Model</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(models).map(([key, model]) => (
                  <Button
                    key={key}
                    variant={selectedModel === key ? "default" : "outline"}
                    className={`p-4 h-auto text-left ${
                      selectedModel === key
                        ? "bg-ozeetech-blue text-white"
                        : "border-gray-300 hover:border-ozeetech-blue"
                    }`}
                    onClick={() => setSelectedModel(key)}
                  >
                    <div>
                      <div className="font-semibold">{model.name}</div>
                      <div className="text-sm opacity-80">{formatPrice(model.basePrice)}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-ozeetech-blue mb-4">
                Choose Color: {colorNames[selectedColor as keyof typeof colorNames]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentModel.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    className={`px-4 py-2 ${
                      selectedColor === color
                        ? "bg-ozeetech-blue text-white"
                        : "border-gray-300 hover:border-ozeetech-blue"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {colorNames[color as keyof typeof colorNames]}
                  </Button>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div>
              <h3 className="text-lg font-semibold text-ozeetech-blue mb-4">Choose Storage</h3>
              <div className="grid grid-cols-3 gap-3">
                {currentModel.storageOptions.map((storage) => (
                  <Button
                    key={storage}
                    variant={selectedStorage === storage ? "default" : "outline"}
                    className={`p-3 h-auto ${
                      selectedStorage === storage
                        ? "bg-ozeetech-blue text-white"
                        : "border-gray-300 hover:border-ozeetech-blue"
                    }`}
                    onClick={() => setSelectedStorage(storage)}
                  >
                    <div className="text-center">
                      <div className="font-semibold">{storage.toUpperCase()}</div>
                      <div className="text-sm opacity-80">
                        {storagePrice[storage as keyof typeof storagePrice] > 0
                          ? `+${formatPrice(storagePrice[storage as keyof typeof storagePrice])}`
                          : "Base Price"}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold text-ozeetech-blue mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {currentModel.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-ozeetech-green" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-ozeetech-orange hover:bg-ozeetech-darkOrange text-white py-4">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-ozeetech-blue text-ozeetech-blue hover:bg-ozeetech-blue hover:text-white bg-transparent"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <Button size="lg" className="w-full bg-ozeetech-green hover:bg-green-600 text-white py-4" asChild>
                <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order via WhatsApp
                </a>
              </Button>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-8 w-8 text-ozeetech-blue mx-auto mb-2" />
                <div className="text-sm font-medium">Same Day Delivery</div>
                <div className="text-xs text-gray-600">Lagos & Abuja</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-ozeetech-green mx-auto mb-2" />
                <div className="text-sm font-medium">Original Warranty</div>
                <div className="text-xs text-gray-600">1 Year Apple Care</div>
              </div>
              <div className="text-center">
                <Headphones className="h-8 w-8 text-ozeetech-orange mx-auto mb-2" />
                <div className="text-sm font-medium">30-Day Support</div>
                <div className="text-xs text-gray-600">Free Tech Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-100">
              <TabsTrigger
                value="specifications"
                className="data-[state=active]:bg-ozeetech-blue data-[state=active]:text-white"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="data-[state=active]:bg-ozeetech-blue data-[state=active]:text-white"
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-ozeetech-blue data-[state=active]:text-white"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="warranty"
                className="data-[state=active]:bg-ozeetech-blue data-[state=active]:text-white"
              >
                Warranty
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-ozeetech-blue mb-4 flex items-center">
                        <Smartphone className="mr-2 h-5 w-5" />
                        Display & Design
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Display Size:</span>
                          <span className="font-medium">{currentModel.display}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Technology:</span>
                          <span className="font-medium">Super Retina XDR OLED</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Resolution:</span>
                          <span className="font-medium">2868 x 1320 pixels</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Refresh Rate:</span>
                          <span className="font-medium">120Hz ProMotion</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Material:</span>
                          <span className="font-medium">{selectedModel.includes("pro") ? "Titanium" : "Aluminum"}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-ozeetech-blue mb-4 flex items-center">
                        <Cpu className="mr-2 h-5 w-5" />
                        Performance
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Chip:</span>
                          <span className="font-medium">{currentModel.chip}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">CPU:</span>
                          <span className="font-medium">6-core CPU</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">GPU:</span>
                          <span className="font-medium">6-core GPU</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Neural Engine:</span>
                          <span className="font-medium">16-core Neural Engine</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">RAM:</span>
                          <span className="font-medium">8GB</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-ozeetech-blue mb-4 flex items-center">
                        <Camera className="mr-2 h-5 w-5" />
                        Camera System
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Main Camera:</span>
                          <span className="font-medium">48MP Fusion</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ultra Wide:</span>
                          <span className="font-medium">48MP Ultra Wide</span>
                        </div>
                        {selectedModel.includes("pro") && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Telephoto:</span>
                            <span className="font-medium">12MP Telephoto</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600">Front Camera:</span>
                          <span className="font-medium">12MP TrueDepth</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Video Recording:</span>
                          <span className="font-medium">4K Dolby Vision HDR</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-ozeetech-blue mb-4 flex items-center">
                        <Battery className="mr-2 h-5 w-5" />
                        Battery & Connectivity
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Battery Life:</span>
                          <span className="font-medium">{currentModel.battery}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Charging:</span>
                          <span className="font-medium">USB-C, MagSafe, Qi</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">5G:</span>
                          <span className="font-medium">Sub-6 GHz and mmWave</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Wi-Fi:</span>
                          <span className="font-medium">Wi-Fi 7 (802.11be)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Water Resistance:</span>
                          <span className="font-medium">IP68</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-ozeetech-blue mb-6 flex items-center">
                        <Zap className="mr-2 h-5 w-5" />
                        New Features
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-semibold">Camera Control Button</div>
                            <div className="text-sm text-gray-600">
                              Dedicated button for camera controls with haptic feedback
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-semibold">A18 Pro Chip</div>
                            <div className="text-sm text-gray-600">
                              Most advanced chip ever in a smartphone with enhanced AI capabilities
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-semibold">Enhanced Titanium Design</div>
                            <div className="text-sm text-gray-600">
                              Lighter, stronger, and more durable than ever before
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-semibold">Advanced Camera System</div>
                            <div className="text-sm text-gray-600">
                              48MP Ultra Wide with macro photography and improved low-light performance
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-ozeetech-blue mb-6 flex items-center">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Pro Features
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-semibold">ProMotion Technology</div>
                            <div className="text-sm text-gray-600">
                              Adaptive refresh rates up to 120Hz for smooth scrolling
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-semibold">Always-On Display</div>
                            <div className="text-sm text-gray-600">
                              See important information at a glance without waking your iPhone
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-semibold">Dynamic Island</div>
                            <div className="text-sm text-gray-600">
                              Interactive area that adapts to show alerts, notifications, and activities
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-semibold">Action Button</div>
                            <div className="text-sm text-gray-600">
                              Customizable button for quick access to your most-used features
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-ozeetech-blue mb-4">Customer Reviews</h3>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-2xl font-bold">4.9</span>
                      <span className="text-gray-600">out of 5 (1,247 reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold">{review.name}</span>
                              {review.verified && (
                                <Badge className="bg-ozeetech-green text-white text-xs">Verified Purchase</Badge>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">{review.location}</div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="text-sm text-gray-600">{review.date}</div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-8">
                    <Button
                      variant="outline"
                      className="border-ozeetech-blue text-ozeetech-blue hover:bg-ozeetech-blue hover:text-white bg-transparent"
                    >
                      Load More Reviews
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="warranty" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-ozeetech-blue mb-6">Warranty & Support</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-ozeetech-blue mb-4 flex items-center">
                        <Shield className="mr-2 h-5 w-5" />
                        Apple Limited Warranty
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-medium">1 Year Hardware Warranty</div>
                            <div className="text-sm text-gray-600">
                              Covers manufacturing defects and hardware issues
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-medium">90 Days Technical Support</div>
                            <div className="text-sm text-gray-600">Free phone and online support from Apple</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-medium">Authorized Service Centers</div>
                            <div className="text-sm text-gray-600">
                              Access to Apple authorized repair centers nationwide
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-ozeetech-blue mb-4 flex items-center">
                        <Headphones className="mr-2 h-5 w-5" />
                        Ozeetech Support
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-medium">30-Day Free Tech Support</div>
                            <div className="text-sm text-gray-600">Setup assistance and troubleshooting help</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-medium">WhatsApp Support</div>
                            <div className="text-sm text-gray-600">Instant support via WhatsApp: 09069178853</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-ozeetech-green mt-0.5" />
                          <div>
                            <div className="font-medium">Swap Requirements</div>
                            <div className="text-sm text-gray-600">
                              Trade-in your old device for credit towards new purchase
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-ozeetech-blue/5 rounded-lg">
                    <h4 className="text-lg font-semibold text-ozeetech-blue mb-3">Extended Protection Available</h4>
                    <p className="text-gray-700 mb-4">
                      Protect your investment with AppleCare+ for iPhone, which extends your coverage and adds
                      accidental damage protection.
                    </p>
                    <Button className="bg-ozeetech-orange hover:bg-ozeetech-darkOrange text-white" asChild>
                      <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Learn More via WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-ozeetech-blue mb-8">Complete Your Setup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-ozeetech-blue mb-2 line-clamp-2">{product.name}</h3>
                  <div className="text-lg font-bold text-ozeetech-orange mb-3">{formatPrice(product.price)}</div>
                  <Button size="sm" className="w-full bg-ozeetech-blue hover:bg-ozeetech-navy text-white" asChild>
                    <Link href={product.href}>
                      View Product
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-gradient-to-r from-ozeetech-orange to-ozeetech-darkOrange text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Your iPhone 16?</h2>
          <p className="text-lg mb-6 text-orange-100">
            Contact us now for the best prices and same-day delivery in Lagos & Abuja
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-ozeetech-orange hover:bg-gray-100 px-8 py-4" asChild>
              <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ozeetech-orange px-8 py-4 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
          <p className="text-sm text-orange-200 mt-4">
            📱 WhatsApp: <strong>09069178853</strong> | Same Day Delivery | 30-Day Tech Support
          </p>
        </div>
      </div>
    </div>
  )
}
