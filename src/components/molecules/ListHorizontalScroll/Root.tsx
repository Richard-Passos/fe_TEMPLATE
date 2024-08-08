import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type ListHorizontalScrollOrganismOwnProps = {};

type ListHorizontalScrollOrganismProps = ListHorizontalScrollOrganismOwnProps &
  Omit<ComponentPropsWithRef<'ul'>, keyof ListHorizontalScrollOrganismOwnProps>;

const ListHorizontalScrollOrganism = (
  { className, ...props }: ListHorizontalScrollOrganismProps,
  ref: ListHorizontalScrollOrganismProps['ref']
) => {
  return (
    <ul
      className={cn('w-full overflow-x-clip', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ListHorizontalScrollOrganism);
export type { ListHorizontalScrollOrganismProps };
