import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './en.json'
import translationRU from './ru.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
  resources: {
    en: { translation: translationEN },
    ru: { translation: translationRU },
  },
})

export default i18n
