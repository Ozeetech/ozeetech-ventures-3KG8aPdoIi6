"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPage() {
  const [isClient, setIsClient] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // Use useEffect to ensure we're running on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a simple example - in a real app, you would validate against a database
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true)
      setError("")
    } else {
      setError("Invalid username or password")
    }
  }

  // Don't render anything during SSR to avoid hydration issues
  if (!isClient) {
    return null
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Login to manage your Ozeetech Ventures website</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              {error && <div className="p-3 bg-red-100 text-red-600 rounded-md text-sm">{error}</div>}
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Ozeetech Admin Dashboard</h1>
        <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
          Logout
        </Button>
      </div>

      <Tabs defaultValue="products">
        <TabsList className="mb-6">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Manage Products</h2>
            <Button asChild>
              <Link href="/admin/products/new">Add New Product</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <h2 className="text-2xl font-semibold mb-6">Recent Orders</h2>
          <p>Order management functionality would be implemented here.</p>
        </TabsContent>

        <TabsContent value="customers">
          <h2 className="text-2xl font-semibold mb-6">Customer Management</h2>
          <p>Customer management functionality would be implemented here.</p>
        </TabsContent>

        <TabsContent value="settings">
          <h2 className="text-2xl font-semibold mb-6">Website Settings</h2>
          <p>Website settings functionality would be implemented here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription>
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(product.price)}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="aspect-square relative rounded-md overflow-hidden bg-gray-100 mb-3">
          <div className="relative w-full h-full">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" asChild className="flex-1">
          <Link href={`/admin/products/${product.id}`}>Edit</Link>
        </Button>
        <Button variant="destructive" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Sample products for demonstration
const sampleProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1799990,
    image: "/placeholder.svg?height=400&width=400&text=iPhone+15+Pro+Max",
    description: "Apple's flagship smartphone with A17 Pro chip and titanium design.",
    category: "Smartphones",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1699990,
    image: "/placeholder.svg?height=400&width=400&text=Samsung+S24+Ultra",
    description: "Samsung's premium smartphone with Snapdragon 8 Gen 3 and S Pen.",
    category: "Smartphones",
  },
  {
    id: 3,
    name: "MacBook Pro 16 M3 Max",
    price: 3249990,
    image: "/placeholder.svg?height=400&width=400&text=MacBook+Pro+16",
    description: "Apple's most powerful laptop with M3 Max chip and Liquid Retina XDR display.",
    category: "Laptops",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 399990,
    image: "/placeholder.svg?height=400&width=400&text=Sony+WH-1000XM5",
    description: "Industry-leading noise cancelling headphones with exceptional sound quality.",
    category: "Audio",
  },
  {
    id: 5,
    name: "iPad Pro 12.9 M2",
    price: 1299990,
    image: "/placeholder.svg?height=400&width=400&text=iPad+Pro",
    description: "Apple's premium tablet with M2 chip and mini-LED display.",
    category: "Tablets",
  },
  {
    id: 6,
    name: "Apple Watch Ultra 2",
    price: 799990,
    image: "/placeholder.svg?height=400&width=400&text=Apple+Watch+Ultra",
    description: "Apple's most rugged and capable smartwatch for outdoor adventures.",
    category: "Wearables",
  },
]
