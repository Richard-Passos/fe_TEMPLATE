import { Header } from '@/types';

const header = async (): Promise<Header> => {
  return {
    locale: {
      label: 'Your locale'
    }
  };
};

export default header;
