import { GetAllProductsResult, GetAllPagesResult, GetSiteInfoResult, GetProductResult, GetAllProductPathsResult, GetPageResult } from "./types"
// All these fns are called in getStaticProps
export async function getAllProducts(_:any): Promise<GetAllProductsResult> {
  return Promise.resolve({products: []})
}

export function getAllPages(_?:any): Promise<GetAllPagesResult> {
  return Promise.resolve({pages: []})
}

export function getConfig(_:any) {
  return Promise.resolve({data: 'lol'})
}


export function getSiteInfo(_:any): Promise<GetSiteInfoResult> {
  return Promise.resolve({categories: [], brands: []})
}

export function getProduct(_:any): Promise<GetProductResult> {
  return Promise.resolve({})
}

export function getAllProductPaths(): Promise<GetAllProductPathsResult> {
  return Promise.resolve({products: []})
}

export function getPage(_:any): Promise<GetPageResult> {
  return Promise.resolve({})
}