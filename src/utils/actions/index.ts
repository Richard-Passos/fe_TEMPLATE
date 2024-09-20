import cookiesConsentApi from './cookiesConsent';
import footerApi from './footer';
import getLocale from './getLocale';
import headerApi from './header';
import pagesApi from './pages';
import personalApi from './personal';
import sendEmail from './sendEmail';

const actions = {
  cookiesConsentApi,
  footerApi,
  headerApi,
  pagesApi,
  personalApi,
  getLocale,
  sendEmail
};

export default actions;
export {
  cookiesConsentApi,
  footerApi,
  headerApi,
  pagesApi,
  personalApi,
  getLocale,
  sendEmail
};
