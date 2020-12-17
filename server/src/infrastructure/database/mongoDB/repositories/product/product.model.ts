import { Mongoose } from 'mongoose'
import { productsSchema } from './product.schema'
import { IProductDocument } from './product.types'

export class ProductsModel {
  constructor(private mongoose: Mongoose) {}

  public model = this.mongoose.model<IProductDocument>(
    'Product',
    productsSchema,
  )
}
