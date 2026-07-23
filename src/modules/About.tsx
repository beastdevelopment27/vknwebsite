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
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <PageMeta page="about" path="/about" />

      <SectionHeader
        badge={t('about.badge')}
        title={t('about.title')}
        description={t('about.desc')}
      />

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold text-emerald-200">{t('about.story')}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{t('about.storyP1')}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{t('about.storyP2')}</p>
        </div>

        <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/facilities/processing.svg"
            alt="Manufacturing facility"
            width={800}
            height={500}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              {t('about.atGlance')}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {glanceKeys.map((key) => (
                <li key={key}>&#10003; {t(key)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.labelKey} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-xl font-bold text-amber-400 md:text-2xl">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/55">{t(stat.labelKey)}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-center text-xl font-bold text-white">{t('home.timelineTitle')}</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timelineKeys.map((key) => (
            <article key={key} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold text-amber-400">{t(`timeline.${key}.year`)}</p>
              <h3 className="mt-2 font-semibold text-white">{t(`timeline.${key}.title`)}</h3>
              <p className="mt-2 text-sm text-white/65">{t(`timeline.${key}.desc`)}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonialKeys.map((key) => (
          <blockquote key={key} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm italic text-white/75">&ldquo;{t(`testimonials.${key}.quote`)}&rdquo;</p>
            <footer className="mt-4 text-xs text-amber-400">— {t(`testimonials.${key}.author`)}</footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button
          asChild
          size="lg"
          className="h-11 rounded-full bg-amber-400 px-7 text-emerald-950 hover:bg-amber-400/90"
        >
          <Link to="/bulk-orders">{t('cta.requestQuote')}</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 rounded-full border-white/30 px-7 text-white hover:bg-white/5 hover:text-white"
        >
          <Link to="/contact">{t('cta.contactSales')}</Link>
        </Button>
      </div>
    </div>
  )
}
