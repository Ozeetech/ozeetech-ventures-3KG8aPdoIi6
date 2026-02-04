'use client'

// Exchange rate: 1 USD = 1550 NGN (adjust as needed)
const USD_TO_NGN_RATE = 1550

export const convertUSDToNGN = (usdAmount: number): number => {
  return Math.round(usdAmount * USD_TO_NGN_RATE)
}

export const formatNGN = (amount: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const formatUSD = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export const getDisplayPrice = (usdPrice: number): string => {
  const ngnPrice = convertUSDToNGN(usdPrice)
  return formatNGN(ngnPrice)
}

export const getPriceValue = (usdPrice: number): number => {
  return convertUSDToNGN(usdPrice)
}

// For display purposes - show both currencies
export const getDualCurrencyPrice = (usdPrice: number): { ngn: string; usd: string } => {
  return {
    ngn: formatNGN(convertUSDToNGN(usdPrice)),
    usd: formatUSD(usdPrice),
  }
}
