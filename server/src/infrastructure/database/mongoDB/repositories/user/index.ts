import { IUserRepository } from '@domain/user/repositories/IUserRepository'
import { UserEntity } from '@domain/user/entities/user'
import { Mongoose } from 'mongoose'
import { UsersModel } from './users.model'

export class UserMongoRepository implements IUserRepository {
  private constructor(private MongoDB: Mongoose) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    const userModel = new UsersModel(this.MongoDB).model
    return userModel.findOne({ email })
  }

  async register({
    password,
    email,
    name,
    discount,
  }: UserEntity): Promise<UserEntity | null> {
    const userModel = new UsersModel(this.MongoDB).model
    return userModel.create({ password, email, name, discount })
  }
}
