import { Header } from '@/types';

const header = async (): Promise<Header> => {
  return {
    menu: {
      title: 'O Menu',
      label: 'Menu',
      open: {
        label: 'Abrir menu'
      },
      close: {
        label: 'Fechar menu'
      }
    },
    locale: {
      label: 'Sua localidade'
    }
  };
};

export default header;
