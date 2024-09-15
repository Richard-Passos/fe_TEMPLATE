import { Statistic } from '@/types';

const statistics = async (): Promise<Statistic[]> => {
  return [
    {
      slug: 'projectsCompleted',
      title: 'Projects \ncompleted',
      value: '10ᐩ'
    },
    {
      slug: 'yearExperience',
      title: 'Years of \nexperience',
      value: '1ᐩ'
    },
    {
      slug: 'greatProjects',
      title: 'Great \nprojects',
      value: '100%'
    },
    {
      slug: 'ontimeDeliveries',
      title: 'On-time \ndeliveries',
      value: '100%'
    }
  ];
};

export default statistics;
