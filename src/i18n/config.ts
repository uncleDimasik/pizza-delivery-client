import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export enum NS {
  DEFAULT = 'translation',
}

const missingKey = (
  lng: readonly string[],
  ns: string,
  key: string,
): void => {
  console.error(
    `Missing \n key---------${key},\n language----${lng},\n nameSpace---${ns}`,
  );
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    saveMissing: true,
    missingKeyHandler: missingKey,
    ns: [NS.DEFAULT],
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
      // addPath: 'locales/{{lng}}/{{ns}}',
      allowMultiLoading: false,
    },
  });
