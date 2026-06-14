import { Link } from '@tanstack/react-router'

import { company } from '../data/company.ts'

const sectionHeading =
  'mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400'
const columnLink =
  'block text-sm text-white/70 transition-colors hover:text-amber-300'

export default function Footer() {
  return (
    <footer className="w-full bg-emerald-950 px-4 py-8 md:px-8">
      <div className="flex w-full flex-row flex-wrap gap-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="min-w-[200px] flex-1 basis-full lg:col-span-4 lg:basis-auto">
          <h2 className="text-xl font-semibold leading-snug text-amber-400">{company.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Salem&apos;s trusted bulk sabudana manufacturer. Factory-direct supply for wholesalers,
            distributors, and export buyers across Tamil Nadu.
          </p>
        </div>

        <div className="min-w-[120px] flex-1 basis-[calc(50%-1rem)] lg:col-span-2 lg:basis-auto">
          <h3 className={sectionHeading}>Company</h3>
          <nav className="flex flex-col gap-2">
            <Link to="/about" className={columnLink}>About Us</Link>
            <Link to="/quality" className={columnLink}>Quality</Link>
            <Link to="/outlets" className={columnLink}>Facilities</Link>
            <Link to="/contact" className={columnLink}>Contact</Link>
          </nav>
        </div>

        <div className="min-w-[120px] flex-1 basis-[calc(50%-1rem)] lg:col-span-2 lg:basis-auto">
          <h3 className={sectionHeading}>Products</h3>
          <nav className="flex flex-col gap-2">
            <Link to="/products" className={columnLink}>Pearl Sabudana</Link>
            <Link to="/bulk-orders" className={columnLink}>Bulk Orders</Link>
            <Link to="/bulk-orders" className={columnLink}>Export Enquiries</Link>
          </nav>
        </div>

        <div className="min-w-[220px] w-full flex-1 basis-full lg:col-span-4 lg:w-auto lg:basis-auto">
          <h3 className={sectionHeading}>Quick Enquiry</h3>
          <div className="space-y-3 text-sm text-white/75">
            <a href={`tel:${company.phone}`} className="block transition-colors hover:text-amber-400">
              Phone: {company.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-green-400"
            >
              WhatsApp: {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} className="block transition-colors hover:text-amber-400">
              Email: {company.email}
            </a>
          </div>
          <Link
            to="/bulk-orders"
            className="mt-5 inline-block rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-emerald-950 transition-opacity hover:opacity-90"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <hr className="mt-10 w-full border-white/15" />

      <div className="mt-6 flex w-full flex-row flex-wrap items-center justify-between gap-3 text-sm text-white/60">
        <p>&copy; 2026 {company.name}. All rights reserved.</p>
        <p>{company.tagline}</p>
      </div>
    </footer>
  )
}
