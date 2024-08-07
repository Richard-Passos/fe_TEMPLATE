import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type SecondaryLayoutBlockWrapperOrganismOwnProps = {};

type SecondaryLayoutBlockWrapperOrganismProps =
  SecondaryLayoutBlockWrapperOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'div'>,
      keyof SecondaryLayoutBlockWrapperOrganismOwnProps
    >;

const SecondaryLayoutBlockWrapperOrganism = (
  { className, ...props }: SecondaryLayoutBlockWrapperOrganismProps,
  ref: SecondaryLayoutBlockWrapperOrganismProps['ref']
) => {
  return (
    <div
      className={cn(
        'flex w-9/10 max-w-screen-xl justify-between gap-md max-sm:flex-col sm:items-end',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SecondaryLayoutBlockWrapperOrganism);
export type { SecondaryLayoutBlockWrapperOrganismProps };
