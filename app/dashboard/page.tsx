"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowUpRight, Clock, Download, Plus, Bell, FileText, ChevronDown, ChevronUp } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export default function DashboardPage() {
  const [showAllAccounts, setShowAllAccounts] = useState(false)
  const [showAllTransactions, setShowAllTransactions] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const accounts = [
    {
      id: "business-current",
      name: "Business Current Account",
      number: "40371862",
      sortCode: "60-24-77",
      balance: 87459632.48,
      available: 87459632.48,
      pending: 48000000.0,
      pendingCount: 1,
      type: "current",
    },
    {
      id: "business-reserve",
      name: "Business Reserve Account",
      number: "40371874",
      sortCode: "60-24-77",
      balance: 125750000.0,
      available: 125750000.0,
      pending: 0,
      pendingCount: 0,
      type: "savings",
    },
    {
      id: "usd-account",
      name: "USD Business Account",
      number: "40371886",
      sortCode: "60-24-77",
      balance: 93450000.0,
      available: 93450000.0,
      pending: 0,
      pendingCount: 0,
      type: "foreign",
      currency: "USD",
    },
  ]

  const recentTransactions = [
    {
      id: "tx1",
      description: "Complete Payment Solution",
      date: "20 Mar 2025",
      amount: 48000000.0,
      type: "pending",
      category: "Wire Transfer",
    },
    {
      id: "tx2",
      description: "Office Supplies Inc",
      date: "18 Mar 2025",
      amount: -1245.0,
      type: "debit",
      category: "Office Expenses",
    },
    {
      id: "tx3",
      description: "Client Payment - Acme Corp",
      date: "15 Mar 2025",
      amount: 8750.0,
      type: "credit",
      category: "Income",
    },
    {
      id: "tx4",
      description: "Rent Payment",
      date: "10 Mar 2025",
      amount: -3500.0,
      type: "debit",
      category: "Rent",
    },
    {
      id: "tx5",
      description: "Software Subscription",
      date: "05 Mar 2025",
      amount: -199.99,
      type: "debit",
      category: "Software",
    },
    {
      id: "tx6",
      description: "Client Payment - XYZ Ltd",
      date: "01 Mar 2025",
      amount: 12500.0,
      type: "credit",
      category: "Income",
    },
    {
      id: "tx7",
      description: "Utility Bill",
      date: "28 Feb 2025",
      amount: -450.75,
      type: "debit",
      category: "Utilities",
    },
    {
      id: "tx8",
      description: "Staff Payroll",
      date: "25 Feb 2025",
      amount: -42500.0,
      type: "debit",
      category: "Payroll",
    },
  ]

  const upcomingPayments = [
    {
      id: "up1",
      description: "Complete Payment Solution",
      date: "Processing",
      amount: 48000000.0,
      status: "pending",
      dueDate: "Processing",
    },
    {
      id: "up2",
      description: "Monthly Payroll",
      date: "Due on 31 Mar 2025",
      amount: 42500.0,
      status: "scheduled",
      dueDate: "31 Mar 2025",
    },
    {
      id: "up3",
      description: "Quarterly Tax Payment",
      date: "Due on 15 Apr 2025",
      amount: 18750.0,
      status: "scheduled",
      dueDate: "15 Apr 2025",
    },
    {
      id: "up4",
      description: "Office Rent",
      date: "Due on 01 Apr 2025",
      amount: 3500.0,
      status: "scheduled",
      dueDate: "01 Apr 2025",
    },
  ]

  const displayedAccounts = showAllAccounts ? accounts : accounts.slice(0, 1)
  const displayedTransactions = showAllTransactions ? recentTransactions : recentTransactions.slice(0, 4)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#280071]">Welcome, Molzen LLC</h1>
            <p className="text-natwest-gray">{currentDate}</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Statements
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              New Payment
            </Button>
            <Button size="sm" className="flex items-center bg-[#D81E05] hover:bg-[#D81E05]/90">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              <span className="ml-1 bg-white text-[#D81E05] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                2
              </span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          {displayedAccounts.map((account) => (
            <Card key={account.id} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gradient-to-r from-[#280071]/5 to-transparent">
                <div>
                  <CardTitle className="text-lg">{account.name}</CardTitle>
                  <CardDescription>Account ending in {account.number.slice(-4)}</CardDescription>
                </div>
                <Link href={`/accounts/${account.id}`}>
                  <Button variant="ghost" size="sm" className="text-[#280071]">
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <p className="text-sm text-natwest-gray">Available balance</p>
                    <p className="text-3xl font-bold">{formatCurrency(account.available)}</p>
                  </div>
                  {account.pendingCount > 0 && (
                    <div className="md:text-right">
                      <p className="text-sm text-natwest-gray">Pending transactions</p>
                      <div className="flex items-center md:justify-end">
                        <Clock className="h-4 w-4 text-amber-500 mr-1" />
                        <Link href={`/accounts/${account.id}/pending`} className="text-amber-500 font-medium">
                          {account.pendingCount} pending transaction{account.pendingCount !== 1 ? "s" : ""}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-natwest-gray">Account number</p>
                    <p className="font-medium">{account.number}</p>
                  </div>
                  <div>
                    <p className="text-sm text-natwest-gray">Sort code</p>
                    <p className="font-medium">{account.sortCode}</p>
                  </div>
                  <div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        Copy details
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Share details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {accounts.length > 1 && (
            <div className="text-center">
              <Button variant="ghost" onClick={() => setShowAllAccounts(!showAllAccounts)} className="text-[#280071]">
                {showAllAccounts ? (
                  <>
                    Show less accounts
                    <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show all accounts ({accounts.length})
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Recent Transactions</CardTitle>
              <Link href="/accounts/business-current/transactions">
                <Button variant="ghost" size="sm" className="text-[#280071]">
                  View all
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {displayedTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center">
                      <div className="mr-4">
                        {transaction.type === "pending" ? (
                          <Clock className="h-5 w-5 text-amber-500" />
                        ) : transaction.type === "credit" ? (
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-xs">+</span>
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 text-xs">-</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        {transaction.type === "pending" && (
                          <p className="text-sm text-amber-500">Pending {transaction.category}</p>
                        )}
                        <p className="text-sm text-natwest-gray">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-medium ${
                          transaction.type === "pending"
                            ? "text-amber-500"
                            : transaction.type === "credit"
                              ? "text-green-600"
                              : "text-red-600"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : ""}
                        {formatCurrency(transaction.amount)}
                      </p>
                      <Link href={`/accounts/business-current/transactions/${transaction.id}`}>
                        <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto">
                          View details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {recentTransactions.length > 4 && (
                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    className="text-[#280071]"
                    onClick={() => setShowAllTransactions(!showAllTransactions)}
                  >
                    {showAllTransactions ? "Show less transactions" : "Load more transactions"}
                    {showAllTransactions ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <Tabs defaultValue="upcoming">
              <CardHeader className="pb-0">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Payments</CardTitle>
                  <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="quick">Quick Actions</TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>

              <TabsContent value="upcoming">
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    {upcomingPayments.map((payment) => (
                      <div key={payment.id} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div>
                          <p className="font-medium">{payment.description}</p>
                          {payment.status === "pending" ? (
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-amber-500 mr-1" />
                              <p className="text-sm text-amber-500">Pending wire transfer</p>
                            </div>
                          ) : (
                            <p className="text-sm text-natwest-gray">{payment.date}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className={`font-medium ${payment.status === "pending" ? "text-amber-500" : ""}`}>
                            {formatCurrency(payment.amount)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <Button variant="outline" className="w-full justify-between">
                      View all scheduled payments
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="quick">
                <CardContent className="pt-4 space-y-4">
                  <Button variant="outline" className="w-full justify-between">
                    Make a payment
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Transfer between accounts
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    View statements
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Set up standing order
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between">
                    Manage direct debits
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <CardDescription>Your recent banking activity and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start p-3 bg-amber-50 rounded-md">
                <Clock className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Wire Transfer in Progress</p>
                  <p className="text-sm">
                    Your wire transfer of {formatCurrency(48000000)} to Complete Payment Solution is being processed.
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      View details
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Track status
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start p-3 bg-blue-50 rounded-md">
                <Bell className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">New Statement Available</p>
                  <p className="text-sm">Your February 2025 statement is now available to view and download.</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" className="text-xs flex items-center">
                      <FileText className="mr-1 h-3 w-3" />
                      Download statement
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start p-3 bg-green-50 rounded-md">
                <Bell className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Payment Received</p>
                  <p className="text-sm">
                    You received a payment of {formatCurrency(8750)} from Acme Corp on 15 Mar 2025.
                  </p>
                </div>
              </div>
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

