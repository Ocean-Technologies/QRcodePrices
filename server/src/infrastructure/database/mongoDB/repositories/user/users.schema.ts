import { Schema } from 'mongoose'
import { UserEntity } from '@domain/user/entities/user'
import { findByEmail } from './users.statics'

const usersSchema = new Schema<UserEntity>({
  name: String,
  email: String,
  password: String,
  discount: Number,
})

usersSchema.statics.findByEmail = findByEmail

export { usersSchema }
