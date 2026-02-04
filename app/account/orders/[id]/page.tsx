"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronRight, Package, MapPin, CreditCard, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem("ozeetech_user")
    if (!user) {
      router.push("/auth/login")
    }
    setIsClient(true)
  }, [router])

  if (!isClient) return null

  const order = {
    id: params.id,
    date: "2024-01-20",
    status: "delivered" as const,
    total: 1299.99,
    items: [
      {
        id: 1,
        name: "iPhone 15 Pro Max",
        price: 1299.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=200&h=200&fit=crop",
      },
    ],
    shipping: {
      name: "John Doe",
      address: "123 Main Street, Apt 4B",
      city: "New York, NY 10001",
      country: "United States",
      phone: "(123) 456-7890",
    },
    payment: {
      method: "Credit Card",
      last4: "1234",
      expiry: "12/25",
    },
    subtotal: 1299.99,
    tax: 90.99,
    shippingCost: 9.99,
  }

  const timeline = [
    { status: "Order Placed", date: "Jan 20, 2024", icon: Package },
    { status: "Processing", date: "Jan 21, 2024", icon: Package },
    { status: "Shipped", date: "Jan 22, 2024", icon: Truck },
    { status: "Delivered", date: "Jan 25, 2024", icon: Package },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/account" className="hover:text-primary">
              Account
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/account/orders" className="hover:text-primary">
              Orders
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{order.id}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold">Order {order.id}</h1>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              Delivered
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Ordered on {new Date(order.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {order.items.map(item => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className="w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      <p className="font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          idx <= 3
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          <Package className="h-5 w-5" />
                        </div>
                        {idx < timeline.length - 1 && (
                          <div className={`w-0.5 h-12 ${
                            idx < 3
                              ? "bg-green-200 dark:bg-green-900/50"
                              : "bg-muted"
                          }`} />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="font-medium">{step.status}</p>
                        <p className="text-sm text-muted-foreground">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p className="font-medium">{order.shipping.name}</p>
                <p>{order.shipping.address}</p>
                <p>{order.shipping.city}</p>
                <p>{order.shipping.country}</p>
                <p className="pt-2 text-muted-foreground">{order.shipping.phone}</p>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="font-medium">{order.payment.method}</p>
                <p className="text-muted-foreground">
                  Card ending in {order.payment.last4}
                </p>
                <p className="text-muted-foreground text-xs">Exp: {order.payment.expiry}</p>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${order.shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-base">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/account/orders">Back to Orders</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
