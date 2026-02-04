export const getAccurateProductImage = (product: any) => {
  // Map product names to specific image URLs
  const imageMap: Record<string, string> = {
    // iPhones
    "iPhone 15 Pro Max": "/images/products/iphone-15-pro-max.jpg",
    "iPhone 15 Pro": "/images/products/iphone-15-pro.jpg",
    "iPhone 15": "/images/products/iphone-15.jpg",
    "iPhone 15 Plus": "/images/products/iphone-15-plus.jpg",
    "iPhone 14 Pro Max": "/images/products/iphone-14-pro-max.jpg",
    "iPhone 14 Pro": "/images/products/iphone-14-pro.jpg",
    "iPhone 14": "/images/products/iphone-14.jpg",
    "iPhone 14 Plus": "/images/products/iphone-14-plus.jpg",
    "iPhone 13 Pro Max": "/images/products/iphone-13-pro-max.jpg",
    "iPhone 13 Pro": "/images/products/iphone-13-pro.jpg",
    "iPhone 13": "/images/products/iphone-13.jpg",
    "iPhone 13 Mini": "/images/products/iphone-13-mini.jpg",
    "iPhone SE (2022)": "/images/products/iphone-se-2022.jpg",

    // Samsung Galaxy
    "Samsung Galaxy S24 Ultra": "/images/products/samsung-s24-ultra.jpg",
    "Samsung Galaxy S24+": "/images/products/samsung-s24-plus.jpg",
    "Samsung Galaxy S24": "/images/products/samsung-s24.jpg",
    "Samsung Galaxy S23 Ultra": "/images/products/samsung-s23-ultra.jpg",
    "Samsung Galaxy S23+": "/images/products/samsung-s23-plus.jpg",
    "Samsung Galaxy S23": "/images/products/samsung-s23.jpg",
    "Samsung Galaxy Z Fold 5": "/images/products/samsung-z-fold-5.jpg",
    "Samsung Galaxy Z Flip 5": "/images/products/samsung-z-flip-5.jpg",
    "Samsung Galaxy A54": "/images/products/samsung-a54.jpg",
    "Samsung Galaxy A34": "/images/products/samsung-a34.jpg",

    // Google Pixel
    "Google Pixel 8 Pro": "/images/products/pixel-8-pro.jpg",
    "Google Pixel 8": "/images/products/pixel-8.jpg",
    "Google Pixel 7a": "/images/products/pixel-7a.jpg",
    "Google Pixel Fold": "/images/products/pixel-fold.jpg",

    // Xiaomi
    "Xiaomi 14 Ultra": "/images/products/xiaomi-14-ultra.jpg",
    "Xiaomi 14": "/images/products/xiaomi-14.jpg",
    "Xiaomi 13T Pro": "/images/products/xiaomi-13t-pro.jpg",
    "Xiaomi Redmi Note 13 Pro+": "/images/products/redmi-note-13-pro-plus.jpg",

    // OnePlus
    "OnePlus 12": "/images/products/oneplus-12.jpg",
    "OnePlus 12R": "/images/products/oneplus-12r.jpg",
    "OnePlus Nord 3": "/images/products/oneplus-nord-3.jpg",

    // Laptops
    'MacBook Pro 16" M3 Max': "/images/products/macbook-pro-16-m3-max.jpg",
    'MacBook Pro 14" M3 Pro': "/images/products/macbook-pro-14-m3-pro.jpg",
    'MacBook Air 15" M2': "/images/products/macbook-air-15-m2.jpg",
    'MacBook Air 13" M2': "/images/products/macbook-air-13-m2.jpg",
    "Dell XPS 15": "/images/products/dell-xps-15.jpg",
    "Dell XPS 13": "/images/products/dell-xps-13.jpg",
    "HP Spectre x360": "/images/products/hp-spectre-x360.jpg",
    "Lenovo ThinkPad X1 Carbon": "/images/products/lenovo-thinkpad-x1.jpg",
    "Asus ROG Zephyrus G14": "/images/products/asus-rog-zephyrus-g14.jpg",
    "Microsoft Surface Laptop 5": "/images/products/surface-laptop-5.jpg",

    // Tablets
    'iPad Pro 12.9" M2': "/images/products/ipad-pro-12-9-m2.jpg",
    'iPad Pro 11" M2': "/images/products/ipad-pro-11-m2.jpg",
    "iPad Air M1": "/images/products/ipad-air-m1.jpg",
    "iPad (10th gen)": "/images/products/ipad-10th-gen.jpg",
    "iPad Mini (6th gen)": "/images/products/ipad-mini-6.jpg",
    "Samsung Galaxy Tab S9 Ultra": "/images/products/galaxy-tab-s9-ultra.jpg",
    "Samsung Galaxy Tab S9+": "/images/products/galaxy-tab-s9-plus.jpg",
    "Samsung Galaxy Tab S9": "/images/products/galaxy-tab-s9.jpg",
    "Microsoft Surface Pro 9": "/images/products/surface-pro-9.jpg",

    // Headphones
    "Apple AirPods Pro 2": "/images/products/airpods-pro-2.jpg",
    "Apple AirPods Max": "/images/products/airpods-max.jpg",
    "Sony WH-1000XM5": "/images/products/sony-wh-1000xm5.jpg",
    "Sony WF-1000XM5": "/images/products/sony-wf-1000xm5.jpg",
    "Bose QuietComfort Ultra": "/images/products/bose-qc-ultra.jpg",
    "Bose QuietComfort Earbuds II": "/images/products/bose-qc-earbuds-2.jpg",
    "Sennheiser Momentum 4": "/images/products/sennheiser-momentum-4.jpg",
    "Samsung Galaxy Buds 3 Pro": "/images/products/galaxy-buds-3-pro.jpg",

    // Speakers
    "Sonos Era 300": "/images/products/sonos-era-300.jpg",
    "Sonos Era 100": "/images/products/sonos-era-100.jpg",
    "Apple HomePod (2nd gen)": "/images/products/homepod-2nd-gen.jpg",
    "Apple HomePod Mini": "/images/products/homepod-mini.jpg",
    "JBL Charge 5": "/images/products/jbl-charge-5.jpg",
    "Bose Smart Soundbar 600": "/images/products/bose-soundbar-600.jpg",
    "Marshall Emberton II": "/images/products/marshall-emberton-2.jpg",

    // Cameras
    "Sony Alpha a7 IV": "/images/products/sony-a7-iv.jpg",
    "Canon EOS R6 Mark II": "/images/products/canon-eos-r6-ii.jpg",
    "Fujifilm X-T5": "/images/products/fujifilm-xt5.jpg",
    "Nikon Z8": "/images/products/nikon-z8.jpg",
    "GoPro HERO12 Black": "/images/products/gopro-hero12.jpg",
    "DJI Osmo Action 4": "/images/products/dji-osmo-action-4.jpg",
    "Sony ZV-E10": "/images/products/sony-zv-e10.jpg",

    // TVs
    "Samsung S95C OLED": "/images/products/samsung-s95c-oled.jpg",
    "LG C3 OLED": "/images/products/lg-c3-oled.jpg",
    "Sony A95L QD-OLED": "/images/products/sony-a95l-oled.jpg",
    "TCL QM8 QLED": "/images/products/tcl-qm8-qled.jpg",
    "Hisense U8K": "/images/products/hisense-u8k.jpg",

    // Gaming
    "PlayStation 5 Pro": "/images/products/ps5-pro.jpg",
    "PlayStation 5 Slim": "/images/products/ps5-slim.jpg",
    "Xbox Series X": "/images/products/xbox-series-x.jpg",
    "Xbox Series S": "/images/products/xbox-series-s.jpg",
    "Nintendo Switch OLED": "/images/products/nintendo-switch-oled.jpg",
    "Steam Deck OLED": "/images/products/steam-deck-oled.jpg",
    "ASUS ROG Ally": "/images/products/asus-rog-ally.jpg",

    // Wearables
    "Apple Watch Series 9": "/images/products/apple-watch-series-9.jpg",
    "Apple Watch Ultra 2": "/images/products/apple-watch-ultra-2.jpg",
    "Samsung Galaxy Watch 6": "/images/products/galaxy-watch-6.jpg",
    "Samsung Galaxy Watch 6 Classic": "/images/products/galaxy-watch-6-classic.jpg",
    "Google Pixel Watch 2": "/images/products/pixel-watch-2.jpg",
    "Garmin Fenix 7 Pro": "/images/products/garmin-fenix-7-pro.jpg",
    "Fitbit Charge 6": "/images/products/fitbit-charge-6.jpg",

    // Accessories
    "Apple MagSafe Charger": "/images/products/magsafe-charger.jpg",
    "Apple 20W USB-C Power Adapter": "/images/products/apple-20w-adapter.jpg",
    "Samsung 45W Super Fast Charger": "/images/products/samsung-45w-charger.jpg",
    "Anker 735 Charger": "/images/products/anker-735-charger.jpg",
    "Belkin BoostCharge Pro": "/images/products/belkin-boostcharge-pro.jpg",
    "Apple AirTag": "/images/products/airtag.jpg",
    "Samsung SmartTag 2": "/images/products/samsung-smarttag-2.jpg",
    "Logitech MX Keys Mini": "/images/products/logitech-mx-keys-mini.jpg",
    "Logitech MX Master 3S": "/images/products/logitech-mx-master-3s.jpg",
    "Backbone One": "/images/products/backbone-one.jpg",
    "Razer Kishi V2": "/images/products/razer-kishi-v2.jpg",
    "Anker 737 Power Bank": "/images/products/anker-737-powerbank.jpg",
    "Apple Pencil Pro": "/images/products/apple-pencil-pro.jpg",
    "Samsung S Pen Pro": "/images/products/samsung-s-pen-pro.jpg",
    "Twelve South BookArc": "/images/products/twelve-south-bookarc.jpg",
    "Satechi Thunderbolt 4 Dock": "/images/products/satechi-thunderbolt-dock.jpg",
    "Elgato Stream Deck MK.2": "/images/products/elgato-stream-deck.jpg",
    "Keychron Q1 Pro": "/images/products/keychron-q1-pro.jpg",
    "Logitech G Pro X Superlight 2": "/images/products/logitech-g-pro-x-superlight-2.jpg",
  }

  // If we have a specific image for this product, use it
  if (product.name && imageMap[product.name]) {
    return imageMap[product.name]
  }

  return "/images/products/placeholder-product.jpg"
}
