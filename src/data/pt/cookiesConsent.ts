import { CookiesConsent } from '@/types';

const cookiesConsent = async (): Promise<CookiesConsent> => {
  return {
    text: [
      {
        text: 'Eu uso cookies para melhorar sua experiência. Ao continuar, você concorda com a minha'
      },
      {
        text: ' '
      },
      {
        type: 'link',
        url: '/cookies-policy',
        children: [
          {
            text: 'Política de Cookies'
          }
        ]
      },
      {
        text: '.'
      }
    ],
    actions: {
      decline: {
        label: [
          {
            text: 'Discordo'
          }
        ]
      },
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
