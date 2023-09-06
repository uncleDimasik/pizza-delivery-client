import 'react-i18next';
import { NS } from './config';
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: `${NS}`;
  }
}
