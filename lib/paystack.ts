export const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ""
export const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || ""

export const PAYSTACK_API_BASE = "https://api.paystack.co"

export interface PaystackInitializeRequest {
  email: string
  amount: number
  orderId: string
  metadata: {
    orderId: string
    userId: string
    cartItems: Array<{
      id: string
      quantity: number
      price: number
    }>
  }
}

export interface PaystackInitializeResponse {
  status: boolean
  message: string
  data: {
    authorization_url: string
    access_code: string
    reference: string
  }
}

export interface PaystackVerifyResponse {
  status: boolean
  message: string
  data: {
    id: number
    reference: string
    amount: number
    paid_at: string
    status: string
    customer: {
      id: number
      email: string
    }
    authorization: {
      authorization_code: string
      bin: string
      last4: string
      exp_month: string
      exp_year: string
      channel: string
      card_type: string
      bank: string
      country_code: string
      brand: string
      reusable: boolean
    }
  }
}

export async function initializePayment(data: PaystackInitializeRequest): Promise<PaystackInitializeResponse> {
  const response = await fetch(`${PAYSTACK_API_BASE}/transaction/initialize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
    },
    body: JSON.stringify({
      email: data.email,
      amount: Math.round(data.amount * 100), // Convert to kobo
      metadata: data.metadata,
      callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/callback`,
    }),
  })

  if (!response.ok) {
    throw new Error(`Paystack initialization failed: ${response.statusText}`)
  }

  return response.json()
}

export async function verifyPayment(reference: string): Promise<PaystackVerifyResponse> {
  const response = await fetch(`${PAYSTACK_API_BASE}/transaction/verify/${reference}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Payment verification failed: ${response.statusText}`)
  }

  return response.json()
}
