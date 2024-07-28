import { ListItem, type ListItemProps } from '@mantine/core';

type ListItemMoleculeOwnProps = {
  ref?: PolimorphicRef<'li'>;
};

type ListItemMoleculeProps = ListItemMoleculeOwnProps &
  Omit<ListItemProps, keyof ListItemMoleculeOwnProps>;

const ListItemMolecule = ListItem;

export default ListItemMolecule;
export type { ListItemMoleculeProps };
