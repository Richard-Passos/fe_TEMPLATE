import { Footer } from '@/types';

const footer = async (): Promise<Footer> => {
  return {
    cta: {
      title: [
        {
          text: 'Por favor senta-se live para entrar em contato comigo'
        }
      ]
    },
    location: {
      title: [
        {
          text: 'Minha localização'
        }
      ],
      description: [
        {
          text: 'Brasil, Rio Grande do Sul'
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
