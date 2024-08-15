import BentoGridItem, { BentoGridItemProps } from './Item';
import BentoGridRoot, {
  BentoGridMoleculeProps as BentoGridRootProps
} from './Root';

const BentoGrid = {
  Root: BentoGridRoot,
  Item: BentoGridItem
};

export default BentoGrid;
export { BentoGridRoot, BentoGridItem };
export type { BentoGridRootProps, BentoGridItemProps };
