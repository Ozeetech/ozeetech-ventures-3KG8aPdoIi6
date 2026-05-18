"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, Download, FileText, Info, AlertTriangle, Copy, Printer, Share } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export default function PendingTransactionPage() {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const transaction = {
    id: "tx1",
    description: "Complete Payment Solution",
    date: "05 Mar 2025",
    amount: 48000000.0,
    type: "pending",
    category: "Wire Transfer",
    reference: "WIR-25030500874",
    recipient: {
      name: "Complete Payment Solution",
      accountNumber: "200000655655",
      routingNumber: "064209588",
      bankName: "First National Bank",
      country: "United States",
    },
    sender: {
      name: "Molzen LLC",
      accountNumber: "55779911",
      sortCode: "60-24-77",
    },
    timeline: [
      {
        status: "initiated",
        date: "March 5, 2025 - 10:23 AM",
        completed: true,
      },
      {
        status: "verification",
        date: "March 5, 2025 - 10:25 AM",
        completed: true,
      },
      {
        status: "processing",
        date: "March 5, 2025 - 10:30 AM",
        completed: false,
        current: true,
      },
      {
        status: "complete",
        date: "Pending",
        completed: false,
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link href="/dashboard" className="flex items-center text-[#280071] hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to dashboard
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#280071]">Pending Transaction Details</h1>
              <p className="text-natwest-gray">
                Business Current Account ending in {transaction.sender.accountNumber.slice(-4)}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download details
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Share className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-amber-500 mr-2" />
              <CardTitle className="text-lg text-amber-500">Pending Wire Transfer</CardTitle>
            </div>
            <CardDescription>Transaction initiated on {transaction.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-natwest-gray mb-1">Amount</h3>
                  <p className="text-2xl font-bold">{formatCurrency(transaction.amount)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-natwest-gray mb-1">Status</h3>
                  <div className="flex items-center">
                    <p className="text-amber-500 font-medium">Processing</p>
                    <div className="ml-2 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                      Estimated completion: 1-2 business days
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-natwest-gray mb-3">Transaction Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-natwest-gray">Transaction Type</p>
                    <p className="font-medium">International Wire Transfer</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Reference</p>
                    <div className="flex items-center">
                      <p className="font-medium mr-2">{transaction.reference}</p>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Date Initiated</p>
                    <p className="font-medium">{transaction.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Processing Time</p>
                    <p className="font-medium">1-2 business days</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-natwest-gray mb-3">Recipient Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-natwest-gray">Recipient Name</p>
                    <p className="font-medium">{transaction.recipient.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Account Number</p>
                    <p className="font-medium">{transaction.recipient.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Routing Number</p>
                    <p className="font-medium">{transaction.recipient.routingNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Bank Name</p>
                    <p className="font-medium">{transaction.recipient.bankName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Country</p>
                    <p className="font-medium">{transaction.recipient.country}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-natwest-gray mb-3">Sender Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-natwest-gray">Account Name</p>
                    <p className="font-medium">{transaction.sender.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Account Number</p>
                    <p className="font-medium">****{transaction.sender.accountNumber.slice(-4)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Sort Code</p>
                    <p className="font-medium">{transaction.sender.sortCode}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-md flex">
                <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800 font-medium">Wire Transfer Information</p>
                  <p className="text-sm text-blue-600 mt-1">
                    International wire transfers typically take 1-2 business days to process. You will receive a
                    notification once the transfer is complete. For any questions, please contact your relationship
                    manager.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-md flex">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 font-medium">Important Notice</p>
                  <p className="text-sm text-amber-600 mt-1">
                    Once the wire transfer is complete, it cannot be reversed. Please ensure all recipient details are
                    correct. If you need to make changes, please contact us immediately at 0345 307 0900.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-6">
          <Card className="flex-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Transaction Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transaction.timeline.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-3 relative">
                      <div
                        className={`h-4 w-4 rounded-full ${
                          step.completed ? "bg-green-500" : step.current ? "bg-amber-500" : "bg-gray-200"
                        }`}
                      ></div>
                      {index < transaction.timeline.length - 1 && (
                        <div className="absolute top-4 bottom-0 left-1/2 w-0.5 -ml-px bg-gray-200"></div>
                      )}
                    </div>
                    <div>
                      <p
                        className={`font-medium ${
                          step.current ? "text-amber-500" : step.completed ? "text-black" : "text-gray-400"
                        }`}
                      >
                        {step.status === "initiated" && "Transaction Initiated"}
                        {step.status === "verification" && "Verification Complete"}
                        {step.status === "processing" && "Processing"}
                        {step.status === "complete" && "Transfer Complete"}
                      </p>
                      <p
                        className={`text-sm ${step.completed || step.current ? "text-natwest-gray" : "text-gray-400"}`}
                      >
                        {step.date}
                      </p>
                      {step.current && <p className="text-xs text-amber-600 mt-1">In progress</p>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  View transaction receipt
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Download SWIFT details
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Cancel transaction
                </Button>
                <div className="pt-3 mt-3 border-t">
                  <p className="text-sm text-natwest-gray mb-2">Need assistance?</p>
                  <p className="text-sm">
                    Contact your relationship manager at <span className="font-medium">0345 307 0900</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-white border-t p-4 text-center text-sm text-natwest-gray">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 National Westminster Bank plc. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="#" className="hover:underline">
                Privacy
              </Link>
              <Link href="#" className="hover:underline">
                Security
              </Link>
              <Link href="#" className="hover:underline">
                Legal
              </Link>
              <Link href="#" className="hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
