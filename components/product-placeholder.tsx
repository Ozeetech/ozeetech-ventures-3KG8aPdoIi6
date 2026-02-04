import { cn } from "@/lib/utils"

interface ProductPlaceholderProps {
  productName: string
  className?: string
  width?: number
  height?: number
}

export function ProductPlaceholder({ productName, className, width = 400, height = 300 }: ProductPlaceholderProps) {
  // Generate a color based on product name
  const getColorFromName = (name: string) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600",
      "from-green-500 to-green-600",
      "from-red-500 to-red-600",
      "from-yellow-500 to-yellow-600",
      "from-indigo-500 to-indigo-600",
      "from-pink-500 to-pink-600",
      "from-gray-500 to-gray-600",
    ]

    let hash = 0
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash)
    }

    return colors[Math.abs(hash) % colors.length]
  }

  const gradientClass = getColorFromName(productName)
  const words = productName.split(" ")

  return (
    <div
      className={cn(
        `relative flex items-center justify-center bg-gradient-to-br ${gradientClass} text-white rounded-lg overflow-hidden`,
        className,
      )}
      style={{ width, height }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-4">
        <div className="space-y-1">
          {words.map((word, index) => (
            <div key={index} className={cn("font-bold text-white", words.length === 1 ? "text-2xl" : "text-lg")}>
              {word}
            </div>
          ))}
        </div>

        {/* Decorative Icon */}
        <div className="mt-3 flex justify-center">
          <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
