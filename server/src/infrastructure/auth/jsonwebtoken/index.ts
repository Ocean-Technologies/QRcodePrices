import { sign } from 'jsonwebtoken'
import { IAuthToken } from '@domain/shared/auth/IAuthToken'
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'default'

export class JsonWebToken implements IAuthToken {
  async newToken(user: Record<string, unknown>): Promise<string> {
    return Promise.resolve(sign(JSON.stringify(user), JWT_SECRET_KEY))
  }
}
