import express /* RequestHandler */ from 'express'
import { routes, authRoutes } from './routes'
import { erroHandler } from './error/erroHandler'
import ensureAuthenticated from '@interface/api/middlewares/ensureAuthenticated'
require('express-async-errors')

export const expressServer = async (port: number): Promise<void> => {
  const app = express()

  app.use(express.json())

  for (const route of routes) {
    await route(app)
  }

  app.use(ensureAuthenticated)

  for (const authRoute of authRoutes) {
    await authRoute(app)
  }

  app.use(erroHandler)

  app.listen(port, () => {
    console.log(`Api Rest server listening port ${port}`)
  })
}
