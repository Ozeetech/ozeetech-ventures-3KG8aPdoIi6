"use client"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Download,
  Printer,
  Share,
  Clock,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MessageSquare,
  Copy,
  Phone,
} from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export default function TransactionDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the transaction details based on the ID
  // For this demo, we'll use a hardcoded transaction
  const transaction = {
    id: params.id,
    type: "Wire Transfer",
    status: "pending",
    amount: 48000000.0,
    date: "05 Mar 2025",
    time: "10:30 AM",
    reference: "INV-2025-03-05",
    description: "Payment for services rendered",
    fromAccount: {
      name: "Business Current Account",
      number: "55779911",
      sortCode: "60-24-77",
    },
    toAccount: {
      name: "Complete Payment Solution",
      number: "200000655655",
      sortCode: "064209588",
      bankName: "Chase Bank",
      address: "123 Financial St, New York, NY 10001",
    },
    fee: 25.0,
    exchangeRate: null,
    notes: "Pending wire transfer for services rendered. Expected to clear within 1-3 business days.",
    trackingNumber: "NATW-48M-2025-03-05",
  }

  const transactionTimeline = [
    {
      id: "tt1",
      status: "Initiated",
      date: "05 Mar 2025",
      time: "10:30 AM",
      description: "Wire transfer initiated",
      completed: true,
    },
    {
      id: "tt2",
      status: "Processing",
      date: "05 Mar 2025",
      time: "10:35 AM",
      description: "Wire transfer is being processed",
      completed: true,
    },
    {
      id: "tt3",
      status: "Bank Verification",
      date: "05 Mar 2025",
      time: "11:15 AM",
      description: "Verification by sending bank",
      completed: true,
    },
    {
      id: "tt4",
      status: "Recipient Bank Processing",
      date: "Current",
      time: "",
      description: "Processing by recipient bank",
      completed: false,
    },
    {
      id: "tt5",
      status: "Completed",
      date: "Expected 06-08 Mar 2025",
      time: "",
      description: "Funds available to recipient",
      completed: false,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link
            href="/accounts/business-current/pending"
            className="flex items-center text-[#280071] hover:underline mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to pending transactions
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#280071]">Transaction Details</h1>
              <p className="text-natwest-gray">View details of your transaction</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Transaction Summary</CardTitle>
                    <CardDescription>Overview of your transaction</CardDescription>
                  </div>
                  <div className="flex items-center">
                    {transaction.status === "pending" ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        <Clock className="mr-1 h-3 w-3" />
                        Pending
                      </span>
                    ) : transaction.status === "completed" ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle2 className="mr-1 h-3 w-3" />
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        Failed
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <p className="text-sm text-natwest-gray">Amount</p>
                      <p className="text-2xl font-bold">{formatCurrency(transaction.amount)}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <p className="text-sm text-natwest-gray">Date & Time</p>
                      <p className="font-medium">
                        {transaction.date} at {transaction.time}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-natwest-gray">Transaction Type</p>
                      <p className="font-medium">{transaction.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Reference</p>
                      <p className="font-medium">{transaction.reference}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Description</p>
                      <p className="font-medium">{transaction.description}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Tracking Number</p>
                      <div className="flex items-center">
                        <p className="font-medium mr-2">{transaction.trackingNumber}</p>
                        <button className="text-[#280071]" title="Copy tracking number">
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">From</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-natwest-gray">Account Name</p>
                        <p className="font-medium">{transaction.fromAccount.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-natwest-gray">Account Number</p>
                        <p className="font-medium">{transaction.fromAccount.number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-natwest-gray">Sort Code</p>
                        <p className="font-medium">{transaction.fromAccount.sortCode}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">To</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-natwest-gray">Recipient Name</p>
                        <p className="font-medium">{transaction.toAccount.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-natwest-gray">Account Number</p>
                        <p className="font-medium">{transaction.toAccount.number}</p>
                      </div>
                      <div>
                        <p className="text-sm text-natwest-gray">Sort Code</p>
                        <p className="font-medium">{transaction.toAccount.sortCode}</p>
                      </div>
                      <div>
                        <p className="text-sm text-natwest-gray">Bank Name</p>
                        <p className="font-medium">{transaction.toAccount.bankName}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-natwest-gray">Bank Address</p>
                        <p className="font-medium">{transaction.toAccount.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-medium mb-4">Additional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-natwest-gray">Fee</p>
                        <p className="font-medium">{formatCurrency(transaction.fee)}</p>
                      </div>
                      {transaction.exchangeRate && (
                        <div>
                          <p className="text-sm text-natwest-gray">Exchange Rate</p>
                          <p className="font-medium">{transaction.exchangeRate}</p>
                        </div>
                      )}
                      <div className="md:col-span-2">
                        <p className="text-sm text-natwest-gray">Notes</p>
                        <p className="font-medium">{transaction.notes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Transaction Timeline</CardTitle>
                <CardDescription>Track the progress of your transaction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-6">
                    {transactionTimeline.map((step, index) => (
                      <div key={step.id} className="relative pl-10">
                        <div
                          className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed
                              ? "bg-green-100"
                              : index === transactionTimeline.findIndex((s) => !s.completed)
                                ? "bg-blue-100"
                                : "bg-gray-100"
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : index === transactionTimeline.findIndex((s) => !s.completed) ? (
                            <Clock className="h-4 w-4 text-blue-600" />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          )}
                        </div>
                        <div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <h4
                              className={`font-medium ${
                                index === transactionTimeline.findIndex((s) => !s.completed) ? "text-blue-800" : ""
                              }`}
                            >
                              {step.status}
                            </h4>
                            <p
                              className={`text-sm ${
                                index === transactionTimeline.findIndex((s) => !s.completed)
                                  ? "text-blue-600"
                                  : "text-natwest-gray"
                              }`}
                            >
                              {step.date} {step.time && `at ${step.time}`}
                            </p>
                          </div>
                          <p className="text-sm text-natwest-gray mt-1">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-md">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-800 font-medium">About this transaction</p>
                        <p className="text-sm text-blue-600 mt-1">
                          This is a pending wire transfer. Wire transfers typically take 1-3 business days to complete,
                          depending on the recipient's bank.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Common Questions</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="text-sm text-[#280071] hover:underline flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          How long do wire transfers take?
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-[#280071] hover:underline flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Can I cancel this transaction?
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-[#280071] hover:underline flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Why is there a fee for this transaction?
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-[#280071] hover:underline flex items-center">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          What if the recipient doesn't receive the funds?
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Contact Support</h3>
                    <p className="text-sm text-natwest-gray mb-4">
                      If you have questions about this transaction, our support team is here to help.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Start a chat
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="mr-2 h-4 w-4" />
                        Call us
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Related Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Monthly Payroll</p>
                      <p className="text-xs text-natwest-gray">28 Feb 2025</p>
                    </div>
                    <p className="text-red-600 font-medium">-$42,500.00</p>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Office Supplies Inc</p>
                      <p className="text-xs text-natwest-gray">03 Mar 2025</p>
                    </div>
                    <p className="text-red-600 font-medium">-$1,245.00</p>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <p className="font-medium">Acme Corp</p>
                      <p className="text-xs text-natwest-gray">01 Mar 2025</p>
                    </div>
                    <p className="text-green-600 font-medium">+$8,750.00</p>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Button variant="outline" className="w-full">
                    View all transactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
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
