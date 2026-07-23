import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import { Button } from '@/components/ui/button'
import SectionHeader from '../components/SectionHeader.tsx'
import { heroStats, testimonialKeys, timelineKeys } from '../data/company.ts'

export default function About() {
  const { t } = useTranslation()

  const glanceKeys = ['about.glance1', 'about.glance2', 'about.glance3', 'about.glance4'] as const

  return (
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <PageMeta page="about" path="/about" />

      <SectionHeader
        badge={t('about.badge')}
        title={t('about.title')}
        description={t('about.desc')}
      />

      <div className="mt-6 grid grid-cols-1 gap-4 lg:mt-8 lg:grid-cols-2 lg:items-stretch lg:gap-5">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5">
          <h2 className="text-sm font-bold text-emerald-200 sm:text-base">{t('about.story')}</h2>
          <p className="mt-2.5 text-xs leading-relaxed text-white/70 sm:mt-3 sm:text-sm">
            {t('about.storyP1')}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">{t('about.storyP2')}</p>
        </div>

        <div className="relative min-h-[200px] overflow-hidden rounded-xl border border-white/10 sm:min-h-[220px] sm:rounded-2xl">
          <img
            src="/facilities/processing.svg"
            alt="Manufacturing facility"
            width={800}
            height={500}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 p-4 sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400 sm:text-xs">
              {t('about.atGlance')}
            </p>
            <ul className="mt-2 space-y-1 text-xs text-white/80 sm:mt-2.5 sm:space-y-1.5 sm:text-sm">
              {glanceKeys.map((key) => (
                <li key={key}>&#10003; {t(key)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div
            key={stat.labelKey}
            className="rounded-lg border border-white/10 bg-white/5 p-3 text-center sm:rounded-xl sm:p-3.5"
          >
            <p className="text-lg font-bold text-amber-400 sm:text-xl md:text-2xl">{stat.value}</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/55 sm:text-xs">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-10">
        <h2 className="text-center text-base font-bold text-white sm:text-lg">
          {t('home.timelineTitle')}
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3 lg:grid-cols-4">
          {timelineKeys.map((key) => (
            <article
              key={key}
              className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4"
            >
              <p className="text-xs font-bold text-amber-400">{t(`timeline.${key}.year`)}</p>
              <h3 className="mt-1 text-sm font-semibold text-white">
                {t(`timeline.${key}.title`)}
              </h3>
              <p className="mt-1 text-xs text-white/65">{t(`timeline.${key}.desc`)}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
        {testimonialKeys.map((key) => (
          <blockquote
            key={key}
            className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5"
          >
            <p className="text-xs italic text-white/75 sm:text-sm">
              &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
            </p>
            <footer className="mt-2.5 text-[10px] text-amber-400 sm:mt-3 sm:text-xs">
              — {t(`testimonials.${key}.author`)}
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">
        <Button
          asChild
          size="lg"
          className="h-10 rounded-full bg-amber-400 px-5 text-emerald-950 hover:bg-amber-400/90 sm:h-11 sm:px-7"
        >
          <Link to="/bulk-orders">{t('cta.requestQuote')}</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-10 rounded-full border-white/30 px-5 text-white hover:bg-white/5 hover:text-white sm:h-11 sm:px-7"
        >
          <Link to="/contact">{t('cta.contactSales')}</Link>
        </Button>
      </div>
    </div>
  )
}
