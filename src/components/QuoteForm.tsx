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
        <div className="space-y-2">
          <Label htmlFor="quote-name">{t('form.name')}</Label>
          <Input
            id="quote-name"
            type="text"
            name="name"
            placeholder={t('form.namePlaceholder')}
            className="h-10 border-white/10 bg-black/25"
            required
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-company">{t('form.companyName')}</Label>
          <Input
            id="quote-company"
            type="text"
            name="company"
            placeholder={t('form.companyPlaceholder')}
            className="h-10 border-white/10 bg-black/25"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quote-phone">{t('form.phone')}</Label>
          <Input
            id="quote-phone"
            type="tel"
            name="phone"
            placeholder={t('form.phonePlaceholder')}
            className="h-10 border-white/10 bg-black/25"
            required
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quote-email">{t('form.email')}</Label>
          <Input
            id="quote-email"
            type="email"
            name="email"
            placeholder={t('form.emailPlaceholder')}
            className="h-10 border-white/10 bg-black/25"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <Label htmlFor="quote-quantity">{t('form.quantity')}</Label>
        <Input
          id="quote-quantity"
          type="text"
          name="quantity"
          placeholder={t('form.quantityPlaceholder')}
          className="h-10 border-white/10 bg-black/25"
          required
        />
      </div>

      <div className="mt-4 space-y-2">
        <Label htmlFor="quote-message">{t('form.message')}</Label>
        <Textarea
          id="quote-message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder={t('form.messagePlaceholder')}
          className="min-h-24 resize-none border-white/10 bg-black/25"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-5 h-11 w-full rounded-full bg-amber-400 text-emerald-950 hover:bg-amber-400/90"
      >
        {submitLabel ?? t('cta.submitEnquiry')}
      </Button>
    </form>
  )
}
