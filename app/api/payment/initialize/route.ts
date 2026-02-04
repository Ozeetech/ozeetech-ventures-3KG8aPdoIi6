import { NextRequest, NextResponse } from "next/server"
import { initializePayment } from "@/lib/paystack"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, amount, orderId, userId, cartItems } = body

    if (!email || !amount || !orderId || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const response = await initializePayment({
      email,
      amount,
      orderId,
      metadata: {
        orderId,
        userId,
        cartItems: cartItems || [],
      },
    })

    if (response.status) {
      return NextResponse.json(response, { status: 200 })
    } else {
      return NextResponse.json(
        { error: response.message || "Payment initialization failed" },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error("[Paystack Error]", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    )
  }
}
