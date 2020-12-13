import { BadRequestError } from '@domain/shared/errors/BadRequestError'
import { UserEntity } from '@domain/user/entities/user'
import { IUserRepository, AuthParams, RegisterParams } from '../IUserRepository'

export class FakeUserRepository implements IUserRepository {
  constructor(private readonly usersList: UserEntity[]) {}

  async auth({ email, password }: AuthParams): Promise<UserEntity | undefined> {
    const user = this.usersList.find(user => {
      if (user.email === email) {
        console.log(email)
      }
      if (user.password === password) {
        console.log(password)
      }
      return user.email === email && user.password === password
    })

    return Promise.resolve(user)
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    const user = this.usersList.find(user => user.email === email)

    return Promise.resolve(user)
  }

  async register({
    name,
    email,
    password,
    confirmPassword,
  }: RegisterParams): Promise<UserEntity | undefined> {
    const alreadyExist = await this.findByEmail(email)
    if (alreadyExist) {
      throw new BadRequestError('User already exist')
    }
    const id = Math.floor(Math.random() * 300)
    const discont = Math.floor(Math.random() * 30)
    if (password !== confirmPassword) {
      throw new BadRequestError("Password don't match")
    }
    const user = new UserEntity(id, name, email, password, discont)

    this.usersList.push(user)

    return user
  }
}
