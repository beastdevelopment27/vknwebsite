import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import { Button } from '@/components/ui/button'
import QuoteForm from '../components/QuoteForm.tsx'
import { company } from '../data/company.ts'

const cardClass = 'rounded-2xl border border-white/10 bg-white/5'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <PageMeta page="contact" path="/contact" />

      <div className="text-center">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
          {t('contact.badge')}
        </span>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">{t('contact.title')}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">{t('contact.desc')}</p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="h-11 rounded-full bg-amber-400 px-6 text-emerald-950 hover:bg-amber-400/90"
        >
          <a href={`tel:${company.phone}`}>
            {t('cta.callNow')}: {company.phoneDisplay}
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 rounded-full border-green-500/50 bg-green-500/10 px-6 text-green-400 hover:bg-green-500/20 hover:text-green-400"
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
          className="h-11 rounded-full border-white/30 px-6 text-white hover:bg-white/5 hover:text-white"
        >
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 rounded-full border-amber-400/40 px-6 text-amber-400 hover:bg-amber-400/10 hover:text-amber-400"
        >
          <Link to="/bulk-orders">{t('cta.requestQuote')}</Link>
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className={`${cardClass} p-5`}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                {t('contact.companyAddress')}
              </h2>
              <p className="mt-2 text-sm text-white/75">{company.companyAddress}</p>
              <p className="mt-2 text-sm text-white/60">{company.email}</p>
            </article>
            <article className={`${cardClass} p-5`}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
                {t('contact.factoryAddress')}
              </h2>
              <p className="mt-2 text-sm text-white/75">{company.factoryAddress}</p>
              <p className="mt-2 text-sm text-white/60">{company.phoneDisplay}</p>
            </article>
          </div>

          <div className={`${cardClass} mt-4 overflow-hidden`}>
            <p className="border-b border-white/10 px-5 py-3 text-sm font-medium text-white">
              {t('contact.map')} — {company.location}
            </p>
            <iframe
              title="Factory location map"
              src={company.mapEmbed}
              className="h-56 w-full border-0 md:h-64"
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
