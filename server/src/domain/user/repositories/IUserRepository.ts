import { UserEntity } from '../entities/user'

interface AuthParams {
  password: string
  email: string
}

export interface IUserRepository {
  auth({ password, email }: AuthParams): Promise<UserEntity | undefined>
}
