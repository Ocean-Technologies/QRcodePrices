import { ProductEntity } from '../entities/product'
import { IProductRepository } from '../repositories/IProductRepository'

export class ListProductsService {
  constructor(private readonly productRepository: IProductRepository) {}

  public async execute(): Promise<ProductEntity[] | null> {
    return this.productRepository.list()
  }
}
