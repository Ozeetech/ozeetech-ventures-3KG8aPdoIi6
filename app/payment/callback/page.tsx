"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentCallbackPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("Verifying payment...")
  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference")

      if (!reference) {
        setStatus("error")
        setMessage("No payment reference provided")
        return
      }

      try {
        const response = await fetch("/api/payment/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reference }),
        })

        const data = await response.json()

        if (response.ok && data.success) {
          setStatus("success")
          setMessage("Payment verified successfully!")
          setOrderId(reference)
          
          // Clear cart
          localStorage.removeItem("ozeetech_cart")
          
          // Redirect after 2 seconds
          setTimeout(() => {
            router.push(`/account/orders/${reference}`)
          }, 2000)
        } else {
          setStatus("error")
          setMessage(data.error || "Payment verification failed")
        }
      } catch (error) {
        setStatus("error")
        setMessage(error instanceof Error ? error.message : "Verification error")
      }
    }

    verifyPayment()
  }, [searchParams, router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Payment Status</CardTitle>
          <CardDescription>Verifying your transaction</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          {status === "loading" && (
            <>
              <Loader2 className="h-12 w-12 animate-spin mx-auto text-blue-600" />
              <p className="text-lg font-medium">{message}</p>
              <p className="text-sm text-muted-foreground">
                Please do not close this page...
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <CheckCircle className="h-12 w-12 mx-auto text-green-600" />
              <div>
                <p className="text-lg font-medium text-green-600">{message}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Order: {orderId}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Redirecting to your order...
              </p>
              <Button asChild className="w-full">
                <Link href={`/account/orders/${orderId}`}>
                  View Order
                </Link>
              </Button>
            </>
          )}

          {status === "error" && (
            <>
              <XCircle className="h-12 w-12 mx-auto text-red-600" />
              <div>
                <p className="text-lg font-medium text-red-600">Payment Failed</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {message}
                </p>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <Link href="/cart">Back to Cart</Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link href="/checkout">Retry Payment</Link>
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
