import { CookiesConsent } from '@/types';

const cookiesConsent = async (): Promise<CookiesConsent> => {
  return {
    text: [
      {
        text: 'I use cookies to improve your experience. By using this site, you agree to my Cookies Policy.'
      }
    ],
    actions: {
      accpet: {
        label: [
          {
            text: 'I Agree'
          }
        ]
      }
    }
  };
};

export default cookiesConsent;
