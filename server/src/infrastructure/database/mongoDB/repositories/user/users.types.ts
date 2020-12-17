import { Document, Model } from 'mongoose'
import { UserEntity } from '@domain/user/entities/user'

export interface IUserDocument extends UserEntity, Document {}
export interface IUserModel extends Model<IUserDocument> {
  findByEmail: (this: IUserModel, email: string) => Promise<IUserDocument>
}
