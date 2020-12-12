import { Application } from 'express'

import { UserEntity } from '@domain/user/entities/user'
import { FakeUserRepository } from '@domain/user/repositories/fakes/FakeUserRepository'
import { AuthenticateUserController } from '@interface/api/controllers/user/authenticateUserController'
import { AuthenticateUserService } from '@domain/user/services/authenticateUserService'
// import ensureAuthenticated from '@interface/api/middlewares/ensureAuthenticated'

export const authRoute = async (app: Application): Promise<void> => {
  const userRepository = new FakeUserRepository([
    new UserEntity(1, 'nathan', 'nathan@test.com', '123', 5),
  ])

  const authenticateUserService = new AuthenticateUserService(userRepository)

  const controller = new AuthenticateUserController(authenticateUserService)

  // app.use(ensureAuthenticated) - Se quiser que a rota seja atenticada usa isso
  app.post('/auth', controller.list.bind(controller))
}
