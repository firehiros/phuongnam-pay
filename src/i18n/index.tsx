import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
// import backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";


import en from './translations/en.json'
import jp from './translations/jp.json'
import vi from './translations/vi.json'

i18n
  .use(detector)
  // .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: { 
      en: {  translation: en },
      jp: { translation: jp },
      vi: { translation: vi }
    },
    lng: "vi",
    fallbackLng: "vi",

    interpolation: {
      escapeValue: false
    }
  })

export default i18n