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
import { ArrowLeft, ArrowRight, Download, Plus, Calendar, Repeat, ArrowLeftRight, Wallet } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export default function TransfersPage() {
  const [fromAccount, setFromAccount] = useState("business-current")
  const [toAccount, setToAccount] = useState("business-reserve")
  const [transferAmount, setTransferAmount] = useState("")
  const [transferReference, setTransferReference] = useState("")

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

  const recentTransfers = [
    {
      id: "rt1",
      fromAccount: "Business Current Account",
      toAccount: "Business Reserve Account",
      amount: 50000.0,
      date: "01 Mar 2025",
      status: "completed",
      reference: "Monthly savings",
    },
    {
      id: "rt2",
      fromAccount: "Business Reserve Account",
      toAccount: "Business Current Account",
      amount: 25000.0,
      date: "15 Feb 2025",
      status: "completed",
      reference: "Operating expenses",
    },
    {
      id: "rt3",
      fromAccount: "Business Current Account",
      toAccount: "USD Business Account",
      amount: 10000.0,
      date: "05 Feb 2025",
      status: "completed",
      reference: "USD allocation",
    },
  ]

  const scheduledTransfers = [
    {
      id: "st1",
      fromAccount: "Business Current Account",
      toAccount: "Business Reserve Account",
      amount: 50000.0,
      date: "01 Apr 2025",
      status: "scheduled",
      frequency: "Monthly",
      reference: "Monthly savings",
    },
    {
      id: "st2",
      fromAccount: "USD Business Account",
      toAccount: "Business Current Account",
      amount: 5000.0,
      date: "15 Apr 2025",
      status: "scheduled",
      frequency: "One-time",
      reference: "USD conversion",
    },
  ]

  const fromAccountData = accounts.find((acc) => acc.id === fromAccount) || accounts[0]
  const toAccountData = accounts.find((acc) => acc.id === toAccount) || accounts[1]

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
              <h1 className="text-2xl font-bold text-[#280071]">Transfers</h1>
              <p className="text-natwest-gray">Move money between your accounts</p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Transfer history
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Repeat className="mr-2 h-4 w-4" />
                Recurring transfers
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="new-transfer" className="mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
            <TabsTrigger value="new-transfer">New Transfer</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>

          <TabsContent value="new-transfer">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Transfer Between Accounts</CardTitle>
                <CardDescription>Move money between your NatWest accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="from-account">From account</Label>
                      <Select value={fromAccount} onValueChange={setFromAccount}>
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

                      <div className="mt-2 p-3 bg-gray-50 rounded-md">
                        <p className="text-sm text-natwest-gray">Available balance</p>
                        <p className="font-medium">{formatCurrency(fromAccountData.balance)}</p>
                        <p className="text-xs text-natwest-gray mt-1">Account: {fromAccountData.number}</p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                        <div className="bg-white rounded-full p-2 shadow-md">
                          <ArrowLeftRight className="h-6 w-6 text-[#280071]" />
                        </div>
                      </div>

                      <Label htmlFor="to-account">To account</Label>
                      <Select value={toAccount} onValueChange={setToAccount}>
                        <SelectTrigger id="to-account" className="mt-2">
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          {accounts.map((account) => (
                            <SelectItem key={account.id} value={account.id} disabled={account.id === fromAccount}>
                              {account.name} ({formatCurrency(account.balance)})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <div className="mt-2 p-3 bg-gray-50 rounded-md">
                        <p className="text-sm text-natwest-gray">Current balance</p>
                        <p className="font-medium">{formatCurrency(toAccountData.balance)}</p>
                        <p className="text-xs text-natwest-gray mt-1">Account: {toAccountData.number}</p>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="transfer-amount">Amount</Label>
                      <div className="relative mt-2">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-gray-500">$</span>
                        </div>
                        <Input
                          id="transfer-amount"
                          className="pl-7"
                          placeholder="0.00"
                          value={transferAmount}
                          onChange={(e) => setTransferAmount(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="transfer-date">Transfer date</Label>
                      <Input
                        id="transfer-date"
                        type="date"
                        className="mt-2"
                        defaultValue={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                      <Label htmlFor="transfer-reference">Reference (optional)</Label>
                      <Input
                        id="transfer-reference"
                        className="mt-2"
                        placeholder="Add a reference for this transfer"
                        value={transferReference}
                        onChange={(e) => setTransferReference(e.target.value)}
                      />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="recurring"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <Label htmlFor="recurring" className="font-medium text-gray-700">
                            Make this a recurring transfer
                          </Label>
                          <p className="text-gray-500">Set up a regular transfer between your accounts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t pt-6">
                <div className="text-sm text-natwest-gray">
                  <p>Transfer limits may apply to certain accounts.</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Continue</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scheduled Transfers</CardTitle>
                <CardDescription>View and manage your upcoming transfers</CardDescription>
              </CardHeader>
              <CardContent>
                {scheduledTransfers.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-natwest-gray">You have no scheduled transfers.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {scheduledTransfers.map((transfer) => (
                      <div key={transfer.id} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center">
                          <div className="mr-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">
                              {transfer.fromAccount} to {transfer.toAccount}
                            </p>
                            <p className="text-sm text-natwest-gray">{transfer.frequency} transfer</p>
                            <p className="text-sm text-natwest-gray">Due on {transfer.date}</p>
                            {transfer.reference && (
                              <p className="text-xs text-natwest-gray">Ref: {transfer.reference}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatCurrency(transfer.amount)}</p>
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
                <CardTitle className="text-lg">Recent Transfers</CardTitle>
                <CardDescription>View your recent transfer activity</CardDescription>
              </CardHeader>
              <CardContent>
                {recentTransfers.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-natwest-gray">You have no recent transfers.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentTransfers.map((transfer) => (
                      <div key={transfer.id} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center">
                          <div className="mr-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <ArrowLeftRight className="h-5 w-5 text-[#280071]" />
                          </div>
                          <div>
                            <p className="font-medium">
                              {transfer.fromAccount} to {transfer.toAccount}
                            </p>
                            <p className="text-sm text-natwest-gray">{transfer.date}</p>
                            {transfer.reference && (
                              <p className="text-xs text-natwest-gray">Ref: {transfer.reference}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatCurrency(transfer.amount)}</p>
                          <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto">
                            View details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" className="w-full">
                    View all transfer history
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Transfers</CardTitle>
            <CardDescription>Set up quick transfers between your accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#280071]/10 rounded-full flex items-center justify-center mr-3">
                      <Wallet className="h-5 w-5 text-[#280071]" />
                    </div>
                    <div>
                      <p className="font-medium">Current to Reserve</p>
                      <p className="text-xs text-natwest-gray">Monthly savings</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-natwest-gray">Amount: $50,000.00</p>
                    <p className="text-natwest-gray">Frequency: Monthly</p>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1">
                      Transfer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#280071]/10 rounded-full flex items-center justify-center mr-3">
                      <Wallet className="h-5 w-5 text-[#280071]" />
                    </div>
                    <div>
                      <p className="font-medium">USD to Current</p>
                      <p className="text-xs text-natwest-gray">Currency conversion</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-natwest-gray">Amount: $5,000.00</p>
                    <p className="text-natwest-gray">Frequency: One-time</p>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1">
                      Transfer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-dashed border-2">
                <CardContent className="p-4 flex flex-col items-center justify-center h-full text-center">
                  <Plus className="h-8 w-8 text-natwest-gray mb-2" />
                  <p className="font-medium">Create Quick Transfer</p>
                  <p className="text-xs text-natwest-gray mt-1">Save details for frequent transfers</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Create new
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

