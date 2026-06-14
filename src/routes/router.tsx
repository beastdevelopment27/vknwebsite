import { createRouter, createRoute } from '@tanstack/react-router'
import { rootRoute } from './root.tsx'
import Home from '../modules/home.tsx'
import About from '../modules/About.tsx'
import Products from '../modules/Products.tsx'
import Quality from '../modules/Quality.tsx'
import Outlets from '../modules/Outlets.tsx'
import Contact from '../modules/Contact.tsx'
import BulkOrders from '../modules/BulkOrders.tsx'

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: Products,
})

const bulkOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/bulk-orders',
  component: BulkOrders,
})

const qualityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/quality',
  component: Quality,
})

const outletsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/outlets',
  component: Outlets,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  productsRoute,
  bulkOrdersRoute,
  qualityRoute,
  outletsRoute,
  contactRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
