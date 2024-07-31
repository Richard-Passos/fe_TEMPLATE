import DrawerContent, { DrawerContentProps } from './Content';
import DrawerRoot, {
  DrawerWithProviderMoleculeProps as DrawerRootProps
} from './Root';
import DrawerTrigger, { DrawerTriggerProps } from './Trigger';

const Drawer = {
  Root: DrawerRoot,
  Content: DrawerContent,
  Trigger: DrawerTrigger
};

export default Drawer;
export { DrawerRoot, DrawerContent, DrawerTrigger };
export type { DrawerRootProps, DrawerContentProps, DrawerTriggerProps };
