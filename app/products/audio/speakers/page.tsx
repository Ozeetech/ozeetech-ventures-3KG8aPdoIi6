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

export default function SpeakersPage() {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [sortOption, setSortOption] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 1500000])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  // Brand filters
  const [brandFilters, setBrandFilters] = useState({
    sony: false,
    bose: false,
    jbl: false,
    sonos: false,
    marshall: false,
    apple: false,
  })

  // Type filters
  const [typeFilters, setTypeFilters] = useState({
    portable: false,
    smart: false,
    bookshelf: false,
    soundbar: false,
    party: false,
  })

  // Feature filters
  const [featureFilters, setFeatureFilters] = useState({
    bluetooth: false,
    wifi: false,
    waterproof: false,
    voiceAssistant: false,
    multiroom: false,
  })

  const products = [
    {
      id: 1,
      name: "Sonos Era 300",
      price: 699999, // ₦699,999
      rating: 4.8,
      image:
        "https://www.sonos.com/on/demandware.static/-/Sites-sonos-master/default/dw5a7c1e1a/images/era-300/era-300-black-top-angle.png",
      category: "Audio",
      subcategory: "Smart Speakers",
      badge: "New",
      href: "/products/audio/speakers/sonos-era-300",
      specs: ["Spatial Audio with Dolby Atmos", "Voice control with Alexa", "Wi-Fi and Bluetooth", "Trueplay tuning"],
      brand: "sonos",
      type: "smart",
      features: ["bluetooth", "wifi", "voiceAssistant", "multiroom"],
    },
    {
      id: 2,
      name: "JBL Boombox 3",
      price: 499999, // ₦499,999
      rating: 4.7,
      image:
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5a9a9119/JBL_Boombox_3_Hero_Black.png",
      category: "Audio",
      subcategory: "Portable Speakers",
      href: "/products/audio/speakers/jbl-boombox-3",
      specs: [
        "24 hours of playtime",
        "IP67 waterproof and dustproof",
        "Powerful JBL Original Pro Sound",
        "Built-in powerbank",
      ],
      brand: "jbl",
      type: "portable",
      features: ["bluetooth", "waterproof"],
    },
    {
      id: 3,
      name: "Bose Smart Soundbar 900",
      price: 899999, // ₦899,999
      rating: 4.7,
      image:
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_smart_soundbar_900/product_silo_images/Soundbar_900_Black_Hero.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
      category: "Audio",
      subcategory: "Soundbars",
      badge: "Premium",
      href: "/products/audio/speakers/bose-smart-soundbar-900",
      specs: ["Dolby Atmos", "Voice assistants built-in", "Bluetooth and Wi-Fi", "SimpleSync technology"],
      brand: "bose",
      type: "soundbar",
      features: ["bluetooth", "wifi", "voiceAssistant"],
    },
    {
      id: 4,
      name: "Sony SRS-XG300",
      price: 349999, // ₦349,999
      rating: 4.6,
      image: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=720",
      category: "Audio",
      subcategory: "Portable Speakers",
      href: "/products/audio/speakers/sony-srs-xg300",
      specs: ["X-Balanced Speaker Unit", "25 hours of battery life", "IP67 water and dust resistant", "Party Connect"],
      brand: "sony",
      type: "portable",
      features: ["bluetooth", "waterproof"],
    },
    {
      id: 5,
      name: "Marshall Stanmore III",
      price: 449999, // ₦449,999
      rating: 4.5,
      image:
        "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw5c08c287/images/marshall/speakers/stanmore-iii/black/high-res/pos-marshall-stanmore-iii-black-01.png",
      category: "Audio",
      subcategory: "Bookshelf Speakers",
      href: "/products/audio/speakers/marshall-stanmore-iii",
      specs: ["Iconic Marshall design", "Bluetooth 5.2", "Dynamic loudness", "Placement compensation"],
      brand: "marshall",
      type: "bookshelf",
      features: ["bluetooth"],
    },
    {
      id: 6,
      name: "Apple HomePod (2nd generation)",
      price: 399999, // ₦399,999
      rating: 4.6,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-select-midnight-202210?wid=1080&hei=1080&fmt=jpeg&qlt=90&.v=1670557210097",
      category: "Audio",
      subcategory: "Smart Speakers",
      href: "/products/audio/speakers/apple-homepod-2",
      specs: ["Room-sensing technology", "Siri built-in", "Apple Music integration", "Smart home hub"],
      brand: "apple",
      type: "smart",
      features: ["wifi", "voiceAssistant", "multiroom"],
    },
    {
      id: 7,
      name: "JBL PartyBox 310",
      price: 599999, // ₦599,999
      rating: 4.7,
      image:
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5a9a9119/JBL_PartyBox_310_Hero_1605x1605px.png",
      category: "Audio",
      subcategory: "Party Speakers",
      href: "/products/audio/speakers/jbl-partybox-310",
      specs: ["240W powerful sound", "Dynamic light show", "18 hours of playtime", "IPX4 splashproof"],
      brand: "jbl",
      type: "party",
      features: ["bluetooth", "waterproof"],
    },
    {
      id: 8,
      name: "Sonos Beam (Gen 2)",
      price: 499999, // ₦499,999
      rating: 4.8,
      image:
        "https://www.sonos.com/on/demandware.static/-/Sites-sonos-master/default/dw1f7b2d7d/images/beam-gen2/beam-gen2-black-front.png",
      category: "Audio",
      subcategory: "Soundbars",
      href: "/products/audio/speakers/sonos-beam-gen-2",
      specs: ["Dolby Atmos support", "Speech enhancement", "Night sound mode", "Voice assistant compatible"],
      brand: "sonos",
      type: "soundbar",
      features: ["wifi", "voiceAssistant", "multiroom"],
    },
    {
      id: 9,
      name: "Bose SoundLink Flex",
      price: 149999, // ₦149,999
      rating: 4.6,
      image:
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_flex/product_silo_images/SLF_BLK_EC_hero.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
      category: "Audio",
      subcategory: "Portable Speakers",
      href: "/products/audio/speakers/bose-soundlink-flex",
      specs: ["PositionIQ technology", "IP67 waterproof", "12 hours of battery life", "Built-in microphone"],
      brand: "bose",
      type: "portable",
      features: ["bluetooth", "waterproof"],
    },
    {
      id: 10,
      name: "Sony HT-A7000",
      price: 1299999, // ₦1,299,999
      rating: 4.7,
      image: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=720",
      category: "Audio",
      subcategory: "Soundbars",
      badge: "Premium",
      href: "/products/audio/speakers/sony-ht-a7000",
      specs: ["7.1.2ch Dolby Atmos", "360 Spatial Sound Mapping", "HDMI 2.1", "8K HDR pass-through"],
      brand: "sony",
      type: "soundbar",
      features: ["bluetooth", "wifi", "voiceAssistant"],
    },
    {
      id: 11,
      name: "Marshall Emberton II",
      price: 179999, // ₦179,999
      rating: 4.5,
      image:
        "https://www.marshallheadphones.com/on/demandware.static/-/Sites-zs-master-catalog/default/dw5c08c287/images/marshall/speakers/emberton-ii/black-and-brass/high-res/pos-marshall-emberton-ii-black-and-brass-01.png",
      category: "Audio",
      subcategory: "Portable Speakers",
      href: "/products/audio/speakers/marshall-emberton-ii",
      specs: ["30+ hours of playtime", "IP67 water and dust resistant", "Stack Mode", "Multi-directional sound"],
      brand: "marshall",
      type: "portable",
      features: ["bluetooth", "waterproof"],
    },
    {
      id: 12,
      name: "JBL Charge 5",
      price: 199999, // ₦199,999
      rating: 4.7,
      image:
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5a9a9119/JBL_Charge5_Black_Hero_1605x1605px.png",
      category: "Audio",
      subcategory: "Portable Speakers",
      href: "/products/audio/speakers/jbl-charge-5",
      specs: ["20 hours of playtime", "IP67 waterproof and dustproof", "PartyBoost", "Powerbank feature"],
      brand: "jbl",
      type: "portable",
      features: ["bluetooth", "waterproof"],
    },
    {
      id: 13,
      name: "Sonos Five",
      price: 599999, // ₦599,999
      rating: 4.8,
      image:
        "https://www.sonos.com/on/demandware.static/-/Sites-sonos-master/default/dw1f7b2d7d/images/five/five-black-front.png",
      category: "Audio",
      subcategory: "Bookshelf Speakers",
      href: "/products/audio/speakers/sonos-five",
      specs: ["Unparalleled sound quality", "Line-in for turntables", "Stereo pairing", "Humidity resistant"],
      brand: "sonos",
      type: "bookshelf",
      features: ["wifi", "multiroom"],
    },
    {
      id: 14,
      name: "Bose Smart Speaker 500",
      price: 399999, // ₦399,999
      rating: 4.6,
      image:
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/speakers/bose_home_speaker_500/product_silo_images/hs500_blk_EC_hero.png/jcr:content/renditions/cq5dam.web.1280.1280.png",
      category: "Audio",
      subcategory: "Smart Speakers",
      href: "/products/audio/speakers/bose-smart-speaker-500",
      specs: ["Wall-to-wall stereo sound", "Built-in voice control", "Color LCD display", "Multi-room experience"],
      brand: "bose",
      type: "smart",
      features: ["bluetooth", "wifi", "voiceAssistant", "multiroom"],
    },
    {
      id: 15,
      name: "Sony SRS-XV800",
      price: 799999, // ₦799,999
      rating: 4.5,
      image: "https://www.sony.com/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=720",
      category: "Audio",
      subcategory: "Party Speakers",
      href: "/products/audio/speakers/sony-srs-xv800",
      specs: [
        "Omnidirectional Party Sound",
        "25 hours of battery life",
        "Karaoke and Guitar inputs",
        "Ambient illumination",
      ],
      brand: "sony",
      type: "party",
      features: ["bluetooth", "waterproof"],
    },
    {
      id: 16,
      name: "JBL Flip 6",
      price: 129999, // ₦129,999
      rating: 4.6,
      image:
        "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw5a9a9119/JBL_Flip6_Black_Hero_1605x1605px.png",
      category: "Audio",
      subcategory: "Portable Speakers",
      href: "/products/audio/speakers/jbl-flip-6",
      specs: ["12 hours of playtime", "IP67 waterproof and dustproof", "PartyBoost", "Racetrack-shaped woofer"],
      brand: "jbl",
      type: "portable",
      features: ["bluetooth", "waterproof"],
    },
  ]

  // Filter products based on active tab
  const getFilteredProducts = () => {
    let filtered = [...products]

    // Filter by tab
    if (activeTab === "portable") {
      filtered = filtered.filter((product) => product.type === "portable")
    } else if (activeTab === "smart") {
      filtered = filtered.filter((product) => product.type === "smart")
    } else if (activeTab === "soundbars") {
      filtered = filtered.filter((product) => product.type === "soundbar")
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
          <h1 className="text-3xl font-bold mb-2">Speakers & Sound Systems</h1>
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
            <span>Speakers</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Browse Speakers</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="portable">Portable</TabsTrigger>
              <TabsTrigger value="smart">Smart</TabsTrigger>
              <TabsTrigger value="soundbars">Soundbars</TabsTrigger>
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
                    <Switch id="bose" checked={brandFilters.bose} onCheckedChange={() => toggleBrandFilter("bose")} />
                    <label htmlFor="bose" className="ml-2 text-sm">
                      Bose
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="jbl" checked={brandFilters.jbl} onCheckedChange={() => toggleBrandFilter("jbl")} />
                    <label htmlFor="jbl" className="ml-2 text-sm">
                      JBL
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="sonos"
                      checked={brandFilters.sonos}
                      onCheckedChange={() => toggleBrandFilter("sonos")}
                    />
                    <label htmlFor="sonos" className="ml-2 text-sm">
                      Sonos
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="marshall"
                      checked={brandFilters.marshall}
                      onCheckedChange={() => toggleBrandFilter("marshall")}
                    />
                    <label htmlFor="marshall" className="ml-2 text-sm">
                      Marshall
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
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch
                      id="portable"
                      checked={typeFilters.portable}
                      onCheckedChange={() => toggleTypeFilter("portable")}
                    />
                    <label htmlFor="portable" className="ml-2 text-sm">
                      Portable
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="smart" checked={typeFilters.smart} onCheckedChange={() => toggleTypeFilter("smart")} />
                    <label htmlFor="smart" className="ml-2 text-sm">
                      Smart
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="bookshelf"
                      checked={typeFilters.bookshelf}
                      onCheckedChange={() => toggleTypeFilter("bookshelf")}
                    />
                    <label htmlFor="bookshelf" className="ml-2 text-sm">
                      Bookshelf
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="soundbar"
                      checked={typeFilters.soundbar}
                      onCheckedChange={() => toggleTypeFilter("soundbar")}
                    />
                    <label htmlFor="soundbar" className="ml-2 text-sm">
                      Soundbar
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch id="party" checked={typeFilters.party} onCheckedChange={() => toggleTypeFilter("party")} />
                    <label htmlFor="party" className="ml-2 text-sm">
                      Party
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Features</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Switch
                      id="bluetooth"
                      checked={featureFilters.bluetooth}
                      onCheckedChange={() => toggleFeatureFilter("bluetooth")}
                    />
                    <label htmlFor="bluetooth" className="ml-2 text-sm">
                      Bluetooth
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="wifi"
                      checked={featureFilters.wifi}
                      onCheckedChange={() => toggleFeatureFilter("wifi")}
                    />
                    <label htmlFor="wifi" className="ml-2 text-sm">
                      Wi-Fi
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="waterproof"
                      checked={featureFilters.waterproof}
                      onCheckedChange={() => toggleFeatureFilter("waterproof")}
                    />
                    <label htmlFor="waterproof" className="ml-2 text-sm">
                      Waterproof
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="voice-assistant"
                      checked={featureFilters.voiceAssistant}
                      onCheckedChange={() => toggleFeatureFilter("voiceAssistant")}
                    />
                    <label htmlFor="voice-assistant" className="ml-2 text-sm">
                      Voice Assistant
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Switch
                      id="multiroom"
                      checked={featureFilters.multiroom}
                      onCheckedChange={() => toggleFeatureFilter("multiroom")}
                    />
                    <label htmlFor="multiroom" className="ml-2 text-sm">
                      Multi-room
                    </label>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider
                  defaultValue={[0, 1500000]}
                  value={priceRange}
                  onValueChange={handlePriceRangeChange}
                  min={0}
                  max={1500000}
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
                                id="jbl-mobile"
                                checked={brandFilters.jbl}
                                onCheckedChange={() => toggleBrandFilter("jbl")}
                              />
                              <label htmlFor="jbl-mobile" className="ml-2 text-sm">
                                JBL
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
                                id="sonos-mobile"
                                checked={brandFilters.sonos}
                                onCheckedChange={() => toggleBrandFilter("sonos")}
                              />
                              <label htmlFor="sonos-mobile" className="ml-2 text-sm">
                                Sonos
                              </label>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-medium mb-4">Price Range</h3>
                          <Slider
                            defaultValue={[0, 1500000]}
                            value={priceRange}
                            onValueChange={handlePriceRangeChange}
                            min={0}
                            max={1500000}
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
                            bose: false,
                            jbl: false,
                            sonos: false,
                            marshall: false,
                            apple: false,
                          })
                          setTypeFilters({
                            portable: false,
                            smart: false,
                            bookshelf: false,
                            soundbar: false,
                            party: false,
                          })
                          setFeatureFilters({
                            bluetooth: false,
                            wifi: false,
                            waterproof: false,
                            voiceAssistant: false,
                            multiroom: false,
                          })
                          setPriceRange([0, 1500000])
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
                <h2 className="text-xl font-bold mb-4">About Speakers & Sound Systems</h2>
                <p className="mb-4">
                  Speakers and sound systems are essential for creating immersive audio experiences at home or on the
                  go. From portable Bluetooth speakers for outdoor adventures to premium soundbars for your home
                  theater, we offer a wide range of audio solutions to suit every need and budget.
                </p>
                <p>
                  Our collection features the latest technology from top brands like Sony, Bose, JBL, and Sonos, with
                  features such as waterproof designs, voice assistant integration, multi-room audio, and
                  high-resolution sound quality to enhance your listening multi-room audio, and high-resolution sound
                  quality to enhance your listening experience. Whether you're looking for powerful party speakers,
                  compact portable options, or premium home audio systems, we have the perfect speaker to match your
                  lifestyle.
                </p>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
