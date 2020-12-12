import 'dotenv/config'
import { expressServer } from '@infrastructure/api/express/expressServer'
// import ensureAuthenticated from '@interface/api/middlewares/ensureAuthenticated'

expressServer(8888)
