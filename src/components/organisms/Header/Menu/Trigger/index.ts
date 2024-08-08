import HeaderMenuTriggerMobile, {
  HeaderMenuTriggerMobileProps
} from './Mobile';
import HeaderMenuTriggerRoot, {
  HeaderMenuTriggerOrganismProps as HeaderMenuTriggerRootProps
} from './Root';

const HeaderMenuTrigger = {
  Root: HeaderMenuTriggerRoot,
  Mobile: HeaderMenuTriggerMobile
};

export default HeaderMenuTrigger;
export { HeaderMenuTriggerRoot, HeaderMenuTriggerMobile };
export type { HeaderMenuTriggerRootProps, HeaderMenuTriggerMobileProps };
