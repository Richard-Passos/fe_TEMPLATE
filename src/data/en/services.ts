import { Service } from '@/types';

const services = async (): Promise<Service[]> => {
  return [
    {
      slug: 'frontend',
      title: 'Front End',
      description:
        'I build user interfaces with meticulous attention to detail, focusing on smooth interactions and engaging micro animations to enhance user experience.'
    },
    {
      slug: 'backend',
      title: 'Back End',
      description:
        'I build reliable back-end systems that drive your platform’s functionality, emphasizing efficient data management and scalable solutions to support your growth.'
    },
    {
      slug: 'fullstack',
      title: 'Full Stack',
      description:
        'I integrate end-to-end solutions using cutting-edge front and back end technologies, delivering results that enhance user experience, scalability, and overall performance.'
    }
  ];
};

export default services;
