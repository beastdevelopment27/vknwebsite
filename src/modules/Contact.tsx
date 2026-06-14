import { Link } from '@tanstack/react-router'

import QuoteForm from '../components/QuoteForm.tsx'
import { company, facilities } from '../data/company.ts'

const cardClass = 'rounded-2xl border border-white/10 bg-white/5'

export default function Contact() {
  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <div className="text-center">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
          Contact Sales
        </span>
        <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">Get in Touch With Our Team</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
          Bulk orders, distributor enquiries, and export requests — reach us directly by phone, WhatsApp, or form.
        </p>
      </div>

      {/* Quick action buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={`tel:${company.phone}`}
          className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-emerald-950"
        >
          Call {company.phoneDisplay}
        </a>
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-green-500/50 bg-green-500/10 px-6 py-3 text-sm font-medium text-green-400"
        >
          WhatsApp Sales
        </a>
        <a
          href={`mailto:${company.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white"
        >
          {company.email}
        </a>
        <Link
          to="/bulk-orders"
          className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-6 py-3 text-sm font-medium text-amber-400"
        >
          Request a Quote
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold text-white">Factory Locations</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {facilities.map((facility) => (
              <article key={facility.name} className={`${cardClass} overflow-hidden`}>
                <img src={facility.image} alt={facility.name} className="aspect-[16/9] w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-white">{facility.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{company.location}</p>
                  <p className="mt-2 text-xs text-white/50">Capacity: {facility.capacity}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={`${cardClass} mt-4 overflow-hidden`}>
            <p className="border-b border-white/10 px-5 py-3 text-sm font-medium text-white">
              Google Maps — {company.location}
            </p>
            <iframe
              title="Factory location map"
              src={company.mapEmbed}
              className="h-56 w-full border-0 md:h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <QuoteForm />
      </div>
    </div>
  )
}
