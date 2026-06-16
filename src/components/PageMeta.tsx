import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import {
  getBreadcrumbSchema,
  getProductSchema,
  OG_IMAGE,
  PAGE_BREADCRUMBS,
  SITE_NAME,
  SITE_URL,
} from '@/seo/config'

type PageMetaProps = {
  page: 'home' | 'products' | 'bulk' | 'quality' | 'facilities' | 'contact' | 'about'
  path?: string
}

const LOCALE_MAP: Record<string, string> = {
  en: 'en_IN',
  ta: 'ta_IN',
  hi: 'hi_IN',
  te: 'te_IN',
  kn: 'kn_IN',
  ml: 'ml_IN',
}

const JSON_LD_ID = 'page-json-ld'

export function PageMeta({ page, path = '/' }: PageMetaProps) {
  const { t, i18n } = useTranslation()
  const title = t(`seo.${page}.title`)
  const description = t(`seo.${page}.desc`)
  const url = `${SITE_URL}${path}`
  const lang = i18n.language?.slice(0, 2) || 'en'

  useEffect(() => {
    document.title = title

    const setMeta = (
      name: string,
      content: string,
      attr: 'name' | 'property' = 'name'
    ) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', SITE_NAME, 'property')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:image', OG_IMAGE, 'property')
    setMeta('og:locale', LOCALE_MAP[lang] ?? 'en_IN', 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', OG_IMAGE)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    const schemas: object[] = [getBreadcrumbSchema(PAGE_BREADCRUMBS[page])]
    if (page === 'products') schemas.push(getProductSchema())

    const jsonLd =
      schemas.length === 1
        ? schemas[0]
        : { '@context': 'https://schema.org', '@graph': schemas }

    let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = JSON_LD_ID
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [title, description, url, lang, page])

  return null
}
