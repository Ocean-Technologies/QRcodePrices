import { Request, Response } from 'express'
import { MyPriceService } from '@domain/qrCode/services/myPriceService'

export class MyPriceController {
  constructor(private readonly myPriceService: MyPriceService) {}

  async find(request: Request, response: Response): Promise<void> {
    const { userId, productId } = request.params

    const price = await this.myPriceService.execute(userId, productId)

    response.status(200).json(price)
  }
}
