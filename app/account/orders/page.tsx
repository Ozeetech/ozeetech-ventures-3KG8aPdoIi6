"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronRight, Package, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { convertUSDToNGN, formatNGN } from "@/lib/currency"

interface Order {
  id: string
  date: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  items: number
}

export default function OrdersPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD001",
      date: "2024-01-20",
      status: "delivered",
      total: 1299.99,
      items: 1,
    },
    {
      id: "ORD002",
      date: "2024-01-15",
      status: "shipped",
      total: 599.98,
      items: 2,
    },
  ])

  useEffect(() => {
    const user = localStorage.getItem("ozeetech_user")
    if (!user) {
      router.push("/auth/login")
    }
    setIsClient(true)
  }, [router])

  if (!isClient) return null

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "shipped":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "pending":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return ""
    }
  }

  const getStatusLabel = (status: Order["status"]) => {
    const labels: Record<Order["status"], string> = {
      pending: "Pending",
      processing: "Processing",
      shipped: "Shipped",
      delivered: "Delivered",
      cancelled: "Cancelled",
    }
    return labels[status]
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
            <Link href="/account" className="hover:text-primary">
              Account
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Orders</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Order History</h1>
          <p className="text-muted-foreground">Track and manage your orders</p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {orders.length > 0 ? (
              orders.map(order => (
                <Card key={order.id}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-muted-foreground" />
                          <p className="font-semibold">{order.id}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Ordered on {new Date(order.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {order.items} item{order.items > 1 ? "s" : ""}
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-2">
                        <p className="text-lg sm:text-xl font-bold">{formatNGN(convertUSDToNGN(order.total))}</p>
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusLabel(order.status)}
                        </Badge>
                      </div>

                      <div className="pt-4 sm:pt-0">
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto bg-transparent"
                          asChild
                        >
                          <Link href={`/account/orders/${order.id}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-6">No orders yet</p>
                  <Button asChild>
                    <Link href="/products">Start Shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {orders
              .filter(o => o.status !== "delivered" && o.status !== "cancelled")
              .map(order => (
                <Card key={order.id}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusLabel(order.status)}
                        </Badge>
                      </div>
                      <p className="font-bold">{formatNGN(convertUSDToNGN(order.total))}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {orders
              .filter(o => o.status === "delivered" || o.status === "cancelled")
              .map(order => (
                <Card key={order.id}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusLabel(order.status)}
                        </Badge>
                      </div>
                      <p className="font-bold">{formatNGN(convertUSDToNGN(order.total))}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
