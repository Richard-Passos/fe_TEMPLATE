import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type FooterOrganismOwnProps = {};

type FooterOrganismProps = FooterOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof FooterOrganismOwnProps>;

const FooterOrganism = (
  { className, ...props }: FooterOrganismProps,
  ref: FooterOrganismProps['ref']
) => {
  return (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FooterOrganism);
export type { FooterOrganismProps };
