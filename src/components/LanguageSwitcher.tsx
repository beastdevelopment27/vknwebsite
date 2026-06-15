import { useTranslation } from 'react-i18next'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'hi', label: 'हिन्दी' },
] as const

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language?.slice(0, 2) || 'en'

  return (
    <Select value={current} onValueChange={(value) => i18n.changeLanguage(value)}>
      <SelectTrigger size="sm" aria-label="Language" className="min-w-[5.5rem] border-white/15 bg-white/5">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="z-[60]">
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
