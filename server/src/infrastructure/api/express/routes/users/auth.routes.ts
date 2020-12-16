import { Application } from 'express'

import { AuthenticateUserController } from '@interface/api/controllers/user/authenticateUserController'
import { AuthenticateUserService } from '@domain/user/services/authenticateUserService'
import { JsonWebToken } from '@infrastructure/auth/jsonwebtoken'
import { createMongoConnection } from '@infrastructure/database/mongoDB/Connector'
import { UserMongoRepository } from '@infrastructure/database/mongoDB/repositories/user'

export const authRoute = async (app: Application): Promise<void> => {
  const jsonwebtoken = new JsonWebToken()
  const mongoConnection = await createMongoConnection()
  let MongoRepository: UserMongoRepository
  if (mongoConnection) {
    MongoRepository = new UserMongoRepository(mongoConnection)
  }

  const authenticateUserService = new AuthenticateUserService(
    MongoRepository,
    jsonwebtoken,
  )

  const controller = new AuthenticateUserController(authenticateUserService)

  app.post('/auth', controller.list.bind(controller))
}
