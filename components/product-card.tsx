"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getSafeImageUrl } from "@/lib/image-handler"

interface ProductCardProps {
  product: {
    id: string | number
    name: string
    brand?: string
    price: number
    originalPrice?: number
    image: string
    rating: number
    reviews?: number
    badge?: string | null
    badgeColor?: string
    features?: string[]
    specs?: string[]
    href?: string
    inStock?: boolean
    category?: string
  }
  showDiscount?: boolean
  viewMode?: "grid" | "list"
}

export function ProductCard({ product, showDiscount = true, viewMode = "grid" }: ProductCardProps) {
  // Guard clause to prevent destructuring undefined product
  if (!product) {
    return null
  }

  const {
    id,
    name,
    brand,
    price,
    originalPrice,
    image,
    rating,
    reviews = 0,
    badge,
    badgeColor = "bg-blue-500",
    features = [],
    specs = [],
    href,
    inStock = true,
    category,
  } = product

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

  const productHref = href || `/products/${id}`

  if (viewMode === "list") {
    return (
      <Card className="group hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <div className="relative w-full md:w-48 h-48 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
              <Link href={productHref}>
                <Image
                  src={getSafeImageUrl(image, category) || "/placeholder.svg"}
                  alt={name}
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 192px"
                  priority={false}
                />
              </Link>

              {/* Badge */}
              {badge && <Badge className={`absolute top-3 left-3 text-white ${badgeColor}`}>{badge}</Badge>}

              {/* Discount Badge */}
              {showDiscount && originalPrice && originalPrice > price && (
                <Badge variant="destructive" className="absolute top-3 right-3">
                  -{calculateDiscount(originalPrice, price)}%
                </Badge>
              )}

              {/* Stock Status */}
              {!inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <Badge variant="secondary" className="text-lg">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <div className="mb-3">
                {brand && <p className="text-sm text-muted-foreground mb-1">{brand}</p>}
                <Link href={productHref}>
                  <h3 className="font-semibold text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {name}
                  </h3>
                </Link>
                {category && <p className="text-sm text-muted-foreground mt-1">{category}</p>}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {rating} {reviews > 0 && `(${reviews} reviews)`}
                </span>
              </div>

              {/* Specs/Features */}
              {(specs.length > 0 || features.length > 0) && (
                <div className="mb-4">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {(specs.length > 0 ? specs : features).slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price and Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-primary">{formatPrice(price)}</span>
                    {showDiscount && originalPrice && originalPrice > price && (
                      <span className="text-lg text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
                    )}
                  </div>
                  {showDiscount && originalPrice && originalPrice > price && (
                    <p className="text-sm text-green-600 font-medium">Save {formatPrice(originalPrice - price)}</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button asChild disabled={!inStock}>
                    <Link href={productHref}>
                      <Eye className="w-4 h-4 mr-2" />
                      {inStock ? "View Details" : "Notify Me"}
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" disabled={!inStock}>
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Link href={productHref}>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>

        {/* Badge */}
        {badge && <Badge className={`absolute top-3 left-3 text-white ${badgeColor}`}>{badge}</Badge>}

        {/* Discount Badge */}
        {showDiscount && originalPrice && originalPrice > price && (
          <Badge variant="destructive" className="absolute top-3 right-3">
            -{calculateDiscount(originalPrice, price)}%
          </Badge>
        )}

        {/* Stock Status */}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="text-lg">
              Out of Stock
            </Badge>
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          {brand && <p className="text-sm text-muted-foreground">{brand}</p>}
          <Link href={productHref}>
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {name}
            </h3>
          </Link>
          {category && <p className="text-xs text-muted-foreground mt-1">{category}</p>}
        </div>

        {/* Features */}
        {(features.length > 0 || specs.length > 0) && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {(specs.length > 0 ? specs : features).slice(0, 2).map((item, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded line-clamp-1">
                  {item.length > 25 ? `${item.substring(0, 25)}...` : item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} {reviews > 0 && `(${reviews})`}
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">{formatPrice(price)}</span>
            {showDiscount && originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
            )}
          </div>
          {showDiscount && originalPrice && originalPrice > price && (
            <p className="text-xs text-green-600 font-medium">Save {formatPrice(originalPrice - price)}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button asChild className="flex-1 h-10 sm:h-11 text-sm sm:text-base" disabled={!inStock}>
            <Link href={productHref}>{inStock ? "View Details" : "Notify Me"}</Link>
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10 sm:h-11 sm:w-11 bg-transparent" disabled={!inStock} title="Add to wishlist">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
