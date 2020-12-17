import { PriceEntity } from '../entities/price'
import { IProductRepository } from '../repositories/IProductRepository'
import { IUserRepository } from '../repositories/IUserRepository'

export class MyPriceService {
  constructor(
    private readonly productRepository: IProductRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  public async execute(
    userId: string,
    productId: string,
  ): Promise<PriceEntity | null> {
    const product = await this.productRepository.findById(productId)
    const user = await this.userRepository.findById(userId)
    if (product && user) {
      const myPrice = product.price - (user.discount / 100) * product.price

      const price = new PriceEntity(
        product.name,
        product.imgUrl,
        product.price,
        myPrice,
      )

      return price
    }
    return null
  }
}
