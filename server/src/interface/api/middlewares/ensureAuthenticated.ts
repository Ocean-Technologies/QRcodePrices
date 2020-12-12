import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import { AppError } from '../../errors/AppError'

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'default'

interface ITokenPayLoad {
  iat: number
  user: string
}

export default function ensureAuthenticated(
  request: Request,
  _: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT Token is missing', 401)
  }
  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, JWT_SECRET_KEY)

    const { user } = decoded as ITokenPayLoad

    request.auth = {
      user,
    }

    return next()
  } catch (err) {
    throw new AppError('Invalid JWT token', 401)
  }
}
