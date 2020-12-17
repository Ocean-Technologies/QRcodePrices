import { Application } from 'express'

import { RegisterUserController } from '@interface/api/controllers/user/registerUserController'
import { RegisterUserService } from '@domain/qrCode/services/registerUserService'
import { UserMongoRepository } from '@infrastructure/database/mongoDB/repositories/user'
import { createMongoConnection } from '@infrastructure/database/mongoDB/Connector'
// import ensureAuthenticated from '@interface/api/middlewares/ensureAuthenticated'

export const registerRoute = async (app: Application): Promise<void> => {
  const mongoConnection = await createMongoConnection()
  let MongoRepository: UserMongoRepository
  if (mongoConnection) {
    MongoRepository = new UserMongoRepository(mongoConnection)
  }

  const registerUserService = new RegisterUserService(MongoRepository)

  const controller = new RegisterUserController(registerUserService)

  // app.use(ensureAuthenticated) - Se quiser que a rota seja atenticada usa isso
  app.post('/user/register', controller.list.bind(controller))
}
