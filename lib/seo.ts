import { Metadata } from "next"

interface SEOParams {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "product"
}

export const generateMetadata = (params: SEOParams): Metadata => {
  const {
    title,
    description,
    keywords = [],
    image = "/images/ozeetech-official-logo.jpg",
    url = "https://ozeetech.vercel.app",
    type = "website",
  } = params

  return {
    title,
    description,
    keywords: [
      "Ozee Tech",
      "tech store",
      "Nigeria",
      "electronics",
      ...keywords,
    ],
    openGraph: {
      type: type as any,
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Ozee Tech Ventures",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@ozeetechgroups",
    },
    alternates: {
      canonical: url,
    },
  }
}

// Structured data for rich snippets
export const generateProductSchema = (product: {
  id: string | number
  name: string
  description: string
  price: number
  rating: number
  reviewCount: number
  image: string
  inStock: boolean
}) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Ozee Tech Ventures",
    },
    offers: {
      "@type": "Offer",
      url: `https://ozeetech.vercel.app/products/${product.id}`,
      priceCurrency: "USD",
      price: product.price,
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  }
}

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ozee Tech Ventures",
    url: "https://ozeetech.vercel.app",
    description: "Nigeria's Premier Technology Retailer",
    logo: "https://ozeetech.vercel.app/images/ozeetech-official-logo.jpg",
    sameAs: [
      "https://www.facebook.com/ozeetechgroups",
      "https://www.instagram.com/ozeetechgroups",
      "https://twitter.com/ozeetechgroups",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+234-816-608-4870",
      email: "support@ozeetech.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Computer Village Lagos & Ayobo Lagos",
      addressCountry: "NG",
    },
  }
}

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}
