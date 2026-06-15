import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import ta from './locales/ta.json'
import hi from './locales/hi.json'
import te from './locales/te.json'
import kn from './locales/kn.json'
import ml from './locales/ml.json'

const savedLang = localStorage.getItem('lang') || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ta: { translation: ta },
    hi: { translation: hi },
    te: { translation: te },
    kn: { translation: kn },
    ml: { translation: ml },
  },
  lng: savedLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('lang', lng)
  document.documentElement.lang = lng
})

document.documentElement.lang = savedLang

export default i18n
