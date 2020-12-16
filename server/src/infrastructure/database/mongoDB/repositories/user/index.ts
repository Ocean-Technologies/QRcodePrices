import { IUserRepository } from '@domain/user/repositories/IUserRepository'
import { UserEntity } from '@domain/user/entities/user'
import { Db } from 'mongodb'

const decode = ({ _id, ...rest }: { _id: string }) => ({
  ...rest,
  id: _id,
})

export class UserMongoRepository implements IUserRepository {
  constructor(private MongoDB: Db) {}

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    const user = await this.MongoDB.collection<UserEntity>('test').find()

    return user
  }

  async register({
    password,
    email,
    name,
    discount,
  }: UserEntity): Promise<UserDocument> {
    const user = new User({ name, email, password, discount })
    return await user.save()
  }
}
