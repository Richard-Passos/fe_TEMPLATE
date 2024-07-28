import ListItem, { type ListItemProps } from './Item';
import ListRoot, { type ListMoleculeProps as ListRootProps } from './Root';

const List = {
  Root: ListRoot,
  Item: ListItem
};

export default List;
export { ListRoot, ListItem };
export type { ListRootProps, ListItemProps };
