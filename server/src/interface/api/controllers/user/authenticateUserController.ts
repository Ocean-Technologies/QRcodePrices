import { Request, Response } from 'express'
import { AuthenticateUserService } from '@domain/user/services/authenticateUserService'
export class AuthenticateUserController {
  constructor(
    private readonly authenticateUserService: AuthenticateUserService,
  ) {}

  async list(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body

    const authenticatedUser = await this.authenticateUserService.execute({
      email,
      password,
    })

    response.status(200).json(authenticatedUser)
  }
}
