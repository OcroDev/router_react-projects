import { i18n } from '../i18n/i18nText'
export const useI18n = (lang, page) => {
  return i18n[page][lang] || i18n[page].en
}
