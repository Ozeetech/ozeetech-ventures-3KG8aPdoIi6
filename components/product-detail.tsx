"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Heart, Share2, Star, ShoppingCart, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { getSafeImageUrl } from "@/lib/image-handler"
import { convertUSDToNGN, formatNGN } from "@/lib/currency"

interface ProductDetailProps {
  id: string | number
  name: string
  price: number
  rating: number
  reviewCount: number
  image: string
  category: string
  description: string
  specifications?: Record<string, string>
  features?: string[]
  inStock?: boolean
  discount?: number
}

export function ProductDetail({
  id,
  name,
  price,
  rating,
  reviewCount,
  image,
  category,
  description,
  specifications = {},
  features = [],
  inStock = true,
  discount = 0,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState(image)
  const [activeTab, setActiveTab] = useState("overview")

  const discountedPrice = discount ? price * (1 - discount / 100) : price
  const savings = price - discountedPrice

  const handleAddToCart = () => {
    const cartItem = {
      id,
      name,
      price: discountedPrice,
      quantity,
      image: selectedImage,
    }
    const existing = localStorage.getItem("ozeetech_cart")
    const cart = existing ? JSON.parse(existing) : []
    cart.push(cartItem)
    localStorage.setItem("ozeetech_cart", JSON.stringify(cart))
  }

  const reviews = [
    { author: "John Doe", rating: 5, comment: "Excellent product! Very satisfied with my purchase.", date: "2 weeks ago" },
    { author: "Jane Smith", rating: 4, comment: "Good quality, meets expectations.", date: "1 month ago" },
    { author: "Mike Johnson", rating: 5, comment: "Highly recommended! Amazing experience.", date: "2 months ago" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto">
            <Link href="/" className="hover:text-primary whitespace-nowrap">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
            <Link href="/products" className="hover:text-primary whitespace-nowrap">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
            <span className="text-foreground whitespace-nowrap truncate">{name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative w-full bg-muted rounded-lg overflow-hidden aspect-square">
              <img
                src={getSafeImageUrl(selectedImage || image, category)}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = getSafeImageUrl(undefined, category)
                }}
              />
              {discount > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  -{discount}%
                </Badge>
              )}
              {!inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Out of Stock</p>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {[image, image, image, image].map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === img ? "border-primary" : "border-transparent hover:border-muted-foreground"
                  }`}
                >
                  <img src={img || "/placeholder.svg"} alt={`${name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {category}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {rating} ({reviewCount} reviews)
                </span>
              </div>
            </div>

            <Separator />

            {/* Price Section */}
            <div className="space-y-2">
              {discount > 0 ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-bold">{formatNGN(convertUSDToNGN(discountedPrice))}</span>
                    <span className="text-lg text-muted-foreground line-through">{formatNGN(convertUSDToNGN(price))}</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    Save {formatNGN(convertUSDToNGN(savings))} ({discount}% off)
                  </p>
                </div>
              ) : (
                <span className="text-2xl sm:text-3xl font-bold">{formatNGN(convertUSDToNGN(price))}</span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {inStock ? (
                <>
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">In Stock</span>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium text-red-600">Out of Stock</span>
                </>
              )}
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Quantity:
                </label>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={!inStock}
                  >
                    −
                  </Button>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center border-none bg-transparent"
                    disabled={!inStock}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={!inStock}
                  >
                    +
                  </Button>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-12 sm:h-13 text-base sm:text-lg"
                onClick={handleAddToCart}
                disabled={!inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-10 sm:h-11 bg-transparent"
                  onClick={() => setIsFavorite(!isFavorite)}
                  title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart
                    className={`h-5 w-5 mr-1 sm:mr-2 ${isFavorite ? "fill-current text-red-500" : ""}`}
                  />
                  <span className="hidden sm:inline">
                    {isFavorite ? "Saved" : "Save"}
                  </span>
                </Button>
                <Button variant="outline" className="flex-1 h-10 sm:h-11 bg-transparent" title="Share this product">
                  <Share2 className="h-5 w-5 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
              </div>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <>
                <Separator />
                <div className="space-y-2">
                  <h3 className="font-semibold">Key Features:</h3>
                  <ul className="space-y-1">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="grid sm:grid-cols-2 gap-4 pb-3 border-b last:border-0">
                      <p className="font-medium text-sm">{key}</p>
                      <p className="text-muted-foreground text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6 space-y-6">
            <div className="space-y-4">
              {reviews.map((review, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{review.author}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <p className="text-sm mt-3">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
