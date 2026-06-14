import { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from '@tanstack/react-router'

import SectionHeader from '../components/SectionHeader.tsx'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel.tsx'
import { company, heroStats, processSteps, whyChooseUs } from '../data/company.ts'

const heroSlides = [
  {
    title: 'Kadhavel Sago Factory',
    subtitle: 'Primary processing & bulk production',
    image: '/facilities/processing.svg',
  },
  {
    title: 'Vetrivel Sago Products',
    subtitle: 'Grading, packaging & dispatch',
    image: '/facilities/dispatch.svg',
  },
  {
    title: 'Premium Pearl Sabudana',
    subtitle: 'Consistent quality for bulk buyers',
    image: '/products/sabudana-premium.svg',
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
                <img src={slide.image} alt={slide.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 pb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Our Operations</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">{slide.title}</h2>
                  <p className="mt-1 text-sm text-white/75">{slide.subtitle}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? 'w-6 bg-amber-400' : 'w-2 bg-white/35'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="w-full px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div className="animate-fade-in flex flex-col justify-center">
            <span className="inline-block w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Salem Sabudana Manufacturer
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              Trusted Bulk Sabudana Manufacturer
              <span className="mt-1 block text-amber-400">Since 1980s</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Direct-from-factory pearl sago supply for wholesalers, distributors, and export
              buyers. Two production units. 9 tons daily capacity. Consistent quality, every batch.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                  <p className="text-lg font-bold text-amber-400 md:text-xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/55 md:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/bulk-orders"
                className="rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-emerald-950 transition-opacity hover:opacity-90"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors hover:border-amber-400/50 hover:text-amber-400"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="h-full min-h-0">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-10 md:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full px-4 py-14 md:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Built for Bulk Buyers & Distributors"
          description="Factory-direct supply with the scale, quality, and reliability that wholesale partners demand."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-amber-400/30"
            >
              <h3 className="font-semibold text-emerald-200">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full bg-white/[0.02] px-4 py-14 md:px-8">
        <SectionHeader
          badge="Our Process"
          title="From Raw Material to Dispatch"
          description="A controlled six-stage manufacturing process ensuring consistent pearl sago quality."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="text-xs font-bold text-amber-400">{step.step}</span>
              <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">{step.description}</p>
              {index < processSteps.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden text-amber-400/40 xl:block">&rarr;</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4 mb-14 rounded-2xl border border-amber-400/20 bg-gradient-to-r from-emerald-950 to-black px-6 py-10 text-center md:mx-8">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Place a Bulk Order?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
          Serving wholesalers and distributors across Tamil Nadu. Export enquiries welcome.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/bulk-orders"
            className="rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-emerald-950"
          >
            Request a Quote
          </Link>
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-green-500/50 px-8 py-3 text-sm font-medium text-green-400"
          >
            WhatsApp Sales
          </a>
        </div>
      </section>
    </>
  )
}
