"use client"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  ArrowLeft,
  Printer,
  Download,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  CalendarClock,
  Receipt,
  FileText,
} from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export default function TransactionDetailsPage({
  params,
}: {
  params: { accountId: string; transactionId: string }
}) {
  const { accountId, transactionId } = params

  // In a real app, you would fetch this data based on the transactionId
  const transactionData = {
    id: transactionId,
    description: "Complete Payment Solution",
    date: "20 Mar 2025",
    processedDate: "20 Mar 2025 - 10:00 AM",
    amount: 48000000.0,
    type: "pending",
    category: "Wire Transfer",
    reference: "WIR-25032000874",
    status: "Processing",
    fromAccount: "Business Current Account (40371862)",
    toAccount: "Complete Payment Solution (200000655655)",
    paymentMethod: "Wire Transfer",
    fee: 25.0,
    notes: "International wire transfer for inheritance/beneficiary",
    exchangeRate: null,
    receiptNumber: "NW250320000125",
    bankReference: "NW0025789641",
  }

  const accountData = {
    id: accountId,
    name: "Business Current Account",
    number: "40371862",
    sortCode: "60-24-77",
    balance: 87459632.48,
    available: 87459632.48,
  }

  const similarTransactions = [
    {
      id: "prev1",
      description: "Complete Payment Solution",
      date: "20 Feb 2025",
      amount: 42000000.0,
      type: "completed",
      reference: "WIR-25022000632",
    },
    {
      id: "prev2",
      description: "Complete Payment Solution",
      date: "20 Jan 2025",
      amount: 35000000.0,
      type: "completed",
      reference: "WIR-25012000421",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link href={`/accounts/${accountId}`} className="flex items-center text-[#280071] hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to account
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#280071]">Transaction Details</h1>
              <p className="text-natwest-gray">
                {accountData.name} ending in {accountData.number.slice(-4)}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Printer className="mr-2 h-4 w-4" />
                Print
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{transactionData.description}</CardTitle>
                    <CardDescription>{transactionData.date}</CardDescription>
                  </div>
                  <div>
                    <div className="flex items-center">
                      {transactionData.type === "pending" ? (
                        <>
                          <Clock className="h-5 w-5 text-amber-500 mr-2" />
                          <span className="font-medium text-amber-500">
                            {formatCurrency(transactionData.amount)} • Pending
                          </span>
                        </>
                      ) : transactionData.type === "credit" ? (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          <span className="font-medium text-green-500">+{formatCurrency(transactionData.amount)}</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="h-5 w-5 text-red-500 mr-2" />
                          <span className="font-medium text-red-500">{formatCurrency(transactionData.amount)}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-natwest-gray">Transaction Date</p>
                      <p className="font-medium">{transactionData.processedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Status</p>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-amber-500 mr-1" />
                        <p className="font-medium text-amber-500">{transactionData.status}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">From Account</p>
                      <p className="font-medium">{transactionData.fromAccount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">To Account</p>
                      <p className="font-medium">{transactionData.toAccount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Payment Method</p>
                      <p className="font-medium">{transactionData.paymentMethod}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Payment Reference</p>
                      <p className="font-medium">{transactionData.reference}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Amount</p>
                      <p className="font-medium">{formatCurrency(transactionData.amount)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Fee</p>
                      <p className="font-medium">{formatCurrency(transactionData.fee)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Receipt Number</p>
                      <p className="font-medium">{transactionData.receiptNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-natwest-gray">Bank Reference</p>
                      <p className="font-medium">{transactionData.bankReference}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-natwest-gray mb-2">Notes</p>
                    <p>{transactionData.notes || "No notes added"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Transaction Timeline</CardTitle>
                <CardDescription>Track the progress of your transaction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-4 relative z-10">
                        <Clock className="h-4 w-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="font-medium">Transaction Processing</p>
                        <p className="text-sm text-natwest-gray">20 Mar 2025 - 10:00 AM</p>
                        <p className="text-sm mt-1">
                          Your wire transfer is currently being processed. This can take 1-3 business days.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4 relative z-10">
                        <CheckCircle2 className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="opacity-50">
                        <p className="font-medium">Bank Verification</p>
                        <p className="text-sm text-natwest-gray">Pending</p>
                        <p className="text-sm mt-1">Your transaction will be verified by our banking partners.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4 relative z-10">
                        <CheckCircle2 className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="opacity-50">
                        <p className="font-medium">Recipient Bank Processing</p>
                        <p className="text-sm text-natwest-gray">Pending</p>
                        <p className="text-sm mt-1">The recipient's bank will process the incoming wire transfer.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4 relative z-10">
                        <CheckCircle2 className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="opacity-50">
                        <p className="font-medium">Funds Delivered</p>
                        <p className="text-sm text-natwest-gray">Pending</p>
                        <p className="text-sm mt-1">The funds will be credited to the recipient's account.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Transaction Actions</CardTitle>
                <CardDescription>Manage this transaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Report an issue
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Receipt className="mr-2 h-4 w-4" />
                  Request receipt
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CalendarClock className="mr-2 h-4 w-4" />
                  View expected completion
                </Button>
                {transactionData.type === "pending" && (
                  <Button
                    variant="outline"
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Cancel transaction
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Similar Transactions</CardTitle>
                <CardDescription>Previous transactions with this recipient</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {similarTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between border-b pb-3 last:border-0 last:pb-0">
                      <div>
                        <p className="font-medium">{transaction.date}</p>
                        <p className="text-sm text-natwest-gray">Ref: {transaction.reference}</p>
                      </div>
                      <p className="font-medium text-red-600">{formatCurrency(transaction.amount)}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <Button variant="ghost" size="sm" className="text-[#280071]">
                  View all transactions with this recipient
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
                <CardDescription>We're here to assist you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-md">
                  <p className="text-sm font-medium text-blue-800">Transaction Support</p>
                  <p className="text-sm text-blue-600 mt-1">
                    For questions about this transaction, contact our business support team.
                  </p>
                  <p className="text-sm font-medium text-blue-800 mt-3">+44 345 711 4477</p>
                </div>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  View Transaction FAQs
                </Button>
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

