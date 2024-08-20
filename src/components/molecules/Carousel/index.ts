import CarouselAction, { CarouselActionProps } from './Action';
import CarouselActions, { CarouselActionsProps } from './Actions';
import CarouselActiveIdx, { CarouselActiveIdxProps } from './ActiveIdx';
import CarouselItem, { CarouselItemProps } from './Item';
import CarouselProgress, { CarouselProgressProps } from './Progress';
import CarouselRoot, {
  CarouselMoleculeProps as CarouselRootProps
} from './Root';
import CarouselTrack, { CarouselTrackProps } from './Track';

const Carousel = {
  Root: CarouselRoot,
  Action: CarouselAction,
  Actions: CarouselActions,
  ActiveIdx: CarouselActiveIdx,
  Item: CarouselItem,
  Progress: CarouselProgress,
  Track: CarouselTrack
};

export default Carousel;
export {
  CarouselRoot,
  CarouselAction,
  CarouselActions,
  CarouselActiveIdx,
  CarouselItem,
  CarouselProgress,
  CarouselTrack
};
export type {
  CarouselRootProps,
  CarouselActionProps,
  CarouselActionsProps,
  CarouselActiveIdxProps,
  CarouselItemProps,
  CarouselProgressProps,
  CarouselTrackProps
};
