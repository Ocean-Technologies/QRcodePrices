import { IUserRepository } from '@domain/qrCode/repositories/IUserRepository'
import { UserEntity } from '@domain/qrCode/entities/user'
import { Mongoose } from 'mongoose'
import { UsersModel } from './users.model'

export class UserMongoRepository implements IUserRepository {
  constructor(private MongoDB: Mongoose) {}

  async findByEmail(email: string): Promise<UserEntity | null> {
    const userModel = new UsersModel(this.MongoDB).model

    return await userModel.findOne({ email })
  }

  async findById(id: string): Promise<UserEntity | null> {
    const userModel = new UsersModel(this.MongoDB).model

    return await userModel.findById(id)
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
