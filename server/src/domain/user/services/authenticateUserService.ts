import { IAuthToken } from '@domain/shared/auth/IAuthToken'
import { BadRequestError } from '@domain/shared/errors/BadRequestError'
import { UserEntity } from '../entities/user'
import { AuthParams, IUserRepository } from '../repositories/IUserRepository'

interface Response {
  user: UserEntity
  token: string
}

export class AuthenticateUserService {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly tokenCreator: IAuthToken,
  ) {}

  public async execute({
    password,
    email,
  }: AuthParams): Promise<Response | undefined> {
    const obj = { password, email }
    const user = await this.userRepository.auth(obj)
    if (!user) {
      throw new BadRequestError('User not found')
    }
    const token = await this.tokenCreator.newToken(user)
    return { user, token }
  }
}
