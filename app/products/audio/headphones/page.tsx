"use client"

import { CardFooter } from "@/components/ui/card"

import { CardContent } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { useState } from "react"
import { Filter, Grid3X3, List, ChevronRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ProductCard } from "@/components/product-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

export default function HeadphonesPage() {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [sortOption, setSortOption] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 900000])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  // Brand filters
  const [brandFilters, setBrandFilters] = useState({
    sony: false,
    apple: false,
    bose: false,
    samsung: false,
    sennheiser: false,
    beats: false,
    google: false,
  })

  // Type filters
  const [typeFilters, setTypeFilters] = useState({
    overEar: false,
    onEar: false,
    inEar: false,
    trueWireless: false,
  })

  // Feature filters
  const [featureFilters, setFeatureFilters] = useState({
    anc: false,
    wireless: false,
    spatialAudio: false,
    waterResistant: false,
    longBattery: false,
  })

  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM5",
      price: 599999, // ₦599,999
      rating: 4.8,
      image: "https://www.sony.com/image/6a5a48bab3d1a6f525e73d0b3a46d547?fmt=png-alpha&wid=660&hei=660",
      category: "Audio",
      subcategory: "Headphones",
      badge: "Best Seller",
      href: "/products/audio/headphones/sony-wh-1000xm5",
      specs: [
        "Industry-leading noise cancellation",
        "30-hour battery life",
        "8 microphones for crystal-clear calls",
        "LDAC high-resolution audio",
      ],
      brand: "sony",
      type: "overEar",
      features: ["anc", "wireless", "longBattery"],
    },
    {
      id: 2,
      name: "Apple AirPods Pro 2",
      price: 449999, // ₦449,999
      rating: 4.7,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/apple-airpods-pro-2",
      specs: [
        "Active Noise Cancellation",
        "Adaptive Transparency",
        "Personalized Spatial Audio",
        "Up to 6 hours of listening time",
      ],
      brand: "apple",
      type: "trueWireless",
      features: ["anc", "wireless", "spatialAudio", "waterResistant"],
    },
    {
      id: 3,
      name: "Bose QuietComfort Ultra",
      price: 649999, // ₦649,999
      rating: 4.7,
      image:
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/QC_Ultra_Headphones_Black_hero.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
      category: "Audio",
      subcategory: "Headphones",
      badge: "Premium",
      href: "/products/audio/headphones/bose-quietcomfort-ultra",
      specs: ["Best-in-class noise cancellation", "24-hour battery life", "Spatial audio", "Bluetooth 5.3"],
      brand: "bose",
      type: "overEar",
      features: ["anc", "wireless", "spatialAudio", "longBattery"],
    },
    {
      id: 4,
      name: "Samsung Galaxy Buds 3 Pro",
      price: 299999, // ₦299,999
      rating: 4.5,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/2307/gallery/africa-en-galaxy-buds2-pro-r510-sm-r510nlvaxfa-thumb-533605485",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/samsung-galaxy-buds-3-pro",
      specs: ["Intelligent ANC", "24-bit Hi-Fi sound", "360 Audio", "IPX7 water resistance"],
      brand: "samsung",
      type: "trueWireless",
      features: ["anc", "wireless", "spatialAudio", "waterResistant"],
    },
    {
      id: 5,
      name: "Sennheiser Momentum 4 Wireless",
      price: 549999, // ₦549,999
      rating: 4.6,
      image:
        "https://assets.sennheiser.com/img/25502/x1_desktop_Sennheiser_MOMENTUM_4_Wireless_Black_Product_shot_Perspective.jpg",
      category: "Audio",
      subcategory: "Headphones",
      href: "/products/audio/headphones/sennheiser-momentum-4-wireless",
      specs: [
        "Superior sound quality",
        "Up to 60 hours battery life",
        "Adaptive noise cancellation",
        "Customizable sound via Smart Control App",
      ],
      brand: "sennheiser",
      type: "overEar",
      features: ["anc", "wireless", "longBattery"],
    },
    {
      id: 6,
      name: "Apple AirPods Max",
      price: 899999, // ₦899,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604709293000",
      category: "Audio",
      subcategory: "Headphones",
      badge: "Premium",
      href: "/products/audio/headphones/apple-airpods-max",
      specs: ["High-fidelity audio", "Active Noise Cancellation", "Spatial Audio", "20 hours of battery life"],
      brand: "apple",
      type: "overEar",
      features: ["anc", "wireless", "spatialAudio", "longBattery"],
    },
    {
      id: 7,
      name: "Sony WF-1000XM5",
      price: 399999, // ₦399,999
      rating: 4.7,
      image: "https://www.sony.com/image/6a5a48bab3d1a6f525e73d0b3a46d547?fmt=png-alpha&wid=660&hei=660",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/sony-wf-1000xm5",
      specs: ["Industry-leading noise cancellation", "8 hours battery life", "Wireless charging", "LDAC support"],
      brand: "sony",
      type: "trueWireless",
      features: ["anc", "wireless", "waterResistant"],
    },
    {
      id: 8,
      name: "Beats Studio Pro",
      price: 499999, // ₦499,999
      rating: 4.5,
      image:
        "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio-pro/pdp/studio-pro-pdp-p01.png",
      category: "Audio",
      subcategory: "Headphones",
      href: "/products/audio/headphones/beats-studio-pro",
      specs: ["Pure ANC", "Up to 40 hours of battery life", "Spatial Audio", "USB-C & 3.5mm audio"],
      brand: "beats",
      type: "overEar",
      features: ["anc", "wireless", "spatialAudio", "longBattery"],
    },
    {
      id: 9,
      name: "Google Pixel Buds Pro",
      price: 199999, // ₦199,999
      rating: 4.6,
      image:
        "https://lh3.googleusercontent.com/SzRzfS-OwUGOCmpnNxk9vbrDZjlA6Cj0jBMIRTusESYZ8q6WRc3JvYnIHXA8HLg-GQqnSuKrYVlOTL-_uiGOQQF9Kn9KoA=rw-e365-w1440",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/google-pixel-buds-pro",
      specs: ["Active noise cancellation", "11mm drivers", "7 hours battery life", "Wireless charging case"],
      brand: "google",
      type: "trueWireless",
      features: ["anc", "wireless", "waterResistant"],
    },
    {
      id: 10,
      name: "Jabra Elite 10",
      price: 249999, // ₦249,999
      rating: 4.5,
      image:
        "https://www.jabra.com/content/dam/jabra/product-details-images/jabra-elite-10/black/jabra-elite-10-black-front.png",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/jabra-elite-10",
      specs: ["Dolby Atmos", "Advanced Active Noise Cancellation", "10mm drivers", "IP57 water resistance"],
      brand: "other",
      type: "trueWireless",
      features: ["anc", "wireless", "spatialAudio", "waterResistant"],
    },
    {
      id: 11,
      name: "Shure AONIC 50",
      price: 599999, // ₦599,999
      rating: 4.7,
      image:
        "https://www.shure.com/damfiles/default/all/products/headphones-earphones/aonic-50/AONIC_50_Black_Angle_1-a9a0c9c0c7a1e1c9c9d3d1e3d7e3d0c9.jpg",
      category: "Audio",
      subcategory: "Headphones",
      badge: "Studio Quality",
      href: "/products/audio/headphones/shure-aonic-50",
      specs: ["Studio-quality sound", "Adjustable noise cancellation", "20 hours battery life", "Premium comfort"],
      brand: "other",
      type: "overEar",
      features: ["anc", "wireless", "longBattery"],
    },
    {
      id: 12,
      name: "Nothing Ear (2)",
      price: 149999, // ₦149,999
      rating: 4.4,
      image: "https://in.nothing.tech/cdn/shop/files/Ear-2-White-PDP-Thumbnail.png",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/nothing-ear-2",
      specs: ["Hi-Res Audio Certified", "Active Noise Cancellation", "Dual Connection", "Transparent design"],
      brand: "other",
      type: "trueWireless",
      features: ["anc", "wireless", "waterResistant"],
    },
    {
      id: 13,
      name: "Sony WH-CH720N",
      price: 199999, // ₦199,999
      rating: 4.3,
      image: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=720",
      category: "Audio",
      subcategory: "Headphones",
      href: "/products/audio/headphones/sony-wh-ch720n",
      specs: [
        "Digital Noise Cancellation",
        "Up to 35 hours battery life",
        "Lightweight design",
        "Multipoint connection",
      ],
      brand: "sony",
      type: "overEar",
      features: ["anc", "wireless", "longBattery"],
    },
    {
      id: 14,
      name: "Apple AirPods (3rd generation)",
      price: 249999, // ₦249,999
      rating: 4.5,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/apple-airpods-3",
      specs: [
        "Spatial audio with dynamic head tracking",
        "Sweat and water resistant",
        "Up to 6 hours of listening time",
        "Force sensor controls",
      ],
      brand: "apple",
      type: "trueWireless",
      features: ["wireless", "spatialAudio", "waterResistant"],
    },
    {
      id: 15,
      name: "Bose QuietComfort Earbuds II",
      price: 349999, // ₦349,999
      rating: 4.6,
      image:
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_images/QCEBII_BLK_hero.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/bose-quietcomfort-earbuds-ii",
      specs: [
        "World's best noise cancellation",
        "CustomTune sound calibration",
        "Up to 6 hours battery life",
        "IPX4 water resistant",
      ],
      brand: "bose",
      type: "trueWireless",
      features: ["anc", "wireless", "waterResistant"],
    },
    {
      id: 16,
      name: "Samsung Galaxy Buds2",
      price: 149999, // ₦149,999
      rating: 4.3,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/galaxy-s21/gallery/africa-en-galaxy-buds-pro-r190-sm-r190nzvaxfa-thumb-368338803",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/samsung-galaxy-buds2",
      specs: ["Active Noise Cancellation", "Ambient sound", "Dynamic 2-way speakers", "IPX2 water resistance"],
      brand: "samsung",
      type: "trueWireless",
      features: ["anc", "wireless", "waterResistant"],
    },
    {
      id: 17,
      name: "Sennheiser HD 660S2",
      price: 599999, // ₦599,999
      rating: 4.8,
      image: "https://assets.sennheiser.com/img/25512/product_detail_x1_desktop_HD_660S2_Sennheiser_01.jpg",
      category: "Audio",
      subcategory: "Headphones",
      badge: "Audiophile",
      href: "/products/audio/headphones/sennheiser-hd-660s2",
      specs: ["Open-back design", "150 ohm impedance", "Reference-class sound", "Handcrafted in Ireland"],
      brand: "sennheiser",
      type: "overEar",
      features: [],
    },
    {
      id: 18,
      name: "Beats Fit Pro",
      price: 249999, // ₦249,999
      rating: 4.5,
      image:
        "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/plp/bbd.plp.desktop.fitpro-black.png",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/beats-fit-pro",
      specs: ["Flexible wingtip design", "Active Noise Cancellation", "Spatial Audio", "Up to 6 hours battery life"],
      brand: "beats",
      type: "trueWireless",
      features: ["anc", "wireless", "spatialAudio", "waterResistant"],
    },
    {
      id: 19,
      name: "Google Pixel Buds A-Series",
      price: 99999, // ₦99,999
      rating: 4.2,
      image:
        "https://lh3.googleusercontent.com/uSGjbg8VUgeVPTZQQGo-Ks_v_ZL_5JS-hjeMDYFUjYgQzfpgZUXN7XC5LoZtTVS4mZ0kJCvBbZ9QMCMvfA=rw-e365-w1440",
      category: "Audio",
      subcategory: "Earbuds",
      href: "/products/audio/headphones/google-pixel-buds-a-series",
      specs: ["Rich sound", "Adaptive Sound", "Clear calls", "Up to 5 hours battery life"],
      brand: "google",
      type: "trueWireless",
      features: ["wireless", "waterResistant"],
    },
    {
      id: 20,
      name: "JBL Tour One M2",
      price: 349999, // ₦349,999
      rating: 4.4,
      image:
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw9d0f2b2e/JBL_Tour_ONE_M2_Product%20Image_Hero_Black.png?sw=535&sh=535",
      category: "Audio",
      subcategory: "Headphones",
      href: "/products/audio/headphones/jbl-tour-one-m2",
      specs: ["True Adaptive Noise Cancelling", "50 hours battery life", "Spatial Sound", "4-mic technology"],
      brand: "other",
      type: "overEar",
      features: ["anc", "wireless", "spatialAudio", "longBattery"],
    },
  ]

  // Filter products based on active tab
  const getFilteredProducts = () => {
    let filtered = [...products]

    // Filter by tab
    if (activeTab === "headphones") {
      filtered = filtered.filter((product) => product.subcategory === "Headphones")
    } else if (activeTab === "earbuds") {
      filtered = filtered.filter((product) => product.subcategory === "Earbuds")
    } else if (activeTab === "anc") {
      filtered = filtered.filter((product) => product.features.includes("anc"))
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by brand
    const activeBrands = Object.entries(brandFilters)
      .filter(([_, isActive]) => isActive)
      .map(([brand]) => brand)
    if (activeBrands.length > 0) {
      filtered = filtered.filter((product) => activeBrands.includes(product.brand))
    }

    // Filter by type
    const activeTypes = Object.entries(typeFilters)
      .filter(([_, isActive]) => isActive)
      .map(([type]) => type)
    if (activeTypes.length > 0) {
      filtered = filtered.filter((product) => activeTypes.includes(product.type))
    }

    // Filter by features
    const activeFeatures = Object.entries(featureFilters)
      .filter(([_, isActive]) => isActive)
      .map(([feature]) => feature)
    if (activeFeatures.length > 0) {
      filtered = filtered.filter((product) => activeFeatures.some((feature) => product.features.includes(feature)))
    }

    // Sort products
    if (sortOption === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortOption === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortOption === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }

  const filteredProducts = getFilteredProducts()

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Handle filter changes
  const handleFilterChange = () => {
    setCurrentPage(1)
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
  }

  // Toggle brand filter
  const toggleBrandFilter = (brand: keyof typeof brandFilters) => {
    setBrandFilters((prev) => ({
      ...prev,
      [brand]: !prev[brand],
    }))
    handleFilterChange()
  }

  // Toggle type filter
  const toggleTypeFilter = (type: keyof typeof typeFilters) => {
    setTypeFilters((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
    handleFilterChange()
  }

  // Toggle feature filter
  const toggleFeatureFilter = (feature: keyof typeof featureFilters) => {
    setFeatureFilters((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }))
    handleFilterChange()
  }

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentPage(1)
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
  }

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSortOption(value)
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
  }

  // Handle price range change
  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value)
  }

  // Apply filters
  const applyFilters = () => {
    handleFilterChange()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Headphones & Earbuds</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/audio" className="hover:text-primary">
              Audio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Headphones & Earbuds</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Headphones & Earbuds</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="headphones">Headphones</TabsTrigger>
              <TabsTrigger value="earbuds">Earbuds</TabsTrigger>
              <TabsTrigger value="anc">Noise Cancelling</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-4">Brand</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="sony" checked={brandFilters.sony} onCheckedChange={() => toggleBrandFilter("sony")} />
                    <label htmlFor="sony" className="ml-2 text-sm">
                      Sony
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="apple"
                      checked={brandFilters.apple}
                      onCheckedChange={() => toggleBrandFilter("apple")}
                    />
                    <label htmlFor="apple" className="ml-2 text-sm">
                      Apple
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="bose" checked={brandFilters.bose} onCheckedChange={() => toggleBrandFilter("bose")} />
                    <label htmlFor="bose" className="ml-2 text-sm">
                      Bose
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="samsung"
                      checked={brandFilters.samsung}
                      onCheckedChange={() => toggleBrandFilter("samsung")}
                    />
                    <label htmlFor="samsung" className="ml-2 text-sm">
                      Samsung
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="sennheiser"
                      checked={brandFilters.sennheiser}
                      onCheckedChange={() => toggleBrandFilter("sennheiser")}
                    />
                    <label htmlFor="sennheiser" className="ml-2 text-sm">
                      Sennheiser
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="beats"
                      checked={brandFilters.beats}
                      onCheckedChange={() => toggleBrandFilter("beats")}
                    />
                    <label htmlFor="beats" className="ml-2 text-sm">
                      Beats
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="google"
                      checked={brandFilters.google}
                      onCheckedChange={() => toggleBrandFilter("google")}
                    />
                    <label htmlFor="google" className="ml-2 text-sm">
                      Google
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch
                      id="over-ear"
                      checked={typeFilters.overEar}
                      onCheckedChange={() => toggleTypeFilter("overEar")}
                    />
                    <label htmlFor="over-ear" className="ml-2 text-sm">
                      Over-Ear
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="on-ear" checked={typeFilters.onEar} onCheckedChange={() => toggleTypeFilter("onEar")} />
                    <label htmlFor="on-ear" className="ml-2 text-sm">
                      On-Ear
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="in-ear" checked={typeFilters.inEar} onCheckedChange={() => toggleTypeFilter("inEar")} />
                    <label htmlFor="in-ear" className="ml-2 text-sm">
                      In-Ear
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="true-wireless"
                      checked={typeFilters.trueWireless}
                      onCheckedChange={() => toggleTypeFilter("trueWireless")}
                    />
                    <label htmlFor="true-wireless" className="ml-2 text-sm">
                      True Wireless
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch id="anc" checked={featureFilters.anc} onCheckedChange={() => toggleFeatureFilter("anc")} />
                    <label htmlFor="anc" className="ml-2 text-sm">
                      Active Noise Cancellation
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="wireless"
                      checked={featureFilters.wireless}
                      onCheckedChange={() => toggleFeatureFilter("wireless")}
                    />
                    <label htmlFor="wireless" className="ml-2 text-sm">
                      Wireless
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="spatial-audio"
                      checked={featureFilters.spatialAudio}
                      onCheckedChange={() => toggleFeatureFilter("spatialAudio")}
                    />
                    <label htmlFor="spatial-audio" className="ml-2 text-sm">
                      Spatial Audio
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="water-resistant"
                      checked={featureFilters.waterResistant}
                      onCheckedChange={() => toggleFeatureFilter("waterResistant")}
                    />
                    <label htmlFor="water-resistant" className="ml-2 text-sm">
                      Water Resistant
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="long-battery"
                      checked={featureFilters.longBattery}
                      onCheckedChange={() => toggleFeatureFilter("longBattery")}
                    />
                    <label htmlFor="long-battery" className="ml-2 text-sm">
                      20+ Hours Battery
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider
                  defaultValue={[0, 900000]}
                  value={priceRange}
                  onValueChange={handlePriceRangeChange}
                  min={0}
                  max={900000}
                  step={50000}
                  className="mb-6"
                />
                <div className="flex items-center justify-between">
                  <div className="text-sm">₦{priceRange[0].toLocaleString()}</div>
                  <div className="text-sm">₦{priceRange[1].toLocaleString()}</div>
                </div>
              </div>

              <Button className="w-full mt-4" onClick={applyFilters}>
                Apply Filters
              </Button>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="flex items-center">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden mr-2">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                        <SheetDescription>Narrow down your product search with filters.</SheetDescription>
                      </SheetHeader>
                      <div className="space-y-6 py-4">
                        <div>
                          <h3 className="font-medium mb-4">Brand</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Switch
                                id="sony-mobile"
                                checked={brandFilters.sony}
                                onCheckedChange={() => toggleBrandFilter("sony")}
                              />
                              <label htmlFor="sony-mobile" className="ml-2 text-sm">
                                Sony
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch
                                id="apple-mobile"
                                checked={brandFilters.apple}
                                onCheckedChange={() => toggleBrandFilter("apple")}
                              />
                              <label htmlFor="apple-mobile" className="ml-2 text-sm">
                                Apple
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch
                                id="bose-mobile"
                                checked={brandFilters.bose}
                                onCheckedChange={() => toggleBrandFilter("bose")}
                              />
                              <label htmlFor="bose-mobile" className="ml-2 text-sm">
                                Bose
                              </label>
                            </div>
                            <div className="flex items-center">
                              <Switch
                                id="samsung-mobile"
                                checked={brandFilters.samsung}
                                onCheckedChange={() => toggleBrandFilter("samsung")}
                              />
                              <label htmlFor="samsung-mobile" className="ml-2 text-sm">
                                Samsung
                              </label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-4">Price Range</h3>
                          <Slider
                            defaultValue={[0, 900000]}
                            value={priceRange}
                            onValueChange={handlePriceRangeChange}
                            min={0}
                            max={900000}
                            step={50000}
                            className="mb-6"
                          />
                          <div className="flex items-center justify-between">
                            <div className="text-sm">₦{priceRange[0].toLocaleString()}</div>
                            <div className="text-sm">₦{priceRange[1].toLocaleString()}</div>
                          </div>
                        </div>

                        <Button className="w-full mt-4" onClick={applyFilters}>
                          Apply Filters
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Grid3X3 className="h-4 w-4" />
                      <span className="sr-only">Grid view</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <List className="h-4 w-4" />
                      <span className="sr-only">List view</span>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Select defaultValue="featured" value={sortOption} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <Card key={i} className="overflow-hidden">
                        <div className="aspect-square relative">
                          <Skeleton className="h-full w-full" />
                        </div>
                        <CardContent className="p-4">
                          <Skeleton className="h-4 w-3/4 mb-2" />
                          <Skeleton className="h-6 w-full mb-2" />
                          <Skeleton className="h-4 w-24 mb-4" />
                          <Skeleton className="h-5 w-1/2 mb-4" />
                          <div className="space-y-2">
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-full" />
                            <Skeleton className="h-3 w-3/4" />
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Skeleton className="h-10 w-full" />
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              ) : (
                <>
                  {currentProducts.length === 0 ? (
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium mb-2">No products match your filters</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your filters to find what you're looking for.
                      </p>
                      <Button
                        onClick={() => {
                          setBrandFilters({
                            sony: false,
                            apple: false,
                            bose: false,
                            samsung: false,
                            sennheiser: false,
                            beats: false,
                            google: false,
                          })
                          setTypeFilters({
                            overEar: false,
                            onEar: false,
                            inEar: false,
                            trueWireless: false,
                          })
                          setFeatureFilters({
                            anc: false,
                            wireless: false,
                            spatialAudio: false,
                            waterResistant: false,
                            longBattery: false,
                          })
                          setPriceRange([0, 900000])
                          setActiveTab("all")
                          setCurrentPage(1)
                        }}
                      >
                        Reset Filters
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </>
              )}

              {filteredProducts.length > 0 && !loading && (
                <div className="flex justify-center mt-8">
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>

                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNumber
                      if (totalPages <= 5) {
                        pageNumber = i + 1
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i
                      } else {
                        pageNumber = currentPage - 2 + i
                      }

                      return (
                        <Button
                          key={i}
                          variant={currentPage === pageNumber ? "default" : "outline"}
                          onClick={() => setCurrentPage(pageNumber)}
                        >
                          {pageNumber}
                        </Button>
                      )
                    })}

                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && <span className="self-end mx-2">...</span>}
                        <Button variant="outline" onClick={() => setCurrentPage(totalPages)}>
                          {totalPages}
                        </Button>
                      </>
                    )}

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-12 bg-muted/20 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">About Headphones & Earbuds</h2>
                <p className="mb-4">
                  Headphones and earbuds are essential audio accessories for enjoying music, podcasts, and calls with
                  exceptional sound quality. Modern headphones offer features like active noise cancellation, spatial
                  audio, and long battery life for an immersive listening experience.
                </p>
                <p>
                  Whether you prefer over-ear headphones for comfort during long listening sessions or true wireless
                  earbuds for portability and convenience, we offer premium options from top brands like Sony, Apple,
                  Bose, and Samsung to suit your lifestyle and preferences.
                </p>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
