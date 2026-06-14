import { Link } from '@tanstack/react-router'

import SectionHeader from '../components/SectionHeader.tsx'
import { packagingOptions, sabudanaGrades } from '../data/company.ts'

const productFeatures = [
  '100% tapioca-based pearl sago',
  'Uniform pearl size & white color',
  'Controlled moisture for long shelf life',
  'Suitable for fasting & food industry use',
]

export default function Products() {
  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <SectionHeader
        badge="Our Product"
        title="Premium Pearl Sabudana (Sago)"
        description="Factory-direct pearl sago for wholesale, retail repacking, and export. Available in multiple grades with flexible bulk packaging."
      />

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/products/sabudana-premium.svg"
            alt="Premium pearl sabudana"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Product Highlights</h2>
          <ul className="mt-4 space-y-3">
            {productFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-white/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {feature}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-emerald-200">Available Grades</h3>
          <div className="mt-4 space-y-3">
            {sabudanaGrades.map((item) => (
              <div key={item.grade} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-white">{item.grade}</span>
                  <span className="text-xs text-amber-400">{item.size}</span>
                </div>
                <p className="mt-1 text-sm text-white/60">{item.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Packaging Details</h3>
          <ul className="mt-4 space-y-2">
            {packagingOptions.map((option) => (
              <li key={option} className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-amber-400">&#10003;</span>
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Loading & Shipping</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Daily dispatch from Salem, Tamil Nadu</li>
            <li>Transport arranged for bulk truck loads</li>
            <li>Export documentation support available</li>
            <li>Minimum order quantities apply — contact sales</li>
          </ul>
          <Link
            to="/bulk-orders"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-emerald-950"
          >
            Request Bulk Pricing
          </Link>
        </div>
      </div>
    </div>
  )
}
