"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronRight, LogOut, ShoppingBag, Settings, MapPin, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

interface UserData {
  id: string
  name: string
  email: string
  createdAt: string
}

export default function AccountPage() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("ozeetech_user")
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (e) {
        router.push("/auth/login")
      }
    } else {
      router.push("/auth/login")
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("ozeetech_user")
    localStorage.removeItem("ozeetech_remember_email")
    router.push("/")
  }

  if (isLoading || !user) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="bg-muted/40 py-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Account</span>
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
            <span className="text-foreground">My Account</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">My Account</h1>
            <p className="text-muted-foreground mt-1">Welcome back, {user.name}!</p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="w-full md:w-auto bg-transparent"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 h-auto md:h-10 p-0 md:p-1 bg-muted rounded-lg">
            <TabsTrigger value="overview" className="data-[state=active]:bg-background">
              <ShoppingBag className="h-4 w-4 mr-2 hidden sm:inline" />
              <span className="text-xs sm:text-sm">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="addresses" className="data-[state=active]:bg-background">
              <MapPin className="h-4 w-4 mr-2 hidden sm:inline" />
              <span className="text-xs sm:text-sm">Addresses</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="data-[state=active]:bg-background">
              <Heart className="h-4 w-4 mr-2 hidden sm:inline" />
              <span className="text-xs sm:text-sm">Wishlist</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-background">
              <Settings className="h-4 w-4 mr-2 hidden sm:inline" />
              <span className="text-xs sm:text-sm">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your order history and status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-2 opacity-50" />
                  <p className="text-muted-foreground">No orders yet</p>
                  <Button asChild className="mt-4">
                    <Link href="/products">Start Shopping</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="addresses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Saved Addresses</CardTitle>
                <CardDescription>Manage your delivery addresses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2 opacity-50" />
                  <p className="text-muted-foreground">No saved addresses</p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Add Address
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist</CardTitle>
                <CardDescription>Items you want to buy later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-2 opacity-50" />
                  <p className="text-muted-foreground">Your wishlist is empty</p>
                  <Button asChild className="mt-4">
                    <Link href="/products">Browse Products</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your profile details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Name</p>
                  <p className="text-base font-medium">{user.name}</p>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-base font-medium">{user.email}</p>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Member Since</p>
                  <p className="text-base font-medium">
                    {new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <Button variant="outline" className="w-full mt-6 bg-transparent">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
