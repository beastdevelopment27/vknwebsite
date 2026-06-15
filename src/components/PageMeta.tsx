import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type PageMetaProps = {
  page: 'home' | 'products' | 'bulk' | 'quality' | 'facilities' | 'contact' | 'about'
  path?: string
}

const SITE_URL = 'https://vknskn.com'

const LOCALE_MAP: Record<string, string> = {
  en: 'en_IN',
  ta: 'ta_IN',
  hi: 'hi_IN',
  te: 'te_IN',
  kn: 'kn_IN',
  ml: 'ml_IN',
}

export function PageMeta({ page, path = '/' }: PageMetaProps) {
  const { t, i18n } = useTranslation()
  const title = t(`seo.${page}.title`)
  const description = t(`seo.${page}.desc`)
  const url = `${SITE_URL}${path}`
  const lang = i18n.language?.slice(0, 2) || 'en'

  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:locale', LOCALE_MAP[lang] ?? 'en_IN', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', url)
  }, [title, description, url, i18n.language])

  return null
}
