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
      'Create your website easily with this flexible and modern template, ideal for developers and entrepreneurs looking for a quick and customizable solution. Dynamic features and SEO optimization, perfect for projects of any niche.',
    keywords:
      'website template, create websites, customizable template, responsive design, template for developers, website creation, SEO-optimized website, flexible website, website solution, modern design',
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
