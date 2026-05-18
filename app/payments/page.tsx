"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Download,
  Plus,
  Calendar,
  ChevronDown,
  Building,
  Users,
  Globe,
  Repeat,
  AlertCircle,
} from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export default function PaymentsPage() {
  const [paymentType, setPaymentType] = useState("domestic")
  const [paymentAmount, setPaymentAmount] = useState("")
  const [paymentReference, setPaymentReference] = useState("")
  const [recipientName, setRecipientName] = useState("")
  const [recipientAccount, setRecipientAccount] = useState("")
  const [recipientSortCode, setRecipientSortCode] = useState("")
  const [selectedAccount, setSelectedAccount] = useState("business-current")

  // Update the accounts array with higher balances
  const accounts = [
    {
      id: "business-current",
      name: "Business Current Account",
      number: "40371862",
      sortCode: "60-24-77",
      balance: 87459632.48,
    },
    {
      id: "business-reserve",
      name: "Business Reserve Account",
      number: "40371874",
      sortCode: "60-24-77",
      balance: 125750000.0,
    },
    {
      id: "usd-account",
      name: "USD Business Account",
      number: "40371886",
      sortCode: "60-24-77",
      balance: 93450000.0,
    },
  ]

  const scheduledPayments = [
    {
      id: "sp1",
      recipient: "Monthly Payroll",
      amount: 42500.0,
      date: "31 Mar 2025",
      status: "scheduled",
      type: "Payroll",
    },
    {
      id: "sp2",
      recipient: "Quarterly Tax Payment",
      amount: 18750.0,
      date: "15 Apr 2025",
      status: "scheduled",
      type: "Tax",
    },
    {
      id: "sp3",
      recipient: "Office Rent",
      amount: 3500.0,
      date: "01 Apr 2025",
      status: "scheduled",
      type: "Rent",
    },
    {
      id: "sp4",
      recipient: "Software Subscription",
      amount: 199.99,
      date: "25 Mar 2025",
      status: "scheduled",
      type: "Subscription",
    },
  ]

  const recentPayments = [
    {
      id: "rp1",
      recipient: "Complete Payment Solution",
      amount: 48000000.0,
      date: "05 Mar 2025",
      status: "pending",
      type: "Wire Transfer",
    },
    {
      id: "rp2",
      recipient: "Office Supplies Inc",
      amount: 1245.0,
      date: "03 Mar 2025",
      status: "completed",
      type: "Supplier",
    },
    {
      id: "rp3",
      recipient: "Rent Payment",
      amount: 3500.0,
      date: "28 Feb 2025",
      status: "completed",
      type: "Rent",
    },
    {
      id: "rp4",
      recipient: "Staff Payroll",
      amount: 42500.0,
      date: "15 Feb 2025",
      status: "completed",
      type: "Payroll",
    },
  ]

  const savedRecipients = [
    {
      id: "sr1",
      name: "Complete Payment Solution",
      accountNumber: "200000655655",
      sortCode: "064209588",
      type: "Business",
    },
    {
      id: "sr2",
      name: "Office Supplies Inc",
      accountNumber: "12345678",
      sortCode: "40-35-21",
      type: "Business",
    },
    {
      id: "sr3",
      name: "Rent Management Ltd",
      accountNumber: "87654321",
      sortCode: "20-45-88",
      type: "Business",
    },
  ]

  const selectedAccountData = accounts.find((acc) => acc.id === selectedAccount) || accounts[0]

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
              <h1 className="text-2xl font-bold text-[#280071]">Payments</h1>
              <p className="text-natwest-gray">Make and manage your payments</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Payment history
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Manage recipients
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="new-payment" className="mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
            <TabsTrigger value="new-payment">New Payment</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>

          <TabsContent value="new-payment">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Make a Payment</CardTitle>
                <CardDescription>Send money to individuals or businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1 md:col-span-3">
                      <Label>Payment type</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                        <Button
                          type="button"
                          variant={paymentType === "domestic" ? "default" : "outline"}
                          className="justify-start"
                          onClick={() => setPaymentType("domestic")}
                        >
                          <Building className="mr-2 h-4 w-4" />
                          Domestic Payment
                        </Button>
                        <Button
                          type="button"
                          variant={paymentType === "international" ? "default" : "outline"}
                          className="justify-start"
                          onClick={() => setPaymentType("international")}
                        >
                          <Globe className="mr-2 h-4 w-4" />
                          International Payment
                        </Button>
                        <Button
                          type="button"
                          variant={paymentType === "standing" ? "default" : "outline"}
                          className="justify-start"
                          onClick={() => setPaymentType("standing")}
                        >
                          <Repeat className="mr-2 h-4 w-4" />
                          Standing Order
                        </Button>
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                      <Label htmlFor="from-account">From account</Label>
                      <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                        <SelectTrigger id="from-account" className="mt-2">
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id}>
                              {account.name} ({formatCurrency(account.balance)})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                      <div className="bg-blue-50 p-4 rounded-md flex mb-4">
                        <AlertCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-800 font-medium">Payment limits</p>
                          <p className="text-sm text-blue-600 mt-1">
                            Your daily payment limit is {formatCurrency(500000)}. You have {formatCurrency(500000)}{" "}
                            remaining today.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                      <Label>Recipient</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div>
                          <Button type="button" variant="outline" className="w-full justify-between">
                            Select from saved recipients
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        <div>
                          <Button type="button" variant="outline" className="w-full justify-between">
                            Add new recipient
                            <Plus className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="recipient-name">Recipient name</Label>
                      <Input
                        id="recipient-name"
                        className="mt-2"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="account-number">Account number</Label>
                      <Input
                        id="account-number"
                        className="mt-2"
                        value={recipientAccount}
                        onChange={(e) => setRecipientAccount(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="sort-code">Sort code</Label>
                      <Input
                        id="sort-code"
                        className="mt-2"
                        placeholder="XX-XX-XX"
                        value={recipientSortCode}
                        onChange={(e) => setRecipientSortCode(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="payment-amount">Amount</Label>
                      <div className="relative mt-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <Input
                          id="payment-amount"
                          className="pl-7"
                          placeholder="0.00"
                          value={paymentAmount}
                          onChange={(e) => setPaymentAmount(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="payment-date">Payment date</Label>
                      <Input
                        id="payment-date"
                        type="date"
                        className="mt-2"
                        defaultValue={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div>
                      <Label htmlFor="payment-reference">Reference</Label>
                      <Input
                        id="payment-reference"
                        className="mt-2"
                        placeholder="Optional"
                        value={paymentReference}
                        onChange={(e) => setPaymentReference(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t pt-6">
                <div className="text-sm text-natwest-gray">
                  <p>
                    Available balance:{" "}
                    <span className="font-medium">{formatCurrency(selectedAccountData.balance)}</span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Save for later</Button>
                  <Button>Continue</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scheduled Payments</CardTitle>
                <CardDescription>View and manage your upcoming payments</CardDescription>
              </CardHeader>
              <CardContent>
                {scheduledPayments.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-natwest-gray">You have no scheduled payments.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {scheduledPayments.map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center">
                          <div className="mr-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{payment.recipient}</p>
                            <p className="text-sm text-natwest-gray">{payment.type}</p>
                            <p className="text-sm text-natwest-gray">Due on {payment.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatCurrency(payment.amount)}</p>
                          <div className="flex space-x-2 mt-1">
                            <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 p-0 h-auto">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recent">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Payments</CardTitle>
                <CardDescription>View your recent payment activity</CardDescription>
              </CardHeader>
              <CardContent>
                {recentPayments.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-natwest-gray">You have no recent payments.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentPayments.map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center">
                          <div className="mr-4">
                            {payment.status === "pending" ? (
                              <Clock className="h-5 w-5 text-amber-500" />
                            ) : (
                              <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="text-red-600 text-xs">-</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{payment.recipient}</p>
                            {payment.status === "pending" ? (
                              <p className="text-sm text-amber-500">Pending {payment.type}</p>
                            ) : (
                              <p className="text-sm text-natwest-gray">{payment.type}</p>
                            )}
                            <p className="text-sm text-natwest-gray">{payment.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            className={`font-medium ${payment.status === "pending" ? "text-amber-500" : "text-red-600"}`}
                          >
                            {formatCurrency(payment.amount)}
                          </p>
                          <Link href={payment.status === "pending" ? "/accounts/business-current/pending" : "#"}>
                            <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto">
                              View details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" className="w-full">
                    View all payment history
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Saved Recipients</CardTitle>
            <CardDescription>Quickly make payments to your saved recipients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {savedRecipients.map((recipient) => (
                <Card key={recipient.id} className="bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#280071]/10 rounded-full flex items-center justify-center mr-3">
                        <Building className="h-5 w-5 text-[#280071]" />
                      </div>
                      <div>
                        <p className="font-medium">{recipient.name}</p>
                        <p className="text-xs text-natwest-gray">{recipient.type}</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-natwest-gray">Account: {recipient.accountNumber}</p>
                      <p className="text-natwest-gray">Sort code: {recipient.sortCode}</p>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button size="sm" className="flex-1">
                        Pay
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-white border-dashed border-2">
                <CardContent className="p-4 flex flex-col items-center justify-center h-full text-center">
                  <Plus className="h-8 w-8 text-natwest-gray mb-2" />
                  <p className="font-medium">Add New Recipient</p>
                  <p className="text-xs text-natwest-gray mt-1">Save details for quick payments</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Add recipient
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
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

