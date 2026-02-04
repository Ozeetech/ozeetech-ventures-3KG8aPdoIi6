"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight, Minus, Plus, ShoppingCart, Trash2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { convertUSDToNGN, formatNGN } from "@/lib/currency"

export default function CartPage() {
  // This would normally come from a cart state or API
  // Initialize from localStorage on mount
  const [isClient, setIsClient] = useState(false)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ultra Slim Smartphone X20",
      price: 799.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=200&h=200&fit=crop",
      color: "Black",
      storage: "128GB",
    },
    {
      id: 2,
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      color: "Silver",
    },
  ])

  // Effect to sync with localStorage
  useEffect(() => {
    setIsClient(true)
    const saved = localStorage.getItem("ozeetech_cart")
    if (saved) {
      try {
        setCartItems(JSON.parse(saved))
      } catch (e) {
        console.error("Failed to parse cart from localStorage")
      }
    }
  }, [])

  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const handleApplyCoupon = () => {
    if (couponCode.trim() !== "") {
      setCouponApplied(true)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = couponApplied ? subtotal * 0.1 : 0 // 10% discount
  const shipping = subtotal > 0 ? 9.99 : 0
  const total = subtotal - discount + shipping

  if (!isClient) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="bg-muted/40 py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Shopping Cart</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="h-96 flex items-center justify-center">
            <div className="text-center">Loading...</div>
          </div>
        </div>
      </div>
    )
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
            <span className="text-foreground">Shopping Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Cart Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</CardTitle>
                </CardHeader>
                <CardContent>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-3 sm:gap-4 py-4 border-b last:border-0">
                      <div className="w-full sm:w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm sm:text-base truncate">{item.name}</h3>
                        <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {item.color && <span>Color: {item.color}</span>}
                          {item.storage && <span> • Storage: {item.storage}</span>}
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-4">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() => handleQuantityChange(item.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <div className="px-2 text-xs sm:text-sm flex items-center justify-center min-w-[30px]">
                              {item.quantity}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0"
                              onClick={() => handleQuantityChange(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 px-2 text-xs sm:text-sm text-destructive hover:text-destructive"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                      <div className="font-medium text-right text-sm sm:text-base">{formatNGN(convertUSDToNGN(item.price * item.quantity))}</div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/products">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatNGN(convertUSDToNGN(subtotal))}</span>
                  </div>

                  {couponApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>-{formatNGN(convertUSDToNGN(discount))}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{formatNGN(convertUSDToNGN(shipping))}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>{formatNGN(convertUSDToNGN(total))}</span>
                  </div>

                  <div className="pt-4">
                    <div className="flex gap-2 mb-4">
                      <Input
                        placeholder="Coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        disabled={couponApplied}
                      />
                      <Button
                        variant="outline"
                        onClick={handleApplyCoupon}
                        disabled={couponApplied || couponCode.trim() === ""}
                      >
                        Apply
                      </Button>
                    </div>

                    {couponApplied && <div className="text-sm text-green-600 mb-4">Coupon applied successfully!</div>}

                    <Button className="w-full h-11 sm:h-12 text-base" size="lg" asChild>
                      <Link href="/checkout">
                        Proceed to Checkout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <ShoppingCart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild>
              <Link href="/products">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Start Shopping
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
