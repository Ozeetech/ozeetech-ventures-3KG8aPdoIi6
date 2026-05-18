"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  FileText,
  Shield,
  Users,
  Wallet,
  Building,
  HelpCircle,
  Settings,
  ChevronRight,
  Phone,
  Mail,
  MessageSquare,
  Globe,
  Landmark,
  BarChart,
  Lock,
} from "lucide-react"

export default function ServicesPage() {
  const bankingServices = [
    {
      id: "bs1",
      title: "Cards",
      description: "Manage your debit and credit cards",
      icon: CreditCard,
      link: "/services/cards",
    },
    {
      id: "bs2",
      title: "Statements & Documents",
      description: "View and download your statements",
      icon: FileText,
      link: "/services/statements",
    },
    {
      id: "bs3",
      title: "Security Center",
      description: "Manage your security settings",
      icon: Shield,
      link: "/services/security",
    },
    {
      id: "bs4",
      title: "Account Management",
      description: "Manage your accounts and settings",
      icon: Settings,
      link: "/services/account-management",
    },
    {
      id: "bs5",
      title: "User Access",
      description: "Manage user access and permissions",
      icon: Users,
      link: "/services/user-access",
    },
    {
      id: "bs6",
      title: "International Services",
      description: "Access international banking services",
      icon: Globe,
      link: "/services/international",
    },
  ]

  const businessServices = [
    {
      id: "bus1",
      title: "Business Loans",
      description: "Apply for business loans and financing",
      icon: Landmark,
      link: "/services/business-loans",
    },
    {
      id: "bus2",
      title: "Merchant Services",
      description: "Accept payments from your customers",
      icon: Wallet,
      link: "/services/merchant-services",
    },
    {
      id: "bus3",
      title: "Business Insurance",
      description: "Protect your business with insurance",
      icon: Shield,
      link: "/services/business-insurance",
    },
    {
      id: "bus4",
      title: "Financial Analytics",
      description: "Gain insights into your business finances",
      icon: BarChart,
      link: "/services/financial-analytics",
    },
    {
      id: "bus5",
      title: "Corporate Banking",
      description: "Access corporate banking services",
      icon: Building,
      link: "/services/corporate-banking",
    },
    {
      id: "bus6",
      title: "Trade Finance",
      description: "Support for international trade",
      icon: Globe,
      link: "/services/trade-finance",
    },
  ]

  const supportOptions = [
    {
      id: "so1",
      title: "Contact Us",
      description: "Get in touch with our support team",
      icon: Phone,
      details: "Call us at 0345 307 0900, available Monday to Friday, 8am to 8pm. Saturday, 9am to 3pm.",
    },
    {
      id: "so2",
      title: "Secure Messaging",
      description: "Send us a secure message",
      icon: Lock,
      details: "Send a secure message through our online banking platform.",
    },
    {
      id: "so3",
      title: "Email Support",
      description: "Email our customer service team",
      icon: Mail,
      details: "Email us at business.support@natwest.com for non-urgent inquiries.",
    },
    {
      id: "so4",
      title: "Live Chat",
      description: "Chat with a representative",
      icon: MessageSquare,
      details: "Chat with our support team during business hours.",
    },
  ]

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
              <h1 className="text-2xl font-bold text-[#280071]">Services</h1>
              <p className="text-natwest-gray">Access banking and business services</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" size="sm" className="flex items-center">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help & Support
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="banking" className="mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md mb-6">
            <TabsTrigger value="banking">Banking Services</TabsTrigger>
            <TabsTrigger value="business">Business Services</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="banking">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bankingServices.map((service) => (
                <Card key={service.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="w-10 h-10 bg-[#280071]/10 rounded-full flex items-center justify-center">
                          <service.icon className="h-5 w-5 text-[#280071]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{service.title}</h3>
                        <p className="text-sm text-natwest-gray mt-1">{service.description}</p>
                        <Link href={service.link}>
                          <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-[#280071]">
                            Learn more
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {businessServices.map((service) => (
                <Card key={service.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="w-10 h-10 bg-[#280071]/10 rounded-full flex items-center justify-center">
                          <service.icon className="h-5 w-5 text-[#280071]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{service.title}</h3>
                        <p className="text-sm text-natwest-gray mt-1">{service.description}</p>
                        <Link href={service.link}>
                          <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-[#280071]">
                            Learn more
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="support">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact & Support</CardTitle>
                <CardDescription>Get help with your banking needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {supportOptions.map((option) => (
                    <div key={option.id} className="flex items-start p-4 border rounded-md">
                      <div className="mr-4 mt-1">
                        <div className="w-10 h-10 bg-[#280071]/10 rounded-full flex items-center justify-center">
                          <option.icon className="h-5 w-5 text-[#280071]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">{option.title}</h3>
                        <p className="text-sm text-natwest-gray mt-1">{option.description}</p>
                        <p className="text-sm mt-2">{option.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-md">
                  <div className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800 font-medium">Need urgent help?</p>
                      <p className="text-sm text-blue-600 mt-1">
                        If you need urgent assistance or suspect fraud on your account, please call our 24/7 emergency
                        line at <span className="font-medium">0800 161 5149</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h3 className="font-medium">How do I report a lost or stolen card?</h3>
                      <p className="text-sm text-natwest-gray mt-1">
                        You can report a lost or stolen card by calling our 24/7 emergency line at 0800 161 5149 or by
                        using the "Manage Cards" feature in online banking.
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="font-medium">How do I change my online banking password?</h3>
                      <p className="text-sm text-natwest-gray mt-1">
                        You can change your password by going to "Security Center" under Services, then selecting
                        "Change Password".
                      </p>
                    </div>
                    <div className="border-b pb-4">
                      <h3 className="font-medium">How do I set up a new payment?</h3>
                      <p className="text-sm text-natwest-gray mt-1">
                        You can set up a new payment by going to the "Payments" section and selecting "New Payment".
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">How do I apply for a business loan?</h3>
                      <p className="text-sm text-natwest-gray mt-1">
                        You can apply for a business loan by going to "Business Services" and selecting "Business
                        Loans".
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      View all FAQs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
