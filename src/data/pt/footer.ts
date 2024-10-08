import { Footer } from '@/types';
import { personalApi } from '@/utils/actions';

import locale from './locale';

const footer = async (): Promise<Footer> => {
  const res = await personalApi.get({ locale });

  const personal = res.ok ? res.data : undefined;

  return {
    cta: {
      title: [
        {
          text: 'Por favor sinta-se live para entrar em contato comigo'
        }
      ]
    },
    location: {
      title: [
        {
          text: 'Minha Localização'
        }
      ],
      description: [
        {
          text: `${personal?.location.country}, ${personal?.location.state}`
        }
      ]
    },
    contact: {
      title: [
        {
          text: 'Como Eu Posso Te Ajudar?'
        }
      ],
      description: [
        {
          type: 'link',
          url: 'mailto:hi.richardp@gmail.com',
          children: [
            {
              text: 'hi.richardp@gmail.com'
            }
          ]
        }
      ]
    },
    madeBy: [
      {
        text: 'Feito com ❤️ por '
      },
      {
        type: 'link',
        url: 'https://github.com/Richard-Passos',
        children: [
          {
            text: 'Richard'
          }
        ]
      },
      {
        text: '.'
      }
    ]
  };
};

export default footer;
