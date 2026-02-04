import { Skeleton } from "@/components/ui/skeleton"

export default function SearchLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Skeleton */}
          <div className="hidden lg:block space-y-4">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>

          {/* Products Grid Skeleton */}
          <div className="lg:col-span-3">
            <Skeleton className="h-10 w-48 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <Skeleton key={i} className="h-64 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
