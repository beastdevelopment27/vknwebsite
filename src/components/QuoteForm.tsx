import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type QuoteFormProps = {
  compact?: boolean
  submitLabel?: string
}

export default function QuoteForm({ compact = false, submitLabel }: QuoteFormProps) {
  const { t } = useTranslation()

  return (
    <form
      className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-5 md:p-6"
      onSubmit={(event) => event.preventDefault()}
      aria-label={t('form.quoteTitle')}
    >
      {!compact && (
        <>
          <h3 className="text-base font-semibold text-white sm:text-lg">{t('form.quoteTitle')}</h3>
          <p className="mt-1 text-xs text-white/60 sm:text-sm">{t('form.quoteDesc')}</p>
        </>
      )}

      <div className={`grid grid-cols-1 gap-3 ${compact ? 'mt-0' : 'mt-4'} sm:grid-cols-2 sm:gap-4`}>
        <div className="space-y-1.5">
          <Label htmlFor="quote-name" className="text-xs sm:text-sm">
            {t('form.name')}
          </Label>
          <Input
            id="quote-name"
            type="text"
            name="name"
            placeholder={t('form.namePlaceholder')}
            className="h-9 border-white/10 bg-black/25 sm:h-10"
            required
            autoComplete="name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="quote-company" className="text-xs sm:text-sm">
            {t('form.companyName')}
          </Label>
          <Input
            id="quote-company"
            type="text"
            name="company"
            placeholder={t('form.companyPlaceholder')}
            className="h-9 border-white/10 bg-black/25 sm:h-10"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="quote-phone" className="text-xs sm:text-sm">
            {t('form.phone')}
          </Label>
          <Input
            id="quote-phone"
            type="tel"
            name="phone"
            placeholder={t('form.phonePlaceholder')}
            className="h-9 border-white/10 bg-black/25 sm:h-10"
            required
            autoComplete="tel"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="quote-email" className="text-xs sm:text-sm">
            {t('form.email')}
          </Label>
          <Input
            id="quote-email"
            type="email"
            name="email"
            placeholder={t('form.emailPlaceholder')}
            className="h-9 border-white/10 bg-black/25 sm:h-10"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="mt-3 space-y-1.5 sm:mt-4">
        <Label htmlFor="quote-quantity" className="text-xs sm:text-sm">
          {t('form.quantity')}
        </Label>
        <Input
          id="quote-quantity"
          type="text"
          name="quantity"
          placeholder={t('form.quantityPlaceholder')}
          className="h-9 border-white/10 bg-black/25 sm:h-10"
          required
        />
      </div>

      <div className="mt-3 space-y-1.5 sm:mt-4">
        <Label htmlFor="quote-message" className="text-xs sm:text-sm">
          {t('form.message')}
        </Label>
        <Textarea
          id="quote-message"
          name="message"
          rows={compact ? 2 : 3}
          placeholder={t('form.messagePlaceholder')}
          className="min-h-20 resize-none border-white/10 bg-black/25 sm:min-h-24"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-4 h-10 w-full rounded-full bg-amber-400 text-emerald-950 hover:bg-amber-400/90 sm:mt-5 sm:h-11"
      >
        {submitLabel ?? t('cta.submitEnquiry')}
      </Button>
    </form>
  )
}
