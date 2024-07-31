import HeaderRoot, { HeaderOrganismProps as HeaderRootProps } from './Root';
import HeaderState, { HeaderStateProps } from './State';

const Header = {
  Root: HeaderRoot,
  State: HeaderState
};

export default Header;
export { HeaderRoot, HeaderState };
export type { HeaderRootProps, HeaderStateProps };
