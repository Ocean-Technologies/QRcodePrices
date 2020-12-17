import { Request, Response } from 'express'
import { RegisterUserService } from '@domain/qrCode/services/registerUserService'
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  async list(request: Request, response: Response): Promise<void> {
    const { name, email, password, confirmPassword } = request.body

    const User = await this.registerUserService.execute({
      name,
      email,
      password,
      confirmPassword,
    })

    response.status(200).json(User)
  }
}
