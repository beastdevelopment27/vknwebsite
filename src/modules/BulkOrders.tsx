import { Link } from '@tanstack/react-router'

import QuoteForm from '../components/QuoteForm.tsx'
import SectionHeader from '../components/SectionHeader.tsx'
import { company, heroStats, packagingOptions } from '../data/company.ts'

const bulkProcess = [
  { step: '1', title: 'Send Enquiry', desc: 'Share quantity, grade, and delivery location.' },
  { step: '2', title: 'Quote & Sample', desc: 'Receive pricing and sample if required.' },
  { step: '3', title: 'Confirm Order', desc: 'Agree on packaging, payment, and dispatch date.' },
  { step: '4', title: 'Production & QC', desc: 'Batch produced and quality-approved.' },
  { step: '5', title: 'Dispatch', desc: 'Loaded and delivered to your location.' },
]

const opportunities = [
  'Wholesale distributors across Tamil Nadu',
  'Retail chain bulk supply',
  'Institutional & catering buyers',
  'Export enquiries welcome',
]

export default function BulkOrders() {
  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <SectionHeader
        badge="Bulk Orders"
        title="B2B Sabudana Supply — Factory Direct"
        description="Dedicated bulk order page for wholesalers, distributors, and export buyers. Competitive factory-direct pricing with reliable dispatch."
      />

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/55">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-white">Production Capacity</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Combined daily output of <strong className="text-white">9 tons</strong> across two units,
            with over <strong className="text-white">200 bags</strong> produced daily. Built for recurring
            bulk orders and long-term supply partnerships.
          </p>

          <h3 className="mt-8 text-lg font-semibold text-emerald-200">Packaging Options</h3>
          <ul className="mt-3 space-y-2">
            {packagingOptions.map((option) => (
              <li key={option} className="flex items-center gap-2 text-sm text-white/70">
                <span className="text-amber-400">&#10003;</span>
                {option}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-semibold text-emerald-200">Bulk Order Process</h3>
          <div className="mt-4 space-y-3">
            {bulkProcess.map((item) => (
              <div key={item.step} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="font-bold text-amber-400">{item.step}</span>
                <div>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-semibold text-emerald-200">Partner Opportunities</h3>
          <ul className="mt-3 space-y-2">
            {opportunities.map((item) => (
              <li key={item} className="text-sm text-white/70">
                &#8226; {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-white/50">
            Minimum order quantities vary by grade and packaging. Contact sales for current MOQ.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${company.phone}`}
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm text-white"
            >
              Call Sales
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-green-500/40 px-5 py-2.5 text-sm text-green-400"
            >
              WhatsApp
            </a>
            <Link to="/products" className="rounded-full text-sm text-amber-400 underline-offset-4 hover:underline">
              View Products &rarr;
            </Link>
          </div>
        </div>

        <QuoteForm />
      </div>
    </div>
  )
}
