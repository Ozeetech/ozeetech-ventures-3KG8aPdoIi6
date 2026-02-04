import { Skeleton } from "@/components/ui/skeleton"

export default function CartLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <Skeleton className="h-8 w-32 mb-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-28 w-full" />
            ))}
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
