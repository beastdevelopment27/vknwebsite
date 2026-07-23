import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../Header/header.tsx'
import Footer from '../Footer/Footer.tsx'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export const rootRoute = createRootRoute({
  component: () => (
    <div className="flex min-h-dvh w-full max-w-[100vw] flex-col overflow-x-clip">
      <Header />
      <main className="w-full flex-1 pt-[4.25rem] pb-20 sm:pb-16 lg:pt-[4.75rem] lg:pb-8">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  ),
})
