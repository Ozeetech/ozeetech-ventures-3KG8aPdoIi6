"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(Array(images.length).fill(false))

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index)
  }

  const handleImageLoad = (index: number) => {
    const newLoadedState = [...imageLoaded]
    newLoadedState[index] = true
    setImageLoaded(newLoadedState)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Fallback image if the original fails to load
  const fallbackImage = "/placeholder.svg?height=600&width=600"

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
          {!imageLoaded[currentImage] && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
            </div>
          )}
          <img
            src={images[currentImage] || fallbackImage}
            alt={`${productName} - Image ${currentImage + 1}`}
            className="object-cover w-full h-full transition-opacity duration-300"
            style={{ opacity: imageLoaded[currentImage] ? 1 : 0 }}
            onLoad={() => handleImageLoad(currentImage)}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = fallbackImage
              handleImageLoad(currentImage)
            }}
          />

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Zoom button */}
          <button
            onClick={toggleFullscreen}
            className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
            aria-label="View fullscreen"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`aspect-square bg-muted rounded-lg overflow-hidden transition-all ${
                  index === currentImage ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image || fallbackImage}
                  alt={`${productName} - Thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = fallbackImage
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={images[currentImage] || fallbackImage}
              alt={`${productName} - Fullscreen Image ${currentImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = fallbackImage
              }}
            />

            {/* Navigation arrows for fullscreen */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
