"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ShoppingCart,
  Package,
  Heart,
  Settings,
  LogOut,
  User as UserIcon,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import type { User } from "@/lib/auth"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    const userData = localStorage.getItem("ozeetech_user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/auth/login")
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("ozeetech_user")
    router.push("/")
  }

  if (isLoading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-02-01",
      amount: 45000,
      status: "delivered",
      items: 3,
    },
    {
      id: "ORD-002",
      date: "2024-01-28",
      amount: 120000,
      status: "processing",
      items: 2,
    },
    {
      id: "ORD-003",
      date: "2024-01-25",
      amount: 85000,
      status: "delivered",
      items: 4,
    },
  ]

  const cartItems = [
    {
      id: 1,
      name: "Ultra Slim Smartphone X20",
      price: 799.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-white">
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback>{user.firstName?.[0]}{user.lastName?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{user.firstName} {user.lastName}</h1>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="cart">Cart</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">All time purchases</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cart Items</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{cartItems.length}</div>
                  <p className="text-xs text-muted-foreground">Awaiting checkout</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₦750,000</div>
                  <p className="text-xs text-muted-foreground">Account value</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your latest purchase history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold">₦{order.amount.toLocaleString()}</p>
                          <Badge variant={order.status === "delivered" ? "default" : "secondary"}>
                            {order.status}
                          </Badge>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cart" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shopping Cart ({cartItems.length} items)</CardTitle>
                <CardDescription>Review and checkout your items</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4 last:border-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover bg-muted"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₦{(item.price * 1550).toLocaleString()}</p>
                    </div>
                  </div>
                ))}

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₦{(1049.98 * 1550).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₦15,500</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₦1,643,470</span>
                  </div>
                </div>

                <Button className="w-full mt-4" size="lg" asChild>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>All your past orders and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-semibold">₦{order.amount.toLocaleString()}</p>
                            <Badge variant={order.status === "delivered" ? "default" : "secondary"}>
                              {order.status}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/account/orders/${order.id}`}>View</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <p className="mt-1 text-foreground">{user.firstName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <p className="mt-1 text-foreground">{user.lastName}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </label>
                  <p className="mt-1 text-foreground">{user.email}</p>
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone
                  </label>
                  <p className="mt-1 text-foreground">{user.phone || "Not set"}</p>
                </div>

                <Button asChild>
                  <Link href="/dashboard/edit-profile">
                    <Settings className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
