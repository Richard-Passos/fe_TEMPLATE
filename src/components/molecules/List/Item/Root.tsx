import { ListItem, ListItemProps } from '@mantine/core';

type ListItemMoleculeOwnProps = {
  ref?: PolymorphicRef<'li'>;
};

type ListItemMoleculeProps = ListItemMoleculeOwnProps &
  Omit<ListItemProps, keyof ListItemMoleculeOwnProps>;

const ListItemMolecule = ListItem;

export default ListItemMolecule;
export type { ListItemMoleculeProps };
