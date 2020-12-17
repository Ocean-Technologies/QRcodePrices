import {
  InsertParams,
  IProductRepository,
} from '@domain/qrCode/repositories/IProductRepository'
import { ProductEntity } from '@domain/qrCode/entities/product'
import { Mongoose } from 'mongoose'
import { ProductsModel } from './product.model'

export class ProductMongoRepository implements IProductRepository {
  constructor(private MongoDB: Mongoose) {}

  async findById(id: string): Promise<ProductEntity | null> {
    const productsModel = new ProductsModel(this.MongoDB).model
    return await productsModel.findById(id)
  }

  async list(): Promise<ProductEntity[] | null> {
    const productsModel = new ProductsModel(this.MongoDB).model
    return await productsModel.find()
  }

  async register({
    name,
    price,
    imgUrl,
  }: InsertParams): Promise<ProductEntity | null> {
    const productsModel = new ProductsModel(this.MongoDB).model

    return await productsModel.create({ name, price, imgUrl })
  }
}
