import { Application } from 'express'

import { createMongoConnection } from '@infrastructure/database/mongoDB/Connector'

import { ListProductsController } from '@interface/api/controllers/products/listProductsController'
import { ListProductsService } from '@domain/qrCode/services/listProductsService'
import { ProductMongoRepository } from '@infrastructure/database/mongoDB/repositories/product'
import ensureAuthenticated from '@interface/api/middlewares/ensureAuthenticated'

export const listProductsRoute = async (app: Application): Promise<void> => {
  const mongoConnection = await createMongoConnection()
  let MongoRepository: ProductMongoRepository
  if (mongoConnection) {
    MongoRepository = new ProductMongoRepository(mongoConnection)
  }

  const listProductsService = new ListProductsService(MongoRepository)

  const controller = new ListProductsController(listProductsService)

  app.use(ensureAuthenticated)
  app.get('/products', controller.list.bind(controller))
}
