import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import OnlineChatWidget from "@/components/online-chat-widget"
import { SchemaMarkup } from "@/components/schema-markup"
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ef4444" },
    { media: "(prefers-color-scheme: dark)", color: "#ef4444" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ozeetechventures.com"),
  title: {
    default: "Ozee Tech Ventures - Nigeria's Premier Technology Retailer | A Brand You Can Trust",
    template: "%s | Ozee Tech Ventures",
  },
  description:
    "Nigeria's most trusted technology retailer since 2009. Shop authentic smartphones, laptops, tablets, and tech accessories with same-day delivery, 30-day tech support, and 100% original products. Located in Computer Village Lagos and Ayobo Lagos.",
  keywords: [
    "Nigeria tech store",
    "Computer Village Lagos",
    "iPhone Nigeria",
    "MacBook Nigeria",
    "Samsung Galaxy Nigeria",
    "tech accessories Nigeria",
    "same day delivery Lagos",
    "original tech products",
    "Ozee Tech Ventures",
    "smartphone Nigeria",
    "laptop Nigeria",
    "tablet Nigeria",
    "tech support Nigeria",
    "authentic tech products",
    "technology retailer Nigeria",
    "electronics store Lagos",
    "best tech shop Nigeria",
  ],
  authors: [{ name: "Ozee Tech Ventures", url: "https://www.ozeetechventures.com" }],
  creator: "Ozee Tech Ventures",
  publisher: "Ozee Tech Ventures",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.ozeetechventures.com",
    siteName: "Ozee Tech Ventures",
    title: "Ozee Tech Ventures - Nigeria's Premier Technology Retailer",
    description:
      "Nigeria's most trusted technology retailer since 2009. Shop authentic tech products with same-day delivery and professional support.",
    images: [
      {
        url: "https://www.ozeetechventures.com/images/ozeetech-official-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Ozee Tech Ventures - A Brand You Can Trust",
        type: "image/jpeg",
      },
      {
        url: "https://www.ozeetechventures.com/images/ozeetech-signpost.jpg",
        width: 1200,
        height: 630,
        alt: "Ozee Tech Ventures Store - Sales, Swap, Repairs",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozee Tech Ventures - Nigeria's Premier Technology Retailer",
    description:
      "Nigeria's most trusted technology retailer since 2009. Shop authentic tech products with same-day delivery.",
    images: ["https://www.ozeetechventures.com/images/ozeetech-official-logo.jpg"],
    creator: "@ozeetechgroups",
    site: "@ozeetechgroups",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noodp: true,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-verification-code",
    yandex: "yandex-verification-code",
  },
  alternates: {
    canonical: "https://www.ozeetechventures.com",
    languages: {
      "en-US": "https://www.ozeetechventures.com/en-US",
      "en-NG": "https://www.ozeetechventures.com",
    },
  },
  category: "shopping",
  classification: "E-Commerce Business",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", rel: "apple-touch-icon" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#ef4444",
    "msapplication-TileImage": "/icon-192.png",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Ozee Tech",
    "mobile-web-app-capable": "yes",
    "theme-color": "#ef4444",
    "og:country": "NG",
    "og:region": "Lagos",
    "og:locality": "Computer Village",
    "og:type": "business.business",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect and DNS Prefetch */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ozee Tech" />
        <meta name="application-name" content="Ozee Tech Ventures" />
        <meta name="msapplication-TileColor" content="#ef4444" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ef4444" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.ozeetechventures.com" />

        {/* Alternate Links */}
        <link rel="alternate" hrefLang="en-NG" href="https://www.ozeetechventures.com" />
        <link rel="alternate" hrefLang="en" href="https://www.ozeetechventures.com" />

        {/* JSON-LD Schema Markup */}
        <SchemaMarkup type="organization" />
        <SchemaMarkup type="localBusiness" />
        <SchemaMarkup type="ecommerce" />

        {/* Google Analytics */}
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <BackToTop />
        <OnlineChatWidget />
      </body>
    </html>
  )
}
