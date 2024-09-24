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
          text: `${personal?.location.country}, ${personal?.location.state}`
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
