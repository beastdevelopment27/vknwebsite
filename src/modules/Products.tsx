import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import { Button } from '@/components/ui/button'
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
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <PageMeta page="products" path="/products" />

      <SectionHeader
        badge={t('products.badge')}
        title={t('products.title')}
        description={t('products.desc')}
      />

      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-400 sm:mt-5 sm:px-4 sm:text-sm">
        <span aria-hidden="true">&#10003;</span>
        {t('products.packaging45')}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:mt-8 lg:grid-cols-2 lg:items-start lg:gap-6">
        <div className="overflow-hidden rounded-xl border border-white/10 sm:rounded-2xl">
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
          <h2 className="text-base font-bold text-white sm:text-lg">{t('products.highlights')}</h2>
          <ul className="mt-3 space-y-2 sm:mt-3.5">
            {productFeatureKeys.map((key) => (
              <li key={key} className="flex items-start gap-2 text-xs text-white/75 sm:gap-2.5 sm:text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {t(key)}
              </li>
            ))}
          </ul>

          <h3 className="mt-5 text-sm font-semibold text-emerald-200 sm:mt-6 sm:text-base">
            {t('products.grades')}
          </h3>
          <div className="mt-3 space-y-2 sm:space-y-2.5">
            {sabudanaGrades.map((item) => (
              <div
                key={item.gradeKey}
                className="rounded-lg border border-white/10 bg-white/5 p-3 sm:rounded-xl sm:p-3.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="text-sm font-semibold text-white">{t(item.gradeKey)}</span>
                  <span className="text-[10px] text-amber-400 sm:text-xs">{t(item.sizeKey)}</span>
                </div>
                <p className="mt-0.5 text-xs text-white/60">{t(item.useKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5">
          <h3 className="text-sm font-semibold text-white sm:text-base">{t('products.packaging')}</h3>
          <ul className="mt-3 space-y-1.5">
            {packagingOptions.map((key) => (
              <li key={key} className="flex items-center gap-2 text-xs text-white/70 sm:text-sm">
                <span className="text-amber-400">&#10003;</span>
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5">
          <h3 className="text-sm font-semibold text-white sm:text-base">{t('products.shipping')}</h3>
          <ul className="mt-3 space-y-1.5 text-xs text-white/70 sm:text-sm">
            {productShippingKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
          <div className="mt-4 overflow-hidden rounded-lg border border-white/10 sm:mt-5 sm:rounded-xl">
            <img
              src="/facilities/dispatch.svg"
              alt="Loading and dispatch"
              width={600}
              height={400}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <Button
            asChild
            size="lg"
            className="mt-4 h-10 rounded-full bg-amber-400 px-5 text-emerald-950 hover:bg-amber-400/90 sm:mt-5 sm:h-11 sm:px-6"
          >
            <Link to="/bulk-orders">{t('cta.requestBulkQuote')}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
