import { personalApi, projectsApi, valuesApi } from '@/api';
import { Page } from '@/types';

import locale from './locale';

const pages = async (): Promise<Page[]> => {
  const [projectsRes, personalRes, personalValuesRes] = await Promise.all([
    projectsApi.get({ locale, isSelected: true }),
    personalApi.get({ locale }),
    valuesApi.get({ id: 'personal', locale })
  ]);

  const projects = projectsRes.ok
    ? projectsRes.data.map(({ year, ...d }) => d)
    : [];

  const personal = personalRes.ok ? personalRes.data : undefined;

  const personalValues = personalValuesRes.ok ? personalValuesRes.data : [];

  return [
    {
      slug: 'home',
      isSelected: true,
      label: 'Home',
      path: '/',
      hero: {
        type: 'Primary',
        theme: 'light',
        id: 'hero',
        scrollToProps: {
          target: '#selectedProjects'
        },
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
          description: '',
          left: [
            {
              type: 'icon',
              src: '/icons/smile.svg',
              animation: 'rotateRight'
            }
          ],
          right: [
            {
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
          id: 'selectedProjects',
          type: 'ProjectsCatalog',
          theme: 'dark',
          data: {
            title: [
              {
                type: 'alignText',
                align: 'left',
                children: [
                  {
                    text: 'Wor'
                  },
                  {
                    text: 'k',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'I',
                    emphasize: true
                  },
                  {
                    text: 'nsight'
                  }
                ]
              }
            ],
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Here are some examples of'
                  },
                  {
                    text: ' my best works',
                    bold: true
                  }
                ]
              }
            ],
            empty: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Sorry, selected projects not found.'
                  }
                ]
              }
            ],
            items: projects
          }
        },
        {
          id: 'toExpect',
          type: 'Text',
          theme: 'dark',
          data: {
            title: [
              {
                text: 'Here’s what you can expect from me'
              }
            ],
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'A thoughtful collaborator',
                    bold: true
                  },
                  {
                    text: ' who thrives on finding innovative solutions and textbracing'
                  },
                  {
                    text: ' new perspectives',
                    bold: true
                  },
                  {
                    text: '. My approach is grounded in'
                  },
                  {
                    text: ' keen observation',
                    bold: true
                  },
                  {
                    text: ' and'
                  },
                  {
                    text: ' understanding',
                    bold: true
                  },
                  {
                    text: ' — allowing me to effectively navigate and connect'
                  },
                  {
                    text: ' complex ideas',
                    bold: true
                  },
                  {
                    text: '.'
                  }
                ]
              },
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'I aim to blend effortlessly into your work culture, contributing to a'
                  },
                  {
                    text: ' vibrant',
                    bold: true
                  },
                  {
                    text: ' and'
                  },
                  {
                    text: ' synergistic atmosphere',
                    bold: true
                  },
                  {
                    text: ' where'
                  },
                  {
                    text: ' ideas',
                    bold: true
                  },
                  {
                    text: ' and'
                  },
                  {
                    text: ' goals',
                    bold: true
                  },
                  {
                    text: ' come together'
                  },
                  {
                    text: ' seamlessly',
                    bold: true
                  },
                  {
                    text: '.'
                  }
                ]
              }
            ]
          }
        },
        {
          id: 'listWorkPage',
          type: 'ListPage',
          theme: 'dark',
          data: {
            items: [
              {
                id: 'list-work-mission',
                text: 'Mission',
                separator: '·'
              },
              {
                id: 'list-work-skills',
                text: 'Hard & Soft Skills',
                separator: '·'
              },
              {
                id: 'list-work-services',
                text: 'Services',
                separator: '·'
              }
            ],
            action: {
              href: '/work',
              label: 'Explore'
            }
          }
        },
        {
          id: 'but',
          type: 'But',
          theme: 'light',
          data: {
            title: 'But',
            description: 'it’s not just about the tech.'
          }
        },
        {
          id: 'aboutBentoGrid',
          type: 'BentoGrid',
          theme: 'dark',
          hasAnimation: true,
          data: {
            title: [
              {
                type: 'alignText',
                align: 'left',
                children: [
                  {
                    text: 'Perso'
                  },
                  {
                    text: 'n',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'I',
                    emphasize: true
                  },
                  {
                    text: 'nsight'
                  }
                ]
              }
            ],
            description: [],
            templates: {
              base: [
                'item-0',
                'item-1',
                'item-2',
                'item-3',
                'item-4',
                'item-5',
                'item-6'
              ],
              sm: [
                'item-0 item-0',
                'item-1 item-2',
                'item-3 item-4',
                'item-5 item-6'
              ],
              lg: [
                '. item-0 item-0',
                '. item-0 item-0',
                'item-1 item-2 item-3',
                'item-1 item-2 item-4',
                'item-5 item-5 item-6',
                'item-5 item-5 item-6'
              ]
            },
            items: [
              {
                id: 'description',
                type: 'Description',
                data: {
                  title: '#about',
                  description: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          text: '🤟 Hey —',
                          bold: true
                        },
                        {
                          text: ' I’m Richard an awesome full stack developer from Brazil. When I’m not coding, you can catch me in the gaming world — I’m a huge fan, especially when it comes to rogue-like games.'
                        }
                      ]
                    }
                  ]
                }
              },
              {
                id: 'location',
                type: 'Bold',
                data: {
                  icon: '/icons/globe.svg',
                  description: [
                    {
                      text: 'Based in'
                    },
                    {
                      text: ` ${personal?.location.country ?? ''}`
                    },
                    {
                      text: `, ${personal?.location.gmt ?? ''}`
                    }
                  ]
                }
              },
              {
                id: 'values',
                type: 'Marquee',
                data: {
                  icon: '/icons/fingerprint.svg',
                  title: [
                    {
                      text: 'My values'
                    }
                  ],
                  items: personalValues.map((d) => d.title)
                }
              },
              {
                id: 'improving',
                type: 'Simple',
                data: {
                  icon: '/icons/rocket.svg',
                  description: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          text: 'Improving a little bit every day.'
                        }
                      ]
                    }
                  ]
                }
              },
              {
                id: 'hobbie',
                type: 'Simple',
                data: {
                  icon: '/icons/game-controller.svg',
                  description: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          text: 'I love to play games.'
                        }
                      ]
                    }
                  ]
                }
              },
              {
                id: 'localTime',
                type: 'Time',
                data: {
                  title: [
                    {
                      text: 'My local time'
                    }
                  ]
                }
              },
              {
                id: 'buyCoffee',
                type: 'Link',
                data: {
                  icon: personal?.buyCoffee.icon ?? '',
                  href: personal?.buyCoffee.href ?? '',
                  title: [
                    {
                      text: 'Buy me a coffee'
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          id: 'listAboutPage',
          type: 'ListPage',
          theme: 'dark',
          data: {
            items: [
              {
                id: 'list-about-background',
                text: 'Background',
                separator: '·'
              },
              {
                id: 'list-about-hobbies',
                text: 'Hobbies',
                separator: '·'
              },
              {
                id: 'list-about-personality',
                text: 'Personality',
                separator: '·'
              }
            ],
            action: {
              href: '/about',
              label: 'Explore'
            }
          }
        },
        {
          id: 'ctaText',
          type: 'CtaText',
          theme: 'dark',
          data: {
            description:
              'Ready to fly your great ideas to digital prominance with a developer who brings both skill and passion to the table? Let’s team up and...',
            icons: {
              left: {
                src: '/icons/smile.svg',
                animation: 'rotateRight',
                y: 'top'
              },
              right: {
                src: '/icons/globe.svg',
                animation: 'rotateLeft',
                y: 'bottom'
              }
            }
          }
        }
      ],
      metadata: {}
    },
    {
      slug: 'about',
      isSelected: true,
      label: 'About',
      path: '/about',
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
          description: '',
          left: [
            {
              type: 'icon',
              src: '/icons/smile.svg',
              animation: 'rotateRight'
            }
          ],
          right: [
            {
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
            description: [],
            empty: [],
            items: projects
          }
        }
      ],
      metadata: {}
    }
  ];
};

export default pages;
