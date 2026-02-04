import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DealsPage() {
  const deals = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      originalPrice: 1200000,
      discountedPrice: 950000,
      image: "/placeholder.svg?height=400&width=400",
      discount: "21%",
      href: "/products/smartphones/iphone-14-pro",
      category: "smartphones",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      originalPrice: 950000,
      discountedPrice: 750000,
      image: "/placeholder.svg?height=400&width=400",
      discount: "21%",
      href: "/products/smartphones/samsung-galaxy-s23",
      category: "smartphones",
    },
    {
      id: 3,
      name: "Sony WH-1000XM4",
      originalPrice: 350000,
      discountedPrice: 280000,
      image: "/placeholder.svg?height=400&width=400",
      discount: "20%",
      href: "/products/audio/sony-wh-1000xm4",
      category: "audio",
    },
    {
      id: 4,
      name: "iPad Air",
      originalPrice: 750000,
      discountedPrice: 650000,
      image: "/placeholder.svg?height=400&width=400",
      discount: "13%",
      href: "/products/tablets/ipad-air",
      category: "tablets",
    },
  ]

  // Format price in Nigerian Naira
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Special Deals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <Link key={deal.id} href={deal.href} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <div className="relative w-full h-full bg-gray-100">
                    <Image
                      src={deal.image || "/placeholder.svg"}
                      alt={deal.name}
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  SAVE {deal.discount}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{deal.name}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold">{formatPrice(deal.discountedPrice)}</span>
                  <span className="text-sm text-gray-500 line-through">{formatPrice(deal.originalPrice)}</span>
                </div>
                <Button className="w-full mt-4">View Deal</Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Weekly Promotions</h2>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Buy One, Get One 50% Off</h3>
          <p className="mb-4">On selected accessories and wearables. Limited time offer.</p>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20" asChild>
            <Link href="/products/accessories">Shop Now</Link>
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Clearance Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Up to 30% Off Previous Generation iPhones</h3>
            <p className="mb-4">Limited stock available on iPhone 13 and iPhone 14 models.</p>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20" asChild>
              <Link href="/products/smartphones/brands/apple">Shop iPhones</Link>
            </Button>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Save ₦50,000 on Select Samsung TVs</h3>
            <p className="mb-4">Upgrade your entertainment setup with premium Samsung displays.</p>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20" asChild>
              <Link href="/products/tvs">Shop TVs</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
