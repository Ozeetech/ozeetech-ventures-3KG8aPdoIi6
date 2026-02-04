"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Phone, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function OnlineChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 overflow-hidden border border-gray-200">
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Ozeetech Support</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white hover:bg-green-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-600 mb-3">Our team is online and ready to help you!</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <User className="h-8 w-8 text-gray-700 bg-gray-100 p-1 rounded-full" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Admin</p>
                    <p className="text-xs text-green-600">Online</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-200">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <User className="h-8 w-8 text-gray-700 bg-gray-100 p-1 rounded-full" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Sales Rep</p>
                    <p className="text-xs text-green-600">Online</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-200">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <User className="h-8 w-8 text-gray-700 bg-gray-100 p-1 rounded-full" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 bg-yellow-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Support</p>
                    <p className="text-xs text-yellow-600">Away</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full bg-gray-100 hover:bg-gray-200">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-center text-gray-500">
              <p>Email: ozeetechgadgets@gmail.com</p>
              <p>Phone: +234 800 123 4567</p>
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full h-14 w-14 bg-green-600 hover:bg-green-700 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

export default OnlineChatWidget
