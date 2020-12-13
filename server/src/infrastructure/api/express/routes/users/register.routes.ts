import { Application } from 'express'

import { UserEntity } from '@domain/user/entities/user'
import { FakeUserRepository } from '@domain/user/repositories/fakes/FakeUserRepository'
import { RegisterUserController } from '@interface/api/controllers/user/registerUserController'
import { RegisterUserService } from '@domain/user/services/registerUserService'
// import ensureAuthenticated from '@interface/api/middlewares/ensureAuthenticated'

export const registerRoute = async (app: Application): Promise<void> => {
  const userRepository = new FakeUserRepository([
    new UserEntity(1, 'nathan', 'nathan@test.com', '123', 5),
  ])

  const registerUserService = new RegisterUserService(userRepository)

  const controller = new RegisterUserController(registerUserService)

  // app.use(ensureAuthenticated) - Se quiser que a rota seja atenticada usa isso
  app.post('/register', controller.list.bind(controller))
}
