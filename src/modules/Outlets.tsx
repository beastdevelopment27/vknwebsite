import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ImageLightbox } from '@/components/ImageLightbox'
import { PageMeta } from '@/components/PageMeta'
import SectionHeader from '../components/SectionHeader.tsx'
import { facilities, facilityGallery, heroStats } from '../data/company.ts'

export default function Outlets() {
  const { t } = useTranslation()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const galleryImages = useMemo(
    () =>
      facilityGallery.map((item) => ({
        src: item.image,
        alt: t(`gallery.${item.key}`),
      })),
    [t]
  )

  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <PageMeta page="facilities" path="/outlets" />

      <SectionHeader
        badge={t('facilities.badge')}
        title={t('facilities.title')}
        description={t('facilities.desc')}
      />

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.labelKey} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-xl font-bold text-amber-400 md:text-2xl">{stat.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/55 md:text-xs">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-8">
        {facilities.map((facility) => (
          <article
            key={facility.name}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
              <img
                src={facility.image}
                alt={facility.name}
                width={800}
                height={500}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-white">
                {facility.unit} — {facility.name}
              </span>
            </div>
            <div className="p-6 lg:flex lg:flex-col lg:justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {t('facilities.purpose')}
              </p>
              <h2 className="mt-1 text-xl font-bold text-white">{t(facility.titleKey)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{t(facility.descKey)}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-white/80">
                  {t('facilities.capacity')}: {facility.capacity}
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-white/80">
                  {facility.area}
                </span>
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                {t('facilities.infrastructure')}
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {facility.infrastructureKeys.map((key) => (
                  <li key={key} className="text-xs text-white/60">
                    &#8226; {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-center text-xl font-bold text-white md:text-2xl">
          {t('facilities.gallery')}
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <button
              key={item.alt}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group overflow-hidden rounded-xl border border-white/10 text-left transition-colors hover:border-amber-400/40"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
              />
              <span className="block bg-white/5 px-3 py-2 text-xs text-white/70">{item.alt}</span>
            </button>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  )
}
