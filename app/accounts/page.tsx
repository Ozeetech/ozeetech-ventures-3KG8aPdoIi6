"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AccountsRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/accounts/business-current")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting to your accounts...</p>
    </div>
  )
}
