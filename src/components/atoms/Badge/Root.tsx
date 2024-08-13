import { Badge, BadgeProps } from '@mantine/core';

import { PolymorphicRef } from '@/types';

type BadgeAtomOwnProps = {
  ref?: PolymorphicRef<'div'>;
};

type BadgeAtomProps = BadgeAtomOwnProps &
  Omit<BadgeProps, keyof BadgeAtomOwnProps>;

const BadgeAtom = Badge;

export default BadgeAtom;
export type { BadgeAtomProps };
