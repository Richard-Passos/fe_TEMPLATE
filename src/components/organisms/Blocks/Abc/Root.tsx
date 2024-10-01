import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type AbcBlockOrganismOwnProps = {
  data: {};
};

type AbcBlockOrganismProps = AbcBlockOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof AbcBlockOrganismOwnProps>;

const AbcBlockOrganism = (
  { className, ...props }: AbcBlockOrganismProps,
  ref: AbcBlockOrganismProps['ref']
) => {
  return (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AbcBlockOrganism);
export type { AbcBlockOrganismProps };
