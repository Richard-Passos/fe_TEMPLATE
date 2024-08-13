import en from './src/data/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
