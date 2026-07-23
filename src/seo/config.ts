import { company } from '@/data/company'

export const SITE_URL = 'https://vknskn.com'
export const SITE_NAME = 'Kandhavel Sago Factory'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export const PUBLIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/products', changefreq: 'monthly', priority: '0.9' },
  { path: '/bulk-orders', changefreq: 'monthly', priority: '0.9' },
  { path: '/quality', changefreq: 'monthly', priority: '0.8' },
  { path: '/facilities', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
] as const

export const PAGE_BREADCRUMBS: Record<
  'home' | 'products' | 'bulk' | 'quality' | 'facilities' | 'contact' | 'about',
  { name: string; path: string }[]
> = {
  home: [{ name: 'Home', path: '/' }],
  products: [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
  ],
  bulk: [
    { name: 'Home', path: '/' },
    { name: 'Bulk Orders', path: '/bulk-orders' },
  ],
  quality: [
    { name: 'Home', path: '/' },
    { name: 'Quality', path: '/quality' },
  ],
  facilities: [
    { name: 'Home', path: '/' },
    { name: 'Facilities', path: '/facilities' },
  ],
  contact: [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ],
  about: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    alternateName: company.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.companyAddress,
      addressLocality: 'Salem',
      addressRegion: 'Tamil Nadu',
      postalCode: '636001',
      addressCountry: 'IN',
    },
    areaServed: ['Tamil Nadu', 'India'],
    knowsAbout: [
      'Sabudana',
      'Pearl Sago',
      'Bulk Sabudana Supply',
      'Sago Manufacturing',
      'Salem Sabudana Manufacturer',
    ],
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ManufacturingBusiness',
    '@id': `${SITE_URL}/#business`,
    name: company.name,
    description:
      'Premium pearl sabudana manufacturer in Salem, Tamil Nadu. 40+ years experience, 9 tons daily bulk supply.',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salem',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.6643,
      longitude: 78.146,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    priceRange: '$$',
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: company.tagline,
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: ['en-IN', 'ta-IN', 'hi-IN', 'te-IN', 'kn-IN', 'ml-IN'],
  }
}

export function getBreadcrumbSchema(
  crumbs: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  }
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Premium Pearl Sabudana (Sago)',
    description:
      'Factory-direct pearl sabudana for wholesale and bulk supply. Available in 45kg packaging from Salem, Tamil Nadu.',
    brand: {
      '@type': 'Brand',
      name: company.shortName,
    },
    manufacturer: {
      '@type': 'Organization',
      name: company.name,
    },
    category: 'Food & Beverage > Grains & Starches',
    image: `${SITE_URL}/products/sabudana-premium.svg`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      url: `${SITE_URL}/bulk-orders`,
      seller: {
        '@type': 'Organization',
        name: company.name,
      },
    },
  }
}
