import { CookiesConsent } from '@/types';

const cookiesConsent = async (): Promise<CookiesConsent> => {
  return {
    text: [
      {
        text: 'Eu uso cookies para melhorar sua experiência. Ao continuar, você concorda com a minha Política de Cookies.'
      }
    ],
    actions: {
      accpet: {
        label: [
          {
            text: 'Concordo'
          }
        ]
      }
    }
  };
};

export default cookiesConsent;
