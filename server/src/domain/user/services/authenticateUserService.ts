import { UserEntity } from '../entities/user'
import { IUserRepository } from '../repositories/IUserRepository'

interface AuthRequest {
  password: string
  email: string
}

export class AuthenticateUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async execute({
    password,
    email,
  }: AuthRequest): Promise<UserEntity | undefined> {
    // TODO authenticate user
    const obj = { password, email }

    return this.userRepository.auth(obj)
  }
}
