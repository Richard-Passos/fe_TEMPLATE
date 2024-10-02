import { Personal } from '@/types';

const personal = async (): Promise<Personal> => {
  return {
    name: {
      first: 'Richard',
      last: 'Passos'
    },
    email: 'hi.richardp@gmail.com',
    title: 'Front End Template',
    description:
      'Crie seu site facilmente com este template flexível e moderno, ideal para desenvolvedores e empreendedores que buscam uma solução rápida e personalizável. Recursos dinâmicos e otimização para SEO, perfeito para projetos de qualquer nicho.',
    keywords:
      'template de site, criar websites, template personalizável, design responsivo, template para desenvolvedores, criação de sites, site otimizado para SEO, website flexível, solução para websites, design moderno',
    authors: [
      {
        name: 'Richard Passos',
        url: 'https://github.com/Richard-Passos'
      }
    ],
    location: {
      country: 'Brasil',
      state: 'Rio Grande do Sul',
      gmt: 'GMT-3'
    },
    socials: [
      {
        id: 'github',
        href: 'https://github.com/Richard-Passos',
        icon: '/icons/github.svg',
        label: 'Github'
      },
      {
        id: 'instagram',
        href: 'https://www.instagram.com/richardp.dev/',
        icon: '/icons/instagram.svg',
        label: 'Instagram'
      },
      {
        id: 'linkedin',
        href: 'https://www.linkedin.com/in/richardp-dev',
        icon: '/icons/linkedin.svg',
        label: 'Linkedin'
      }
    ]
  };
};

export default personal;
