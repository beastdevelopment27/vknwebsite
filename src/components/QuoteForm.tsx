import { useTranslation } from 'react-i18next'

const inputClass =
  'mt-2 w-full rounded-xl border border-white/10 bg-black/25 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/35 transition-colors focus:border-amber-400/50'
const labelClass = 'text-sm font-medium text-white/80'

type QuoteFormProps = {
  compact?: boolean
  submitLabel?: string
}

export default function QuoteForm({ compact = false, submitLabel }: QuoteFormProps) {
  const { t } = useTranslation()

  return (
    <form
      className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
      onSubmit={(event) => event.preventDefault()}
      aria-label={t('form.quoteTitle')}
    >
      {!compact && (
        <>
          <h3 className="text-lg font-semibold text-white">{t('form.quoteTitle')}</h3>
          <p className="mt-1 text-sm text-white/60">{t('form.quoteDesc')}</p>
        </>
      )}

      <div className={`grid grid-cols-1 gap-4 ${compact ? 'mt-0' : 'mt-5'} sm:grid-cols-2`}>
        <label className={labelClass}>
          {t('form.name')}
          <input
            type="text"
            name="name"
            placeholder={t('form.namePlaceholder')}
            className={inputClass}
            required
            autoComplete="name"
          />
        </label>
        <label className={labelClass}>
          {t('form.companyName')}
          <input
            type="text"
            name="company"
            placeholder={t('form.companyPlaceholder')}
            className={inputClass}
            autoComplete="organization"
          />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          {t('form.phone')}
          <input
            type="tel"
            name="phone"
            placeholder={t('form.phonePlaceholder')}
            className={inputClass}
            required
            autoComplete="tel"
          />
        </label>
        <label className={labelClass}>
          {t('form.email')}
          <input
            type="email"
            name="email"
            placeholder={t('form.emailPlaceholder')}
            className={inputClass}
            autoComplete="email"
          />
        </label>
      </div>

      <label className={`${labelClass} mt-4 block`}>
        {t('form.quantity')}
        <input
          type="text"
          name="quantity"
          placeholder={t('form.quantityPlaceholder')}
          className={inputClass}
          required
        />
      </label>

      <label className={`${labelClass} mt-4 block`}>
        {t('form.message')}
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          placeholder={t('form.messagePlaceholder')}
          className={`${inputClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-amber-400 px-6 py-3 text-sm font-medium text-emerald-950 transition-opacity hover:opacity-90"
      >
        {submitLabel ?? t('cta.submitEnquiry')}
      </button>
    </form>
  )
}
