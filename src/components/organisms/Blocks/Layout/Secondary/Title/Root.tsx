import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import { cn } from '@/utils';

type SecondaryLayoutBlockTitleOrganismOwnProps = {
  subtitle?: ReactNode;
};

type SecondaryLayoutBlockTitleOrganismProps =
  SecondaryLayoutBlockTitleOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'div'>,
      keyof SecondaryLayoutBlockTitleOrganismOwnProps
    >;

const SecondaryLayoutBlockTitleOrganism = (
  { className, ...props }: SecondaryLayoutBlockTitleOrganismProps,
  ref: SecondaryLayoutBlockTitleOrganismProps['ref']
) => {
  return (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SecondaryLayoutBlockTitleOrganism);
export type { SecondaryLayoutBlockTitleOrganismProps };
