export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  color?: string
  storage?: string
}

export interface Cart {
  items: CartItem[]
  lastUpdated: string
}

const CART_STORAGE_KEY = "ozeetech_cart"

export function getCart(): Cart {
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY)
    return cart ? JSON.parse(cart) : { items: [], lastUpdated: new Date().toISOString() }
  } catch {
    return { items: [], lastUpdated: new Date().toISOString() }
  }
}

export function saveCart(cart: Cart): void {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
}

export function addToCart(item: CartItem): Cart {
  const cart = getCart()
  const existingItem = cart.items.find((i) => i.id === item.id)

  if (existingItem) {
    existingItem.quantity += item.quantity
  } else {
    cart.items.push(item)
  }

  cart.lastUpdated = new Date().toISOString()
  saveCart(cart)
  return cart
}

export function removeFromCart(itemId: number): Cart {
  const cart = getCart()
  cart.items = cart.items.filter((i) => i.id !== itemId)
  cart.lastUpdated = new Date().toISOString()
  saveCart(cart)
  return cart
}

export function updateCartItemQuantity(itemId: number, quantity: number): Cart {
  const cart = getCart()
  const item = cart.items.find((i) => i.id === itemId)

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(itemId)
    }
    item.quantity = quantity
  }

  cart.lastUpdated = new Date().toISOString()
  saveCart(cart)
  return cart
}

export function clearCart(): void {
  localStorage.removeItem(CART_STORAGE_KEY)
}

export function getCartTotal(): number {
  const cart = getCart()
  return cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export function getCartItemCount(): number {
  const cart = getCart()
  return cart.items.reduce((count, item) => count + item.quantity, 0)
}
