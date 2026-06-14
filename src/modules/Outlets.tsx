import SectionHeader from '../components/SectionHeader.tsx'
import { facilities, heroStats } from '../data/company.ts'

const gallery = [
  { label: 'Factory Exterior', image: '/facilities/processing.svg' },
  { label: 'Processing Machinery', image: '/carousel/factory.svg' },
  { label: 'Warehouse Storage', image: '/facilities/dispatch.svg' },
  { label: 'Loading & Dispatch', image: '/carousel/products.svg' },
]

export default function Outlets() {
  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <SectionHeader
        badge="Our Facilities"
        title="Two Production Units. One Reliable Supply Chain."
        description="Integrated processing, grading, warehousing, and dispatch infrastructure built for bulk sabudana supply."
      />

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-xl font-bold text-amber-400 md:text-2xl">{stat.value}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/55 md:text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {facilities.map((facility) => (
          <article key={facility.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/10]">
              <img src={facility.image} alt={facility.name} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-white">
                {facility.unit} — {facility.name}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-white">{facility.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{facility.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-white/80">
                  Capacity: {facility.capacity}
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs text-white/80">
                  {facility.area}
                </span>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {facility.infrastructure.map((item) => (
                  <li key={item} className="text-xs text-white/60">
                    &#8226; {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-center text-xl font-bold text-white md:text-2xl">Infrastructure Gallery</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((item) => (
            <figure key={item.label} className="overflow-hidden rounded-xl border border-white/10">
              <img src={item.image} alt={item.label} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="bg-white/5 px-3 py-2 text-xs text-white/70">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}
