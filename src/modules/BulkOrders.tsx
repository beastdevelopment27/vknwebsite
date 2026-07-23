import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import { Button } from '@/components/ui/button'
import QuoteForm from '../components/QuoteForm.tsx'
import SectionHeader from '../components/SectionHeader.tsx'
import { buyerKeys, bulkStepKeys, company, heroStats, packagingOptions } from '../data/company.ts'

export default function BulkOrders() {
  const { t } = useTranslation()

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <PageMeta page="bulk" path="/bulk-orders" />

      <SectionHeader
        badge={t('bulk.badge')}
        title={t('bulk.title')}
        description={t('bulk.desc')}
      />

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div
            key={stat.labelKey}
            className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-3 text-center sm:rounded-xl sm:p-3.5"
          >
            <p className="text-xl font-bold text-amber-400 sm:text-2xl">{stat.value}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/55 sm:text-xs">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5">
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 sm:text-xs">
            {t('bulk.capacity')}
          </h2>
          <p className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">{t('bulk.capacityValue')}</p>
          <p className="mt-2 text-xs text-white/70 sm:text-sm">{t('bulk.capacityDesc')}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5">
          <h2 className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 sm:text-xs">
            {t('bulk.packaging')}
          </h2>
          <p className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">{t('bulk.packagingValue')}</p>
          <ul className="mt-3 space-y-1.5">
            {packagingOptions.map((key) => (
              <li key={key} className="flex items-center gap-2 text-xs text-white/70 sm:text-sm">
                <span className="text-amber-400">&#10003;</span>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">
        <div>
          <h3 className="text-sm font-semibold text-emerald-200 sm:text-base">{t('bulk.buyers')}</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {buyerKeys.map((key) => (
              <li
                key={key}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-white/80 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2.5 sm:text-sm"
              >
                <span className="text-amber-400">&#10003;</span>
                {t(`buyers.${key}`)}
              </li>
            ))}
          </ul>

          <h3 className="mt-5 text-sm font-semibold text-emerald-200 sm:mt-6 sm:text-base">
            {t('bulk.process')}
          </h3>
          <div className="mt-3 space-y-2">
            {bulkStepKeys.map((key) => (
              <div
                key={key}
                className="flex gap-2.5 rounded-lg border border-white/10 bg-white/5 p-3 sm:gap-3 sm:rounded-xl sm:p-3.5"
              >
                <span className="text-sm font-bold text-amber-400">{key}</span>
                <div>
                  <p className="text-sm font-medium text-white">{t(`bulkSteps.${key}.title`)}</p>
                  <p className="text-xs text-white/60">{t(`bulkSteps.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-white/50">{t('bulk.moq')}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 rounded-full border-white/30 px-4 text-white hover:border-white/50 hover:bg-white/5 hover:text-white sm:h-11 sm:px-5"
            >
              <a href={`tel:${company.phone}`}>{t('cta.callNow')}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-10 rounded-full border-green-500/40 px-4 text-green-400 hover:border-green-500/70 hover:bg-green-500/10 hover:text-green-400 sm:h-11 sm:px-5"
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
              className="h-10 rounded-full border-amber-400/40 px-4 text-amber-400 hover:border-amber-400/70 hover:bg-amber-400/10 hover:text-amber-400 sm:h-11 sm:px-5"
            >
              <Link to="/products">
                {t('bulk.viewProducts')}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </Button>
          </div>
        </div>

        <QuoteForm submitLabel={t('cta.requestBulkQuote')} />
      </div>
    </div>
  )
}
