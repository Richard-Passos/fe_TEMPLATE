import { Value } from '@/types';

const values = async (): Promise<{
  work: Value[];
  personal: Value[];
}> => {
  return {
    work: [
      {
        slug: 'learning',
        icon: '/icons/graduation-cap.svg',
        title: 'Aprendizado',
        description:
          'Adoto uma abordagem de aprendizado contínuo para me manter atualizado com novas tecnologias, frameworks e melhores práticas.'
      },
      {
        slug: 'resilience',
        icon: '/icons/rocket.svg',
        title: 'Resiliência',
        description:
          'Habilidade de superar desafios e contratempos mantendo o foco e a motivação para alcançar resultados de alta qualidade.'
      },
      {
        slug: 'qualityOriented',
        icon: '/icons/check-badge.svg',
        title: 'Orientado à Qualidade',
        description:
          'Comprometido com altos padrões em todos os aspectos do desenvolvimento para garantir a entrega de soluções excepcionais.'
      },
      {
        slug: 'customerOriented',
        icon: '/icons/smile.svg',
        title: 'Orientado ao Cliente',
        description:
          'Foco nas necessidades e expectativas do usuário final para criar software que atenda ou supere seus requisitos.'
      }
    ],
    personal: [
      {
        slug: 'integrity',
        icon: '/icons/shield.svg',
        title: 'Integridade',
        description:
          'Mantenho-me fiel aos meus valores, agindo com honestidade e transparência. Isso ajuda a construir relacionamentos fortes e genuínos.'
      },
      {
        slug: 'curiosity',
        icon: '/icons/globe.svg',
        title: 'Curiosidade',
        description:
          'Minha curiosidade me impulsiona a explorar novas ideias e aprender com desafios. Cada oportunidade é uma chance para descoberta e crescimento.'
      },
      {
        slug: 'respect',
        icon: '/icons/puzzle.svg',
        title: 'Respeito',
        description:
          'Valorizo as pessoas ao meu redor e suas perspectivas únicas. Estou aberto a ouvir e aprender, reconhecendo a importância de cada voz.'
      },
      {
        slug: 'gratitude',
        icon: '/icons/smile.svg',
        title: 'Gratidão',
        description:
          'Mantenho uma mentalidade de gratidão, apreciando as pequenas coisas da vida. A gratidão me ajuda a permanecer motivado e realizado.'
      }
    ]
  };
};

export default values;
