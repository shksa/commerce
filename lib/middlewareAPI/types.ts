import { GetAllProductPathsQuery, GetAllProductsQuery, GetProductQuery, GetSiteInfoQuery } from "./schema"
import { definitions } from "./store-content"

export type ProductEdge = NonNullable<
  NonNullable<GetAllProductsQuery['site']['products']['edges']>[0]
>
export type GetAllProductsResult<
  T extends Record<keyof GetAllProductsResult, any[]> = {
    products: ProductEdge[]
  }
> = T

export type Page = definitions['page_Full']

export type GetAllPagesResult<
  T extends { pages: any[] } = { pages: Page[] }
> = T

export type BrandEdge = NonNullable<
  NonNullable<GetSiteInfoQuery['site']['brands']['edges']>[0]
>

export type Brands = BrandEdge[]
export type GetSiteInfoResult<
  T extends { categories: any[]; brands: any[] } = {
    categories: CategoriesTree
    brands: Brands
  }
> = T

export type CategoriesTree = NonNullable<
  GetSiteInfoQuery['site']['categoryTree']
>

export type ProductNode = Extract<
  GetProductQuery['site']['route']['node'],
  { __typename: 'Product' }
>
export type GetProductResult<
  T extends { product?: any } = { product?: ProductNode }
> = T

export type GetAllProductPathsResult<
  T extends { products: any[] } = { products: ProductPaths }
> = T
export type ProductPath = NonNullable<
  NonNullable<GetAllProductPathsQuery['site']['products']['edges']>[0]
>

export type WishlistItem = NonNullable<
  definitions['wishlist_Full']['items']
>[0] & {
  product?: ProductEdge['node']
}
export type Cart = {
  id: string
  parent_id?: string
  customer_id: number
  email: string
  currency: { code: string }
  tax_included: boolean
  base_amount: number
  discount_amount: number
  cart_amount: number
  line_items: {
    custom_items: any[]
    digital_items: any[]
    gift_certificates: any[]
    physical_items: any[]
  }
  // TODO: add missing fields
}
export type SearchProductsData = {
  products: ProductEdge[]
  found: boolean
}

export type ProductPaths = ProductPath[]

export type GetPageResult<T extends { page?: any } = { page?: Page }> = T