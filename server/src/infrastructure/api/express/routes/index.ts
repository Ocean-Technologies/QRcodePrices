import { authRoute } from './users/auth.routes'
import { registerRoute } from './users/register.routes'
import { insertProductRoute } from './products/insertProducts.routes'
import { findProductsRoute } from './products/findProduct.routes'
import { listProductsRoute } from './products/listProducts.routes'
import { myPriceRoute } from './price/myPriceOnProduct.routes'

export const authRoutes = [
  insertProductRoute,
  findProductsRoute,
  listProductsRoute,
  myPriceRoute,
]
export const routes = [authRoute, registerRoute]
