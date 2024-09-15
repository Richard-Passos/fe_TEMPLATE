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
        title: 'Learning',
        description:
          'Embracing a lifelong learning approach to stay updated with new technologies, frameworks, and best practices.'
      },
      {
        slug: 'resilience',
        icon: '/icons/rocket.svg',
        title: 'Resilience',
        description:
          'Ability to overcome challenges and setbacks while maintaining focus and motivation to achieve high-quality results.'
      },
      {
        slug: 'qualityOriented',
        icon: '/icons/check-badge.svg',
        title: 'Quality-Oriented',
        description:
          'Committed to high standards in all aspects of development to ensure the delivery of exceptional solutions.'
      },
      {
        slug: 'customerOriented',
        icon: '/icons/smile.svg',
        title: 'Customer-Oriented',
        description:
          'Focusing on the end-user’s needs and expectations to create software that meets or exceeds their requirements.'
      }
    ],
    personal: [
      {
        slug: 'integrity',
        icon: '/icons/shield.svg',
        title: 'Integrity',
        description:
          'I stay true to my values, acting with honesty and transparency. This helps me build strong, genuine relationships.'
      },
      {
        slug: 'curiosity',
        icon: '/icons/globe.svg',
        title: 'Curiosity',
        description:
          'My curiosity drives me to explore new slugeas and learn from challenges. I see each opportunity as a chance for growth and discovery.'
      },
      {
        slug: 'respect',
        icon: '/icons/puzzle.svg',
        title: 'Respect',
        description:
          'I value the people around me and their unique perspectives. I am open to listening and learning, recognizing the importance of each voice.'
      },
      {
        slug: 'gratitude',
        icon: '/icons/smile.svg',
        title: 'Gratitude',
        description:
          'I maintain a mindset of gratitude, appreciating the small things in life. Gratitude helps me stay motivated and fulfilled.'
      }
    ]
  };
};

export default values;
