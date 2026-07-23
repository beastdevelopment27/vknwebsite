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
    subtitle: 'Processing & bulk production',
    image: '/facilities/processing.svg',
  },
  {
    title: 'Premium Pearl Sabudana',
    subtitle: 'Consistent quality for buyers',
    image: '/products/sabudana-premium.svg',
  },
  {
    title: 'Reliable Bulk Dispatch',
    subtitle: 'Packaging & on-time delivery',
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
    <div className="relative h-full min-h-[220px] sm:min-h-[280px] lg:min-h-0">
      <Carousel
        className="h-full w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        setApi={setApi}
      >
        <CarouselContent className="-ml-0 h-full">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.title} className="h-full pl-0">
              <div className="relative h-full min-h-[220px] overflow-hidden rounded-xl border border-white/10 sm:min-h-[280px] sm:rounded-2xl lg:min-h-[400px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  width={800}
                  height={500}
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 pb-8 sm:p-5 sm:pb-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400 sm:text-xs">
                    {slide.subtitle}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-white sm:mt-1.5 sm:text-xl">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {heroSlides.map((slide, index) => (
          <Button
            key={slide.title}
            type="button"
            variant="ghost"
            size="icon-xs"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 min-w-0 rounded-full p-0 hover:bg-transparent ${
              index === current ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/35'
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

      <section className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <div className="animate-fade-in flex flex-col justify-center">
            <span className="inline-block w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary sm:px-4 sm:text-xs">
              {t('home.badge')}
            </span>
            <h1 className="mt-3 text-2xl font-bold leading-tight text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
              {t('home.headline')}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-3 sm:text-base">
              {t('home.subheadline')}
            </p>

            <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
              {heroStats.map((stat) => (
                <li
                  key={stat.labelKey}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-xs text-white/80 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2.5 sm:text-sm"
                >
                  <span className="text-amber-400" aria-hidden="true">
                    &#10003;
                  </span>
                  <span>
                    <strong className="text-white">{stat.value}</strong>{' '}
                    {t(stat.labelKey)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
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
                className="h-10 rounded-full border-white/30 px-5 text-white hover:border-amber-400/50 hover:bg-transparent hover:text-amber-400 sm:h-11 sm:px-7"
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

      <section
        className="border-y border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 sm:py-8 md:px-8"
        aria-label="Production statistics"
      >
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400 sm:mb-5 sm:text-xs">
          {t('home.statsBadge')}
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {heroStats.map((stat) => (
            <div key={stat.labelKey} className="text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/55 sm:mt-1.5 sm:text-xs">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <SectionHeader
          badge={t('home.whyBadge')}
          title={t('home.whyTitle')}
          description={t('home.whyDesc')}
        />
        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {whyChooseUsKeys.map((key) => (
            <article
              key={key}
              className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-amber-400/30 sm:rounded-2xl sm:p-4"
            >
              <h3 className="flex items-start gap-2 text-sm font-semibold text-emerald-200 sm:text-base">
                <span className="text-amber-400" aria-hidden="true">
                  &#10003;
                </span>
                {t(`why.${key}.title`)}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/65 sm:mt-2 sm:text-sm">
                {t(`why.${key}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-white/[0.02] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <SectionHeader
          badge={t('home.processBadge')}
          title={t('home.processTitle')}
          description={t('home.processDesc')}
        />
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3 lg:grid-cols-3 xl:grid-cols-6">
          {processStepKeys.map((key, index) => (
            <div
              key={key}
              className="relative rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4"
            >
              <span className="text-[10px] font-bold text-amber-400 sm:text-xs">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-1 text-sm font-semibold text-white sm:mt-1.5">
                {t(`process.${key}.title`)}
              </h3>
              <p className="mt-1 hidden text-xs leading-relaxed text-white/60 sm:block">
                {t(`process.${key}.desc`)}
              </p>
              {index < processStepKeys.length - 1 && (
                <span
                  className="pointer-events-none absolute left-full top-1/2 z-10 ml-2 hidden size-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-sm leading-none text-amber-400/60 xl:flex"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <SectionHeader badge={t('home.timelineBadge')} title={t('home.timelineTitle')} />
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-7 sm:gap-3 lg:grid-cols-4">
          {timelineKeys.map((key) => (
            <article
              key={key}
              className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4"
            >
              <p className="text-xs font-bold text-amber-400 sm:text-sm">
                {t(`timeline.${key}.year`)}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-white sm:mt-1.5">
                {t(`timeline.${key}.title`)}
              </h3>
              <p className="mt-1 text-xs text-white/65 sm:mt-1.5 sm:text-sm">
                {t(`timeline.${key}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-white/[0.02] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <SectionHeader
          badge={t('home.testimonialsBadge')}
          title={t('home.testimonialsTitle')}
        />
        <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-7 sm:gap-4 md:grid-cols-3">
          {testimonialKeys.map((key) => (
            <blockquote
              key={key}
              className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5"
            >
              <p className="text-xs italic leading-relaxed text-white/75 sm:text-sm">
                &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
              </p>
              <footer className="mt-2.5 text-[10px] font-medium text-amber-400 sm:mt-3 sm:text-xs">
                — {t(`testimonials.${key}.author`)}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-4 mb-10 rounded-xl border border-amber-400/20 bg-gradient-to-r from-emerald-950 to-black px-4 py-7 text-center sm:mx-6 sm:mb-12 sm:rounded-2xl sm:px-6 sm:py-8 md:mx-8">
        <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
          {t('home.ctaTitle')}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-xs text-white/70 sm:mt-2.5 sm:text-sm">
          {t('home.ctaDesc')}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:mt-5 sm:gap-3">
          <Button
            asChild
            size="lg"
            className="h-10 rounded-full bg-amber-400 px-6 text-emerald-950 hover:bg-amber-400/90 sm:h-11 sm:px-8"
          >
            <Link to="/bulk-orders">{t('cta.requestQuote')}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-10 rounded-full border-green-500/50 px-6 text-green-400 hover:bg-green-500/10 hover:text-green-400 sm:h-11 sm:px-8"
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
