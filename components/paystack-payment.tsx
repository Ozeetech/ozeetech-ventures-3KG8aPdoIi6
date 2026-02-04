"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"
import type { CartItem } from "@/lib/cart"

interface PaystackPaymentProps {
  email: string
  amount: number
  orderId: string
  userId: string
  cartItems: CartItem[]
  onSuccess?: (reference: string) => void
  onError?: (error: string) => void
}

export function PaystackPayment({
  email,
  amount,
  orderId,
  userId,
  cartItems,
  onSuccess,
  onError,
}: PaystackPaymentProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Initialize payment
      const initResponse = await fetch("/api/payment/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount,
          orderId,
          userId,
          cartItems,
        }),
      })

      const initData = await initResponse.json()

      if (!initResponse.ok) {
        throw new Error(initData.error || "Failed to initialize payment")
      }

      // Redirect to Paystack
      if (initData.data?.authorization_url) {
        window.location.href = initData.data.authorization_url
      } else {
        throw new Error("No payment URL received")
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Payment initialization failed"
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 text-center flex-col">
            <CheckCircle className="h-12 w-12 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900">Payment Successful!</h3>
              <p className="text-sm text-green-700">Your order has been confirmed.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Payment with Paystack</CardTitle>
        <CardDescription>Secure payment processing</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Email:</span>
            <span className="font-medium">{email}</span>
          </div>
          <div className="flex justify-between">
            <span>Amount:</span>
            <span className="font-semibold text-lg">₦{amount.toLocaleString()}</span>
          </div>
        </div>

        <Button
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full h-11"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>Pay with Paystack</>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          You will be redirected to Paystack's secure payment page
        </p>
      </CardContent>
    </Card>
  )
}
