import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import SectionHeader from '../components/SectionHeader.tsx'
import {
  certifications,
  processStepKeys,
  qcKeys,
  qcWorkflowKeys,
} from '../data/company.ts'

export default function Quality() {
  const { t } = useTranslation()

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <PageMeta page="quality" path="/quality" />

      <SectionHeader
        badge={t('quality.badge')}
        title={t('quality.title')}
        description={t('quality.desc')}
      />

      <div className="mt-6 grid grid-cols-1 gap-5 lg:mt-8 lg:grid-cols-2 lg:items-stretch lg:gap-6">
        <div className="relative min-h-[200px] overflow-hidden rounded-xl border border-white/10 sm:min-h-[240px] sm:rounded-2xl lg:min-h-0">
          <img
            src="/carousel/sabudana.svg"
            alt="Quality control"
            width={800}
            height={500}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400 sm:text-xs">
              {t('quality.certified')}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-2.5 sm:gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-white/20 bg-black/50 px-2 py-0.5 text-[10px] text-white/85 sm:px-2.5 sm:py-1 sm:text-xs"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold text-emerald-200 sm:text-lg">{t('quality.workflow')}</h2>
          <ol className="mt-3 space-y-2 sm:mt-4">
            {qcWorkflowKeys.map((key, index) => (
              <li
                key={key}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 sm:gap-3 sm:rounded-xl sm:px-3.5 sm:py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-[10px] font-bold text-amber-400 sm:h-7 sm:w-7 sm:text-xs">
                  {index + 1}
                </span>
                <span className="text-xs text-white/80 sm:text-sm">{t(key)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8 sm:mt-10">
        <h2 className="text-center text-base font-bold text-white sm:text-lg">
          {t('quality.checkpoints')}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {qcKeys.map((key) => (
            <article
              key={key}
              className="rounded-xl border border-white/10 bg-white/5 p-3.5 sm:rounded-2xl sm:p-4"
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
                <span className="text-amber-400" aria-hidden="true">
                  &#10003;
                </span>
                {t(`qc.${key}.title`)}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/65 sm:text-sm">
                {t(`qc.${key}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:mt-10 sm:rounded-2xl sm:p-5 md:p-6">
        <h2 className="text-sm font-bold text-white sm:text-base">{t('quality.stages')}</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-white/70 sm:gap-x-3 sm:text-sm">
          {processStepKeys.map((key, index) => (
            <span key={key} className="inline-flex items-center gap-2 sm:gap-2.5">
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 whitespace-nowrap sm:rounded-lg sm:px-3 sm:py-1.5">
                {t(`process.${key}.title`)}
              </span>
              {index < processStepKeys.length - 1 && (
                <span
                  className="inline-flex size-3.5 shrink-0 items-center justify-center text-xs leading-none text-amber-400/60 sm:size-4 sm:text-sm"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
