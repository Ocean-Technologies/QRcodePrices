import { Mongoose } from 'mongoose'
import { usersSchema } from './users.schema'
import { IUserDocument } from './users.types'

export class UsersModel {
  constructor(private mongoose: Mongoose) {}

  public model = this.mongoose.model<IUserDocument>('User', usersSchema)
}
