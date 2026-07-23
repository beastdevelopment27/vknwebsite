import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { PageMeta } from '@/components/PageMeta'
import SectionHeader from '../components/SectionHeader.tsx'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import {
  company,
  heroStats,
  processStepKeys,
  testimonialKeys,
  timelineKeys,
  whyChooseUsKeys,
} from '../data/company.ts'

const heroSlides = [
  {
    title: 'Kandhavel Sago Factory',
    subtitle: 'Primary processing & bulk production',
    image: '/facilities/processing.svg',
  },
  {
    title: 'Premium Pearl Sabudana',
    subtitle: 'Consistent quality for bulk buyers',
    image: '/products/sabudana-premium.svg',
  },
  {
    title: 'Reliable Bulk Dispatch',
    subtitle: 'Grading, packaging & on-time delivery',
    image: '/facilities/dispatch.svg',
  },
]

function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    onSelect()
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="relative h-full min-h-[320px] lg:min-h-0">
      <Carousel
        className="h-full w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        setApi={setApi}
      >
        <CarouselContent className="-ml-0 h-full">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.title} className="h-full pl-0">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-white/10 lg:min-h-[480px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  width={800}
                  height={500}
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 pb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                    {slide.subtitle}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">{slide.title}</h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <Button
            key={slide.title}
            type="button"
            variant="ghost"
            size="icon-xs"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 min-w-0 rounded-full p-0 hover:bg-transparent ${
              index === current ? 'w-6 bg-amber-400' : 'w-2 bg-white/35'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta page="home" path="/" />

      <section className="w-full px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div className="animate-fade-in flex flex-col justify-center">
            <span className="inline-block w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              {t('home.badge')}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              {t('home.headline')}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              {t('home.subheadline')}
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <li
                  key={stat.labelKey}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80"
                >
                  <span className="text-amber-400" aria-hidden="true">&#10003;</span>
                  <span>
                    <strong className="text-white">{stat.value}</strong>{' '}
                    {t(stat.labelKey)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
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
                className="h-11 rounded-full border-white/30 px-7 text-white hover:border-amber-400/50 hover:bg-transparent hover:text-amber-400"
              >
                <Link to="/contact">{t('cta.contactSales')}</Link>
              </Button>
            </div>
          </div>

          <div className="h-full min-h-0">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-10 md:px-8" aria-label="Production statistics">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          {t('home.statsBadge')}
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.labelKey} className="text-center">
              <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/55">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-14 md:px-8">
        <SectionHeader
          badge={t('home.whyBadge')}
          title={t('home.whyTitle')}
          description={t('home.whyDesc')}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsKeys.map((key) => (
            <article
              key={key}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-amber-400/30"
            >
              <h3 className="flex items-start gap-2 font-semibold text-emerald-200">
                <span className="text-amber-400" aria-hidden="true">&#10003;</span>
                {t(`why.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{t(`why.${key}.desc`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-white/[0.02] px-4 py-14 md:px-8">
        <SectionHeader
          badge={t('home.processBadge')}
          title={t('home.processTitle')}
          description={t('home.processDesc')}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {processStepKeys.map((key, index) => (
            <div key={key} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="text-xs font-bold text-amber-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-semibold text-white">{t(`process.${key}.title`)}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{t(`process.${key}.desc`)}</p>
              {index < processStepKeys.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-amber-400/40 xl:block" aria-hidden="true">
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-14 md:px-8">
        <SectionHeader
          badge={t('home.timelineBadge')}
          title={t('home.timelineTitle')}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {timelineKeys.map((key) => (
            <article key={key} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold text-amber-400">{t(`timeline.${key}.year`)}</p>
              <h3 className="mt-2 font-semibold text-white">{t(`timeline.${key}.title`)}</h3>
              <p className="mt-2 text-sm text-white/65">{t(`timeline.${key}.desc`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-white/[0.02] px-4 py-14 md:px-8">
        <SectionHeader
          badge={t('home.testimonialsBadge')}
          title={t('home.testimonialsTitle')}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonialKeys.map((key) => (
            <blockquote
              key={key}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm italic leading-relaxed text-white/75">
                &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
              </p>
              <footer className="mt-4 text-xs font-medium text-amber-400">
                — {t(`testimonials.${key}.author`)}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-4 mb-14 rounded-2xl border border-amber-400/20 bg-gradient-to-r from-emerald-950 to-black px-6 py-10 text-center md:mx-8">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{t('home.ctaTitle')}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">{t('home.ctaDesc')}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full bg-amber-400 px-8 text-emerald-950 hover:bg-amber-400/90"
          >
            <Link to="/bulk-orders">{t('cta.requestQuote')}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 rounded-full border-green-500/50 px-8 text-green-400 hover:bg-green-500/10 hover:text-green-400"
          >
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('cta.whatsappSales')}
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
