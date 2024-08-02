import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';

type rotateRightOptions = ScrollAnimateConfigOptions;

const rotateRight: rotateRightOptions = {
  scroll: 'scrollY',
  scrollPoints: [0, 400],
  prop: 'rotate',
  propPoints: ['0deg', '360deg'],
  transformConfig: { clamp: false }
};

export default rotateRight;
export type { rotateRightOptions };
