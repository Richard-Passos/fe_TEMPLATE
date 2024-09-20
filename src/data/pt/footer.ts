import { Footer } from '@/types';

const footer = async (): Promise<Footer> => {
  return {
    cta: {
      title: [
        {
          text: 'Vamos gerar impacto'
        },
        {
          text: '!',
          emphasize: true
        }
      ],
      subtitle: [
        {
          text: 'Suas ótimas ideias estão prontas?'
        }
      ],
      action: {
        label: 'Entre em contato'
      }
    },
    locationSeparator: '—',
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'O dev full stack — que se preocupa em construir produtos sólidos e escaláveis com uma ótima experiência de usuário.'
          }
        ]
      }
    ],
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
    ],
    copyright: [
      {
        text: '© 2024 '
      },
      {
        type: 'link',
        url: 'https://github.com/Richard-Passos',
        children: [
          {
            text: 'Richard Passos'
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
