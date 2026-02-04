"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, CreditCard, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { convertUSDToNGN, formatNGN } from "@/lib/currency"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "us",
  })

  const cartItems = [
    {
      id: 1,
      name: "Ultra Slim Smartphone X20",
      price: 799.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      color: "Black",
      storage: "128GB",
    },
    {
      id: 2,
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
      color: "Silver",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 9.99 : 0
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNextStep = async () => {
    setIsLoading(true)
    // Simulate validation delay
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsLoading(false)
    setStep(step + 1)
  }

  const handlePreviousStep = () => {
    setStep(step - 1)
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
            <Link href="/cart" className="hover:text-primary">
              Cart
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Checkout</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Checkout</h1>

        <div className="flex justify-between items-center mb-8">
          <div className="hidden md:flex items-center w-full max-w-3xl">
            <div className={`flex flex-col items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {step > 1 ? <Check className="h-5 w-5" /> : "1"}
              </div>
              <span className="text-sm">Shipping</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
            <div className={`flex flex-col items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {step > 2 ? <Check className="h-5 w-5" /> : "2"}
              </div>
              <span className="text-sm">Payment</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-primary" : "bg-muted"}`} />
            <div className={`flex flex-col items-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                3
              </div>
              <span className="text-sm">Confirmation</span>
            </div>
          </div>
          <div className="md:hidden text-lg font-medium">
            Step {step} of 3: {step === 1 ? "Shipping" : step === 2 ? "Payment" : "Confirmation"}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input 
                      id="address" 
                      placeholder="Enter your street address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input 
                      id="apartment" 
                      placeholder="Apartment, suite, etc."
                      value={formData.apartment}
                      onChange={(e) => handleInputChange("apartment", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input 
                        id="city" 
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province *</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                          <SelectItem value="fl">Florida</SelectItem>
                          <SelectItem value="il">Illinois</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP/Postal Code *</Label>
                      <Input 
                        id="zip" 
                        placeholder="ZIP/Postal code"
                        value={formData.zip}
                        onChange={(e) => handleInputChange("zip", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="saveAddress" />
                    <label
                      htmlFor="saveAddress"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Save this address for future orders
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between gap-2 sm:gap-4">
                  <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                    <Link href="/cart">Back to Cart</Link>
                  </Button>
                  <Button onClick={handleNextStep} disabled={isLoading} className="w-full sm:w-auto">
                    {isLoading ? "Processing..." : "Continue to Payment"}
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs defaultValue="card">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                    </TabsList>
                    <TabsContent value="card" className="space-y-6 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="Enter name on card" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="CVC" />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="saveCard" />
                        <label
                          htmlFor="saveCard"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Save this card for future payments
                        </label>
                      </div>
                    </TabsContent>
                    <TabsContent value="paypal" className="pt-4">
                      <div className="text-center py-8">
                        <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
                        <Button className="w-full">Continue with PayPal</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="apple" className="pt-4">
                      <div className="text-center py-8">
                        <p className="mb-4">You will be redirected to Apple Pay to complete your payment.</p>
                        <Button className="w-full">Continue with Apple Pay</Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between gap-2 sm:gap-4">
                  <Button variant="outline" onClick={handlePreviousStep} className="w-full sm:w-auto bg-transparent">
                    Back to Shipping
                  </Button>
                  <Button onClick={handleNextStep} disabled={isLoading} className="w-full sm:w-auto">
                    {isLoading ? "Processing..." : "Place Order"}
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Order Confirmation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-lg p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-green-800 dark:text-green-400">Order Placed Successfully!</h3>
                      <p className="text-sm text-green-700 dark:text-green-500">
                        Your order #ORD12345 has been placed.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Order Details</h3>
                    <div className="border rounded-lg divide-y">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4">
                          <div className="w-16 h-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <div className="text-sm text-muted-foreground">
                              {item.color && <span>Color: {item.color}</span>}
                              {item.storage && <span> | Storage: {item.storage}</span>}
                            </div>
                            <div className="text-sm">Qty: {item.quantity}</div>
                          </div>
                          <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Shipping Information</h3>
                    <div className="border rounded-lg p-4">
                      <p>John Doe</p>
                      <p>123 Main Street, Apt 4B</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                      <p className="mt-2">Email: john.doe@example.com</p>
                      <p>Phone: (123) 456-7890</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Payment Information</h3>
                    <div className="border rounded-lg p-4 flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p>Credit Card ending in 1234</p>
                        <p className="text-sm text-muted-foreground">Expiry: 12/25</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                  <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/">Go to Home</Link>
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>{formatNGN(convertUSDToNGN(item.price * item.quantity))}</span>
                  </div>
                ))}

                <Separator />

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatNGN(convertUSDToNGN(subtotal))}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{formatNGN(convertUSDToNGN(shipping))}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>{formatNGN(convertUSDToNGN(tax))}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>{formatNGN(convertUSDToNGN(total))}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
