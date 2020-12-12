import { UserEntity } from '@domain/user/entities/user'
import { IUserRepository } from '../IUserRepository'

interface AuthRequest {
  password: string
  email: string
}

export class FakeUserRepository implements IUserRepository {
  constructor(private readonly usersList: UserEntity[]) {}

  auth({ email, password }: AuthRequest): Promise<UserEntity | undefined> {
    const user = this.usersList.find(
      user => user.email === email && user.password === password,
    )

    return Promise.resolve(user)
  }
}
