import i18n from 'i18next';
import { withI18n, reactI18nextModule } from "react-i18next";

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    lng: 'en',

    resources: {
      en: {
        translation: {
          fp: {
            label: 'Choose a CSV file'
          }
        }
      },
      fr: {
        translation: {
          fp: {
            label: 'Choisir fichier CSV'
          }
        }
      },
      nl: {
        translation: {
          fp: {
            label: 'CSV bestand kiezen'
          }
        }
      }
    },

    react: {
      wait: true,
    }
  });

export default i18n;
