import { Application } from 'express'

import { createMongoConnection } from '@infrastructure/database/mongoDB/Connector'

import { InsertProductController } from '@interface/api/controllers/products/insertProductController'
import { InsertProductService } from '@domain/qrCode/services/insertProductService'
import { ProductMongoRepository } from '@infrastructure/database/mongoDB/repositories/product'
import ensureAuthenticated from '@interface/api/middlewares/ensureAuthenticated'

export const insertProductRoute = async (app: Application): Promise<void> => {
  const mongoConnection = await createMongoConnection()
  let MongoRepository: ProductMongoRepository
  if (mongoConnection) {
    MongoRepository = new ProductMongoRepository(mongoConnection)
  }

  const insertProductService = new InsertProductService(MongoRepository)

  const controller = new InsertProductController(insertProductService)

  app.use(ensureAuthenticated)
  app.post('/product/insert', controller.list.bind(controller))
}
