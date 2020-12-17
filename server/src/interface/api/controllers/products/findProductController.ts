import { Request, Response } from 'express'
import { FindProductService } from '@domain/qrCode/services/findProductService'

export class FindProductController {
  constructor(private readonly findProductService: FindProductService) {}

  async find(request: Request, response: Response): Promise<void> {
    const { id } = request.params

    const Products = await this.findProductService.execute(id)

    response.status(200).json(Products)
  }
}
