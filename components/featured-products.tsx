"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1850000,
    originalPrice: 2100000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 1247,
    badge: "Bestseller",
    badgeColor: "bg-red-500",
    features: ["A17 Pro Chip", "48MP Camera", "Titanium Design"],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1750000,
    originalPrice: 1950000,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 892,
    badge: "New",
    badgeColor: "bg-green-500",
    features: ["200MP Camera", "S Pen", "AI Features"],
  },
  {
    id: 3,
    name: 'MacBook Pro 16" M3 Max',
    brand: "Apple",
    price: 3250000,
    originalPrice: 3500000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 634,
    badge: "Pro",
    badgeColor: "bg-blue-500",
    features: ["M3 Max Chip", "36GB RAM", "1TB SSD"],
  },
  {
    id: 4,
    name: 'iPad Pro 12.9" M2',
    brand: "Apple",
    price: 1450000,
    originalPrice: 1650000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 445,
    badge: "Sale",
    badgeColor: "bg-orange-500",
    features: ["M2 Chip", "Liquid Retina", "Apple Pencil"],
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 480000,
    originalPrice: 550000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 1156,
    badge: "Popular",
    badgeColor: "bg-purple-500",
    features: ["Noise Canceling", "30hr Battery", "Hi-Res Audio"],
  },
  {
    id: 6,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: 1250000,
    originalPrice: 1400000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 723,
    badge: "AI Powered",
    badgeColor: "bg-indigo-500",
    features: ["Tensor G3", "Magic Eraser", "7 Years Updates"],
  },
  {
    id: 7,
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    price: 950000,
    originalPrice: 1100000,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 567,
    badge: "Ultra",
    badgeColor: "bg-gray-700",
    features: ["Titanium Case", "49mm Display", "Action Button"],
  },
  {
    id: 8,
    name: "AirPods Pro 2nd Gen",
    brand: "Apple",
    price: 420000,
    originalPrice: 480000,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 2134,
    badge: "Trending",
    badgeColor: "bg-pink-500",
    features: ["H2 Chip", "Adaptive Audio", "USB-C"],
  },
]

export function FeaturedProducts() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the latest and greatest tech products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Badge */}
                <Badge className={`absolute top-3 left-3 text-white ${product.badgeColor}`}>{product.badge}</Badge>

                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <Badge variant="destructive" className="absolute top-3 right-3">
                    -{calculateDiscount(product.originalPrice, product.price)}%
                  </Badge>
                )}
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>

                {/* Features */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Default export for backward compatibility
export default FeaturedProducts
