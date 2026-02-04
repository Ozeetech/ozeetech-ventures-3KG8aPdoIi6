# Paystack E-Commerce Integration Guide

Complete setup for professional e-commerce with Paystack payments, user authentication, and dashboard.

## Quick Start

### 1. Environment Variables Setup

Add these variables to your Vercel project or `.env.local`:

```env
# Paystack API Keys
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key_here
PAYSTACK_SECRET_KEY=your_paystack_secret_key_here

# App URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Supabase (Already configured)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

### 2. Get Your Paystack Keys

1. Go to https://dashboard.paystack.com
2. Sign up or log in to your account
3. Navigate to **Settings → API Keys & Webhooks**
4. Copy your **Public Key** and **Secret Key**
5. Add them to your environment variables

### 3. User Authentication Flow

#### Register
- URL: `/auth/register`
- Uses Supabase Auth for secure user registration
- Stores user data with email and password

#### Login
- URL: `/auth/login`
- Integrates with Supabase Auth
- Creates session and redirects to dashboard

#### Dashboard
- URL: `/dashboard`
- Protected route (redirects to login if not authenticated)
- Shows user profile, cart, orders, and settings

### 4. Shopping Cart Management

The cart system uses localStorage for client-side persistence:

```typescript
// Add item to cart
import { addToCart } from "@/lib/cart"

addToCart({
  id: 1,
  name: "Product Name",
  price: 799.99,
  quantity: 1,
  image: "image-url"
})

// Get cart total
import { getCartTotal } from "@/lib/cart"
const total = getCartTotal()

// Clear cart (after successful payment)
import { clearCart } from "@/lib/cart"
clearCart()
```

### 5. Payment Processing Flow

#### Step 1: Initialize Payment
```typescript
// In checkout page
const response = await fetch("/api/payment/initialize", {
  method: "POST",
  body: JSON.stringify({
    email: user.email,
    amount: totalAmount,
    orderId: "ORD-001",
    userId: user.id,
    cartItems: cartItems
  })
})
```

#### Step 2: Redirect to Paystack
- User is automatically redirected to Paystack payment page
- They enter card details and complete payment
- Paystack redirects back to your callback URL

#### Step 3: Verify Payment
```typescript
// In payment callback page
const response = await fetch("/api/payment/verify", {
  method: "POST",
  body: JSON.stringify({ reference: paymentReference })
})
```

#### Step 4: Order Confirmation
- Payment verified successfully
- Order is created
- User is redirected to order details page
- Cart is cleared

### 6. Complete User Journey

1. **Browse Products**
   - Homepage: `/`
   - Products: `/products`
   - Product Details: `/products/[category]/[id]`

2. **Add to Cart & Manage Cart**
   - Cart Page: `/cart`
   - View items, update quantities, remove items
   - See order summary with NGN pricing

3. **Checkout**
   - Shipping Info: `/checkout` (Step 1)
   - Payment Method: `/checkout` (Step 2)
   - Order Review: `/checkout` (Step 3)
   - Confirm Order → Redirect to Paystack

4. **Payment**
   - Paystack Payment Page
   - User pays securely
   - Redirected to `/payment/callback?reference=XXX`

5. **Order Confirmation**
   - Verify payment
   - Create order in database
   - Show success page
   - Email confirmation (optional)

6. **User Dashboard**
   - View active cart
   - View order history
   - Track order status
   - Update profile

### 7. API Endpoints

#### Payment Initialization
- **POST** `/api/payment/initialize`
- Request: `{ email, amount, orderId, userId, cartItems }`
- Response: `{ authorization_url, access_code, reference }`

#### Payment Verification
- **POST** `/api/payment/verify`
- Request: `{ reference }`
- Response: `{ success, amount, status, email }`

### 8. Database Setup (Supabase)

Run this SQL in your Supabase console to create tables:

```sql
-- Users table (auto-created by Supabase Auth)

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  reference VARCHAR(255) UNIQUE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'NGN',
  status VARCHAR(50) DEFAULT 'pending',
  items JSONB,
  shipping_address JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id),
  reference VARCHAR(255) UNIQUE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  method VARCHAR(50) DEFAULT 'paystack',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cart items table (optional, for persistent cart)
CREATE TABLE cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  product_id INTEGER NOT NULL,
  quantity INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 9. Testing Payment

#### Test Cards
Paystack provides test cards:
- Card: `4084084084084081`
- Expiry: `12/25`
- CVV: `123`
- OTP: `123456`

#### Test Flow
1. Register test account
2. Add products to cart
3. Go to checkout
4. Enter test card details
5. Verify payment succeeds
6. Check order confirmation

### 10. Security Checklist

- [ ] All API keys in environment variables
- [ ] Database Row-Level Security (RLS) enabled for user data
- [ ] Payment verification always done server-side
- [ ] HTTPS enforced
- [ ] CORS properly configured
- [ ] Rate limiting on payment endpoints
- [ ] Email verification for new accounts
- [ ] Password reset functionality

### 11. Production Deployment

1. **Use Live Paystack Keys**
   - Get from Paystack dashboard (not test keys)
   - Set in Vercel environment variables

2. **Database Migrations**
   - Run all SQL scripts in production Supabase
   - Enable backups and point-in-time recovery

3. **Email Notifications**
   - Set up order confirmation emails
   - Payment receipt emails
   - Shipping notifications

4. **Monitoring**
   - Set up error tracking (Sentry)
   - Monitor payment success rate
   - Log all transactions

5. **Webhook Setup (Optional)**
   - Configure Paystack webhooks for real-time updates
   - Handle payment status changes
   - Send order notifications

### 12. File Structure

```
/app
  /auth
    /login
    /register
  /dashboard
  /checkout
  /cart
  /payment
    /callback
  /api
    /payment
      /initialize
      /verify

/components
  /paystack-payment.tsx

/lib
  /paystack.ts       - Paystack API calls
  /auth.ts           - Supabase authentication
  /cart.ts           - Cart management
  /currency.ts       - Currency conversion (USD to NGN)
```

### 13. Troubleshooting

**Payment not initializing:**
- Check Paystack keys are correct
- Verify environment variables are set
- Check network requests in browser DevTools

**Payment verification fails:**
- Ensure reference is correct
- Check Paystack API status
- Verify secret key is correct

**User can't log in:**
- Check Supabase credentials
- Verify user registration worked
- Clear browser cookies and cache

**Cart not persisting:**
- Check localStorage is enabled
- Verify browser privacy settings
- Check console for storage errors

### 14. Next Steps

1. Set up Supabase tables (copy-paste SQL above)
2. Add Paystack keys to environment
3. Test payment flow with test cards
4. Set up email notifications
5. Configure webhooks for production
6. Deploy to production
7. Switch to live Paystack keys

## Support

- Paystack Docs: https://paystack.com/docs
- Supabase Docs: https://supabase.com/docs
- This app uses Next.js 14+, React 18+, TypeScript

For issues, check the implementation in `/lib` folder for utilities and `/app/api` for endpoints.
