// Analytics utility functions for tracking user interactions and performance

interface AnalyticsEvent {
  name: string
  properties?: Record<string, unknown>
  timestamp?: number
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window === "undefined") return

  const eventData = {
    ...event,
    timestamp: event.timestamp || Date.now(),
    url: typeof window !== "undefined" ? window.location.pathname : "",
  }

  // Store events locally for batch processing
  const events = JSON.parse(localStorage.getItem("ozeetech_analytics_events") || "[]")
  events.push(eventData)

  // Keep only last 100 events
  if (events.length > 100) {
    events.shift()
  }

  localStorage.setItem("ozeetech_analytics_events", JSON.stringify(events))

  // Send to analytics service (if configured)
  try {
    // This would connect to your analytics backend
    if (process.env.NEXT_PUBLIC_ANALYTICS_KEY) {
      // Send to external service
    }
  } catch (error) {
    console.error("[Analytics] Failed to send event:", error)
  }
}

// Track page views
export const trackPageView = (pageName: string) => {
  trackEvent({
    name: "page_view",
    properties: {
      page: pageName,
      referrer: typeof document !== "undefined" ? document.referrer : "",
    },
  })
}

// Track product views
export const trackProductView = (productId: string | number, productName: string) => {
  trackEvent({
    name: "product_view",
    properties: {
      product_id: productId,
      product_name: productName,
    },
  })
}

// Track add to cart
export const trackAddToCart = (productId: string | number, productName: string, price: number) => {
  trackEvent({
    name: "add_to_cart",
    properties: {
      product_id: productId,
      product_name: productName,
      price,
    },
  })
}

// Track checkout
export const trackCheckout = (total: number, itemCount: number) => {
  trackEvent({
    name: "checkout_started",
    properties: {
      total,
      item_count: itemCount,
    },
  })
}

// Track purchase
export const trackPurchase = (orderId: string, total: number, items: unknown[]) => {
  trackEvent({
    name: "purchase",
    properties: {
      order_id: orderId,
      total,
      items_count: items.length,
    },
  })
}

// Track search
export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent({
    name: "search",
    properties: {
      query,
      results_count: resultsCount,
    },
  })
}

// Performance metrics
export const trackPerformance = () => {
  if (typeof window === "undefined") return

  if ("performance" in window) {
    const perfData = window.performance.timing
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
    const connectTime = perfData.responseEnd - perfData.requestStart
    const renderTime = perfData.domComplete - perfData.domLoading

    trackEvent({
      name: "performance_metrics",
      properties: {
        page_load_time: pageLoadTime,
        connect_time: connectTime,
        render_time: renderTime,
      },
    })
  }
}

// User session tracking
export const initializeSession = () => {
  if (typeof window === "undefined") return

  const sessionId = localStorage.getItem("ozeetech_session_id") || Math.random().toString(36).substr(2, 9)
  localStorage.setItem("ozeetech_session_id", sessionId)

  trackEvent({
    name: "session_start",
    properties: {
      session_id: sessionId,
    },
  })

  return sessionId
}

// Get stored analytics events
export const getAnalyticsEvents = () => {
  if (typeof window === "undefined") return []
  return JSON.parse(localStorage.getItem("ozeetech_analytics_events") || "[]")
}

// Clear analytics events
export const clearAnalyticsEvents = () => {
  if (typeof window === "undefined") return
  localStorage.removeItem("ozeetech_analytics_events")
}
