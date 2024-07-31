import MainRoot, { MainOrganismProps as MainRootProps } from './Root';
import MainState, { MainStateProps } from './State';

const Main = {
  Root: MainRoot,
  State: MainState
};

export default Main;
export { MainRoot, MainState };
export type { MainRootProps, MainStateProps };
