import { Schema } from 'mongoose'
import { ProductEntity } from '@domain/qrCode/entities/product'

const productsSchema = new Schema<ProductEntity>({
  name: String,
  imgUrl: String,
  price: Number,
})

productsSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id
  },
})

export { productsSchema }
