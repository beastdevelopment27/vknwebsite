import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import SectionHeader from '../components/SectionHeader.tsx'
import {
  packagingOptions,
  productFeatureKeys,
  productShippingKeys,
  sabudanaGrades,
} from '../data/company.ts'

export default function Products() {
  const { t } = useTranslation()

  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <PageMeta page="products" path="/products" />

      <SectionHeader
        badge={t('products.badge')}
        title={t('products.title')}
        description={t('products.desc')}
      />

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold text-amber-400">
        <span aria-hidden="true">&#10003;</span>
        {t('products.packaging45')}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/products/sabudana-premium.svg"
            alt="Premium pearl sabudana"
            width={800}
            height={600}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">{t('products.highlights')}</h2>
          <ul className="mt-4 space-y-3">
            {productFeatureKeys.map((key) => (
              <li key={key} className="flex items-start gap-3 text-sm text-white/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {t(key)}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-emerald-200">{t('products.grades')}</h3>
          <div className="mt-4 space-y-3">
            {sabudanaGrades.map((item) => (
              <div key={item.gradeKey} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-white">{t(item.gradeKey)}</span>
                  <span className="text-xs text-amber-400">{t(item.sizeKey)}</span>
                </div>
                <p className="mt-1 text-sm text-white/60">{t(item.useKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">{t('products.packaging')}</h3>
          <ul className="mt-4 space-y-2">
            {packagingOptions.map((key) => (
              <li key={key} className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-amber-400">&#10003;</span>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">{t('products.shipping')}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {productShippingKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <img
              src="/facilities/dispatch.svg"
              alt="Loading and dispatch"
              width={600}
              height={400}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <Link
            to="/bulk-orders"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-emerald-950"
          >
            {t('cta.requestBulkQuote')}
          </Link>
        </div>
      </div>
    </div>
  )
}
