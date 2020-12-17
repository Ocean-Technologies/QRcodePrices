import { Request, Response } from 'express'
import { InsertProductService } from '@domain/qrCode/services/insertProductService'

export class InsertProductController {
  constructor(private readonly insertProductService: InsertProductService) {}

  async list(request: Request, response: Response): Promise<void> {
    const { name, price, imgUrl } = request.body

    const Product = await this.insertProductService.execute({
      name,
      price,
      imgUrl,
    })

    response.status(200).json(Product)
  }
}
