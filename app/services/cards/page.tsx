"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  CreditCard,
  Shield,
  Lock,
  Smartphone,
  Globe,
  AlertTriangle,
  Eye,
  EyeOff,
  ChevronRight,
  RefreshCw,
  PlusCircle,
  Settings,
  Clock,
  CheckCircle2,
  BellRing,
} from "lucide-react"

export default function CardServicesPage() {
  const [showCardNumber, setShowCardNumber] = useState(false)
  const [showCVV, setShowCVV] = useState(false)

  const cards = [
    {
      id: "card1",
      type: "Debit",
      name: "NatWest Debit Mastercard",
      number: "5355 2200 1234 5678",
      expiryDate: "12/28",
      cvv: "123",
      cardholderName: "MOLZEN LLC",
      status: "active",
      frozen: false,
      contactless: true,
      onlinePayments: true,
      internationalPayments: true,
      atmWithdrawals: true,
      dailyLimit: 25000,
      issueDate: "01/25",
      lastUsed: "20 Mar 2025 - London, UK",
      design: "Business",
    },
    {
      id: "card2",
      type: "Credit",
      name: "NatWest Business Credit Card",
      number: "4539 7912 3456 7890",
      expiryDate: "09/27",
      cvv: "456",
      cardholderName: "MOLZEN LLC",
      status: "active",
      frozen: false,
      contactless: true,
      onlinePayments: true,
      internationalPayments: true,
      atmWithdrawals: true,
      creditLimit: 50000,
      availableCredit: 42500,
      issueDate: "09/22",
      lastUsed: "18 Mar 2025 - Online Purchase",
      design: "Business Premium",
    },
  ]

  const recentCardTransactions = [
    {
      id: "ct1",
      description: "Amazon Business",
      date: "18 Mar 2025",
      amount: 245.99,
      type: "debit",
      category: "Office Supplies",
      cardId: "card1",
      location: "Online",
    },
    {
      id: "ct2",
      description: "Starbucks",
      date: "17 Mar 2025",
      amount: 15.75,
      type: "debit",
      category: "Food & Drink",
      cardId: "card1",
      location: "London, UK",
    },
    {
      id: "ct3",
      description: "Uber",
      date: "15 Mar 2025",
      amount: 32.5,
      type: "debit",
      category: "Transport",
      cardId: "card1",
      location: "London, UK",
    },
    {
      id: "ct4",
      description: "Microsoft 365",
      date: "10 Mar 2025",
      amount: 99.99,
      type: "debit",
      category: "Software",
      cardId: "card2",
      location: "Online",
    },
  ]

  const formatCardNumber = (number: string, hidden: boolean) => {
    if (hidden) {
      return `${number.slice(0, 4)} **** **** ${number.slice(-4)}`
    }
    return number
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
              <h1 className="text-2xl font-bold text-[#280071]">Card Services</h1>
              <p className="text-natwest-gray">Manage your business cards and settings</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-[#280071] hover:bg-[#280071]/90">
                <PlusCircle className="mr-2 h-4 w-4" />
                Order new card
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="cards" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="cards">Your Cards</TabsTrigger>
            <TabsTrigger value="transactions">Card Transactions</TabsTrigger>
            <TabsTrigger value="security">Security Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="cards">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cards.map((card) => (
                <Card key={card.id} className="overflow-hidden">
                  <CardHeader className="pb-2 bg-gradient-to-r from-[#280071]/5 to-transparent">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-lg">{card.name}</CardTitle>
                        <CardDescription>
                          {card.type} Card • {card.status === "active" ? "Active" : "Inactive"}
                        </CardDescription>
                      </div>
                      <div className="flex items-center">
                        {card.frozen ? (
                          <div className="flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-xs font-medium">
                            <Lock className="h-3 w-3 mr-1" />
                            Frozen
                          </div>
                        ) : (
                          <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Active
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative mt-2 mb-6 bg-gradient-to-r from-[#280071] to-[#6B0F1A] p-4 rounded-xl text-white overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-20">
                        {card.type === "Debit" ? (
                          <svg width="60" height="36" viewBox="0 0 60 36">
                            <path d="M16.4 0H43.5V26.5H16.4V0Z" fill="#FF5F00" />
                            <path
                              d="M17.4 13.2C17.4 9 19.3 5.2 22.4 2.6C20.1 0.9 17.3 0 14.3 0C6.4 0 0 5.9 0 13.2C0 20.5 6.4 26.5 14.3 26.5C17.3 26.5 20.1 25.5 22.4 23.9C19.3 21.3 17.4 17.5 17.4 13.2Z"
                              fill="#EB001B"
                            />
                            <path
                              d="M59.8 13.2C59.8 20.5 53.4 26.5 45.5 26.5C42.5 26.5 39.7 25.5 37.4 23.9C40.5 21.3 42.4 17.5 42.4 13.2C42.4 9 40.5 5.2 37.4 2.6C39.7 0.9 42.5 0 45.5 0C53.4 0 59.8 5.9 59.8 13.2Z"
                              fill="#F79E1B"
                            />
                          </svg>
                        ) : (
                          <svg width="60" height="36" viewBox="0 0 60 36">
                            <path d="M21.9 3.6H38.1V24.5H21.9V3.6Z" fill="#0066A1" />
                            <path
                              d="M22.8 14.1C22.8 9.6 24.9 5.6 28.2 3.6C26.2 2.1 23.7 1.3 21 1.3C13.7 1.3 7.8 7.1 7.8 14.1C7.8 21.1 13.7 26.9 21 26.9C23.7 26.9 26.2 26.1 28.2 24.6C24.9 22.6 22.8 18.6 22.8 14.1Z"
                              fill="#0066A1"
                            />
                            <path
                              d="M52.2 14.1C52.2 21.1 46.3 26.9 39 26.9C36.3 26.9 33.8 26.1 31.8 24.6C35.1 22.6 37.2 18.6 37.2 14.1C37.2 9.6 35.1 5.6 31.8 3.6C33.8 2.1 36.3 1.3 39 1.3C46.3 1.3 52.2 7.1 52.2 14.1Z"
                              fill="#0066A1"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col h-full justify-between">
                        <div className="mb-6">
                          <div className="text-xs opacity-80 mb-1">Card Number</div>
                          <div className="flex items-center">
                            <div className="font-mono text-lg tracking-wider">
                              {formatCardNumber(card.number, !showCardNumber)}
                            </div>
                            <button
                              onClick={() => setShowCardNumber(!showCardNumber)}
                              className="ml-2 text-white/70 hover:text-white"
                            >
                              {showCardNumber ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <div className="text-xs opacity-80 mb-1">Expiry Date</div>
                            <div className="font-mono">{card.expiryDate}</div>
                          </div>
                          <div>
                            <div className="text-xs opacity-80 mb-1">CVV</div>
                            <div className="flex items-center">
                              <div className="font-mono">{showCVV ? card.cvv : "***"}</div>
                              <button
                                onClick={() => setShowCVV(!showCVV)}
                                className="ml-2 text-white/70 hover:text-white"
                              >
                                {showCVV ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </div>
                          <div>
                            <div className="text-xs opacity-80 mb-1">Cardholder</div>
                            <div className="font-mono text-sm">{card.cardholderName}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-natwest-gray">Last used</p>
                        <p className="font-medium">{card.lastUsed}</p>
                      </div>
                      <div>
                        <p className="text-sm text-natwest-gray">Issue date</p>
                        <p className="font-medium">{card.issueDate}</p>
                      </div>
                      {card.type === "Credit" && (
                        <>
                          <div>
                            <p className="text-sm text-natwest-gray">Credit limit</p>
                            <p className="font-medium">£{card.creditLimit.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-natwest-gray">Available credit</p>
                            <p className="font-medium">£{card.availableCredit.toLocaleString()}</p>
                          </div>
                        </>
                      )}
                      {card.type === "Debit" && (
                        <>
                          <div>
                            <p className="text-sm text-natwest-gray">Daily limit</p>
                            <p className="font-medium">£{card.dailyLimit.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-natwest-gray">Card design</p>
                            <p className="font-medium">{card.design}</p>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <p className="font-medium mb-3">Card settings</p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Lock className="h-4 w-4 mr-2 text-[#280071]" />
                            <Label htmlFor={`freeze-${card.id}`}>Freeze card</Label>
                          </div>
                          <Switch id={`freeze-${card.id}`} checked={card.frozen} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Smartphone className="h-4 w-4 mr-2 text-[#280071]" />
                            <Label htmlFor={`contactless-${card.id}`}>Contactless payments</Label>
                          </div>
                          <Switch id={`contactless-${card.id}`} checked={card.contactless} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 mr-2 text-[#280071]" />
                            <Label htmlFor={`international-${card.id}`}>International payments</Label>
                          </div>
                          <Switch id={`international-${card.id}`} checked={card.internationalPayments} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <Button variant="outline" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Manage card
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Report lost or stolen
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <CardTitle className="text-lg">Recent Card Transactions</CardTitle>
                    <CardDescription>Last 30 days of card activity</CardDescription>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <div className="relative w-full md:w-64">
                      <Input placeholder="Search transactions" className="pl-8" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                    </div>
                    <Button variant="outline" size="sm" className="ml-2">
                      <RefreshCw className="h-4 w-4" />
                      <span className="sr-only md:not-sr-only md:ml-2">Refresh</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCardTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center">
                        <div className="mr-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-[#280071]" />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-natwest-gray">
                            {transaction.date} • {transaction.location}
                          </p>
                          <p className="text-xs text-natwest-gray">
                            {cards.find((card) => card.id === transaction.cardId)?.name} ••••{" "}
                            {cards.find((card) => card.id === transaction.cardId)?.number.slice(-4)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-600">-£{transaction.amount.toFixed(2)}</p>
                        <p className="text-xs text-natwest-gray">{transaction.category}</p>
                        <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto">
                          View details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="text-[#280071]">
                    View all card transactions
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Card Security Settings</CardTitle>
                  <CardDescription>Manage your card security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-[#280071]" />
                      <Label htmlFor="transaction-alerts">Transaction alerts</Label>
                    </div>
                    <Switch id="transaction-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-[#280071]" />
                      <Label htmlFor="international-transactions">International transactions</Label>
                    </div>
                    <Switch id="international-transactions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Lock className="h-4 w-4 mr-2 text-[#280071]" />
                      <Label htmlFor="online-purchases">Online purchases</Label>
                    </div>
                    <Switch id="online-purchases" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Smartphone className="h-4 w-4 mr-2 text-[#280071]" />
                      <Label htmlFor="contactless-payments">Contactless payments</Label>
                    </div>
                    <Switch id="contactless-payments" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BellRing className="h-4 w-4 mr-2 text-[#280071]" />
                      <Label htmlFor="push-notifications">Push notifications</Label>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                  </div>

                  <div className="pt-4 border-t">
                    <p className="font-medium mb-3">Transaction limits</p>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="daily-limit" className="text-sm text-natwest-gray">
                          Daily transaction limit
                        </Label>
                        <div className="flex items-center mt-1">
                          <span className="bg-gray-100 px-2 py-1 rounded-l-md border border-r-0">£</span>
                          <Input id="daily-limit" defaultValue="25000" className="rounded-l-none" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="online-limit" className="text-sm text-natwest-gray">
                          Online transaction limit
                        </Label>
                        <div className="flex items-center mt-1">
                          <span className="bg-gray-100 px-2 py-1 rounded-l-md border border-r-0">£</span>
                          <Input id="online-limit" defaultValue="10000" className="rounded-l-none" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="atm-limit" className="text-sm text-natwest-gray">
                          ATM withdrawal limit
                        </Label>
                        <div className="flex items-center mt-1">
                          <span className="bg-gray-100 px-2 py-1 rounded-l-md border border-r-0">£</span>
                          <Input id="atm-limit" defaultValue="5000" className="rounded-l-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button className="w-full bg-[#280071] hover:bg-[#280071]/90">Save security settings</Button>
                </CardFooter>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Fraud Protection</CardTitle>
                    <CardDescription>Advanced security features for your cards</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-[#280071] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">24/7 Fraud Monitoring</p>
                        <p className="text-sm text-natwest-gray">
                          Our systems continuously monitor your card for suspicious activity.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 text-[#280071] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Instant Card Freeze</p>
                        <p className="text-sm text-natwest-gray">
                          Temporarily freeze your card if you suspect any unauthorized use.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-[#280071] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Fraud Alerts</p>
                        <p className="text-sm text-natwest-gray">
                          Receive instant notifications for suspicious transactions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-[#280071] mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Geographic Controls</p>
                        <p className="text-sm text-natwest-gray">
                          Restrict card usage to specific countries or regions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">
                      Learn more about fraud protection
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Security Activity</CardTitle>
                    <CardDescription>Recent security events for your cards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Clock className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Security check completed</p>
                          <p className="text-sm text-natwest-gray">20 Mar 2025 - 10:15 AM</p>
                          <p className="text-sm">Routine security verification for your Debit Mastercard.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">International usage enabled</p>
                          <p className="text-sm text-natwest-gray">15 Mar 2025 - 09:30 AM</p>
                          <p className="text-sm">International transactions enabled for your Business Credit Card.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                          <Shield className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-medium">Transaction limit updated</p>
                          <p className="text-sm text-natwest-gray">10 Mar 2025 - 02:45 PM</p>
                          <p className="text-sm">Daily transaction limit increased to £25,000.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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
