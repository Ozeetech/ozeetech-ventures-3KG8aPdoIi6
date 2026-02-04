import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FlagshipShowcase() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Flagship Devices</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* iPhone Showcase */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/products/iphone-15-pro-max.jpg"
                alt="Latest iPhone models"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">iPhone Collection</h3>
              <p className="mb-4 text-white/90">
                Discover the latest iPhone models with powerful features and stunning design.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 w-fit" asChild>
                <Link href="/products/smartphones/brands/apple">
                  Explore iPhones <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Samsung Showcase */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/products/samsung-s24-ultra.jpg"
                alt="Samsung Galaxy smartphones"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Samsung Galaxy</h3>
              <p className="mb-4 text-white/90">
                Experience the next generation of mobile technology with Samsung's flagship devices.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 w-fit" asChild>
                <Link href="/products/smartphones/brands/samsung">
                  Explore Samsung <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
