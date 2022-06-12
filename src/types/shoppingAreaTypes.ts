export interface ICategory{
  id:number,
  title:string
}

export interface IProduct {
  id: string
  title: string
  quantity: number
  category: ICategory
  discount_price: number
  regular_price: number
  image: string
}

export interface ICategory {
  id: number
  title: string
}

export interface IProducts {
  products: IProduct[] 
}

export interface ICategoryList {
  category: ICategory
  allCategories: ICategory[]
}