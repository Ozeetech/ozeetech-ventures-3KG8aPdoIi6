import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getECommerceSchema,
  getProductSchema,
  getBreadcrumbSchema,
  getWebPageSchema,
} from "@/lib/schema"

interface SchemaMarkupProps {
  type?:
    | "organization"
    | "localBusiness"
    | "ecommerce"
    | "product"
    | "breadcrumb"
    | "webpage"
    | "all"
  data?: any
}

export function SchemaMarkup({ type = "all", data }: SchemaMarkupProps) {
  const schemas: Record<string, any> = {}

  if (type === "all" || type === "organization") {
    schemas.organization = getOrganizationSchema()
  }

  if (type === "all" || type === "localBusiness") {
    schemas.localBusiness = getLocalBusinessSchema()
  }

  if (type === "all" || type === "ecommerce") {
    schemas.ecommerce = getECommerceSchema()
  }

  if (type === "product" && data) {
    schemas.product = getProductSchema(data)
  }

  if (type === "breadcrumb" && data) {
    schemas.breadcrumb = getBreadcrumbSchema(data)
  }

  if (type === "webpage" && data) {
    schemas.webpage = getWebPageSchema(data)
  }

  const schemaArray = Object.values(schemas)

  return (
    <>
      {schemaArray.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  )
}
