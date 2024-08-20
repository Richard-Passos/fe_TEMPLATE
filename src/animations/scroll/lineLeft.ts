import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';

type rotateLeftOptions = ScrollAnimateConfigOptions;

const rotateLeft: rotateLeftOptions = {
  scrollConfig: {
    offset: ['0 1', '0 .5']
  },
  prop: 'left',
  propPoints: ['100%', '0%']
};

export default rotateLeft;
export type { rotateLeftOptions };
