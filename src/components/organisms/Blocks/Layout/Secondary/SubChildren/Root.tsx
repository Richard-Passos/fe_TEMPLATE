import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type SecondaryLayoutBlockSubChildrenOrganismOwnProps = {};

type SecondaryLayoutBlockSubChildrenOrganismProps =
  SecondaryLayoutBlockSubChildrenOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'div'>,
      keyof SecondaryLayoutBlockSubChildrenOrganismOwnProps
    >;

const SecondaryLayoutBlockSubChildrenOrganism = (
  { className, ...props }: SecondaryLayoutBlockSubChildrenOrganismProps,
  ref: SecondaryLayoutBlockSubChildrenOrganismProps['ref']
) => {
  return (
    <div
      className={cn(
        'flex w-full items-center gap-sm sm:max-w-xl',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SecondaryLayoutBlockSubChildrenOrganism);
export type { SecondaryLayoutBlockSubChildrenOrganismProps };
