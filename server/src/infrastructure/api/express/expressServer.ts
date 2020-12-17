import express /* RequestHandler */ from 'express'
import { routes } from './routes'
import { erroHandler } from './error/erroHandler'
require('express-async-errors')

export const expressServer = async (port: number): Promise<void> => {
  const app = express()

  app.use(express.json())

  app.get('test', (req, res) => {
    res.json({ ok: 'oi' })
  })
  for (const route of routes) {
    await route(app)
  }
  app.use(erroHandler)

  app.listen(port, () => {
    console.log(`Api Rest server listening port ${port}`)
  })
}
