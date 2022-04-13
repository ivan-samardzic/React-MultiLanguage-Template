import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    backend: {
      loadPath: "/locales/{{ns}}/{{lng}}.json",
    },
    fallbackLng: false,
    debug: false,
    ns: ["general", "header"],
    nsSeparator: ":",
    defaultNS: "general",
    keySeparator: false,
    useSuspense: true,
    interpolation: {
      escapeValue: true,
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
