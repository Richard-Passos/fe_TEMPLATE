import { Personal } from '@/types';

const personal = async (): Promise<Personal> => {
  return {
    name: {
      first: 'Richard',
      last: 'Passos'
    },
    email: 'hi.richardp@gmail.com',
    title: 'Canvas de Pixel Art',
    description:
      'Crie incríveis pixel arts com uma tela interativa! Personalize seu design redimensionando, adicionando cores e baixando sua arte pixelada sem esforço. Libere sua criatividade hoje!',
    keywords:
      'pixel art, canvas de pixel art, criar pixel art, pixel art online, desenhar pixel art, redimensionar pixel art, cores de pixel art, baixar pixel art, criador de pixel art, editor de pixel art, ferramenta de desenho em pixel',
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
