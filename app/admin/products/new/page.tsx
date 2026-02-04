"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function NewProductPage() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
    image: "/placeholder.svg?height=400&width=400",
  })
  const [imagePreview, setImagePreview] = useState<string>("/placeholder.svg?height=400&width=400")
  const [file, setFile] = useState<File | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render anything during SSR to avoid hydration issues
  if (!isClient) {
    return null
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the new product data to your API
    alert("Product added successfully!")
    router.push("/admin")
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Add New Product</h1>
        <Button variant="outline" onClick={() => router.push("/admin")}>
          Back to Dashboard
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  value={product.name}
                  onChange={(e) => setProduct({ ...product, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price (₦)</Label>
                <Input
                  id="price"
                  type="number"
                  value={product.price}
                  onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={product.category} onValueChange={(value) => setProduct({ ...product, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Smartphones">Smartphones</SelectItem>
                    <SelectItem value="Laptops">Laptops</SelectItem>
                    <SelectItem value="Tablets">Tablets</SelectItem>
                    <SelectItem value="Audio">Audio</SelectItem>
                    <SelectItem value="Wearables">Wearables</SelectItem>
                    <SelectItem value="Accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={product.description}
                  onChange={(e) => setProduct({ ...product, description: e.target.value })}
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Product Image</Label>
                <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
                <p className="text-xs text-muted-foreground">Recommended size: 800x800px. Max file size: 5MB.</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Add Product
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative rounded-md overflow-hidden bg-gray-100 mb-4">
              <div className="relative w-full h-full">
                <Image
                  src={imagePreview || "/placeholder.svg"}
                  alt={product.name || "New product"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <h3 className="font-medium text-lg mb-2">{product.name || "Product Name"}</h3>
            <p className="font-bold text-primary mb-2">
              {product.price
                ? new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(product.price)
                : "₦0"}
            </p>
            <p className="text-sm text-muted-foreground">{product.description || "Product description"}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
