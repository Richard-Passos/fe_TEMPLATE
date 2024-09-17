import {
  personalApi,
  projectsApi,
  servicesApi,
  skillsApi,
  statisticsApi,
  valuesApi
} from '@/api';
import { ContactFormBlockProps } from '@/components/organisms/Blocks/ContactForm';
import { ErrorPage, Page, SingleProjectPage } from '@/types';

import locale from './locale';

const pages = async (): Promise<(Page | ErrorPage | SingleProjectPage)[]> => {
  const [
    projectsRes,
    personalRes,
    workValuesRes,
    personalValuesRes,
    servicesRes,
    statisticsRes,
    hardSkillsRes,
    softSkillsRes
  ] = await Promise.all([
    projectsApi.get({ locale, isSelected: true }),
    personalApi.get({ locale }),
    valuesApi.get({ id: 'work', locale }),
    valuesApi.get({ id: 'personal', locale }),
    servicesApi.get({ locale }),
    statisticsApi.get({ locale }),
    skillsApi.get({ slug: 'hard', locale }),
    skillsApi.get({ slug: 'soft', locale })
  ]);

  const projects = projectsRes.ok ? projectsRes.data : [];

  const personal = personalRes.ok ? personalRes.data : undefined;

  const workValues = workValuesRes.ok ? workValuesRes.data : [];

  const personalValues = personalValuesRes.ok ? personalValuesRes.data : [];

  const services = servicesRes.ok ? servicesRes.data : [];

  const statistics = statisticsRes.ok ? statisticsRes.data : [];

  const hardSkills = hardSkillsRes.ok ? hardSkillsRes.data : [];

  const softSkills = softSkillsRes.ok ? softSkillsRes.data : [];

  return [
    {
      slug: 'home',
      isSelected: true,
      label: 'Home',
      hero: {
        id: 'hero',
        type: 'Primary',
        theme: 'light',
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
                  text: ' hearts'
                },
                {
                  text: ' '
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
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Hey there! I’m Richard an awesome full stack developer — who cares building solid and scalable products with a great user experience.'
                }
              ]
            }
          ],
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
            items: projects.map(({ year, ...d }) => d)
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
      slug: 'work',
      isSelected: true,
      label: 'Work',
      hero: {
        id: 'hero',
        type: 'Primary',
        theme: 'light',
        scrollToProps: {
          target: '#selectedProjects'
        },
        data: {
          title: [
            {
              type: 'alignText',
              align: 'left',
              children: [{ text: 'Beyond code' }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [
                {
                  text: ' boundaries'
                },
                { text: ' &', emphasize: true }
              ]
            },
            {
              type: 'alignText',
              align: 'center',
              children: [
                {
                  text: ' results'
                },
                {
                  text: ' '
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and  crafting high-impact, user-centered solutions.'
                    }
                  ]
                }
              ]
            }
          ],
          description: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Helping brands achieve digital prominence. I bring a passion for cutting-edge technology and  crafting high-impact, user-centered solutions.'
                }
              ]
            }
          ],
          left: [
            {
              type: 'paragraph',
              children: [
                {
                  text: personal?.availability ?? ''
                }
              ]
            }
          ],
          right: [
            {
              type: 'icon',
              src: '/icons/smile.svg',
              animation: 'rotateLeft'
            }
          ]
        }
      },
      blocks: [
        {
          id: 'list-work-mission',
          type: 'ListMission',
          theme: 'dark',
          data: {
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'That’s my mission — Each line of code improve my skills, crafting high-impact solutions. Every project is an opportunity to inspire clients, coworkers, and the community, fostering enduring positive impact. Consistent repetition breeds excellence, driving digital prominence.'
                  }
                ]
              }
            ],
            items: [
              {
                id: 'improve',
                text: [
                  {
                    text: 'Improve'
                  }
                ],
                separator: [
                  {
                    type: 'icon',
                    src: '/icons/rocket.svg'
                  }
                ]
              },
              {
                id: 'inspire',
                text: [
                  {
                    text: 'Inspire'
                  }
                ],
                separator: [
                  {
                    type: 'icon',
                    src: '/icons/globe.svg'
                  }
                ]
              },
              {
                id: 'repeat',
                text: [
                  {
                    text: 'Repeat'
                  }
                ],
                separator: [
                  {
                    type: 'icon',
                    src: '/icons/smile.svg'
                  }
                ]
              }
            ]
          }
        },
        {
          id: 'services',
          type: 'Services',
          theme: 'dark',
          data: {
            title: [
              { text: 'Ser' },
              { text: 'vi', emphasize: true },
              { text: 'ces' }
            ],
            subtitle: [{ text: 'I could help you with...' }],
            image: {
              src: '/images/services.webp',
              alt: 'Richard Passos, a full-stack developer with short hair, wearing a black leather jacket and white shirt, stands against a plain background, crossing his arms.'
            },
            items: services.map((d, i) => ({
              ...d,
              slug: `· ${(i + 1).toString().padStart(2, '0')}`
            })),
            action: {
              label: [
                {
                  text: 'Contact me'
                }
              ]
            }
          }
        },
        {
          id: 'selectedProjects',
          type: 'ProjectsCatalog',
          theme: 'light',
          data: {
            title: [
              {
                type: 'alignText',
                align: 'left',
                children: [
                  {
                    text: 'Selecte'
                  },
                  {
                    text: 'd',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'W',
                    emphasize: true
                  },
                  {
                    text: 'orks'
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
          id: 'why-me',
          type: 'Statistics',
          theme: 'dark',
          data: {
            title: [
              {
                type: 'alignText',
                align: 'left',
                children: [
                  {
                    text: 'Why I’'
                  },
                  {
                    text: 'm',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'T',
                    emphasize: true
                  },
                  {
                    text: 'he fit'
                  },
                  {
                    text: '?',
                    emphasize: true
                  }
                ]
              }
            ],
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'After head turning projects and a captivating personality just'
                  },
                  {
                    type: 'link',
                    url: '/about',
                    children: [
                      {
                        text: ' one click away'
                      }
                    ]
                  },
                  {
                    text: ', choose me to unlock boundless potential for your next project.'
                  }
                ]
              }
            ],
            subtitle: [
              {
                text: 'Some statistics...'
              }
            ],
            items: statistics
          }
        },
        {
          id: 'hard-skills',
          type: 'Skills',
          theme: 'dark',
          data: {
            title: [
              {
                text: 'Hard skills'
              }
            ],
            items: hardSkills
          }
        },
        {
          id: 'soft-skills',
          type: 'Skills',
          theme: 'dark',
          data: {
            title: [
              {
                text: 'Soft skills'
              }
            ],
            items: softSkills
          }
        },
        {
          id: 'work-values',
          type: 'Values',
          theme: 'dark',
          data: {
            title: [
              {
                text: 'My values'
              }
            ],
            templates: {
              base: ['item-0', 'item-1', 'item-2', 'item-3'],
              sm: ['item-0 item-1', 'item-2 item-3'],
              lg: ['item-0 item-1 .', '. item-2 item-3']
            },
            items: workValues,
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
      metadata: {
        title: 'Work',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum mollitia eius? Voluptatem, ipsam quo.'
      }
    },
    {
      slug: 'about',
      isSelected: true,
      label: 'About',
      hero: {
        id: 'hero',
        type: 'Secondary',
        theme: 'dark',
        data: {
          title: [
            {
              text: 'Gotta kno'
            },
            {
              text: 'w',
              emphasize: true
            },
            {
              text: ' m',
              emphasize: true
            },
            {
              text: 'e better'
            },
            {
              text: '?',
              emphasize: true
            }
          ]
        }
      },
      blocks: [
        {
          id: 'selfies',
          type: 'Images',
          theme: 'dark',
          data: {
            items: [
              {
                src: '/images/about-00.webp',
                alt: 'Richard Passos, a full-stack developer with short hair, stands against a wooden wall, wearing a light-colored T-shirt. Richard Passos has his arms crossed, showcasing a watch and a necklace.'
              },
              {
                src: '/images/about-01.webp',
                alt: 'Richard Passos, a full-stack developer stands against a plain background wearing a black leather jacket over a white shirt, with their left hand in the jacket pocket.'
              },
              {
                src: '/images/about-02.webp',
                alt: 'Richard Passos, a full-stack developer wearing a light gray hoodie with ’Brooklyn’ and other text printed on it stands against a wooden wall, looking to the left.'
              }
            ]
          }
        },
        {
          id: 'who-i-am',
          type: 'About',
          theme: 'dark',
          data: {
            title: [
              { text: 'Who I' },
              {
                text: ' a',
                emphasize: true
              },
              { text: 'm' }
            ],
            texts: [
              {
                id: 'intro',
                title: [{ text: 'Introducion' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'I’ve always been a curious and dedicated person, but for a while, I felt lost without a clear direction or passion. It wasn’t until I faced life that I discovered my true passion for development, which felt like a light bulb moment.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'This newfound interest was a turning point for me. Learning about the world of development sparked a deep excitement and sense of purpose. Now I have my dreams, purposes, and I know exactly where I wanna be.'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'personality',
                title: [{ text: 'Personality' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'I’m a curious and self-taught individual who loves exploring new perspectives and cultures. With a knack for problem-solving and a detail-oriented mindset, I turn complex ideas into clear, practical answers.'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'mission',
                title: [{ text: 'Mission' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'I’ve a mission to learn, cultivate, and make the most of. Learn from life and people. Cultivate genuine relationships. Make the most of opportunities and moments.'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'hobbies',
                title: [{ text: 'Hobbies' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Gaming, watching series/movies, improving skills, getting into new cultures and enjoying quality time with close friends.'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          id: 'personal-values',
          type: 'Values',
          theme: 'dark',
          data: {
            title: [
              {
                text: 'My values'
              }
            ],
            templates: {
              base: ['item-0', 'item-1', 'item-2', 'item-3'],
              sm: ['item-0 item-1', 'item-2 item-3'],
              lg: ['item-0 item-1 .', '. item-2 item-3']
            },
            items: personalValues,
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
      metadata: {
        title: 'About',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum mollitia eius? Voluptatem, ipsam quo.'
      }
    },
    {
      slug: 'contact',
      isSelected: true,
      label: 'Contact',
      hero: {
        id: 'hero',
        type: 'Secondary',
        theme: 'light',
        data: {
          title: [
            {
              text: 'Wanna tur'
            },
            {
              text: 'n',
              emphasize: true
            },
            {
              text: ' s',
              emphasize: true
            },
            {
              text: 'ome heads'
            },
            {
              text: '?',
              emphasize: true
            }
          ]
        }
      },
      blocks: [
        {
          id: 'contact-form',
          type: 'ContactForm',
          theme: 'dark',
          transitionProps: {
            'data-theme': 'light',
            reverse: true
          } as ContactFormBlockProps['transitionProps'],
          data: {
            title: [
              {
                text: 'No worries — I’ve got it covered'
              }
            ],
            optionalLabel: 'optional',
            to: {
              label: [
                {
                  text: 'To:'
                }
              ],
              email: personal?.email ?? '',
              subject: '👋 Hey Richard, I’d like to hire you!'
            },
            messages: {
              loading: [{ text: 'Sending email...' }],
              success: [{ text: 'Email sent!' }],
              error: [{ text: 'Oops.. Please try again.' }]
            },
            fields: {
              name: {
                label: 'Name',
                placeholder: 'John Doe',
                defaultValue: '',
                errors: {
                  min: 'Please, that can’t be your name.'
                }
              },
              email: {
                label: 'Email',
                placeholder: 'john@doe.com',
                defaultValue: '',
                errors: {
                  email: 'That email adress looks a bit weird.'
                }
              },
              subject: {
                label: 'Subject',
                placeholder: 'I wanna hire you!',
                defaultValue: ''
              },
              service: {
                label: 'Service',
                placeholder: 'Select a service...',
                defaultValue: '',
                data: services.map((d) => ({ value: d.slug, label: d.title }))
              },
              message: {
                label: 'Message',
                placeholder:
                  '👋 Hey Richard! I would love if you could help me with...',
                defaultValue: '',
                errors: {
                  min: 'Come on... you can do better than that.',
                  max: 'Come on... take it easy.'
                }
              },
              submit: {
                label: [
                  {
                    text: 'Send message'
                  }
                ]
              }
            }
          }
        },
        {
          id: 'services',
          type: 'Services',
          theme: 'dark',
          data: {
            title: [
              { text: 'Ser' },
              { text: 'vi', emphasize: true },
              { text: 'ces' }
            ],
            subtitle: [{ text: 'I could help you with...' }],
            image: {
              src: '/images/services.webp',
              alt: 'Richard Passos, a full-stack developer with short hair, wearing a black leather jacket and white shirt, stands against a plain background, crossing his arms.'
            },
            items: services.map((d, i) => ({
              ...d,
              slug: `· ${(i + 1).toString().padStart(2, '0')}`
            }))
          }
        }
      ],
      metadata: {
        title: 'Contact',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum mollitia eius? Voluptatem, ipsam quo.'
      }
    },
    {
      slug: 'single-project',
      hero: {
        theme: 'dark',
        data: {
          title: '',
          description: '',
          subtitle: '',
          action: {
            href: '',
            label: ''
          },
          image: {
            src: '',
            alt: ''
          }
        }
      },
      blocks: {
        Images: {
          theme: 'dark',
          data: {
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Here are some'
                  },
                  {
                    text: ' awesome shots',
                    bold: true
                  }
                ]
              }
            ]
          }
        },
        Adjacents: {
          theme: 'dark'
        }
      },
      metadata: {}
    } as SingleProjectPage,
    {
      slug: 'error',
      hero: {
        theme: 'dark',
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
                  text: 'Go home'
                }
              ],
              href: '/'
            }
          }
        }
      },
      blocks: [],
      metadata: {}
    } as ErrorPage,
    {
      slug: 'not-found',
      hero: {
        theme: 'dark',
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
                  text: 'Go home'
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
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum mollitia eius? Voluptatem, ipsam quo.'
      }
    } as ErrorPage
  ];
};

export default pages;
