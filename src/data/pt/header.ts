import { Header } from '@/types';

const header = async (): Promise<Header> => {
  return {
    locale: {
      label: 'Sua localidade'
    }
  };
};

export default header;
