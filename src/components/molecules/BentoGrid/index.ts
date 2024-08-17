import BentoGridItem, { BentoGridItemProps } from './Item';
import BentoGridRoot, {
  BentoGridMoleculeProps as BentoGridRootProps
} from './Root';
import BentoGridScrollAnimate, {
  BentoGridScrollAnimateProps
} from './ScrollAnimate';

const BentoGrid = {
  Root: BentoGridRoot,
  Item: BentoGridItem,
  ScrollAnimate: BentoGridScrollAnimate
};

export default BentoGrid;
export { BentoGridRoot, BentoGridItem, BentoGridScrollAnimate };
export type {
  BentoGridRootProps,
  BentoGridItemProps,
  BentoGridScrollAnimateProps
};
