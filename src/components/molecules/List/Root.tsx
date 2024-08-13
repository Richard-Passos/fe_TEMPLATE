import { List, ListProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type ListMoleculeOwnProps = {
  ref?: PolymorphicRef<'ul'>;
};

type ListMoleculeProps = ListMoleculeOwnProps &
  Omit<ListProps, keyof ListMoleculeOwnProps>;

const ListMolecule = List;

export default ListMolecule;
export type { ListMoleculeProps };
