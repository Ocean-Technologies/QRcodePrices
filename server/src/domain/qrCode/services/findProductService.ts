import { ProductEntity } from '../entities/product'
import { IProductRepository } from '../repositories/IProductRepository'

export class FindProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  public async execute(id: string): Promise<ProductEntity | null> {
    return this.productRepository.findById(id)
  }
}
