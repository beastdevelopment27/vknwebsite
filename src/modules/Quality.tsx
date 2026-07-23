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
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <PageMeta page="quality" path="/quality" />

      <SectionHeader
        badge={t('quality.badge')}
        title={t('quality.title')}
        description={t('quality.desc')}
      />

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 lg:min-h-0">
          <img
            src="/carousel/sabudana.svg"
            alt="Quality control"
            width={800}
            height={500}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {t('quality.certified')}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white/85"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-emerald-200">{t('quality.workflow')}</h2>
          <ol className="mt-5 space-y-3">
            {qcWorkflowKeys.map((key, index) => (
              <li
                key={key}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-xs font-bold text-amber-400">
                  {index + 1}
                </span>
                <span className="text-sm text-white/80">{t(key)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-center text-xl font-bold text-white">{t('quality.checkpoints')}</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qcKeys.map((key) => (
            <article key={key} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="flex items-center gap-2 font-semibold text-emerald-200">
                <span className="text-amber-400" aria-hidden="true">&#10003;</span>
                {t(`qc.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{t(`qc.${key}.desc`)}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 className="text-lg font-bold text-white">{t('quality.stages')}</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-sm text-white/70">
          {processStepKeys.map((key, index) => (
            <span key={key} className="inline-flex items-center gap-3">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 whitespace-nowrap">
                {t(`process.${key}.title`)}
              </span>
              {index < processStepKeys.length - 1 && (
                <span
                  className="inline-flex size-4 shrink-0 items-center justify-center text-sm leading-none text-amber-400/60"
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
