import { UserEntity } from '../entities/user'

export type AuthParams = {
  password: string
  email: string
}
export type RegisterParams = {
  name: string
  email: string
  password: string
  discount: number
}

export interface IUserRepository {
  findByEmail(email: string): Promise<UserEntity | undefined>
  register({
    password,
    email,
    name,
    discount,
  }: RegisterParams): Promise<UserEntity | undefined>
}
