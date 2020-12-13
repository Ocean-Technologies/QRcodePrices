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
  }: AuthRequest): Promise<UserEntity | undefined> {
    const obj = { password, email, name, confirmPassword }

    return this.userRepository.register(obj)
  }
}
