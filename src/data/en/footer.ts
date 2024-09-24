import { Footer } from '@/types';

const footer = async (): Promise<Footer> => {
  return {
    cta: {
      title: [
        {
          text: 'Please feel free to ge in touch with me'
        }
      ]
    },
    location: {
      title: [
        {
          text: 'My location'
        }
      ],
      description: [
        {
          text: 'Brazil, Rio Grande do Sul'
        }
      ]
    },
    contact: {
      title: [
        {
          text: 'How Can I Help?'
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
      },
      {
        text: '.'
      }
    ]
  };
};

export default footer;
