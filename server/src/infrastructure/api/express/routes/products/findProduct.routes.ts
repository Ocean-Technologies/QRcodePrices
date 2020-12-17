import { Application } from 'express'

import { createMongoConnection } from '@infrastructure/database/mongoDB/Connector'

import { FindProductController } from '@interface/api/controllers/products/findProductController'
import { FindProductService } from '@domain/qrCode/services/findProductService'
import { ProductMongoRepository } from '@infrastructure/database/mongoDB/repositories/product'
import ensureAuthenticated from '@interface/api/middlewares/ensureAuthenticated'

export const findProductsRoute = async (app: Application): Promise<void> => {
  const mongoConnection = await createMongoConnection()
  let MongoRepository: ProductMongoRepository
  if (mongoConnection) {
    MongoRepository = new ProductMongoRepository(mongoConnection)
  }

  const insertProductService = new FindProductService(MongoRepository)

  const controller = new FindProductController(insertProductService)

  app.use(ensureAuthenticated)
  app.get('/product/:id', controller.find.bind(controller))
}
