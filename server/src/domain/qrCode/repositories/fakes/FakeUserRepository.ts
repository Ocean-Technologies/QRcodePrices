import { BadRequestError } from '@domain/shared/errors/BadRequestError'
import { UserEntity } from '@domain/user/entities/user'
import { IUserRepository, RegisterParams } from '../IUserRepository'

export class FakeUserRepository implements IUserRepository {
  constructor(private readonly usersList: UserEntity[]) {}

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    const user = this.usersList.find(user => user.email === email)

    return Promise.resolve(user)
  }

  async register({
    name,
    email,
    password,
    discount,
  }: RegisterParams): Promise<UserEntity | undefined> {
    const alreadyExist = await this.findByEmail(email)
    if (alreadyExist) {
      throw new BadRequestError('User already exist')
    }

    const user = new UserEntity(name, email, password, discount)

    this.usersList.push(user)

    return user
  }
}
