"use client"

import Script from "next/script"

interface GoogleAnalyticsProps {
  measurementId?: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const gtagId = measurementId || process.env.NEXT_PUBLIC_ANALYTICS_KEY

  if (!gtagId) {
    console.warn(
      "[v0] Google Analytics ID not configured. Please set NEXT_PUBLIC_ANALYTICS_KEY environment variable."
    )
    return null
  }

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        onLoad={() => {
          if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
              event: "page_view",
              page_path: window.location.pathname,
              page_title: document.title,
              measurement_id: gtagId,
            })
          }
        }}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagId}', {
              page_path: window.location.pathname,
              send_page_view: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: true
            });
          `,
        }}
      />

      {/* Google Site Verification - Add your verification code */}
      <meta
        name="google-site-verification"
        content="google-verification-code-here"
      />

      {/* Preconnect to Google Analytics */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
    </>
  )
}

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
