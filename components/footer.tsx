import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Shield,
  Truck,
  HeadphonesIcon,
  Award,
  Smartphone,
  Laptop,
  Tablet,
  Headphones,
  Camera,
  Gamepad2,
  Watch,
  Cable,
} from "lucide-react"

const productCategories = [
  { name: "Smartphones", href: "/products/smartphones", icon: Smartphone },
  { name: "Laptops", href: "/products/laptops", icon: Laptop },
  { name: "Tablets", href: "/products/tablets", icon: Tablet },
  { name: "Audio", href: "/products/audio", icon: Headphones },
  { name: "Cameras", href: "/products/cameras", icon: Camera },
  { name: "Gaming", href: "/products/gaming", icon: Gamepad2 },
  { name: "Wearables", href: "/products/wearables", icon: Watch },
  { name: "Accessories", href: "/products/accessories", icon: Cable },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Deals & Offers", href: "/deals" },
  { name: "Track Order", href: "/track-order" },
  { name: "Return Policy", href: "/returns" },
  { name: "Warranty", href: "/warranty" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

const storeLocations = [
  {
    name: "Computer Village Store",
    address: "No 23 Elshadai Plaza Olayeni, Computer Village Ikeja, Lagos State",
    phone: "+234 816 608 4870",
    primary: true,
  },
  {
    name: "Ayobo Branch",
    address: "28/29 Camp Davies Road, Ayobo, Lagos",
    phone: "+234 816 608 4870",
    primary: false,
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/ozeetech-official-logo.jpg"
                alt="Ozee Tech Ventures"
                width={60}
                height={60}
                className="w-15 h-15 rounded-xl"
              />
              <div>
                <div className="text-2xl font-bold">OZEE TECH</div>
                <div className="text-lg font-bold text-red-400">VENTURES</div>
                <div className="text-sm font-bold text-red-400">A BRAND YOU CAN TRUST</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nigeria's premier technology retailer since 2009. We provide authentic tech products with same-day
              delivery, professional support, and unmatched customer service.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Product Categories</h3>
            <div className="space-y-3">
              {productCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <category.icon className="h-4 w-4 text-red-400" />
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Store Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {storeLocations.map((location, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-red-400">{location.name}</h4>
                  <div className="flex items-start space-x-2 text-gray-300">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                </div>
              ))}

              <div className="pt-4 space-y-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <MessageCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm">WhatsApp: +234 906 917 8853</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">ozeetechgadgets@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Instagram className="h-4 w-4 text-pink-400" />
                  <span className="text-sm">@ozee tech groups</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center space-x-2 text-gray-300 mb-2">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm font-semibold">Business Hours</span>
                </div>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 12:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Tech Deals</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and tech tips.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">100% Original</h4>
              <p className="text-sm text-gray-400">Authentic products with warranty</p>
            </div>
            <div className="text-center">
              <Truck className="h-12 w-12 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Same Day Delivery</h4>
              <p className="text-sm text-gray-400">Fast delivery in Lagos & Abuja</p>
            </div>
            <div className="text-center">
              <HeadphonesIcon className="h-12 w-12 text-orange-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">30-Day Support</h4>
              <p className="text-sm text-gray-400">Free technical assistance</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">15+ Years</h4>
              <p className="text-sm text-gray-400">Trusted since 2009</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Ozee Tech Ventures. All rights reserved. | A Brand You Can Trust
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Serving Nigeria with excellence since 2009 | Computer Village Lagos & Ayobo Lagos
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <Button
                variant="outline"
                size="sm"
                className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
                asChild
              >
                <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <div className="text-xs text-gray-500">
                <p>📱 Confirm prices via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
