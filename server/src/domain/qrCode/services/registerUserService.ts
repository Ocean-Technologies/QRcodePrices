import { BadRequestError } from '@domain/shared/errors/BadRequestError'
import { UserEntity } from '../entities/user'
import { IUserRepository } from '../repositories/IUserRepository'

interface AuthRequest {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export class RegisterUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute({
    name,
    email,
    password,
    confirmPassword,
  }: AuthRequest): Promise<UserEntity | null> {
    if (password !== confirmPassword) {
      throw new BadRequestError('passwords dont match')
    }

    const user = await this.userRepository.findByEmail(email)

    if (user) {
      throw new BadRequestError('Email address already used')
    }
    const discount = Math.floor(Math.random() * 30)
    return this.userRepository.register({ password, email, name, discount })
  }
}
