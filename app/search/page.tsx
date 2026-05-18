"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, Clock, Calendar, ChevronDown, CreditCard, FileText, Building, Users } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchCategory, setSearchCategory] = useState("all")
  const [showAllResults, setShowAllResults] = useState(false)

  // Sample search results
  const transactions = [
    {
      id: "tx1",
      description: "Complete Payment Solution",
      date: "05 Mar 2025",
      amount: 48000000.0,
      type: "pending",
      category: "Wire Transfer",
      reference: "WIR-25030500874",
    },
    {
      id: "tx2",
      description: "Office Supplies Inc",
      date: "03 Mar 2025",
      amount: -1245.0,
      type: "debit",
      category: "Office Expenses",
      reference: "INV-78945",
    },
  ]

  const statements = [
    {
      id: "stmt1",
      period: "March 2025",
      dateRange: "01/03/2025 - 31/03/2025",
      available: true,
      accountName: "Business Current Account",
    },
    {
      id: "stmt2",
      period: "February 2025",
      dateRange: "01/02/2025 - 28/02/2025",
      available: true,
      accountName: "Business Current Account",
    },
  ]

  const recipients = [
    {
      id: "rec1",
      name: "Complete Payment Solution",
      accountNumber: "200000655655",
      sortCode: "064209588",
      type: "Business",
    },
    {
      id: "rec2",
      name: "Office Supplies Inc",
      accountNumber: "12345678",
      sortCode: "40-35-21",
      type: "Business",
    },
  ]

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
  ]

  // Filter results based on search query
  const filteredTransactions = searchQuery
    ? transactions.filter(
        (tx) =>
          tx.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tx.reference.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : transactions

  const filteredStatements = searchQuery
    ? statements.filter(
        (stmt) =>
          stmt.period.toLowerCase().includes(searchQuery.toLowerCase()) ||
          stmt.accountName.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : statements

  const filteredRecipients = searchQuery
    ? recipients.filter(
        (rec) =>
          rec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          rec.accountNumber.includes(searchQuery) ||
          rec.sortCode.includes(searchQuery),
      )
    : recipients

  const filteredAccounts = searchQuery
    ? accounts.filter(
        (acc) =>
          acc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          acc.number.includes(searchQuery) ||
          acc.sortCode.includes(searchQuery),
      )
    : accounts

  // Determine which results to show based on the selected category
  const showTransactions = searchCategory === "all" || searchCategory === "transactions"
  const showStatements = searchCategory === "all" || searchCategory === "statements"
  const showRecipients = searchCategory === "all" || searchCategory === "recipients"
  const showAccounts = searchCategory === "all" || searchCategory === "accounts"

  // Limit results unless "show all" is clicked
  const displayedTransactions = showAllResults ? filteredTransactions : filteredTransactions.slice(0, 3)
  const displayedStatements = showAllResults ? filteredStatements : filteredStatements.slice(0, 2)
  const displayedRecipients = showAllResults ? filteredRecipients : filteredRecipients.slice(0, 2)
  const displayedAccounts = showAllResults ? filteredAccounts : filteredAccounts.slice(0, 2)

  // Calculate total results
  const totalResults =
    (showTransactions ? filteredTransactions.length : 0) +
    (showStatements ? filteredStatements.length : 0) +
    (showRecipients ? filteredRecipients.length : 0) +
    (showAccounts ? filteredAccounts.length : 0)

  // Calculate displayed results
  const displayedResults =
    (showTransactions ? displayedTransactions.length : 0) +
    (showStatements ? displayedStatements.length : 0) +
    (showRecipients ? displayedRecipients.length : 0) +
    (showAccounts ? displayedAccounts.length : 0)

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
              <h1 className="text-2xl font-bold text-[#280071]">Search</h1>
              <p className="text-natwest-gray">Find transactions, statements, and more</p>
            </div>
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-natwest-gray" />
                <Input
                  type="search"
                  placeholder="Search for transactions, statements, recipients..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div>
                <Tabs value={searchCategory} onValueChange={setSearchCategory} className="w-full">
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                    <TabsTrigger value="statements">Statements</TabsTrigger>
                    <TabsTrigger value="recipients">Recipients</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </CardContent>
        </Card>

        {searchQuery && (
          <div className="mb-6">
            <p className="text-natwest-gray">
              Showing {displayedResults} of {totalResults} results for "{searchQuery}"
            </p>
          </div>
        )}

        {showTransactions && filteredTransactions.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Transactions</CardTitle>
              <CardDescription>Search results in transactions</CardDescription>
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
                        {transaction.type === "pending" ? (
                          <p className="text-sm text-amber-500">Pending {transaction.category}</p>
                        ) : (
                          <p className="text-sm text-natwest-gray">{transaction.category}</p>
                        )}
                        <div className="flex items-center text-xs text-natwest-gray">
                          <span>{transaction.date}</span>
                          <span className="mx-1">•</span>
                          <span>Ref: {transaction.reference}</span>
                        </div>
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

              {filteredTransactions.length > 3 && (
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" className="text-[#280071]">
                    View all transaction results
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {showStatements && filteredStatements.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Statements</CardTitle>
              <CardDescription>Search results in statements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {displayedStatements.map((statement) => (
                  <div key={statement.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <FileText className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium">{statement.period} Statement</p>
                        <p className="text-sm text-natwest-gray">{statement.accountName}</p>
                        <p className="text-xs text-natwest-gray">{statement.dateRange}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredStatements.length > 2 && (
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" className="text-[#280071]">
                    View all statement results
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {showRecipients && filteredRecipients.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Recipients</CardTitle>
              <CardDescription>Search results in payment recipients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {displayedRecipients.map((recipient) => (
                  <div key={recipient.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <Building className="h-5 w-5 text-[#280071]" />
                      </div>
                      <div>
                        <p className="font-medium">{recipient.name}</p>
                        <p className="text-sm text-natwest-gray">{recipient.type}</p>
                        <div className="flex items-center text-xs text-natwest-gray">
                          <span>Account: {recipient.accountNumber}</span>
                          <span className="mx-1">•</span>
                          <span>Sort code: {recipient.sortCode}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" className="flex items-center">
                        Pay
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredRecipients.length > 2 && (
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" className="text-[#280071]">
                    View all recipient results
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {showAccounts && filteredAccounts.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Accounts</CardTitle>
              <CardDescription>Search results in accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {displayedAccounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <CreditCard className="h-5 w-5 text-[#280071]" />
                      </div>
                      <div>
                        <p className="font-medium">{account.name}</p>
                        <div className="flex items-center text-xs text-natwest-gray">
                          <span>Account: {account.number}</span>
                          <span className="mx-1">•</span>
                          <span>Sort code: {account.sortCode}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{formatCurrency(account.balance)}</p>
                      <Link href={`/accounts/${account.id}`}>
                        <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto">
                          View account
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredAccounts.length > 2 && (
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" className="text-[#280071]">
                    View all account results
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {totalResults === 0 && searchQuery && (
          <Card className="mb-6">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <Search className="h-12 w-12 text-natwest-gray mx-auto" />
              </div>
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-natwest-gray mb-4">
                We couldn't find any results matching "{searchQuery}". Please try a different search term.
              </p>
              <div className="flex flex-col space-y-2 max-w-md mx-auto">
                <p className="text-sm font-medium">Try searching for:</p>
                <Button variant="outline" size="sm" onClick={() => setSearchQuery("payment")}>
                  payment
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSearchQuery("statement")}>
                  statement
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSearchQuery("transfer")}>
                  transfer
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
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
