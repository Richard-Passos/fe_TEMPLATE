import MagneticContainer, { MagneticContainerProps } from './Container';
import MagneticRoot, { MagneticAtomProps as MagneticRootProps } from './Root';

const Magnetic = {
  Root: MagneticRoot,
  Container: MagneticContainer
};

export default Magnetic;
export { MagneticRoot, MagneticContainer };
export type { MagneticRootProps, MagneticContainerProps };
