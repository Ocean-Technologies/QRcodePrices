import express /* RequestHandler */ from 'express'
import { routes } from './routes'
import { erroHandler } from './error/erroHandler'
require('express-async-errors')

export const expressServer = async (
  port: number,
  // authMiddleware: RequestHandler,
): Promise<void> => {
  const app = express()

  app.use(express.json())
  // app.use(authMiddleware)

  for (const route of routes) {
    await route(app)
  }

  app.use(erroHandler)

  app.listen(port, () => {
    console.log(`Api Rest server listening port ${port}`)
  })
}
