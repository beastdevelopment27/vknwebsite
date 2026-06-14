import { Link } from '@tanstack/react-router'

import SectionHeader from '../components/SectionHeader.tsx'
import { heroStats } from '../data/company.ts'

export default function About() {
  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <SectionHeader
        badge="About Us"
        title="Four Decades of Sabudana Manufacturing Excellence"
        description="Vetrivel Sago Products and Kandhavel Sago Factory — two units, one commitment to quality bulk supply from Salem, Tamil Nadu."
      />

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold text-emerald-200">Our Story</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            What began as a family-led sago operation has grown into a professionally managed
            manufacturing group serving wholesalers and distributors across Tamil Nadu. Today we
            operate two dedicated production units with a combined daily capacity of 9 tons.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Our focus is simple: consistent pearl sago quality, reliable bulk dispatch, and
            long-term partnerships with buyers who depend on us every day.
          </p>
        </div>

        <div className="relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10">
          <img src="/facilities/processing.svg" alt="Manufacturing facility" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">At a Glance</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>40+ years of sabudana manufacturing</li>
              <li>2 production units in Tamil Nadu</li>
              <li>200+ bags produced daily</li>
              <li>Factory-direct bulk supply</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-xl font-bold text-amber-400 md:text-2xl">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/55">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/bulk-orders" className="rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-emerald-950">
          Request a Quote
        </Link>
        <Link to="/contact" className="rounded-full border border-white/30 px-7 py-3 text-sm text-white">
          Contact Sales
        </Link>
      </div>
    </div>
  )
}
