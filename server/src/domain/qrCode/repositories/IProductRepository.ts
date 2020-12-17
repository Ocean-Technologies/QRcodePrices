import { ProductEntity } from '../entities/product'

export type InsertParams = {
  name: string
  imgUrl: string
  price: number
}

export interface IProductRepository {
  findById(id: string): Promise<ProductEntity | null>

  list(): Promise<ProductEntity[] | null>

  register({ name, price, imgUrl }: InsertParams): Promise<ProductEntity | null>
}
