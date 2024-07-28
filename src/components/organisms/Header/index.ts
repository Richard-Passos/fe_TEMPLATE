import HeaderRoot, {
  type HeaderOrganismProps as HeaderRootProps
} from './Root';
import HeaderState, { type HeaderStateProps } from './State';

const Header = {
  Root: HeaderRoot,
  State: HeaderState
};

export default Header;
export { HeaderRoot, HeaderState };
export type { HeaderRootProps, HeaderStateProps };
