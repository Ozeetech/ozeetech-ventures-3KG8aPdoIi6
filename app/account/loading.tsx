import { Skeleton } from "@/components/ui/skeleton"

export default function AccountLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/40 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full" />
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <Skeleton className="h-8 w-48" />
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-24 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
