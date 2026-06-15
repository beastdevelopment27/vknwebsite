export const company = {
  name: 'Vetrivel Sago Products & Kandhavel Sago Factory',
  shortName: 'VSP & KSF',
  tagline: 'Premium Salem Sabudana Manufacturer',
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'info@vknskn.com',
  location: 'Salem, Tamil Nadu, India',
  companyAddress: 'Vetrivel Sago Products, Salem, Tamil Nadu 636001, India',
  factoryAddress: 'Kadhavel Sago Factory, Salem District, Tamil Nadu, India',
  mapEmbed:
    'https://maps.google.com/maps?q=Salem%2C%20Tamil+Nadu%2C%20India&z=11&output=embed',
}

export const heroStats = [
  { value: '40+', labelKey: 'stats.years' },
  { value: '2', labelKey: 'stats.units' },
  { value: '200+', labelKey: 'stats.bags' },
  { value: '9 Tons', labelKey: 'stats.capacity' },
] as const

export const whyChooseUsKeys = ['direct', 'quality', 'bulk', 'dispatch', 'experience', 'pricing'] as const

export const processStepKeys = ['raw', 'processing', 'drying', 'inspection', 'packaging', 'dispatch'] as const

export const bulkStepKeys = ['1', '2', '3', '4'] as const

export const buyerKeys = ['wholesalers', 'distributors', 'manufacturers', 'exporters'] as const

export const qcKeys = ['moisture', 'grading', 'inspection', 'packaging', 'batch', 'lab'] as const

export const timelineKeys = ['1980s', '2000s', 'today', 'future'] as const

export const testimonialKeys = ['1', '2', '3'] as const

export const facilities = [
  {
    unit: 'Unit 1',
    name: 'Kadhavel Sago Factory',
    titleKey: 'facilities.unit1.title',
    descKey: 'facilities.unit1.desc',
    image: '/facilities/processing.svg',
    capacity: '5 Tons / Day',
    area: 'Multi-acre campus',
    infrastructureKeys: ['facilities.unit1.infra1', 'facilities.unit1.infra2', 'facilities.unit1.infra3', 'facilities.unit1.infra4'],
  },
  {
    unit: 'Unit 2',
    name: 'Vetrivel Sago Products',
    titleKey: 'facilities.unit2.title',
    descKey: 'facilities.unit2.desc',
    image: '/facilities/dispatch.svg',
    capacity: '4 Tons / Day',
    area: 'Integrated facility',
    infrastructureKeys: ['facilities.unit2.infra1', 'facilities.unit2.infra2', 'facilities.unit2.infra3', 'facilities.unit2.infra4'],
  },
]

export const facilityGallery = [
  { key: 'factory', image: '/facilities/processing.svg' },
  { key: 'machinery', image: '/carousel/factory.svg' },
  { key: 'drying', image: '/carousel/sabudana.svg' },
  { key: 'warehouse', image: '/facilities/dispatch.svg' },
  { key: 'storage', image: '/carousel/products.svg' },
  { key: 'dispatch', image: '/facilities/dispatch.svg' },
  { key: 'process', image: '/products/sabudana-premium.svg' },
] as const

export const certifications = [
  'FSSAI Licensed',
  'ISO 22000 Food Safety',
  'HACCP Compliant Process',
  'Batch Traceability',
]

export const sabudanaGrades = [
  { gradeKey: 'products.gradePremium', sizeKey: 'products.gradePremiumSize', useKey: 'products.gradePremiumUse' },
  { gradeKey: 'products.gradeStandard', sizeKey: 'products.gradeStandardSize', useKey: 'products.gradeStandardUse' },
  { gradeKey: 'products.gradeEconomy', sizeKey: 'products.gradeEconomySize', useKey: 'products.gradeEconomyUse' },
]

export const packagingOptions = [
  'products.pack45',
  'products.packCustom',
  'products.packExport',
  'products.packPallet',
]

export const productFeatureKeys = ['products.feature1', 'products.feature2', 'products.feature3', 'products.feature4'] as const

export const productShippingKeys = ['products.ship1', 'products.ship2', 'products.ship3', 'products.ship4'] as const

export const qcWorkflowKeys = ['quality.wf1', 'quality.wf2', 'quality.wf3', 'quality.wf4', 'quality.wf5', 'quality.wf6'] as const
