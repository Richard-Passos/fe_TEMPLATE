import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { cn } from '@/utils';

type HeaderMenuOrganismProps = ComponentPropsWithRef<'div'>;

type HeaderMenuOrganismRef = ForwardedRef<HTMLDivElement>;

const HeaderMenuOrganism = (
  { className, ...props }: HeaderMenuOrganismProps,
  ref: HeaderMenuOrganismRef
) => {
  return (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(HeaderMenuOrganism);
export type { HeaderMenuOrganismProps, HeaderMenuOrganismRef };
