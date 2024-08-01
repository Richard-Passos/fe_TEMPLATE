import HeaderMenuTriggerMobile, {
  type HeaderMenuTriggerMobileProps
} from './Mobile';
import HeaderMenuTriggerRoot, {
  type HeaderMenuTriggerOrganismProps as HeaderMenuTriggerRootProps
} from './Root';

const HeaderMenuTrigger = {
  Root: HeaderMenuTriggerRoot,
  Mobile: HeaderMenuTriggerMobile
};

export default HeaderMenuTrigger;
export { HeaderMenuTriggerRoot, HeaderMenuTriggerMobile };
export type { HeaderMenuTriggerRootProps, HeaderMenuTriggerMobileProps };
