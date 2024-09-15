import { projectsApi } from '@/api';
import { Page } from '@/types';

import locale from './locale';

const pages = async (): Promise<Page[]> => {
  const res = await projectsApi.get({ locale, isSelected: true });

  const projects = res.ok ? res.data : [];

  return [
    {
      slug: 'home',
      isSelected: true,
      label: 'Início',
      path: '/',
      hero: {
        type: 'Primary',
        theme: 'light',
        id: 'hero',
        data: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [{ text: 'Turning heads' }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [
                { text: ' &', emphasize: true },
                {
                  text: ' captivating'
                }
              ]
            },
            {
              type: 'alignText',
              align: 'center',
              children: [
                {
                  text: ' hearts '
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Hey there! I’m Richard an awesome full stack developer — who cares building solid and scalable products with a great user experience.'
                    }
                  ]
                }
              ]
            }
          ],
          description: '', // t('pages.work.hero.description'),
          left: [
            {
              id: 'left',
              type: 'icon',
              src: '/icons/smile.svg',
              animation: 'rotateRight'
            }
          ],
          right: [
            {
              id: 'right',
              type: 'paragraph',
              children: [
                {
                  text: '(2024)'
                }
              ]
            }
          ]
        }
      },
      blocks: [
        {
          type: 'ProjectsCatalog',
          theme: 'dark',
          id: 'selectedProjects',
          data: {
            title: [],
            description: '', // t('pages.work.blocks.selectedProjects.description'),
            empty: '', // t('pages.work.blocks.selectedProjects.empty'),
            items: projects
          }
        }
      ],
      metadata: {
        title: 'Testing'
      }
    }
  ];
};

export default pages;
