'use client'

/**
 * High-quality fallback images from Unsplash
 * These images will display if product images fail to load
 */
export const FALLBACK_IMAGES = {
  smartphone: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop&crop=center',
  laptop: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop&crop=center',
  tablet: 'https://images.unsplash.com/photo-1526408529900-1c30b0c4fac0?w=500&h=500&fit=crop&crop=center',
  headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=center',
  speaker: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop&crop=center',
  camera: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&h=500&fit=crop&crop=center',
  gaming: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop&crop=center',
  watch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center',
  charger: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop&crop=center',
  cable: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop&crop=center',
  default: 'https://images.unsplash.com/photo-1523206489230-c012066a6fb0?w=500&h=500&fit=crop&crop=center',
}

/**
 * Determines the best fallback image based on product category
 */
export const getFallbackImage = (category?: string): string => {
  if (!category) return FALLBACK_IMAGES.default

  const categoryLower = category.toLowerCase()

  if (categoryLower.includes('phone') || categoryLower.includes('mobile')) {
    return FALLBACK_IMAGES.smartphone
  }
  if (categoryLower.includes('laptop') || categoryLower.includes('computer')) {
    return FALLBACK_IMAGES.laptop
  }
  if (categoryLower.includes('tablet')) {
    return FALLBACK_IMAGES.tablet
  }
  if (categoryLower.includes('headphone') || categoryLower.includes('ear')) {
    return FALLBACK_IMAGES.headphones
  }
  if (categoryLower.includes('speaker')) {
    return FALLBACK_IMAGES.speaker
  }
  if (categoryLower.includes('camera')) {
    return FALLBACK_IMAGES.camera
  }
  if (categoryLower.includes('game') || categoryLower.includes('console')) {
    return FALLBACK_IMAGES.gaming
  }
  if (categoryLower.includes('watch') || categoryLower.includes('wearable')) {
    return FALLBACK_IMAGES.watch
  }
  if (categoryLower.includes('charger') || categoryLower.includes('power')) {
    return FALLBACK_IMAGES.charger
  }
  if (categoryLower.includes('cable')) {
    return FALLBACK_IMAGES.cable
  }

  return FALLBACK_IMAGES.default
}

/**
 * Gets a safe image URL with fallback
 * Ensures images are always displayed, even if the primary URL fails
 */
export const getSafeImageUrl = (url: string | undefined, category?: string): string => {
  // Return local product images if available
  if (url && (url.startsWith('/images/products/') || url.startsWith('/'))) {
    return url
  }

  // Return external URLs that are valid
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    return url
  }

  // Return appropriate fallback image based on category
  return getFallbackImage(category)
}

/**
 * Optimizes image dimensions for different contexts
 */
export const getOptimizedImageUrl = (url: string, size: 'thumbnail' | 'medium' | 'large' = 'medium'): string => {
  if (!url.startsWith('http')) {
    return url
  }

  // For Unsplash URLs, we can optimize by adjusting query params
  const sizes = {
    thumbnail: 'w=100&h=100',
    medium: 'w=300&h=300',
    large: 'w=600&h=600',
  }

  // Add optimization params if not already present
  if (!url.includes('w=')) {
    const separator = url.includes('?') ? '&' : '?'
    return `${url}${separator}${sizes[size]}&fit=crop&crop=center`
  }

  return url
}
