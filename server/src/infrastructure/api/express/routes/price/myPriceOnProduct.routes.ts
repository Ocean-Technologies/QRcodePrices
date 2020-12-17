import { Application } from 'express'

import { createMongoConnection } from '@infrastructure/database/mongoDB/Connector'

import { MyPriceController } from '@interface/api/controllers/price/myPriceController'
import { MyPriceService } from '@domain/qrCode/services/myPriceService'
import { ProductMongoRepository } from '@infrastructure/database/mongoDB/repositories/product'
import { UserMongoRepository } from '@infrastructure/database/mongoDB/repositories/user'

export const myPriceRoute = async (app: Application): Promise<void> => {
  const mongoConnection = await createMongoConnection()
  let productMongoRepository: ProductMongoRepository
  let userMongoRepository: UserMongoRepository
  if (mongoConnection) {
    productMongoRepository = new ProductMongoRepository(mongoConnection)
    userMongoRepository = new UserMongoRepository(mongoConnection)
  }

  const insertProductService = new MyPriceService(
    productMongoRepository,
    userMongoRepository,
  )

  const controller = new MyPriceController(insertProductService)

  app.get('/price/:userId/:productId', controller.find.bind(controller))
}
