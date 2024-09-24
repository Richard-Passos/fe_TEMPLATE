import { Pages } from '@/types';

const pages = async (): Promise<Pages[]> => {
  return [
    {
      slug: 'home',
      isSelected: true,
      label: 'Home',
      blocks: [
        {
          id: 'pixel-art',
          type: 'PixelArt'
        }
      ],
      metadata: {}
    },
    {
      type: 'error',
      slug: 'not-found',
      hero: {
        data: {
          title: [
            {
              text: 'Not found'
            },
            {
              text: '!',
              emphasize: true
            }
          ],
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Sorry, page not found!'
                }
              ]
            }
          ],
          actions: {
            primary: {
              label: [
                {
                  text: 'Back home'
                }
              ],
              href: '/'
            }
          }
        }
      },
      blocks: [],
      metadata: {
        title: 'Not Found',
        description:
          'Oops! The page you’re looking for doesn’t exist. Explore my portfolio to find out more about my work as a full stack developer.'
      }
    },
    {
      type: 'error',
      slug: 'error',
      hero: {
        data: {
          title: [
            {
              text: 'Something Went Wrong'
            },
            {
              text: '!',
              emphasize: true
            }
          ],
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Sorry, something Went Wrong!'
                }
              ]
            }
          ],
          actions: {
            primary: {
              label: [
                {
                  text: 'Try again'
                }
              ]
            },
            secondary: {
              label: [
                {
                  text: 'Back home'
                }
              ],
              href: '/'
            }
          }
        }
      },
      blocks: [],
      metadata: {}
    }
  ];
};

export default pages;
