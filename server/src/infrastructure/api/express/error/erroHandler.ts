import { AppError } from '@interface/errors/AppError'
import { Request, Response, NextFunction } from 'express'
import { BadRequestError } from '@domain/shared/errors/BadRequestError'

export function erroHandler(
  err: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
    })
  } else if (err instanceof BadRequestError) {
    return response.status(400).json({
      statusCode: 400,
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  })
}
