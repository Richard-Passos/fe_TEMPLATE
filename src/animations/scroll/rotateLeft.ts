import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';

type rotateLeftOptions = ScrollAnimateConfigOptions;

const rotateLeft: rotateLeftOptions = {
  scroll: 'scrollY',
  scrollPoints: [0, 400],
  prop: 'rotate',
  propPoints: ['0deg', '-360deg'],
  transformConfig: { clamp: false }
};

export default rotateLeft;
export type { rotateLeftOptions };
