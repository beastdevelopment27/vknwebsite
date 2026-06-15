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
  { to: '/outlets', labelKey: 'nav.facilities' },
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

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-background/95 backdrop-blur-sm">
      <div className="flex w-full items-center gap-3 px-4 py-3 md:px-8 md:py-3.5">
        <Link to="/" className="relative z-10 shrink-0" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Vetrivel Sago Products"
            width={200}
            height={44}
            className="h-11 w-auto max-w-[180px] object-contain sm:max-w-[200px] md:h-10 md:max-w-[160px]"
          />
        </Link>

        <div className="ml-auto hidden items-center gap-5 md:flex">
          <LanguageSwitcher />
          <nav className="flex items-center gap-5 text-sm text-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-amber-400"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
          <Link
            to="/bulk-orders"
            className="shrink-0 rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-emerald-950"
          >
            {t('cta.getQuote')}
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
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
        className={`overflow-hidden border-t border-white/5 bg-background/98 transition-all duration-300 md:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-white/85 transition-colors hover:bg-white/5 hover:text-amber-400"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <Link
            to="/bulk-orders"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-amber-400 px-4 py-3 text-center text-sm font-semibold text-emerald-950"
          >
            {t('cta.getQuote')}
          </Link>
        </nav>
      </div>
    </header>
  )
}
