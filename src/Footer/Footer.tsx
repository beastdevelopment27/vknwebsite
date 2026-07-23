import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { company } from '../data/company.ts'

const sectionHeading =
  'mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400 sm:mb-4 sm:text-xs'
const columnLink =
  'block py-0.5 text-sm text-white/70 transition-colors hover:text-amber-300'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full bg-emerald-950 px-3 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-6 sm:px-6 sm:py-7 md:px-8 md:py-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-4">
          <h2 className="text-base font-semibold leading-snug text-amber-400 sm:text-lg md:text-xl">
            {company.name}
          </h2>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-white/70 sm:text-sm">
            {t('footer.desc')}
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className={sectionHeading}>{t('footer.quickLinks')}</h3>
          <nav className="flex flex-col gap-1.5">
            <Link to="/products" className={columnLink}>
              {t('nav.products')}
            </Link>
            <Link to="/facilities" className={columnLink}>
              {t('nav.facilities')}
            </Link>
            <Link to="/bulk-orders" className={columnLink}>
              {t('nav.bulkOrders')}
            </Link>
            <Link to="/contact" className={columnLink}>
              {t('nav.contact')}
            </Link>
          </nav>
        </div>

        <div className="sm:col-span-2 lg:col-span-6">
          <h3 className={sectionHeading}>{t('footer.contactInfo')}</h3>
          <div className="space-y-2 text-xs text-white/75 sm:space-y-2.5 sm:text-sm">
            <a
              href={`tel:${company.phone}`}
              className="block break-all transition-colors hover:text-amber-400"
            >
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="block break-all transition-colors hover:text-amber-400"
            >
              {company.email}
            </a>
            <p>
              {t('footer.address')}: {company.location}
            </p>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-green-400"
            >
              WhatsApp: {company.phoneDisplay}
            </a>
          </div>
          <Link
            to="/bulk-orders"
            className="mt-4 inline-flex h-10 items-center rounded-full bg-amber-400 px-5 text-sm font-semibold text-emerald-950 transition-opacity hover:opacity-90 sm:mt-5"
          >
            {t('cta.requestQuote')}
          </Link>
        </div>
      </div>

      <hr className="mx-auto mt-8 w-full max-w-7xl border-white/15 sm:mt-10" />

      <div className="mx-auto mt-4 flex w-full max-w-7xl flex-col gap-1 text-center text-[11px] text-white/60 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:text-left sm:text-sm">
        <p>
          &copy; 2026 {company.shortName}. {t('footer.rights')}
        </p>
        <p>{company.tagline}</p>
      </div>
    </footer>
  )
}
