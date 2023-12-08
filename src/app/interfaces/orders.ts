export type ArrayOrders = Orders[]

export interface Orders {
  id: number
  name: string
  status: string
  created_at: string
  updated_at: string
  OrderItem: OrderItem[]
}

export interface OrderItem {
  id: number
  orderId: number
  productId: number
  quantity: number
}
