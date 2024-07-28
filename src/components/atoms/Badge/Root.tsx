import { Badge, type BadgeProps } from '@mantine/core';

type BadgeAtomOwnProps = {
  ref?: PolimorphicRef<'div'>;
};

type BadgeAtomProps = BadgeAtomOwnProps &
  Omit<BadgeProps, keyof BadgeAtomOwnProps>;

const BadgeAtom = Badge;

export default BadgeAtom;
export type { BadgeAtomProps };
