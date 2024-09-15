import { Footer } from '@/types';

const footer = async (): Promise<Footer> => {
  return {
    cta: {
      title: [
        {
          text: 'Let’s turn some heads'
        },
        {
          text: '!',
          emphasize: true
        }
      ],
      subtitle: [
        {
          text: 'Is your great ideas ready?'
        }
      ],
      action: {
        label: 'Get in touch'
      }
    },
    locationSeparator: '—',
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'The full stack developer — who cares building solid and scalable products with a great user experience.'
          }
        ]
      }
    ],
    madeBy: [
      {
        text: 'Made with ❤️ by '
      },
      {
        type: 'link',
        url: 'https://github.com/Richard-Passos',
        children: [
          {
            text: 'Richard'
          }
        ]
      }
    ],
    copyright: [
      {
        text: '© 2024 '
      },
      {
        type: 'link',
        url: '/legal',
        children: [
          {
            text: 'legal'
          }
        ]
      }
    ]
  };
};

export default footer;
