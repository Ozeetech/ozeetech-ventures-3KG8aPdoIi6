"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Bell, ChevronDown, HelpCircle, LogOut, Menu, Search, Settings, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    router.push("/logout")
  }

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Accounts", href: "/accounts/business-current" },
    { name: "Payments", href: "/payments" },
    { name: "Transfers", href: "/transfers" },
    { name: "Services", href: "/services" },
  ]

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nat%20logo-3Z9fH1CErSbilLHRBxGVcZ9B2X8laT.jpeg"
                alt="NatWest Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="ml-2 text-lg font-semibold text-[#280071] hidden md:inline-block">Online Banking</span>
            </Link>

            <nav className="hidden md:flex ml-10 space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href || pathname.startsWith(`${item.href.split("/").slice(0, 2).join("/")}`)
                      ? "text-[#D81E05]"
                      : "text-gray-700 hover:text-[#D81E05]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-gray-700" />
              </Button>

              <Link href="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-gray-700" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </Button>
              </Link>

              <Button variant="ghost" size="icon">
                <HelpCircle className="h-5 w-5 text-gray-700" />
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 ml-2">
                  <div className="w-8 h-8 bg-[#280071]/10 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-[#280071]" />
                  </div>
                  <span className="hidden md:inline-block text-sm font-medium">Molzen LLC</span>
                  <ChevronDown className="h-4 w-4 text-gray-700" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>NatWest/onlineaccount/login</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/notifications" className="cursor-pointer">
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services" className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4">
                    <Link href="/dashboard" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nat%20logo-3Z9fH1CErSbilLHRBxGVcZ9B2X8laT.jpeg"
                        alt="NatWest Logo"
                        width={100}
                        height={33}
                        className="h-8 w-auto"
                        priority
                      />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex flex-col space-y-3 mt-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-4 py-3 rounded-md ${
                          pathname === item.href || pathname.startsWith(`${item.href.split("/").slice(0, 2).join("/")}`)
                            ? "bg-[#280071]/10 text-[#D81E05] font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 border-t pt-6">
                    <div className="space-y-3">
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <User className="mr-3 h-5 w-5" />
                        <span>Profile</span>
                      </Link>

                      <Link
                        href="/notifications"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Bell className="mr-3 h-5 w-5" />
                        <span>Notifications</span>
                      </Link>

                      <Link
                        href="/services"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Settings className="mr-3 h-5 w-5" />
                        <span>Settings</span>
                      </Link>

                      <Link
                        href="/help"
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <HelpCircle className="mr-3 h-5 w-5" />
                        <span>Help & Support</span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-auto border-t pt-4">
                    <Button variant="destructive" className="w-full" onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </Button>

                    <p className="text-xs text-center text-gray-500 mt-4">NatWest/onlineaccount/login</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
