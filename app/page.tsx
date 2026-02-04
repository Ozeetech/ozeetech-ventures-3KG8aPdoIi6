import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Truck, HeadphonesIcon, Users, Award, MapPin, Phone, MessageCircle, Clock, CheckCircle, Zap, Heart, ShoppingCart, ArrowRight, Calendar, Smartphone, Laptop, Tablet, Headphones, Camera, Gamepad2, Watch, Cable, Mail, Instagram, Wrench, RefreshCw, Layout, Server, Globe, Code, GitBranch, Database, Cloud } from 'lucide-react'

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 1TB Natural Titanium",
      price: 2350000,
      originalPrice: 2450000,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 1247,
      badge: "Pro Max",
      href: "/products/smartphones/iphone-15-pro-max",
      specs: ["6.7-inch Super Retina XDR", "A17 Pro chip", "48MP Pro camera system", "1TB storage"],
    },
    {
      id: 2,
      name: "MacBook Pro 16-inch M3 Max 1TB Space Black",
      price: 3250000,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 567,
      badge: "Pro",
      href: "/products/laptops/macbook-pro-16-m3-max",
      specs: ["16-inch Liquid Retina XDR", "M3 Max chip", "36GB unified memory", "1TB SSD"],
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra 1TB Titanium Black",
      price: 2150000,
      originalPrice: 2250000,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 743,
      badge: "Ultra",
      href: "/products/smartphones/samsung-s24-ultra",
      specs: ["6.8-inch Dynamic AMOLED 2X", "Snapdragon 8 Gen 3", "200MP camera", "S Pen included"],
    },
    {
      id: 4,
      name: "iPad Pro 12.9-inch M4 1TB Space Black",
      price: 2350000,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
      rating: 4.9,
      reviews: 567,
      badge: "Pro",
      href: "/products/tablets/ipad-pro-12-9-m4",
      specs: ["12.9-inch Liquid Retina XDR", "M4 chip", "Apple Pencil Pro support", "1TB storage"],
    },
    {
      id: 5,
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 450000,
      originalPrice: 520000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
      rating: 4.8,
      reviews: 892,
      badge: "Bestseller",
      href: "/products/audio/sony-wh-1000xm5",
      specs: ["30-hour battery life", "Industry-leading noise canceling", "Multipoint connection", "Quick charge"],
    },
    {
      id: 6,
      name: "Apple Watch Ultra 2 49mm Titanium",
      price: 1250000,
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center",
      rating: 4.7,
      reviews: 445,
      badge: "Ultra",
      href: "/products/wearables/apple-watch-ultra-2",
      specs: ["49mm titanium case", "S9 SiP", "Double Tap gesture", "36-hour battery life"],
    },
  ]

  const categories = [
    {
      name: "Smartphones",
      icon: Smartphone,
      count: "200+",
      href: "/products/smartphones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop&crop=center",
      description: "Latest iPhone, Samsung, Google Pixel & more",
    },
    {
      name: "Laptops",
      icon: Laptop,
      count: "150+",
      href: "/products/laptops",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop&crop=center",
      description: "MacBooks, Windows laptops & gaming rigs",
    },
    {
      name: "Tablets",
      icon: Tablet,
      count: "80+",
      href: "/products/tablets",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop&crop=center",
      description: "iPad Pro, iPad Air, Samsung Galaxy Tab",
    },
    {
      name: "Audio",
      icon: Headphones,
      count: "120+",
      href: "/products/audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop&crop=center",
      description: "AirPods, headphones, speakers & sound systems",
    },
    {
      name: "Cameras",
      icon: Camera,
      count: "45+",
      href: "/products/cameras",
      image: "https://images.unsplash.com/photo-1502920917128-fa541adb3fc8?w=300&h=200&fit=crop&crop=center",
      description: "DSLR, mirrorless, action cameras & lenses",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      count: "90+",
      href: "/products/gaming",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop&crop=center",
      description: "Consoles, gaming laptops, accessories",
    },
    {
      name: "Wearables",
      icon: Watch,
      count: "60+",
      href: "/products/wearables",
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop&crop=center",
      description: "Apple Watch, Samsung Galaxy Watch, fitness trackers",
    },
    {
      name: "Accessories",
      icon: Cable,
      count: "300+",
      href: "/products/accessories",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop&crop=center",
      description: "Cases, chargers, cables & tech accessories",
    },
  ]

  const services = [
    {
      name: "SALES",
      icon: ShoppingCart,
      description: "Premium tech products with authentic warranty",
      color: "bg-blue-500",
    },
    {
      name: "SWAP",
      icon: RefreshCw,
      description: "Trade-in your old devices for new ones",
      color: "bg-green-500",
    },
    {
      name: "REPAIRS",
      icon: Wrench,
      description: "Professional repair services for all devices",
      color: "bg-orange-500",
    },
  ]

  const storeLocations = [
    {
      name: "Computer Village Store",
      address: "No 23 Elshadai Plaza Olayeni, Computer Village Ikeja, Lagos State",
      phone: "+234 816 608 4870",
      whatsapp: "+234 906 917 8853",
      email: "ozeetechgadgets@gmail.com",
      hours: "Mon-Sat: 9AM-7PM, Sun: 12PM-5PM",
      primary: true,
    },
    {
      name: "Ayobo Branch",
      address: "28/29 Camp Davies Road, Ayobo, Lagos",
      phone: "+234 816 608 4870",
      whatsapp: "+234 906 917 8853",
      email: "ozeetechgadgets@gmail.com",
      hours: "Mon-Sat: 9AM-7PM, Sun: 12PM-5PM",
      primary: false,
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Adebayo Johnson",
      location: "Lagos, Nigeria",
      rating: 5,
      comment:
        "Excellent service! Bought my iPhone 15 Pro Max from Ozee Tech and got same-day delivery. The product is 100% original and their tech support is outstanding. Highly recommended!",
      product: "iPhone 15 Pro Max",
      verified: true,
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Fatima Abdullahi",
      location: "Abuja, Nigeria",
      rating: 5,
      comment:
        "I've been buying from Ozee Tech for over 5 years. They are truly a brand you can trust. Got my MacBook Pro M3 at a great price with warranty. Professional service always!",
      product: "MacBook Pro M3",
      verified: true,
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Chinedu Okafor",
      location: "Port Harcourt, Nigeria",
      rating: 5,
      comment:
        "Amazing experience! Ordered Samsung Galaxy S24 Ultra online and received it the next day. The packaging was perfect and the phone is exactly as described. Will definitely buy again!",
      product: "Samsung Galaxy S24 Ultra",
      verified: true,
      date: "3 weeks ago",
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/ozeetech-official-logo.jpg"
                  alt="Ozee Tech Ventures"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-2xl shadow-lg"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                    OZEE TECH
                    <span className="block text-red-500">VENTURES</span>
                  </h1>
                  <p className="text-xl font-bold text-red-500 mt-2">A BRAND YOU CAN TRUST</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  Nigeria's Premier Technology Retailer
                  <span className="block text-red-500">Since 2009</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover premium smartphones, laptops, tablets, and tech accessories with authentic warranty, same-day
                  delivery, and professional tech support across Nigeria.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-700">100% Original Products</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Truck className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-700">Same Day Delivery</span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                  <HeadphonesIcon className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-orange-700">30-Day Tech Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg w-full sm:w-auto h-auto" asChild>
                  <Link href="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg w-full sm:w-auto h-auto bg-transparent"
                  asChild
                >
                  <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=400&fit=crop&crop=center"
                    alt="iPhone 15 Pro Max"
                    width={300}
                    height={400}
                    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop&crop=center"
                    alt="Apple Watch Ultra"
                    width={300}
                    height={200}
                    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop&crop=center"
                    alt="MacBook Pro"
                    width={300}
                    height={200}
                    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=400&fit=crop&crop=center"
                    alt="Samsung Galaxy S24"
                    width={300}
                    height={400}
                    className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Services Advertising Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="bg-blue-400 text-blue-900 mb-4 text-xs sm:text-sm px-3 py-1">Professional Services</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Beyond Hardware: Custom Tech Solutions
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  We don't just sell tech products. Our expert team develops custom web applications, front-end interfaces, and robust back-end systems for businesses across Nigeria.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                    <Layout className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Front-End Development</h3>
                    <p className="text-blue-100 text-sm">React, Vue, Next.js - Beautiful responsive UIs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Back-End Development</h3>
                    <p className="text-blue-100 text-sm">Node.js, Python - Scalable APIs & databases</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-500 rounded-full p-3 flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Full-Stack Solutions</h3>
                    <p className="text-blue-100 text-sm">Complete web applications from design to deployment</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg w-full sm:w-auto h-auto" asChild>
                  <Link href="/services">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg w-full sm:w-auto h-auto bg-transparent" asChild>
                  <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Quote
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-500/20 rounded-xl p-6 backdrop-blur border border-blue-400/30 h-48 flex items-center justify-center">
                    <Code className="h-16 w-16 text-blue-300 opacity-50" />
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-6 backdrop-blur border border-blue-400/30 h-32 flex items-center justify-center">
                    <GitBranch className="h-12 w-12 text-blue-300 opacity-50" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-blue-500/20 rounded-xl p-6 backdrop-blur border border-blue-400/30 h-32 flex items-center justify-center">
                    <Database className="h-12 w-12 text-blue-300 opacity-50" />
                  </div>
                  <div className="bg-blue-500/20 rounded-xl p-6 backdrop-blur border border-blue-400/30 h-48 flex items-center justify-center">
                    <Cloud className="h-16 w-16 text-blue-300 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our Tech Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end development solutions with professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Experienced developers with proven track records</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Agile methodology for quick turnarounds</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Rigorous testing and best practices</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Support & Maintenance</h3>
              <p className="text-gray-600 text-sm">Ongoing support after project completion</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <Calendar className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
                <div className="text-sm text-gray-500 mt-1">Since 2009</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
                <div className="text-sm text-gray-500 mt-1">Nationwide</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <ShoppingCart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Products Available</div>
                <div className="text-sm text-gray-500 mt-1">Latest models</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Original Products</div>
                <div className="text-sm text-gray-500 mt-1">Guaranteed authentic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of premium technology products across all major categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-500 text-white font-bold">{category.count}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <category.icon className="h-8 w-8 text-red-500" />
                      <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center text-red-500 font-semibold group-hover:text-red-600">
                      <span>Shop Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked selection of the latest and most popular tech products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Link href={product.href}>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-red-500 text-white font-bold">{product.badge}</Badge>
                  )}
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white font-bold">
                      -{calculateDiscount(product.originalPrice, product.price)}%
                    </Badge>
                  )}
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <CardContent className="p-6">
                  <Link href={product.href}>
                    <h3 className="font-bold text-lg leading-tight group-hover:text-red-500 transition-colors line-clamp-2 mb-3">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {product.specs.slice(0, 2).map((spec, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-500">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <p className="text-sm text-green-600 font-medium">
                        Save {formatPrice(product.originalPrice - product.price)}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-red-500 hover:bg-red-600">
                      <Link href={product.href}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-50 bg-transparent"
              asChild
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Ozee Tech Ventures?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with Nigeria's most trusted technology retailer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Original Products</h3>
              <p className="text-gray-600 leading-relaxed">
                We guarantee authentic products from authorized distributors. Every item comes with official warranty
                and documentation for your peace of mind.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Truck className="h-16 w-16 text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Same Day Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your tech products delivered the same day in Lagos and Abuja. Fast, secure, and reliable delivery
                service across Nigeria.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <HeadphonesIcon className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">30-Day Tech Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy complimentary technical support for 30 days after purchase. Our expert team is here to help with
                setup, troubleshooting, and guidance.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Award className="h-16 w-16 text-purple-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">15+ Years Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Since 2009, we've been serving Nigeria with excellence. Our experience and reputation speak for
                themselves in the technology retail industry.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">50,000+ Happy Customers</h3>
              <p className="text-gray-600 leading-relaxed">
                Join thousands of satisfied customers who trust us for their technology needs. Our customer satisfaction
                rate speaks volumes about our service quality.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Zap className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Competitive Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Get the best value for your money with our competitive prices. We offer flexible payment options and
                regular promotions on popular products.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real customers who trust Ozee Tech Ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                      <div className="text-sm text-red-500 font-medium">{testimonial.product}</div>
                    </div>
                    <div className="text-right">
                      {testimonial.verified && (
                        <div className="flex items-center text-green-600 text-sm mb-1">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Verified Purchase
                        </div>
                      )}
                      <div className="text-sm text-gray-500">{testimonial.date}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Visit Our Stores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two convenient locations to serve you better across Lagos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {storeLocations.map((location, index) => (
              <Card
                key={index}
                className={`p-8 ${location.primary ? "border-red-500 border-2" : ""} hover:shadow-lg transition-shadow`}
              >
                {location.primary && <Badge className="bg-red-500 text-white mb-4">Main Store</Badge>}
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{location.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">{location.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-gray-600">{location.whatsapp}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">{location.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Business Hours</p>
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex-1" asChild>
                    <a
                      href={`https://wa.me/${location.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-50 flex-1 bg-transparent"
                    asChild
                  >
                    <a href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Store Signpost Image */}
          <div className="mt-16 text-center">
            <div className="relative inline-block">
              <Image
                src="/images/ozeetech-signpost.jpg"
                alt="Ozee Tech Ventures Store Signpost"
                width={800}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">OZEE TECH VENTURES</h3>
                  <p className="text-lg">SALES • SWAP • REPAIRS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Image
                src="/images/ozeetech-official-logo.jpg"
                alt="Ozee Tech Ventures"
                width={80}
                height={80}
                className="w-20 h-20 rounded-2xl bg-white p-2"
              />
              <div>
                <h2 className="text-4xl md:text-5xl font-bold">Ready to Upgrade Your Tech?</h2>
                <p className="text-xl font-bold text-red-100 mt-2">A BRAND YOU CAN TRUST</p>
              </div>
            </div>
            <p className="text-2xl mb-10 leading-relaxed">
              Join 50,000+ satisfied customers who trust Ozee Tech Ventures for their technology needs. Experience the
              difference with original products, same-day delivery, and professional support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 px-12 py-4 text-xl" asChild>
                <Link href="/products">
                  <ShoppingCart className="mr-2 h-6 w-6" />
                  Start Shopping
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-12 py-4 text-xl bg-transparent"
                asChild
              >
                <a href="https://wa.me/2349069178853" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Get Quote on WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-red-100">
              <div className="flex items-center space-x-2">
                <Instagram className="h-5 w-5" />
                <span>@ozee tech groups</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>ozeetechgadgets@gmail.com</span>
              </div>
            </div>
            <p className="text-red-100 mt-6 text-lg">
              📱 Confirm current prices via WhatsApp due to exchange rate fluctuations
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
