import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Smart Speakers & Displays | OzeeTech",
  description:
    "Discover our range of smart speakers and displays from top brands like Amazon, Google, Apple, and more.",
}

export default function SmartSpeakersPage() {
  const products = [
    {
      id: 1,
      name: "Amazon Echo Dot (5th Gen)",
      price: 29999, // ₦29,999
      rating: 4.7,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      href: "/products/smart-home/speakers/echo-dot-5th-gen",
      specs: ["Alexa built-in", "Improved audio", "Temperature sensor", "Control smart home devices"],
    },
    {
      id: 2,
      name: "Google Nest Audio",
      price: 49999, // ₦49,999
      rating: 4.6,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      href: "/products/smart-home/speakers/google-nest-audio",
      specs: ["Google Assistant", "Room-filling sound", "Multi-room audio", "Voice Match technology"],
    },
    {
      id: 3,
      name: "Apple HomePod Mini",
      price: 59999, // ₦59,999
      rating: 4.8,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      badge: "Premium",
      href: "/products/smart-home/speakers/apple-homepod-mini",
      specs: ["Siri built-in", "360-degree audio", "Smart home hub", "Intercom feature"],
    },
    {
      id: 4,
      name: "Amazon Echo Show 8 (2nd Gen)",
      price: 69999, // ₦69,999
      rating: 4.7,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Displays",
      href: "/products/smart-home/speakers/echo-show-8-2nd-gen",
      specs: ["8-inch HD screen", "13MP camera", "Video calling", "Alexa built-in"],
    },
    {
      id: 5,
      name: "Sonos One (Gen 2)",
      price: 99999, // ₦99,999
      rating: 4.9,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      badge: "Premium",
      href: "/products/smart-home/speakers/sonos-one-gen-2",
      specs: ["Voice assistants", "Rich, room-filling sound", "Multi-room audio", "Humidity resistant"],
    },
    {
      id: 6,
      name: "Google Nest Hub (2nd Gen)",
      price: 59999, // ₦59,999
      rating: 4.6,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Displays",
      href: "/products/smart-home/speakers/google-nest-hub-2nd-gen",
      specs: ["7-inch display", "Sleep sensing", "Google Assistant", "Media control"],
    },
    {
      id: 7,
      name: "Amazon Echo Studio",
      price: 119999, // ₦119,999
      rating: 4.8,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      badge: "Premium",
      href: "/products/smart-home/speakers/echo-studio",
      specs: ["3D audio", "Built-in Zigbee hub", "Dolby Atmos", "Adaptive sound"],
    },
    {
      id: 8,
      name: "Bose Home Speaker 500",
      price: 149999, // ₦149,999
      rating: 4.7,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      badge: "Premium",
      href: "/products/smart-home/speakers/bose-home-speaker-500",
      specs: ["Wall-to-wall stereo sound", "Built-in voice control", "Wi-Fi and Bluetooth", "Color LCD display"],
    },
    {
      id: 9,
      name: "JBL Link Portable",
      price: 79999, // ₦79,999
      rating: 4.5,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      href: "/products/smart-home/speakers/jbl-link-portable",
      specs: ["Portable design", "IPX7 waterproof", "Google Assistant", "8-hour battery life"],
    },
    {
      id: 10,
      name: "Amazon Echo Dot with Clock (5th Gen)",
      price: 39999, // ₦39,999
      rating: 4.7,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      href: "/products/smart-home/speakers/echo-dot-with-clock-5th-gen",
      specs: ["LED display", "Alexa built-in", "Temperature sensor", "Tap gesture controls"],
    },
    {
      id: 11,
      name: "Google Nest Mini (2nd Gen)",
      price: 24999, // ₦24,999
      rating: 4.5,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Speakers",
      href: "/products/smart-home/speakers/google-nest-mini-2nd-gen",
      specs: ["Google Assistant", "Improved sound", "Wall mountable", "Sustainable design"],
    },
    {
      id: 12,
      name: "Lenovo Smart Clock Essential",
      price: 29999, // ₦29,999
      rating: 4.4,
      image: "/images/products/generic-speaker.jpg",
      category: "Smart Displays",
      href: "/products/smart-home/speakers/lenovo-smart-clock-essential",
      specs: ["LED display", "Google Assistant", "USB charging port", "Nightlight feature"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Smart Speakers & Displays</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/smart-home" className="hover:text-primary">
              Smart Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Smart Speakers</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="speakers">Smart Speakers</TabsTrigger>
              <TabsTrigger value="displays">Smart Displays</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speakers" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((product) => product.category === "Smart Speakers")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="displays" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((product) => product.category === "Smart Displays")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose OzeeTech for Smart Speakers?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Genuine Products</h3>
              <p>All our smart speakers and displays are 100% genuine with full manufacturer warranty.</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Same Day Delivery</h3>
              <p>Order before 2 PM and get your smart speaker delivered the same day in Lagos.</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">30-Days Free Tech Support</h3>
              <p>Get free technical support for 30 days after purchase to help with setup and troubleshooting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
