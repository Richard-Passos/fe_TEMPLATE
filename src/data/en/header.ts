import { Header } from '@/types';

const header = async (): Promise<Header> => {
  return {
    menu: {
      title: 'The Menu',
      label: 'Menu',
      open: {
        label: 'Open menu'
      },
      close: {
        label: 'Close menu'
      }
    },
    locale: {
      label: 'Your locale'
    }
  };
};

export default header;
