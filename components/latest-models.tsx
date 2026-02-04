import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const latestModels = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484bce71?q=80&w=800&auto=format&fit=crop",
    price: "₦1,450,000",
    link: "/products/smartphones/iphone-15-pro-max",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1707227156456-ef5a95899da2?q=80&w=800&auto=format&fit=crop",
    price: "₦1,350,000",
    link: "/products/smartphones/samsung-galaxy-s24-ultra",
  },
  {
    id: 3,
    name: "iPhone 16 Pro",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484bce71?q=80&w=800&auto=format&fit=crop",
    price: "₦1,250,000",
    link: "/products/smartphones/iphone-16-series",
  },
  {
    id: 4,
    name: "Samsung Galaxy Z Fold 5",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484bce71?q=80&w=800&auto=format&fit=crop",
    price: "₦1,850,000",
    link: "/products/smartphones/samsung-galaxy-z-fold-5",
  },
]

export default function LatestModels() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Models</h2>
          <Button variant="outline" asChild>
            <Link href="/products/smartphones">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestModels.map((model) => (
            <Link key={model.id} href={model.link} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={model.image || "/placeholder.svg"}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{model.name}</h3>
                  <p className="text-lg font-bold mt-2">{model.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
