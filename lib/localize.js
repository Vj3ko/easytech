import { i18n } from 'i18n.config'
import 'server-only'

const dictionaries = {
  en: () => import('localization/en.json').then(module => module.default),
  de: () => import('localization/de.json').then(module => module.default),
}

export const getDictionary = async locale =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()
