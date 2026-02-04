# Ozee Tech Ventures - Implementation Guide

## Quick Reference for Developers

---

## 1. HOW TO USE NGN CURRENCY CONVERSION

### Basic Usage
```typescript
import { convertUSDToNGN, formatNGN } from "@/lib/currency"

// Convert and format
const usdPrice = 799.99
const ngnPrice = convertUSDToNGN(usdPrice)  // Returns: 1,239,985 (approx)
const formatted = formatNGN(ngnPrice)       // Returns: "₦1,239,985"

// Or in one line
import { getDisplayPrice } from "@/lib/currency"
const display = getDisplayPrice(799.99)     // Returns: "₦1,239,985"
```

### In React Components
```typescript
'use client'

import { formatNGN, convertUSDToNGN } from "@/lib/currency"

export function PriceDisplay({ usdPrice }: { usdPrice: number }) {
  return (
    <div>
      <p className="text-2xl font-bold">
        {formatNGN(convertUSDToNGN(usdPrice))}
      </p>
    </div>
  )
}
```

### Updating Exchange Rate
**File: `/lib/currency.ts` (Line 3)**
```typescript
// Old rate
const USD_TO_NGN_RATE = 1550

// New rate (update here only)
const USD_TO_NGN_RATE = 1600  // Changes all prices site-wide
```

---

## 2. HOW TO USE IMAGE HANDLER

### Importing
```typescript
import { getSafeImageUrl, getFallbackImage } from "@/lib/image-handler"
```

### Safe Image Loading
```typescript
// Get safe URL with fallback
const imageUrl = getSafeImageUrl(productImage, "smartphone")

// In JSX
<img 
  src={getSafeImageUrl(image, category)}
  alt={name}
  onError={(e) => {
    e.currentTarget.src = getSafeImageUrl(undefined, category)
  }}
/>
```

### Category-Based Fallbacks
```typescript
// Automatically selects best fallback based on category
getSafeImageUrl(undefined, "laptop")        // → MacBook image
getSafeImageUrl(undefined, "headphones")    // → Headphones image
getSafeImageUrl(undefined, "smartwatch")    // → Watch image
getSafeImageUrl(undefined, "unknown")       // → Generic fallback
```

### Optimizing Images
```typescript
import { getOptimizedImageUrl } from "@/lib/image-handler"

// Get optimized URL for different sizes
const thumbUrl = getOptimizedImageUrl(imageUrl, "thumbnail")  // 100x100
const mediumUrl = getOptimizedImageUrl(imageUrl, "medium")    // 300x300
const largeUrl = getOptimizedImageUrl(imageUrl, "large")      // 600x600
```

---

## 3. RESPONSIVE BUTTON PATTERNS

### Button Sizing
```typescript
import { Button } from "@/components/ui/button"

// Small button
<Button size="sm">Small</Button>  // 8px mobile, 9px desktop

// Default button
<Button>Default</Button>  // 10px mobile, 10px desktop

// Large button
<Button size="lg">Large</Button>  // 11px mobile, 12px desktop

// Icon button
<Button size="icon">
  <Heart className="w-4 h-4" />
</Button>
```

### Responsive Full-Width Button
```typescript
// Full width on mobile, auto on desktop
<Button className="w-full sm:w-auto">
  Proceed to Checkout
</Button>
```

### Action Button Group
```typescript
<div className="flex gap-2">
  <Button className="flex-1">Primary Action</Button>
  <Button variant="outline" className="flex-1 bg-transparent">Secondary</Button>
</div>
```

### Touch-Friendly Button
```typescript
// Minimum 44x44px for touch targets
<Button 
  size="icon" 
  className="h-11 w-11"
  title="Add to wishlist"
>
  <Heart className="w-5 h-5" />
</Button>
```

---

## 4. PRODUCT PRICING EXAMPLES

### Cart Item
```typescript
function CartItem({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p className="font-bold">
        {formatNGN(convertUSDToNGN(item.price * item.quantity))}
      </p>
    </div>
  )
}
```

### Order Total
```typescript
function OrderSummary({ subtotal, tax, shipping }) {
  const total = subtotal + tax + shipping
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{formatNGN(convertUSDToNGN(subtotal))}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax</span>
        <span>{formatNGN(convertUSDToNGN(tax))}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping</span>
        <span>{formatNGN(convertUSDToNGN(shipping))}</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>{formatNGN(convertUSDToNGN(total))}</span>
      </div>
    </div>
  )
}
```

### Discount Display
```typescript
function PriceWithDiscount({ original, current }) {
  const savings = original - current
  const discountPercent = Math.round(((savings) / original) * 100)
  
  return (
    <div>
      <p className="text-xl font-bold">
        {formatNGN(convertUSDToNGN(current))}
      </p>
      <p className="text-sm text-muted-foreground line-through">
        {formatNGN(convertUSDToNGN(original))}
      </p>
      <p className="text-sm text-green-600">
        Save {formatNGN(convertUSDToNGN(savings))} ({discountPercent}% off)
      </p>
    </div>
  )
}
```

---

## 5. RESPONSIVE LAYOUT PATTERNS

### Mobile-First Grid
```tsx
// Single column on mobile, 2 columns on desktop
<div className="grid lg:grid-cols-2 gap-4 md:gap-6">
  <div>Content 1</div>
  <div>Content 2</div>
</div>
```

### Responsive Typography
```tsx
<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
  Heading
</h1>

<p className="text-sm sm:text-base md:text-lg">
  Paragraph
</p>
```

### Responsive Padding
```tsx
<div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
  Content
</div>
```

### Responsive Flex
```tsx
// Stack on mobile, side-by-side on desktop
<div className="flex flex-col sm:flex-row gap-4">
  <div className="flex-1">Item 1</div>
  <div className="flex-1">Item 2</div>
</div>
```

---

## 6. IMAGE IMPLEMENTATION CHECKLIST

When adding product images:

- [ ] Import `getSafeImageUrl` from `/lib/image-handler`
- [ ] Set image category (smartphone, laptop, camera, etc.)
- [ ] Add `onError` handler for fallback
- [ ] Test with broken image URL
- [ ] Verify fallback image displays
- [ ] Test on mobile (small viewport)
- [ ] Test on desktop (large viewport)
- [ ] Check browser DevTools (Network → Images)

---

## 7. PRICE DISPLAY CHECKLIST

When displaying prices:

- [ ] Import currency functions: `convertUSDToNGN`, `formatNGN`
- [ ] Wrap all USD prices in conversion function
- [ ] Display in NGN format using `formatNGN()`
- [ ] Update totals/calculations with converted values
- [ ] Test with different price points
- [ ] Verify tax calculations use converted values
- [ ] Check discount calculations
- [ ] Test in cart, checkout, and orders pages

---

## 8. BUTTON IMPLEMENTATION CHECKLIST

When implementing buttons:

- [ ] Use appropriate size: `sm`, `default`, or `lg`
- [ ] Add responsive classes for mobile/desktop
- [ ] Ensure minimum touch target (44x44px)
- [ ] Add descriptive `title` attribute for icons
- [ ] Test hover, focus, and active states
- [ ] Test on touch devices
- [ ] Verify button text is readable on all sizes
- [ ] Check disabled state styling
- [ ] Test keyboard navigation (Tab key)

---

## 9. COMMON PATTERNS

### Price with Currency Conversion
```typescript
const displayPrice = (usdPrice: number) => {
  return formatNGN(convertUSDToNGN(usdPrice))
}

// Usage
<span className="text-xl font-bold">
  {displayPrice(product.price)}
</span>
```

### Product Image with Fallback
```typescript
const productImage = (image: string, category: string) => {
  return (
    <img
      src={getSafeImageUrl(image, category)}
      alt="Product"
      onError={(e) => {
        e.currentTarget.src = getSafeImageUrl(undefined, category)
      }}
      className="w-full h-full object-cover"
    />
  )
}
```

### Responsive Button Row
```typescript
<div className="flex gap-2 sm:gap-4">
  <Button className="flex-1 sm:flex-auto">Action 1</Button>
  <Button className="flex-1 sm:flex-auto bg-transparent" variant="outline">Action 2</Button>
</div>
```

---

## 10. TESTING URLS

### Test Images (Known Good)
```
https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop
https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop
```

### Test Currency
```typescript
// Should display as ₦1,239,985
formatNGN(convertUSDToNGN(799.99))

// Should display as ₦389,950
formatNGN(convertUSDToNGN(251.90))
```

---

**Last Updated:** January 28, 2026
**Version:** 1.0
**Status:** Production Ready
