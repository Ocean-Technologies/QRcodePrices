import { Request, Response } from 'express'
import { ListProductsService } from '@domain/qrCode/services/listProductsService'

export class ListProductsController {
  constructor(private readonly listProductsService: ListProductsService) {}

  async list(_request: Request, response: Response): Promise<void> {
    const Products = await this.listProductsService.execute()

    response.status(200).json(Products)
  }
}
