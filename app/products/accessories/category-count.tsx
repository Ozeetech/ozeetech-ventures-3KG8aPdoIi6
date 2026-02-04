export function CategoryCount() {
  // This is a component that displays the total number of product categories
  // In a real application, this would be dynamically calculated

  return (
    <div className="bg-primary/10 p-6 rounded-lg text-center mb-12">
      <h2 className="text-2xl font-bold mb-2">Over 200 Product Categories</h2>
      <p className="text-muted-foreground">
        Browse our extensive collection of accessories across 20 main categories and over 200 subcategories. From
        original chargers to mobile gaming accessories, we have everything you need to enhance your tech experience.
      </p>
    </div>
  )
}

// Also export as default for compatibility
export default CategoryCount
