import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type PageMetaProps = {
  page: 'home' | 'products' | 'bulk' | 'quality' | 'facilities' | 'contact' | 'about'
  path?: string
}

const SITE_URL = 'https://vknskn.com'

export function PageMeta({ page, path = '/' }: PageMetaProps) {
  const { t, i18n } = useTranslation()
  const title = t(`seo.${page}.title`)
  const description = t(`seo.${page}.desc`)
  const url = `${SITE_URL}${path}`

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
    setMeta('og:locale', i18n.language === 'ta' ? 'ta_IN' : i18n.language === 'hi' ? 'hi_IN' : 'en_IN', 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', url)
  }, [title, description, url, i18n.language])

  return null
}
