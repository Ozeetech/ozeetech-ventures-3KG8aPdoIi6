// JSON-LD Schema Markup for SEO and Rich Snippets
// This file generates structured data for search engines and social media

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.ozeetechventures.com/#organization",
    name: "Ozee Tech Ventures",
    url: "https://www.ozeetechventures.com",
    logo: "https://www.ozeetechventures.com/images/ozeetech-official-logo.jpg",
    description:
      "Nigeria's most trusted technology retailer since 2009. Shop authentic smartphones, laptops, tablets, and tech accessories.",
    sameAs: [
      "https://www.facebook.com/ozeetechgroups",
      "https://www.instagram.com/ozeetechgroups",
      "https://twitter.com/ozeetechgroups",
      "https://wa.me/2349069178853",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-906-917-8853",
      contactType: "Customer Service",
      email: "support@ozeetechventures.com",
      availableLanguage: ["en-NG"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Computer Village, Lagos & Ayobo, Lagos",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      postalCode: "100001",
      addressCountry: "NG",
    },
    areaServed: "NG",
    priceRange: "₦5,000 - ₦5,000,000",
    image: [
      "https://www.ozeetechventures.com/images/ozeetech-official-logo.jpg",
      "https://www.ozeetechventures.com/images/ozeetech-signpost.jpg",
    ],
    knowsAbout: [
      "smartphones",
      "laptops",
      "tablets",
      "headphones",
      "cameras",
      "gaming equipment",
      "wearables",
      "tech accessories",
    ],
    founder: {
      "@type": "Person",
      name: "Ozee Tech Ventures",
    },
    foundingDate: "2009",
    parentOrganization: {
      "@type": "Organization",
      name: "Ozee Tech Ventures Nigeria",
    },
  }
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ozeetechventures.com/#localbusiness",
    name: "Ozee Tech Ventures",
    image: "https://www.ozeetechventures.com/images/ozeetech-official-logo.jpg",
    url: "https://www.ozeetechventures.com",
    telephone: "+234-906-917-8853",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Computer Village, Lagos",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      postalCode: "100001",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.5244",
      longitude: "3.3792",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "17:00",
      },
    ],
    priceRange: "₦5,000 - ₦5,000,000",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/ozeetechgroups",
      "https://www.instagram.com/ozeetechgroups",
      "https://twitter.com/ozeetechgroups",
    ],
  }
}

export function getECommerceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "@id": "https://www.ozeetechventures.com/#ecommerce",
    name: "Ozee Tech Ventures",
    url: "https://www.ozeetechventures.com",
    description:
      "Nigeria's premier technology e-commerce store offering authentic electronics and accessories.",
    image: "https://www.ozeetechventures.com/images/ozeetech-official-logo.jpg",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "NGN",
      priceRange: "5000-5000000",
      availability: "https://schema.org/InStock",
    },
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Mobile Money"],
    areaServed: "NG",
    shippingDetails: {
      "@type": "DeliveryChargeSpecification",
      areaServed: "NG",
      eligibleTransactionVolume: {
        "@type": "PriceSpecification",
        priceCurrency: "NGN",
        price: "9.99",
      },
    },
  }
}

export function getProductSchema(product: {
  id: string
  name: string
  description: string
  image: string
  price: number
  originalPrice?: number
  rating?: number
  reviewCount?: number
  inStock: boolean
  category: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://www.ozeetechventures.com/products/${product.id}#product`,
    name: product.name,
    description: product.description,
    image: product.image,
    url: `https://www.ozeetechventures.com/products/${product.id}`,
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `https://www.ozeetechventures.com/products/${product.id}`,
      priceCurrency: "NGN",
      price: product.price.toString(),
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Ozee Tech Ventures",
        url: "https://www.ozeetechventures.com",
      },
    },
    ...(product.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating.toString(),
        reviewCount: product.reviewCount?.toString() || "0",
        bestRating: "5",
        worstRating: "1",
      },
    }),
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: (index + 1).toString(),
      name: item.name,
      item: item.url,
    })),
  }
}

export function getWebPageSchema(page: {
  title: string
  description: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.url}#webpage`,
    name: page.title,
    description: page.description,
    url: page.url,
    ...(page.image && { image: page.image }),
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.ozeetechventures.com/#website",
      name: "Ozee Tech Ventures",
      url: "https://www.ozeetechventures.com",
    },
    mainEntity: {
      "@type": "Organization",
      name: "Ozee Tech Ventures",
      url: "https://www.ozeetechventures.com",
    },
  }
}
