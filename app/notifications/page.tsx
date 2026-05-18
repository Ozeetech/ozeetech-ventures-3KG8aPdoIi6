"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Bell,
  Clock,
  CreditCard,
  FileText,
  Mail,
  Shield,
  Smartphone,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

export default function NotificationsPage() {
  const [showAllNotifications, setShowAllNotifications] = useState(false)

  const notifications = [
    {
      id: "n1",
      title: "Wire Transfer in Progress",
      message: "Your wire transfer of $48,000,000 to Complete Payment Solution is being processed.",
      date: "05 Mar 2025 - 09:15 AM",
      type: "transaction",
      status: "pending",
      read: false,
    },
    {
      id: "n2",
      title: "New Statement Available",
      message: "Your February 2025 statement is now available to view and download.",
      date: "01 Mar 2025 - 12:00 PM",
      type: "statement",
      status: "info",
      read: false,
    },
    {
      id: "n3",
      title: "Payment Received",
      message: "You received a payment of $8,750 from Acme Corp.",
      date: "01 Mar 2025 - 09:30 AM",
      type: "transaction",
      status: "success",
      read: true,
    },
    {
      id: "n4",
      title: "Security Alert",
      message: "A new device was used to access your account. If this wasn't you, please contact us immediately.",
      date: "28 Feb 2025 - 09:45 AM",
      type: "security",
      status: "warning",
      read: true,
    },
    {
      id: "n5",
      title: "Card Transaction",
      message: "Your business debit card was used for a purchase of $199.99 at Software Subscription.",
      date: "25 Feb 2025 - 03:15 PM",
      type: "card",
      status: "info",
      read: true,
    },
    {
      id: "n6",
      title: "Scheduled Payment Reminder",
      message: "Your scheduled payment of $42,500 for Monthly Payroll is due on 31 Mar 2025.",
      date: "25 Feb 2025 - 10:00 AM",
      type: "payment",
      status: "info",
      read: true,
    },
    {
      id: "n7",
      title: "Account Alert",
      message: "Your account balance is below your set threshold of $100,000,000. Current balance: $87,459,632.48.",
      date: "20 Feb 2025 - 08:30 AM",
      type: "account",
      status: "warning",
      read: true,
    },
    {
      id: "n8",
      title: "New Feature Available",
      message: "We've added new features to your online banking. Check them out in the What's New section.",
      date: "15 Feb 2025 - 11:45 AM",
      type: "system",
      status: "info",
      read: true,
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length
  const displayedNotifications = showAllNotifications ? notifications : notifications.slice(0, 5)

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
              <h1 className="text-2xl font-bold text-[#280071]">Notifications</h1>
              <p className="text-natwest-gray">
                You have {unreadCount} unread {unreadCount === 1 ? "notification" : "notifications"}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                Mark all as read
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="statements">Statements</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">All Notifications</CardTitle>
                <CardDescription>View all your notifications in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {displayedNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start p-4 border-b last:border-0 ${
                        !notification.read ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="mr-4 flex-shrink-0 mt-0.5">
                        {notification.type === "transaction" && notification.status === "pending" ? (
                          <Clock className="h-5 w-5 text-amber-500" />
                        ) : notification.type === "transaction" && notification.status === "success" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : notification.type === "security" ? (
                          <Shield className="h-5 w-5 text-red-500" />
                        ) : notification.type === "statement" ? (
                          <FileText className="h-5 w-5 text-blue-500" />
                        ) : notification.type === "card" ? (
                          <CreditCard className="h-5 w-5 text-purple-500" />
                        ) : notification.type === "payment" ? (
                          <Clock className="h-5 w-5 text-blue-500" />
                        ) : notification.type === "account" ? (
                          <AlertCircle className="h-5 w-5 text-amber-500" />
                        ) : (
                          <Bell className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{notification.title}</p>
                          {!notification.read && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-natwest-gray mt-1">{notification.message}</p>
                        <p className="text-xs text-natwest-gray mt-2">{notification.date}</p>
                        <div className="mt-2 flex space-x-2">
                          <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                            View details
                          </Button>
                          {!notification.read && (
                            <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                              Mark as read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {notifications.length > 5 && (
                  <div className="mt-6 text-center">
                    <Button
                      variant="outline"
                      className="text-[#280071]"
                      onClick={() => setShowAllNotifications(!showAllNotifications)}
                    >
                      {showAllNotifications ? "Show fewer notifications" : "Load more notifications"}
                      {showAllNotifications ? (
                        <ChevronUp className="ml-2 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Transaction Notifications</CardTitle>
                <CardDescription>Notifications related to your account transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "transaction")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start p-4 border-b last:border-0 ${
                          !notification.read ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="mr-4 flex-shrink-0 mt-0.5">
                          {notification.status === "pending" ? (
                            <Clock className="h-5 w-5 text-amber-500" />
                          ) : (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="font-medium">{notification.title}</p>
                            {!notification.read && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-natwest-gray mt-1">{notification.message}</p>
                          <p className="text-xs text-natwest-gray mt-2">{notification.date}</p>
                          <div className="mt-2 flex space-x-2">
                            <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                              View details
                            </Button>
                            {!notification.read && (
                              <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                                Mark as read
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Security Notifications</CardTitle>
                <CardDescription>Important security alerts and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "security")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start p-4 border-b last:border-0 ${
                          !notification.read ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="mr-4 flex-shrink-0 mt-0.5">
                          <Shield className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="font-medium">{notification.title}</p>
                            {!notification.read && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-natwest-gray mt-1">{notification.message}</p>
                          <p className="text-xs text-natwest-gray mt-2">{notification.date}</p>
                          <div className="mt-2 flex space-x-2">
                            <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                              View details
                            </Button>
                            {!notification.read && (
                              <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                                Mark as read
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statements">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statement Notifications</CardTitle>
                <CardDescription>Notifications about your account statements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "statement")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start p-4 border-b last:border-0 ${
                          !notification.read ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="mr-4 flex-shrink-0 mt-0.5">
                          <FileText className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="font-medium">{notification.title}</p>
                            {!notification.read && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-natwest-gray mt-1">{notification.message}</p>
                          <p className="text-xs text-natwest-gray mt-2">{notification.date}</p>
                          <div className="mt-2 flex space-x-2">
                            <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                              View statement
                            </Button>
                            <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                              Download
                            </Button>
                            {!notification.read && (
                              <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                                Mark as read
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Notifications</CardTitle>
                <CardDescription>Updates about our online banking system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications
                    .filter((n) => n.type === "system")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start p-4 border-b last:border-0 ${
                          !notification.read ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="mr-4 flex-shrink-0 mt-0.5">
                          <Bell className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="font-medium">{notification.title}</p>
                            {!notification.read && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                New
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-natwest-gray mt-1">{notification.message}</p>
                          <p className="text-xs text-natwest-gray mt-2">{notification.date}</p>
                          <div className="mt-2 flex space-x-2">
                            <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                              Learn more
                            </Button>
                            {!notification.read && (
                              <Button variant="ghost" size="sm" className="text-[#280071] p-0 h-auto text-xs">
                                Mark as read
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Notification Preferences</CardTitle>
            <CardDescription>Manage how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">Transaction Alerts</p>
                  <p className="text-sm text-natwest-gray">Notifications about account activity</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <input
                      id="transactions-email"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="transactions-email" className="ml-2 text-sm">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="transactions-sms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="transactions-sms" className="ml-2 text-sm">
                      SMS
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="transactions-push"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="transactions-push" className="ml-2 text-sm">
                      Push
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">Security Alerts</p>
                  <p className="text-sm text-natwest-gray">Notifications about security events</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <input
                      id="security-email"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="security-email" className="ml-2 text-sm">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="security-sms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="security-sms" className="ml-2 text-sm">
                      SMS
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="security-push"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="security-push" className="ml-2 text-sm">
                      Push
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">Statement Notifications</p>
                  <p className="text-sm text-natwest-gray">Notifications about new statements</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <input
                      id="statements-email"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="statements-email" className="ml-2 text-sm">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="statements-sms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                    />
                    <label htmlFor="statements-sms" className="ml-2 text-sm">
                      SMS
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="statements-push"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="statements-push" className="ml-2 text-sm">
                      Push
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">System Updates</p>
                  <p className="text-sm text-natwest-gray">Notifications about system changes</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <input
                      id="system-email"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="system-email" className="ml-2 text-sm">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="system-sms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                    />
                    <label htmlFor="system-sms" className="ml-2 text-sm">
                      SMS
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="system-push"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#D81E05] focus:ring-[#D81E05]"
                      defaultChecked
                    />
                    <label htmlFor="system-push" className="ml-2 text-sm">
                      Push
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-natwest-gray">
                <p>Contact details for notifications:</p>
                <div className="flex items-center mt-1">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>alex.molzen@molzenllc.com</span>
                </div>
                <div className="flex items-center mt-1">
                  <Smartphone className="h-4 w-4 mr-2" />
                  <span>+1 (917) 555-1234</span>
                </div>
              </div>
              <Button>Save preferences</Button>
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

