import { Personal } from '@/types';

const personal = async (): Promise<Personal> => {
  return {
    name: {
      first: 'Richard',
      last: 'Passos'
    },
    email: 'hi.richardp@gmail.com',
    title: 'Pixel Art Canvas',
    description:
      'Create amazing pixel art with an interactive canvas! Customize your design by resizing, adding colors, and effortlessly downloading your pixelated artwork. Unleash your creativity today!',
    keywords:
      'pixel art, pixel art canvas, create pixel art, online pixel art, draw pixel art, resize pixel art, pixel art colors, download pixel art, pixel art creator, pixel art editor, pixel drawing tool',
    authors: [
      {
        name: 'Richard Passos',
        url: 'https://github.com/Richard-Passos'
      }
    ],
    location: {
      country: 'Brazil',
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
