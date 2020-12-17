import { Schema } from 'mongoose'
import { ProductEntity } from '@domain/qrCode/entities/product'

const productsSchema = new Schema<ProductEntity>({
  name: String,
  imgUrl: String,
  price: Number,
})

export { productsSchema }
