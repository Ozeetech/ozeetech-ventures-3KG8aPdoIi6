import { NextRequest, NextResponse } from "next/server"
import { verifyPayment } from "@/lib/paystack"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { reference } = body

    if (!reference) {
      return NextResponse.json(
        { error: "Missing payment reference" },
        { status: 400 }
      )
    }

    const response = await verifyPayment(reference)

    if (response.status) {
      return NextResponse.json(
        {
          success: true,
          data: {
            reference: response.data.reference,
            amount: response.data.amount / 100, // Convert back to Naira
            status: response.data.status,
            email: response.data.customer.email,
            paidAt: response.data.paid_at,
          },
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: response.message || "Payment verification failed" },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error("[Payment Verification Error]", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    )
  }
}
