"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Search, ShoppingCart, User, Phone, MessageCircle, Smartphone, Laptop, Tablet, Headphones, Camera, Gamepad2, Watch, Cable, Code } from 'lucide-react'

const productCategories = [
  {
    title: "Smartphones",
    href: "/products/smartphones",
    icon: Smartphone,
    description: "Latest iPhone, Samsung, Google Pixel & more",
    subcategories: [
      { name: "iPhone", href: "/products/smartphones/brands/apple" },
      { name: "Samsung Galaxy", href: "/products/smartphones/brands/samsung" },
      { name: "Google Pixel", href: "/products/smartphones/google-pixel" },
      { name: "OnePlus", href: "/products/smartphones/brands/oneplus" },
    ],
  },
  {
    title: "Laptops",
    href: "/products/laptops",
    icon: Laptop,
    description: "MacBooks, Windows laptops & gaming rigs",
    subcategories: [
      { name: "MacBook", href: "/products/laptops/macbook" },
      { name: "Gaming Laptops", href: "/products/laptops/gaming" },
      { name: "Business Laptops", href: "/products/laptops/business" },
      { name: "Ultrabooks", href: "/products/laptops/ultrabooks" },
    ],
  },
  {
    title: "Tablets",
    href: "/products/tablets",
    icon: Tablet,
    description: "iPad Pro, iPad Air, Samsung Galaxy Tab",
    subcategories: [
      { name: "iPad Pro", href: "/products/tablets/ipad-pro" },
      { name: "iPad Air", href: "/products/tablets/ipad-air" },
      { name: "Samsung Galaxy Tab", href: "/products/tablets/samsung" },
      { name: "Surface Pro", href: "/products/tablets/surface" },
    ],
  },
  {
    title: "Audio",
    href: "/products/audio",
    icon: Headphones,
    description: "AirPods, headphones, speakers & sound systems",
    subcategories: [
      { name: "AirPods", href: "/products/audio/airpods" },
      { name: "Headphones", href: "/products/audio/headphones" },
      { name: "Speakers", href: "/products/audio/speakers" },
      { name: "Sound Systems", href: "/products/audio/sound-systems" },
    ],
  },
  {
    title: "Cameras",
    href: "/products/cameras",
    icon: Camera,
    description: "DSLR, mirrorless, action cameras & lenses",
    subcategories: [
      { name: "DSLR Cameras", href: "/products/cameras/dslr" },
      { name: "Mirrorless", href: "/products/cameras/mirrorless" },
      { name: "Action Cameras", href: "/products/cameras/action" },
      { name: "Lenses", href: "/products/cameras/lenses" },
    ],
  },
  {
    title: "Gaming",
    href: "/products/gaming",
    icon: Gamepad2,
    description: "Consoles, gaming laptops, accessories",
    subcategories: [
      { name: "PlayStation", href: "/products/gaming/playstation" },
      { name: "Xbox", href: "/products/gaming/xbox" },
      { name: "Nintendo", href: "/products/gaming/nintendo" },
      { name: "Gaming Accessories", href: "/products/gaming/accessories" },
    ],
  },
  {
    title: "Wearables",
    href: "/products/wearables",
    icon: Watch,
    description: "Apple Watch, Samsung Galaxy Watch, fitness trackers",
    subcategories: [
      { name: "Apple Watch", href: "/products/wearables/apple-watch" },
      { name: "Samsung Galaxy Watch", href: "/products/wearables/samsung" },
      { name: "Fitness Trackers", href: "/products/wearables/fitness" },
      { name: "Smart Rings", href: "/products/wearables/rings" },
    ],
  },
  {
    title: "Accessories",
    href: "/products/accessories",
    icon: Cable,
    description: "Cases, chargers, cables & tech accessories",
    subcategories: [
      { name: "Phone Cases", href: "/products/accessories/cases" },
      { name: "Chargers", href: "/products/accessories/original-chargers" },
      { name: "Cables", href: "/products/accessories/cables" },
      { name: "Power Banks", href: "/products/accessories/power-banks" },
    ],
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top Bar */}
      <div className="bg-red-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="truncate">+234 816 608 4870</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span className="truncate">WhatsApp: +234 906 917 8853</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="hidden md:inline text-xs">📍 Computer Village Lagos & Ayobo Lagos</span>
              <span className="font-semibold text-xs sm:text-sm">A BRAND YOU CAN TRUST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Image
              src="/images/ozeetech-official-logo.jpg"
              alt="Ozee Tech Ventures"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
            />
            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-bold text-black leading-tight">OZEE TECH</div>
              <div className="text-xs sm:text-sm font-bold text-red-500 leading-tight">VENTURES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xs sm:text-sm">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] sm:w-[800px] grid-cols-1 sm:grid-cols-2 gap-3 p-4 sm:p-6">
                    {productCategories.map((category) => (
                      <div key={category.title} className="space-y-3">
                        <Link
                          href={category.href}
                          className="flex items-center space-x-3 rounded-lg p-2 sm:p-3 hover:bg-gray-50 transition-colors"
                        >
                          <category.icon className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 flex-shrink-0" />
                          <div className="min-w-0">
                            <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{category.title}</div>
                            <div className="text-xs sm:text-sm text-gray-600 truncate">{category.description}</div>
                          </div>
                        </Link>
                        <div className="ml-8 sm:ml-11 space-y-1">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block text-xs sm:text-sm text-gray-600 hover:text-red-500 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="https://v0-rwandan-media-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    <Code className="h-4 w-4 mr-1" />
                    Services
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/deals" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Deals
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex h-9 w-9 sm:h-10 sm:w-10 hover:bg-accent" title="Search">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 hover:bg-accent" title="Shopping Cart" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex h-9 w-9 sm:h-10 sm:w-10 hover:bg-accent" title="Account" asChild>
              <Link href="/account">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 h-auto rounded-lg" asChild>
              <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 sm:h-10 sm:w-10">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-base sm:text-lg font-semibold" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>

                  <div className="space-y-4">
                    <div className="text-base sm:text-lg font-semibold">Products</div>
                    {productCategories.map((category) => (
                      <div key={category.title} className="ml-4 space-y-2">
                        <Link
                          href={category.href}
                          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-red-500"
                          onClick={() => setIsOpen(false)}
                        >
                          <category.icon className="h-5 w-5" />
                          <span>{category.title}</span>
                        </Link>
                        <div className="ml-7 space-y-1">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block text-xs sm:text-sm text-gray-600 hover:text-red-500"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="https://v0-rwandan-media-ebon.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-semibold flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Code className="h-5 w-5" />
                    <span>Web Development</span>
                  </a>

                  <Link href="/deals" className="text-base sm:text-lg font-semibold" onClick={() => setIsOpen(false)}>
                    Deals
                  </Link>
                  <Link href="/about" className="text-base sm:text-lg font-semibold" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <Link href="/contact" className="text-base sm:text-lg font-semibold" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>

                  <div className="pt-4 border-t space-y-2">
                    <Button asChild className="w-full">
                      <Link href="/cart" onClick={() => setIsOpen(false)}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Shopping Cart
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/account" onClick={() => setIsOpen(false)}>
                        <User className="mr-2 h-4 w-4" />
                        My Account
                      </Link>
                    </Button>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 sm:py-3 h-auto rounded-lg" asChild>
                      <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </a>
                    </Button>
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
