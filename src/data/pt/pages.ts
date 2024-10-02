import { Pages } from '@/types';

const pages = async (): Promise<Pages[]> => {
  return [
    {
      slug: 'home',
      isSelected: true,
      label: 'Home',
      hero: {
        id: '',
        type: 'Primary',
        data: {
          title: [
            {
              text: 'Página Inicial'
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
              text: '404'
            }
          ],
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Desculpe, página não encontrada!'
                }
              ]
            }
          ],
          actions: {
            primary: {
              label: [
                {
                  text: 'Página Inicial'
                }
              ],
              href: '/'
            }
          }
        }
      },
      metadata: {
        title: 'Não Encontrado',
        description: 'Ops! A página que você está procurando não existe.'
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
                  text: 'Desculpe, parece que algo inesperado aconteceu!'
                }
              ]
            }
          ],
          actions: {
            primary: {
              label: [
                {
                  text: 'Tentar de novo'
                }
              ]
            },
            secondary: {
              label: [
                {
                  text: 'Página Inicial'
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
