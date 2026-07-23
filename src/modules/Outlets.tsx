import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ImageLightbox } from '@/components/ImageLightbox'
import { PageMeta } from '@/components/PageMeta'
import { Button } from '@/components/ui/button'
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
    <div className="w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
      <PageMeta page="facilities" path="/facilities" />

      <SectionHeader
        badge={t('facilities.badge')}
        title={t('facilities.title')}
        description={t('facilities.desc')}
      />

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

      <div className="mt-6 space-y-5 sm:mt-8">
        {facilities.map((facility) => (
          <article
            key={facility.name}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:rounded-2xl lg:grid lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px]">
              <img
                src={facility.image}
                alt={facility.name}
                width={800}
                height={500}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[10px] text-white sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
                {facility.name}
              </span>
            </div>
            <div className="p-4 sm:p-5 lg:flex lg:flex-col lg:justify-center">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 sm:text-xs">
                {t('facilities.purpose')}
              </p>
              <h2 className="mt-1 text-base font-bold text-white sm:text-lg">
                {t(facility.titleKey)}
              </h2>
              <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">
                {t(facility.descKey)}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-3.5 sm:gap-2">
                <span className="rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] text-white/80 sm:px-3 sm:py-1 sm:text-xs">
                  {t('facilities.capacity')}: {facility.capacity}
                </span>
                <span className="rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] text-white/80 sm:px-3 sm:py-1 sm:text-xs">
                  {facility.area}
                </span>
              </div>

              <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-white/50 sm:mt-3.5 sm:text-xs">
                {t('facilities.infrastructure')}
              </p>
              <ul className="mt-1.5 grid grid-cols-2 gap-1.5 sm:mt-2 sm:grid-cols-3 sm:gap-2">
                {facility.infrastructureKeys.map((key) => (
                  <li key={key} className="text-[10px] text-white/60 sm:text-xs">
                    &#8226; {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 sm:mt-10">
        <h2 className="text-center text-base font-bold text-white sm:text-lg md:text-xl">
          {t('facilities.gallery')}
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <Button
              key={item.alt}
              type="button"
              variant="ghost"
              onClick={() => setLightboxIndex(index)}
              className="group h-auto overflow-hidden rounded-lg border border-white/10 p-0 text-left hover:border-amber-400/40 hover:bg-transparent sm:rounded-xl"
            >
              <span className="block w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105"
                />
                <span className="block bg-white/5 px-2 py-1.5 text-[10px] font-normal text-white/70 sm:px-3 sm:py-2 sm:text-xs">
                  {item.alt}
                </span>
              </span>
            </Button>
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
