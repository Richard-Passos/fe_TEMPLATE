import { ContactFormBlockProps } from '@/components/organisms/Blocks/ContactForm';
import { DeepPartial, ErrorPage, Page, SingleProjectPage } from '@/types';
import {
  personalApi,
  projectsApi,
  servicesApi,
  skillsApi,
  statisticsApi,
  valuesApi
} from '@/utils/actions';

import locale from './locale';

const pages = async (): Promise<
  (Page | ErrorPage | DeepPartial<SingleProjectPage>)[]
> => {
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
      label: 'Início',
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
              children: [{ text: 'Gerando impacto' }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [
                { text: ' &', emphasize: true },
                {
                  text: ' cativando'
                }
              ]
            },
            {
              type: 'alignText',
              align: 'center',
              children: [
                {
                  text: ' corações'
                },
                {
                  text: ' '
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Olá! Eu sou Richard, um incrível desenvolvedor full stack — que se preocupa em construir produtos sólidos e escaláveis com uma ótima experiência de usuário.'
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
                  text: 'Olá! Eu sou Richard, um incrível desenvolvedor full stack — que se preocupa em construir produtos sólidos e escaláveis com uma ótima experiência de usuário.'
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
                    text: 'Visã'
                  },
                  {
                    text: 'o',
                    emphasize: true
                  },
                  {
                    text: ' da',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'C',
                    emphasize: true
                  },
                  {
                    text: 'arreira'
                  }
                ]
              }
            ],
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Alguns dos'
                  },
                  {
                    text: ' meus melhores projetos',
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
                    text: 'Desculpe, projetos selecionados não encontrados.'
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
                text: 'O que você pode esperar de mim'
              }
            ],
            description: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Um colaborador dedicado',
                    bold: true
                  },
                  {
                    text: ' que se destaca na busca de soluções inovadoras e na adoção de'
                  },
                  {
                    text: ' novas perspectivas',
                    bold: true
                  },
                  {
                    text: '. Minha abordagem é fundamentada em'
                  },
                  {
                    text: ' observação detalhada',
                    bold: true
                  },
                  {
                    text: ' e'
                  },
                  {
                    text: ' compreensão profunda',
                    bold: true
                  },
                  {
                    text: ' — o que me permite navegar e conectar'
                  },
                  {
                    text: ' ideias complexas',
                    bold: true
                  },
                  {
                    text: ' com eficiência.'
                  }
                ]
              },
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Valorizo a integração com a cultura de trabalho da equipe, contribuindo ativamente para um ambiente'
                  },
                  {
                    text: ' dinâmico',
                    bold: true
                  },
                  {
                    text: ' e'
                  },
                  {
                    text: ' colaborativo',
                    bold: true
                  },
                  {
                    text: ', onde ideias e objetivos se alinham para alcançar'
                  },
                  {
                    text: ' resultados excepcionais',
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
                text: 'Missão',
                separator: '·'
              },
              {
                id: 'list-work-skills',
                text: 'Hard & soft skills',
                separator: '·'
              },
              {
                id: 'list-work-services',
                text: 'Serviços',
                separator: '·'
              }
            ],
            action: {
              href: '/work',
              label: 'Explorar'
            }
          }
        },
        {
          id: 'but',
          type: 'But',
          theme: 'light',
          data: {
            title: 'Mas',
            description: 'não é só sobre tecnologia.'
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
                    text: 'Visã'
                  },
                  {
                    text: 'o',
                    emphasize: true
                  },
                  {
                    text: ' da',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'P',
                    emphasize: true
                  },
                  {
                    text: 'essoa'
                  }
                ]
              }
            ],
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
                  title: '#sobre',
                  description: [
                    {
                      type: 'paragraph',
                      children: [
                        {
                          text: '🤟 Oi —',
                          bold: true
                        },
                        {
                          text: ` Eu sou Richard, um incrível desenvolvedor full stack do ${personal?.location.country}. Quando não estou programando, provavelmente estou no mundo dos jogos — sou um grande fã, especialmente de jogos rogue-like.`
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
                      text: 'Localizado no'
                    },
                    {
                      text: ` ${personal?.location.country}`
                    },
                    {
                      text: `, ${personal?.location.gmt}`
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
                      text: 'Meus valores'
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
                          text: 'Melhorando um pouco a cada dia.'
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
                          text: 'Adoro jogar video-game.'
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
                      text: 'Meu horário local'
                    }
                  ]
                }
              },
              {
                id: 'buyCoffee',
                type: 'Link',
                data: {
                  icon: `${personal?.buyCoffee.icon}`,
                  href: `${personal?.buyCoffee.href}`,
                  title: [
                    {
                      text: 'Me compre um café'
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
                text: 'História',
                separator: '·'
              },
              {
                id: 'list-about-personality',
                text: 'Personalidade',
                separator: '·'
              },
              {
                id: 'list-about-hobbies',
                text: 'Hobbies',
                separator: '·'
              }
            ],
            action: {
              href: '/about',
              label: 'Explorar'
            }
          }
        },
        {
          id: 'ctaText',
          type: 'CtaText',
          theme: 'dark',
          data: {
            description:
              'Pronto para elevar suas ótimas ideias ao destaque digital com um dev que traz tanto habilidade quanto paixão para a mesa? Vamos nos unir e...',
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
      label: 'Trabalho',
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
              children: [{ text: 'Além de tech' }]
            },
            {
              type: 'alignText',
              align: 'right',
              children: [
                {
                  text: ' algoritmos'
                },
                { text: ' &', emphasize: true }
              ]
            },
            {
              type: 'alignText',
              align: 'center',
              children: [
                {
                  text: ' resultados'
                },
                {
                  text: ' '
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Ajudando marcas a alcançar o destaque digital. Trago uma paixão por tecnologia de ponta e criação de soluções impactantes centradas no usuário.'
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
                  text: 'Ajudando marcas a alcançar o destaque digital. Trago uma paixão por tecnologia de ponta e criação de soluções impactantes centradas no usuário.'
                }
              ]
            }
          ],
          left: [
            {
              type: 'paragraph',
              children: [
                {
                  text: `${personal?.availability}`
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
                    text: 'Essa é minha missão — Cada linha de código melhora minhas habilidades, criando soluções de alto impacto. Cada projeto é uma oportunidade para inspirar clientes, colegas e a comunidade, promovendo um impacto positivo duradouro. A repetição gera excelência, impulsionando o destaque digital.'
                  }
                ]
              }
            ],
            items: [
              {
                id: 'improve',
                text: [
                  {
                    text: 'Melhorar'
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
                    text: 'Inspirar'
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
                    text: 'Repetir'
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
              { text: 'ços' }
            ],
            subtitle: [{ text: 'Eu poderia te ajudar com...' }],
            image: {
              src: '/images/services.webp',
              alt: 'Richard Passos, um desenvolvedor full stack com cabelo curto, vestindo uma jaqueta de couro preta e camisa branca, está contra um fundo neutro, com os braços cruzados.'
            },
            items: services.map((d, i) => ({
              ...d,
              slug: `· ${(i + 1).toString().padStart(2, '0')}`
            })),
            action: {
              label: [
                {
                  text: 'Entre em contato'
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
                    text: 'Projeto'
                  },
                  {
                    text: 's',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'D',
                    emphasize: true
                  },
                  {
                    text: 'estaque'
                  }
                ]
              }
            ],
            empty: [
              {
                type: 'paragraph',
                children: [
                  {
                    text: 'Desculpe, projetos selecionados não encontrados.'
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
                    text: 'O que m'
                  },
                  {
                    text: 'e',
                    emphasize: true
                  }
                ]
              },
              {
                type: 'alignText',
                align: 'right',
                children: [
                  {
                    text: 'D',
                    emphasize: true
                  },
                  {
                    text: 'estaca'
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
                    text: 'Após projetos impactantes e uma personalidade cativante a apenas'
                  },
                  {
                    text: ' '
                  },
                  {
                    type: 'link',
                    url: '/about',
                    children: [
                      {
                        text: 'um simples clique'
                      }
                    ]
                  },
                  {
                    text: ', escolha-me para alcançar resultados excelentes.'
                  }
                ]
              }
            ],
            subtitle: [
              {
                text: 'Algumas estatísticas...'
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
                text: 'Meus valores'
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
                src: '/icons/globe.svg',
                animation: 'rotateRight',
                y: 'bottom'
              },
              right: {
                src: '/icons/smile.svg',
                animation: 'rotateLeft',
                y: 'top'
              }
            }
          }
        }
      ],
      metadata: {
        title: 'Trabalho',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum mollitia eius? Voluptatem, ipsam quo.'
      }
    },
    {
      slug: 'about',
      isSelected: true,
      label: 'Sobre',
      hero: {
        id: 'hero',
        type: 'Secondary',
        theme: 'dark',
        data: {
          title: [
            {
              text: 'Saiba mai'
            },
            {
              text: 's',
              emphasize: true
            },
            {
              text: ' S',
              emphasize: true
            },
            {
              text: 'obre mim'
            },
            {
              text: '!',
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
                alt: 'Richard Passos, um desenvolvedor full stack com cabelo curto, está contra uma parede de madeira, vestindo uma camiseta clara. Richard Passos está com os braços cruzados, mostrando um relógio e um colar.'
              },
              {
                src: '/images/about-01.webp',
                alt: 'Richard Passos, um desenvolvedor full stack, está contra um fundo neutro, vestindo uma jaqueta de couro preta sobre uma camisa branca, com a mão esquerda no bolso da jaqueta.'
              },
              {
                src: '/images/about-02.webp',
                alt: 'Richard Passos, um desenvolvedor full stack vestindo um moletom cinza claro com "Brooklyn" e outros textos impressos, está contra uma parede de madeira, olhando para a esquerda.'
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
              { text: 'Quem' },
              {
                text: ' sou',
                emphasize: true
              }
            ],
            texts: [
              {
                id: 'intro',
                title: [{ text: 'Introdução' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Sempre fui uma pessoa curiosa e dedicada, mas por um tempo, me senti perdido sem uma direção ou paixão clara. Foi só quando enfrentei a vida que descobri minha verdadeira paixão pelo desenvolvimento, que foi como um momento de epifania.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Esse novo interesse foi um ponto de virada para mim. Aprender sobre o mundo do desenvolvimento despertou um profundo entusiasmo e senso de propósito. Agora eu tenho meus sonhos, propósitos, e sei exatamente onde quero estar.'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'personality',
                title: [{ text: 'Personalidade' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Sou uma pessoa curiosa e autodidata que adora explorar novas perspectivas e culturas. Com uma habilidade para resolver problemas e uma mentalidade detalhista, transformo ideias complexas em respostas claras e práticas.'
                      }
                    ]
                  }
                ]
              },
              {
                id: 'mission',
                title: [{ text: 'Missão' }],
                description: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Tenho uma missão de aprender, cultivar e aproveitar ao máximo. Aprender com a vida e as pessoas. Cultivar relacionamentos genuínos. Aproveitar ao máximo as oportunidades e os momentos.'
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
                        text: 'Jogar, assistir séries/filmes, melhorar habilidades, conhecer novas culturas e aproveitar momentos de qualidade com amigos próximos.'
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
                text: 'Meus valores'
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
                y: 'bottom'
              },
              right: {
                src: '/icons/globe.svg',
                animation: 'rotateLeft',
                y: 'top'
              }
            }
          }
        }
      ],
      metadata: {
        title: 'Sobre',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum mollitia eius? Voluptatem, ipsam quo.'
      }
    },
    {
      slug: 'contact',
      isSelected: true,
      label: 'Contato',
      hero: {
        id: 'hero',
        type: 'Secondary',
        theme: 'light',
        data: {
          title: [
            {
              text: 'Quer gera'
            },
            {
              text: 'r',
              emphasize: true
            },
            {
              text: ' i',
              emphasize: true
            },
            {
              text: 'mpacto'
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
                text: 'Sem estresse — Eu cuido disso'
              }
            ],
            optionalLabel: 'opcional',
            to: {
              label: [
                {
                  text: 'Para:'
                }
              ],
              email: personal?.email ?? '',
              subject: '👋 Olá Richard, eu gostaria de contratá-lo!'
            },
            messages: {
              loading: [{ text: 'Enviando email...' }],
              success: [{ text: 'Email enviado!' }],
              error: [{ text: 'Oops... Por favor, tente novamente.' }]
            },
            fields: {
              name: {
                label: 'Nome',
                placeholder: 'Fulano Silva',
                defaultValue: '',
                errors: {
                  min: 'Por favor, esse não pode ser seu nome.'
                }
              },
              email: {
                label: 'Email',
                placeholder: 'fulano@silva.com',
                defaultValue: '',
                errors: {
                  email: 'Esse email parece um pouco estranho.'
                }
              },
              subject: {
                label: 'Assunto',
                placeholder: 'Quero te contratar!',
                defaultValue: ''
              },
              service: {
                label: 'Serviço',
                placeholder: 'Selecione um serviço...',
                defaultValue: '',
                data: services.map((d) => ({ value: d.slug, label: d.title }))
              },
              message: {
                label: 'Mensagem',
                placeholder:
                  '👋 Olá Richard! Eu adoraria se você pudesse me ajudar com...',
                defaultValue: '',
                errors: {
                  min: 'Vamos lá... você pode fazer melhor que isso.',
                  max: 'Qual é... pega leve.'
                }
              },
              submit: {
                label: [
                  {
                    text: 'Enviar mensagem'
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
              { text: 'ços' }
            ],
            subtitle: [{ text: 'Eu poderia te ajudar com...' }],
            image: {
              src: '/images/services.webp',
              alt: 'Richard Passos, um desenvolvedor full stack com cabelo curto, vestindo uma jaqueta de couro preta e camisa branca, está contra um fundo neutro, com os braços cruzados.'
            },
            items: services.map((d, i) => ({
              ...d,
              slug: `· ${(i + 1).toString().padStart(2, '0')}`
            }))
          }
        }
      ],
      metadata: {
        title: 'Contato',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum mollitia eius? Voluptatem, ipsam quo.'
      }
    },
    {
      type: 'single-project',
      slug: 'single-project',
      hero: {
        theme: 'dark',
        data: {
          action: {
            label: 'Ir ao site'
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
                    text: 'Aqui estão algumas'
                  },
                  {
                    text: ' ótimas imagens',
                    bold: true
                  }
                ]
              }
            ]
          }
        },
        Adjacents: {
          theme: 'dark',
          data: {
            prev: {
              label: 'Projeto anterior'
            },
            next: {
              label: 'Próximo projeto'
            }
          }
        }
      }
    },
    {
      type: 'error',
      slug: 'not-found',
      hero: {
        theme: 'dark',
        data: {
          title: [
            {
              text: 'Não Encontrado'
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
                  text: 'Desculpe, pagina não encontrada!'
                }
              ]
            }
          ],
          actions: {
            primary: {
              label: [
                {
                  text: 'Voltar ao início'
                }
              ],
              href: '/'
            }
          }
        }
      },
      metadata: {
        title: 'Não Encontrado',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum mollitia eius? Voluptatem, ipsam quo.'
      }
    },
    {
      type: 'error',
      slug: 'error',
      hero: {
        theme: 'dark',
        data: {
          title: [
            {
              text: 'Algo deu errado'
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
                  text: 'Desculpe, algo deu errado!'
                }
              ]
            }
          ],
          actions: {
            primary: {
              label: [
                {
                  text: 'Tente novamente'
                }
              ]
            },
            secondary: {
              label: [
                {
                  text: 'Voltar ao início'
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
