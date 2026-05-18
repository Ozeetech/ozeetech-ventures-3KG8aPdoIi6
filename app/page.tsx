"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Info, Lock, User, ChevronRight, Shield, CreditCard, Calendar } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const promotions = [
    {
      title: "Business Banking Excellence Award 2025",
      description: "NatWest recognized as the UK's leading business banking provider for the third consecutive year.",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-blue-50",
    },
    {
      title: "International Trade Solutions",
      description: "Expand your business globally with our comprehensive international banking services.",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-purple-50",
    },
    {
      title: "Enhanced Security Features",
      description: "We've upgraded our security systems to provide even better protection for your business.",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-green-50",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === promotions.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [promotions.length])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (username === "MolzenLLC$" && password === "SuccesPayment" && pin === "908090") {
        router.push("/dashboard")
      } else {
        setError("Invalid credentials. Please try again.")
        setLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nat%20logo-3Z9fH1CErSbilLHRBxGVcZ9B2X8laT.jpeg"
              alt="NatWest Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-[#280071] hover:underline text-sm font-medium">
              Personal Banking
            </a>
            <a href="#" className="text-[#280071] hover:underline text-sm font-medium">
              Business Banking
            </a>
            <a href="#" className="text-[#280071] hover:underline text-sm font-medium">
              Help & Support
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#280071]">Business Banking Login</h1>
            <p className="text-gray-600 mt-2">Secure access to your business accounts</p>
          </div>

          <Card className="border-t-4 border-t-[#D81E05] shadow-lg">
            <CardHeader>
              <CardTitle>Sign in to Online Banking</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="credentials" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="credentials">Credentials</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                <TabsContent value="credentials">
                  <form onSubmit={handleLogin} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                          id="username"
                          type="text"
                          placeholder="Enter your username"
                          className="pl-10"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          className="pl-10"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pin">PIN</Label>
                      <Input
                        id="pin"
                        type="password"
                        placeholder="Enter your PIN"
                        maxLength={6}
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        required
                      />
                    </div>

                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <Button type="submit" className="w-full bg-[#D81E05] hover:bg-[#D81E05]/90" disabled={loading}>
                      {loading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="security">
                  <div className="space-y-4 mt-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Security Information</AlertTitle>
                      <AlertDescription>
                        For your security, we recommend using a strong password and never sharing your credentials.
                      </AlertDescription>
                    </Alert>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <strong>Remember:</strong> NatWest will never ask you to:
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li>Disclose your full security details</li>
                        <li>Transfer money to a new account for fraud reasons</li>
                        <li>Download remote access software</li>
                      </ul>
                    </div>
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => document.querySelector('[data-value="credentials"]')?.click()}
                      >
                        Back to Login
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="flex justify-between w-full text-sm">
                <a href="#" className="text-[#280071] hover:underline">
                  Forgot username?
                </a>
                <a href="#" className="text-[#280071] hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="w-full pt-2 border-t">
                <Button variant="outline" className="w-full mt-2">
                  Register for Online Banking
                </Button>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              By logging in, you agree to our{" "}
              <a href="#" className="text-[#280071] hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#280071] hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <div className="w-full max-w-md hidden md:block">
          <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px]">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                } ${promo.color}`}
              >
                <div className="p-6 h-full flex flex-col">
                  <h2 className="text-xl font-bold text-[#280071] mb-2">{promo.title}</h2>
                  <p className="text-gray-700 mb-4">{promo.description}</p>
                  <div className="mt-auto">
                    <Button variant="outline" className="text-[#280071] border-[#280071]">
                      Learn more <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-[#D81E05]" : "bg-gray-300"}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <Shield className="h-8 w-8 text-[#280071] mb-2" />
              <h3 className="text-sm font-medium">Security Center</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <CreditCard className="h-8 w-8 text-[#280071] mb-2" />
              <h3 className="text-sm font-medium">Card Services</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
              <Calendar className="h-8 w-8 text-[#280071] mb-2" />
              <h3 className="text-sm font-medium">Appointments</h3>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t p-4 text-center text-sm text-gray-600">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nat%20logo-3Z9fH1CErSbilLHRBxGVcZ9B2X8laT.jpeg"
                alt="NatWest Logo"
                width={80}
                height={30}
                className="h-6 w-auto mr-2"
              />
              <span>© 2025 National Westminster Bank plc. All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center space-x-4">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Security
              </a>
              <a href="#" className="hover:underline">
                Legal
              </a>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <p>
              National Westminster Bank plc. Registered in England and Wales No. 929027. Registered Office: 250
              Bishopsgate, London EC2M 4AA.
            </p>
            <p className="mt-1">
              Authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the
              Prudential Regulation Authority.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
