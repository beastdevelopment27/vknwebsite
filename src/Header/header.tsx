import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import logo from '../assets/logo.png'

const navLinks = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/products', labelKey: 'nav.products' },
  { to: '/bulk-orders', labelKey: 'nav.bulkOrders' },
  { to: '/quality', labelKey: 'nav.quality' },
  { to: '/facilities', labelKey: 'nav.facilities' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/contact', labelKey: 'nav.contact' },
] as const

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-background/95 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 lg:px-8 lg:py-3.5">
        <Link to="/" className="relative z-10 min-w-0 shrink" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Kandhavel Sago Factory"
            width={200}
            height={44}
            className="h-9 w-auto max-w-[140px] object-contain object-left sm:h-10 sm:max-w-[170px] lg:h-10 lg:max-w-[180px]"
          />
        </Link>

        <div className="ml-auto hidden items-center gap-3 lg:flex xl:gap-5">
          <nav className="flex items-center gap-3 text-sm text-white/80 xl:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="whitespace-nowrap transition-colors hover:text-amber-400"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
          <Link
            to="/bulk-orders"
            className="shrink-0 rounded-full bg-amber-400 px-3.5 py-2 text-xs font-semibold text-emerald-950 xl:px-4"
          >
            {t('cta.getQuote')}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 bg-background/98 transition-all duration-300 lg:hidden ${
          open ? 'max-h-[min(80dvh,560px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex max-h-[min(70dvh,480px)] flex-col gap-0.5 overflow-y-auto overscroll-contain px-3 py-3 sm:px-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-white/85 transition-colors hover:bg-white/5 hover:text-amber-400"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <Link
            to="/bulk-orders"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-amber-400 px-4 py-2.5 text-center text-sm font-semibold text-emerald-950"
          >
            {t('cta.getQuote')}
          </Link>
        </nav>
      </div>
    </header>
  )
}
