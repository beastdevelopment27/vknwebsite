import { Outlet, createRootRoute } from '@tanstack/react-router';
import Header from '../Header/header.tsx';
import Footer from '../Footer/Footer.tsx';

export const rootRoute = createRootRoute({
  component: () => (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="w-full flex-1 pt-16 md:pt-[4.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});