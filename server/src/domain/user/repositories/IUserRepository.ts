import { UserEntity } from '../entities/user'

export type AuthParams = {
  password: string
  email: string
}
export type RegisterParams = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface IUserRepository {
  auth({ password, email }: AuthParams): Promise<UserEntity | undefined>
  findByEmail(email: string): Promise<UserEntity | undefined>
  register({
    password,
    email,
    name,
    confirmPassword,
  }: RegisterParams): Promise<UserEntity | undefined>
}
