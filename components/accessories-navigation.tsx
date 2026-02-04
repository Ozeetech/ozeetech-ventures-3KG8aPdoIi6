import Link from "next/link"
import { ChevronRight } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function AccessoriesNavigation() {
  const categories = [
    {
      title: "Mobile Accessories",
      items: [
        { name: "Phone Cases", path: "/products/accessories/cases" },
        { name: "Screen Protectors", path: "/products/accessories/screen-protectors" },
        { name: "Chargers & Cables", path: "/products/accessories/cables" },
        { name: "Power Banks", path: "/products/accessories/power-banks" },
        { name: "Phone Stands & Grips", path: "/products/accessories/phone-stands" },
        { name: "Camera Accessories", path: "/products/accessories/camera" },
        { name: "Mobile Gaming", path: "/products/accessories/mobile-gaming" },
        { name: "Car Mounts", path: "/products/accessories/car-mounts" },
      ],
    },
    {
      title: "Brand Accessories",
      items: [
        { name: "Apple Accessories", path: "/products/accessories/iphone-accessories" },
        { name: "Samsung Accessories", path: "/products/accessories/samsung-accessories" },
        { name: "Google Pixel Accessories", path: "/products/accessories/google-accessories" },
        { name: "Xiaomi Accessories", path: "/products/accessories/xiaomi-accessories" },
        { name: "OnePlus Accessories", path: "/products/accessories/oneplus-accessories" },
        { name: "Tecno Accessories", path: "/products/accessories/tecno-accessories" },
        { name: "Infinix Accessories", path: "/products/accessories/infinix-accessories" },
      ],
    },
    {
      title: "Computer Accessories",
      items: [
        { name: "Keyboards", path: "/products/accessories/keyboards" },
        { name: "Mice & Trackpads", path: "/products/accessories/mice" },
        { name: "Monitors", path: "/products/accessories/monitors" },
        { name: "Laptop Stands", path: "/products/accessories/laptop-stands" },
        { name: "USB Hubs & Adapters", path: "/products/accessories/usb-hubs" },
        { name: "External Storage", path: "/products/accessories/external-storage" },
        { name: "Laptop Bags & Sleeves", path: "/products/accessories/laptop-bags" },
        { name: "Webcams", path: "/products/accessories/webcams" },
      ],
    },
    {
      title: "Original Chargers",
      items: [
        { name: "All Chargers", path: "/products/accessories/original-chargers" },
        { name: "Apple Chargers", path: "/products/accessories/original-chargers/apple" },
        { name: "Samsung Chargers", path: "/products/accessories/original-chargers/samsung" },
        { name: "Google Chargers", path: "/products/accessories/original-chargers/google" },
        { name: "Xiaomi Chargers", path: "/products/accessories/original-chargers/xiaomi" },
        { name: "OnePlus Chargers", path: "/products/accessories/original-chargers/oneplus" },
        { name: "Fast Chargers", path: "/products/accessories/original-chargers/fast-chargers" },
        { name: "Wireless Chargers", path: "/products/accessories/original-chargers/wireless-chargers" },
      ],
    },
  ]

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {categories.map((category, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.path}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">{item.name}</div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
                <li className="col-span-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/products/accessories"
                      className="flex select-none items-center justify-center rounded-md bg-muted p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      View All {category.title}
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <Link href="/products/accessories" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>All Accessories</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// Also export as default for compatibility
export default AccessoriesNavigation
