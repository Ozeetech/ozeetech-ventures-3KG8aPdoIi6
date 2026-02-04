"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setStatus("success")
        setMessage("Thank you for subscribing! You're now part of the Ozeetech community.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address.")
      }
    }, 1000)
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:py-24 bg-primary/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Join the Ozeetech Community</h2>
              <p className="text-muted-foreground mb-3">Subscribe to our newsletter and be the first to know about:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Exclusive deals and promotions</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>New product launches and tech updates</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Tech tips and how-to guides</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Industry news and trends</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground hidden md:block">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm border order-1 md:order-2">
              <h3 className="font-medium text-lg mb-4">Subscribe to Our Newsletter</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-newsletter">Email Address</Label>
                  <Input
                    id="email-newsletter"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={status === "loading" || status === "success"}>
                  {status === "loading" ? (
                    <span className="flex items-center">
                      <span className="w-4 h-4 rounded-full border-2 border-background border-t-transparent animate-spin mr-2"></span>
                      Subscribing...
                    </span>
                  ) : (
                    <>
                      Subscribe <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {(status === "success" || status === "error") && (
                  <Alert className="mt-4" variant={status === "success" ? "default" : "destructive"}>
                    <AlertDescription>{message}</AlertDescription>
                  </Alert>
                )}

                <p className="text-sm text-muted-foreground text-center md:hidden mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Default export for backward compatibility
export default NewsletterSection
