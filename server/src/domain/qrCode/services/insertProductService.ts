import { ProductEntity } from '../entities/product'
import {
  IProductRepository,
  InsertParams,
} from '../repositories/IProductRepository'

export class InsertProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  public async execute({
    name,
    imgUrl,
    price,
  }: InsertParams): Promise<ProductEntity | null> {
    return this.productRepository.register({ imgUrl, price, name })
  }
}
