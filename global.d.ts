import en from './src/data/en/root.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
