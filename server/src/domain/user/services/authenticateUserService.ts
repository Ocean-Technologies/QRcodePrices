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
    const user = await this.userRepository.findByEmail(email)
    if (!user) {
      throw new BadRequestError('User not found')
    }
    if (user.password !== password) {
      throw new BadRequestError('User or email incorrect')
    }
    const token = await this.tokenCreator.newToken(user)
    return { user, token }
  }
}
