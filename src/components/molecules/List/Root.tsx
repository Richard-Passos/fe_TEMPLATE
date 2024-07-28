import { List, type ListProps } from '@mantine/core';

type ListMoleculeOwnProps = {
  ref?: PolimorphicRef<'ul'>;
};

type ListMoleculeProps = ListMoleculeOwnProps &
  Omit<ListProps, keyof ListMoleculeOwnProps>;

const ListMolecule = List;

export default ListMolecule;
export type { ListMoleculeProps };
