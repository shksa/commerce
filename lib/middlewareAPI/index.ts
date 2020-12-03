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
export async function getAllProducts(_:any): Promise<GetAllProductsResult> {
  return Promise.resolve({products: []})
}
export type Page = definitions['page_Full']
export type GetAllPagesResult<
  T extends { pages: any[] } = { pages: Page[] }
> = T
export function getAllPages(_?:any): Promise<GetAllPagesResult> {
  return Promise.resolve({pages: []})
}

export function getConfig(_:any) {
  return Promise.resolve({data: 'lol'})
}
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
export function getSiteInfo(_:any): Promise<GetSiteInfoResult> {
  return Promise.resolve({categories: [], brands: []})
}
export type ProductNode = Extract<
  GetProductQuery['site']['route']['node'],
  { __typename: 'Product' }
>
export type GetProductResult<
  T extends { product?: any } = { product?: ProductNode }
> = T
export function getProduct(_:any): Promise<GetProductResult> {
  return Promise.resolve({})
}
export type GetAllProductPathsResult<
  T extends { products: any[] } = { products: ProductPaths }
> = T
export type ProductPath = NonNullable<
  NonNullable<GetAllProductPathsQuery['site']['products']['edges']>[0]
>
export type ProductPaths = ProductPath[]
export function getAllProductPaths(): Promise<GetAllProductPathsResult> {
  return Promise.resolve({products: []})
}

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

export type GetPageResult<T extends { page?: any } = { page?: Page }> = T

export function getPage(_:any): Promise<GetPageResult> {
  return Promise.resolve({})
}