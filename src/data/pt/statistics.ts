import { Statistic } from '@/types';

const statistics = async (): Promise<Statistic[]> => {
  return [
    {
      slug: 'projectsCompleted',
      title: 'Projetos \ncompletados',
      value: '10ᐩ'
    },
    {
      slug: 'yearExperience',
      title: 'Anos de \nexperiência',
      value: '1ᐩ'
    },
    {
      slug: 'greatProjects',
      title: 'Ótimos \nprojetos',
      value: '100%'
    },
    {
      slug: 'ontimeDeliveries',
      title: 'Entregas \npontuais',
      value: '100%'
    }
  ];
};

export default statistics;
