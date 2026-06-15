import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import QuoteForm from '../components/QuoteForm.tsx'
import SectionHeader from '../components/SectionHeader.tsx'
import { buyerKeys, bulkStepKeys, company, heroStats, packagingOptions } from '../data/company.ts'

export default function BulkOrders() {
  const { t } = useTranslation()

  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <PageMeta page="bulk" path="/bulk-orders" />

      <SectionHeader
        badge={t('bulk.badge')}
        title={t('bulk.title')}
        description={t('bulk.desc')}
      />

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div
            key={stat.labelKey}
            className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-center"
          >
            <p className="text-2xl font-bold text-amber-400">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/55">{t(stat.labelKey)}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            {t('bulk.capacity')}
          </h2>
          <p className="mt-2 text-3xl font-bold text-white">{t('bulk.capacityValue')}</p>
          <p className="mt-3 text-sm text-white/70">{t('bulk.capacityDesc')}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            {t('bulk.packaging')}
          </h2>
          <p className="mt-2 text-3xl font-bold text-white">{t('bulk.packagingValue')}</p>
          <ul className="mt-4 space-y-2">
            {packagingOptions.map((key) => (
              <li key={key} className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-amber-400">&#10003;</span>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-emerald-200">{t('bulk.buyers')}</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {buyerKeys.map((key) => (
              <li
                key={key}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
              >
                <span className="text-amber-400">&#10003;</span>
                {t(`buyers.${key}`)}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-emerald-200">{t('bulk.process')}</h3>
          <div className="mt-4 space-y-3">
            {bulkStepKeys.map((key) => (
              <div key={key} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="font-bold text-amber-400">{key}</span>
                <div>
                  <p className="font-medium text-white">{t(`bulkSteps.${key}.title`)}</p>
                  <p className="text-sm text-white/60">{t(`bulkSteps.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-white/50">{t('bulk.moq')}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${company.phone}`}
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm text-white"
            >
              {t('cta.callNow')}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-500/40 px-5 py-2.5 text-sm text-green-400"
            >
              {t('cta.whatsappSales')}
            </a>
            <Link to="/products" className="rounded-full text-sm text-amber-400 underline-offset-4 hover:underline">
              {t('bulk.viewProducts')} &rarr;
            </Link>
          </div>
        </div>

        <QuoteForm submitLabel={t('cta.requestBulkQuote')} />
      </div>
    </div>
  )
}
