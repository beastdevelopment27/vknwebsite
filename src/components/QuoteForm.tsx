const inputClass =
  'mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35 transition-colors focus:border-amber-400/50'
const labelClass = 'text-sm font-medium text-white/80'

type QuoteFormProps = {
  compact?: boolean
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  return (
    <form
      className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
      onSubmit={(event) => event.preventDefault()}
    >
      {!compact && (
        <>
          <h3 className="text-lg font-semibold text-white">Request a Quote</h3>
          <p className="mt-1 text-sm text-white/60">
            Share your bulk requirement and our sales team will respond within 24 hours.
          </p>
        </>
      )}

      <div className={`grid grid-cols-1 gap-4 ${compact ? 'mt-0' : 'mt-5'} sm:grid-cols-2`}>
        <label className={labelClass}>
          Name
          <input type="text" placeholder="Your name" className={inputClass} required />
        </label>
        <label className={labelClass}>
          Company
          <input type="text" placeholder="Business name" className={inputClass} />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Phone
          <input type="tel" placeholder="+91" className={inputClass} required />
        </label>
        <label className={labelClass}>
          Email
          <input type="email" placeholder="you@company.com" className={inputClass} />
        </label>
      </div>

      <label className={`${labelClass} mt-4 block`}>
        Requirement
        <textarea
          rows={compact ? 3 : 4}
          placeholder="Quantity, grade, delivery location, timeline..."
          className={`${inputClass} resize-none`}
          required
        />
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-amber-400 px-6 py-3 text-sm font-medium text-emerald-950 transition-opacity hover:opacity-90"
      >
        Submit Enquiry
      </button>
    </form>
  )
}
