export interface ICartProduct {
  id: number
  name: string
  qty: number
  price: number
}

export interface ICartProducts {
  cartProducts: ICartProduct[]
}