"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function LogoutPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("/")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white p-4 border-b shadow-sm">
        <div className="container mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nat%20logo-3Z9fH1CErSbilLHRBxGVcZ9B2X8laT.jpeg"
            alt="NatWest Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-[#280071]">Logged Out Successfully</CardTitle>
            <CardDescription>
              You have been securely logged out of your NatWest Business Banking account.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p>Thank you for banking with NatWest. For your security, we recommend closing your browser window.</p>

            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-blue-800">
                You will be redirected to the login page in <span className="font-bold">{countdown}</span> seconds.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <Link href="/">
                <Button className="w-full bg-[#D81E05] hover:bg-[#D81E05]/90">Return to Login</Button>
              </Link>

              <div className="flex justify-center space-x-4 text-sm">
                <Link href="#" className="text-[#280071] hover:underline">
                  Help & Support
                </Link>
                <Link href="#" className="text-[#280071] hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white border-t p-4 text-center text-sm text-natwest-gray">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <p>© 2025 National Westminster Bank plc. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:underline">
                Privacy
              </Link>
              <Link href="#" className="hover:underline">
                Security
              </Link>
              <Link href="#" className="hover:underline">
                Legal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

