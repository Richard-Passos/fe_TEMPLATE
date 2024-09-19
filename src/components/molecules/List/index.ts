import ListItem, { ListItemProps } from './Item';
import ListRoot, {
  ListMoleculeProps as ListRootProps,
  ListMoleculeType as ListRootType
} from './Root';

const List = {
  Root: ListRoot,
  Item: ListItem
};

export default List;
export { ListRoot, ListItem };
export type { ListRootProps, ListItemProps, ListRootType };
