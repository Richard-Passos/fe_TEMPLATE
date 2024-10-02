import { Pages } from '@/types';

const pages = async (): Promise<Pages[]> => {
  return [
    {
      slug: 'home',
      isSelected: true,
      label: 'Home',
      hero: {
        id: 'hero',
        type: 'Primary',
        data: {
          title: [
            {
              text: 'Home Page'
            }
          ],
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deleniti aut tempore unde, similique perferendis veritatis quidem inventore temporibus voluptatibus.'
                }
              ]
            }
          ]
        }
      },
      metadata: {}
    },
    {
      type: 'error',
      slug: 'not-found',
      hero: {
        data: {
          title: [
            {
              text: '404!'
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
      metadata: {
        title: 'Not Found',
        description: 'Oops! The page you’re looking for doesn’t exist.'
      }
    },
    {
      type: 'error',
      slug: 'error',
      hero: {
        data: {
          title: [
            {
              text: 'Ops!'
            }
          ],
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Sorry, seems something Went Wrong!'
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
      metadata: {}
    }
  ];
};

export default pages;
