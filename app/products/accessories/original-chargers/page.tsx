import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OriginalChargersPage() {
  const brands = [
    {
      name: "Apple",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1542406417329",
      href: "/products/accessories/original-chargers/apple",
      description: "Original Apple chargers for iPhone, iPad, MacBook and more",
    },
    {
      name: "Samsung",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-t4510xbegjp/gallery/africa-en-45w-power-adapter-ep-t4510-ep-t4510xbegjp-534797153",
      href: "/products/accessories/original-chargers/samsung",
      description: "Original Samsung fast chargers for Galaxy devices",
    },
    {
      name: "Google",
      image:
        "https://lh3.googleusercontent.com/spp/AE_ITi0SFY-GQ7XDjYbhvQz0jlcz5yQeMcbPysmG_Hy_3JK-CDq_lUzHXQtYmgLGIUK-G9Xz4G9eYJnukvfgX9CzPZGfEVU-xoTVJQxRTQDOA-fz-Vk=s512-rw-pd-pc0x0",
      href: "/products/accessories/original-chargers/google",
      description: "Original Google chargers for Pixel phones and other devices",
    },
    {
      name: "Xiaomi",
      image: "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-65w-fast-charger-with-gan-tech/intro-1.png",
      href: "/products/accessories/original-chargers/xiaomi",
      description: "Original Xiaomi fast chargers with GaN technology",
    },
    {
      name: "OnePlus",
      image: "https://image01.oneplus.net/ebp/202207/25/1-m00-3d-00-cpgm7mle_eaaqbkfaahxqmcwmwu972.png",
      href: "/products/accessories/original-chargers/oneplus",
      description: "Original OnePlus SUPERVOOC and Warp Charge adapters",
    },
    {
      name: "Huawei",
      image:
        "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/accessories/supercharge-power-adapter-max-66w/img/pc/huawei-supercharge-power-adapter-max-66w-intro-1.jpg",
      href: "/products/accessories/original-chargers/huawei",
      description: "Original Huawei SuperCharge adapters",
    },
    {
      name: "Oppo",
      image:
        "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/vooc-flash-charge-65w/v2/vooc-flash-charge-65w-v2.jpg.thumb.webp",
      href: "/products/accessories/original-chargers/oppo",
      description: "Original Oppo VOOC Flash Charge adapters",
    },
    {
      name: "Vivo",
      image: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1677055113112/f4c0a2c0a4f3c9f20f3c2a4a3e0f4e0.png",
      href: "/products/accessories/original-chargers/vivo",
      description: "Original Vivo FlashCharge adapters",
    },
    {
      name: "Tecno",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/6142201/1.jpg",
      href: "/products/accessories/original-chargers/tecno",
      description: "Original Tecno chargers for all Tecno devices",
    },
    {
      name: "Infinix",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/2553201/1.jpg",
      href: "/products/accessories/original-chargers/infinix",
      description: "Original Infinix chargers for all Infinix devices",
    },
    {
      name: "Anker",
      image: "https://m.media-amazon.com/images/I/41+r9Cw-0eL._AC_UF1000,1000_QL80_.jpg",
      href: "/products/accessories/original-chargers/anker",
      description: "Premium Anker GaN chargers for all devices",
    },
    {
      name: "Belkin",
      image: "https://m.media-amazon.com/images/I/61i+QbshSPL._AC_UF1000,1000_QL80_.jpg",
      href: "/products/accessories/original-chargers/belkin",
      description: "Premium Belkin chargers for all devices",
    },
  ]

  const chargerTypes = [
    {
      name: "Wall Chargers",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU7T2_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1542406417329",
      href: "/products/accessories/original-chargers/wall-chargers",
      description: "Standard wall adapters for all devices",
    },
    {
      name: "Fast Chargers",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-t4510xbegjp/gallery/africa-en-45w-power-adapter-ep-t4510-ep-t4510xbegjp-534797153",
      href: "/products/accessories/original-chargers/fast-chargers",
      description: "High-wattage chargers for rapid charging",
    },
    {
      name: "Wireless Chargers",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661269793559",
      href: "/products/accessories/original-chargers/wireless-chargers",
      description: "Convenient wireless charging pads and stands",
    },
    {
      name: "Car Chargers",
      image: "https://m.media-amazon.com/images/I/61i+QbshSPL._AC_UF1000,1000_QL80_.jpg",
      href: "/products/accessories/original-chargers/car-chargers",
      description: "Chargers designed for in-vehicle use",
    },
    {
      name: "Multi-Port Chargers",
      image: "https://m.media-amazon.com/images/I/41+r9Cw-0eL._AC_UF1000,1000_QL80_.jpg",
      href: "/products/accessories/original-chargers/multi-port-chargers",
      description: "Charge multiple devices simultaneously",
    },
    {
      name: "GaN Chargers",
      image: "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-65w-fast-charger-with-gan-tech/intro-1.png",
      href: "/products/accessories/original-chargers/gan-chargers",
      description: "Compact, efficient chargers using GaN technology",
    },
    {
      name: "Laptop Chargers",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLYU3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634345473000",
      href: "/products/accessories/original-chargers/laptop-chargers",
      description: "High-power chargers for laptops and notebooks",
    },
    {
      name: "Travel Chargers",
      image: "https://m.media-amazon.com/images/I/71B5JT-eAYL._AC_UF1000,1000_QL80_.jpg",
      href: "/products/accessories/original-chargers/travel-chargers",
      description: "Compact chargers with international adapters",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-2">Original Chargers</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-primary">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products/accessories" className="hover:text-primary">
              Accessories
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Original Chargers</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Genuine Original Chargers</h2>
          <p className="text-lg text-muted-foreground">
            Browse our collection of 100% authentic original chargers from all major brands. We guarantee genuine
            products with manufacturer warranty and support.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Shop by Brand</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <Link key={index} href={brand.href}>
                <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
                  <div className="aspect-square bg-muted relative overflow-hidden p-4 flex items-center justify-center">
                    <img
                      src={brand.image || "/placeholder.svg"}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{brand.name} Chargers</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{brand.description}</p>
                    <Button variant="outline" className="w-full">
                      View {brand.name} Chargers
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Shop by Charger Type</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {chargerTypes.map((type, index) => (
              <Link key={index} href={type.href}>
                <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={type.image || "/placeholder.svg"}
                      alt={type.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{type.description}</p>
                    <Button variant="outline" className="w-full">
                      Browse {type.name}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-muted/20 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Why Choose Original Chargers?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Safety First</h3>
                <p className="text-muted-foreground">
                  Original chargers include safety features to protect your devices from power surges and overheating.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Optimal Charging</h3>
                <p className="text-muted-foreground">
                  Original chargers deliver the exact power your device needs for optimal battery health and longevity.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Warranty Protection</h3>
                <p className="text-muted-foreground">
                  All our original chargers come with manufacturer warranty and our 30-day tech support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
