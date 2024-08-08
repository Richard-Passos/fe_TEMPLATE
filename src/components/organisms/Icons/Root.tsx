import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type IconsOrganismOwnProps = {};

type IconsOrganismProps = IconsOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof IconsOrganismOwnProps>;

const IconsOrganism = (
  { className, ...props }: IconsOrganismProps,
  ref: IconsOrganismProps['ref']
) => {
  return (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(IconsOrganism);
export type { IconsOrganismProps };
