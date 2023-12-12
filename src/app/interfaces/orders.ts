export type ArrayOrders = Orders[]

export interface Orders {
  id: number
  name: string
  status: string
  created_at: string
  updated_at: string
  totalPrice: number
  OrderItem: OrderItem[]
}

export interface OrderItem {
  id: number
  orderId: number
  productId: number
  quantity: number
  Product: Product
}

export interface Product {
  id: number
  name: string
  price: number
  created_at: string
  updated_At: string
}


