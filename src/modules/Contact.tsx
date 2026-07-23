import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import { Button } from '@/components/ui/button'
import QuoteForm from '../components/QuoteForm.tsx'
import { company } from '../data/company.ts'

const cardClass = 'rounded-xl border border-white/10 bg-white/5 sm:rounded-2xl'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <PageMeta page="contact" path="/contact" />

      <div className="text-center">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-400 sm:px-4 sm:text-xs">
          {t('contact.badge')}
        </span>
        <h1 className="mt-2.5 text-2xl font-bold text-white sm:mt-3 sm:text-3xl md:text-4xl">
          {t('contact.title')}
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-xs text-white/70 sm:mt-2.5 sm:text-sm">
          {t('contact.desc')}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-2.5">
        <Button
          asChild
          size="lg"
          className="h-10 max-w-full rounded-full bg-amber-400 px-4 text-emerald-950 hover:bg-amber-400/90 sm:h-11 sm:px-5"
        >
          <a href={`tel:${company.phone}`} className="truncate">
            <span className="sm:hidden">{t('cta.callNow')}</span>
            <span className="hidden sm:inline">
              {t('cta.callNow')}: {company.phoneDisplay}
            </span>
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-10 rounded-full border-green-500/50 bg-green-500/10 px-4 text-green-400 hover:bg-green-500/20 hover:text-green-400 sm:h-11 sm:px-5"
        >
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('cta.whatsappSales')}
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-10 rounded-full border-white/30 px-4 text-white hover:bg-white/5 hover:text-white sm:h-11 sm:px-5"
        >
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-10 rounded-full border-amber-400/40 px-4 text-amber-400 hover:bg-amber-400/10 hover:text-amber-400 sm:h-11 sm:px-5"
        >
          <Link to="/bulk-orders">{t('cta.requestQuote')}</Link>
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:mt-10 lg:grid-cols-2 lg:gap-6">
        <div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <article className={`${cardClass} p-3.5 sm:p-4`}>
              <h2 className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 sm:text-xs">
                {t('contact.companyAddress')}
              </h2>
              <p className="mt-1.5 text-xs text-white/75 sm:text-sm">{company.companyAddress}</p>
              <p className="mt-1 text-xs text-white/60">{company.email}</p>
            </article>
            <article className={`${cardClass} p-3.5 sm:p-4`}>
              <h2 className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 sm:text-xs">
                {t('contact.factoryAddress')}
              </h2>
              <p className="mt-1.5 text-xs text-white/75 sm:text-sm">{company.factoryAddress}</p>
              <p className="mt-1 text-xs text-white/60">{company.phoneDisplay}</p>
            </article>
          </div>

          <div className={`${cardClass} mt-3 overflow-hidden`}>
            <p className="border-b border-white/10 px-3.5 py-2.5 text-xs font-medium text-white sm:px-4 sm:py-3 sm:text-sm">
              {t('contact.map')} — {company.location}
            </p>
            <iframe
              title="Factory location map"
              src={company.mapEmbed}
              className="h-48 w-full border-0 sm:h-56 md:h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <QuoteForm />
      </div>
    </div>
  )
}
