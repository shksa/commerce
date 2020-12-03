import type { Cart, WishlistItem, SearchProductsData } from "@lib/middlewareAPI/types"
import { createContext, useRef, useMemo } from "react"

export function useCustomer() {
  return {data: {
    firstName: '', lastName: '', email: ''
  }}
}
export function useSearch(_:any) {
  return {data: {
    found: false,
    products: []
  } as SearchProductsData}
}
export function useWishlist(_?:any) {
  return {data: { items: [] as WishlistItem[] }, isEmpty: true}
} 
export function usePrice(_:any) {
  return {price: 0}
}
export function useUpdateItem(_:any) {
  return (_?:any) => {}
}
export function useRemoveItem(_?:any) {
  return (_: any) => {}
}
export function useCart(_?:any) {
  return {data: null as Cart | null, isEmpty: true}
}
export function useAddItem() {
  return (_: any) => {}
}
export function useWishlistAddItem(_:any) {
  return (_: any) => {}
}
export function useLogin() {
  return (_:any) => {}
}
export function useSignup() {
  return (_:any) => {}
}
export function useLogout() {
  return () => {}
}

const Commerce = createContext<any>({})

export function CommerceProvider({ children, ...config }: any) {
  if (!config) {
    throw new Error('CommerceProvider requires a valid config object')
  }

  const fetcherRef = useRef(config.fetcher)
  // Because the config is an object, if the parent re-renders this provider
  // will re-render every consumer unless we memoize the config
  const cfg = useMemo(
    () => ({
      fetcherRef,
      locale: config.locale,
      cartCookie: config.cartCookie,
    }),
    [config.locale, config.cartCookie]
  )

  return <Commerce.Provider value={cfg}>{children}</Commerce.Provider>
}