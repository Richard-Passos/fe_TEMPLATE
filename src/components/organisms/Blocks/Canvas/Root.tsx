import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type CanvasBlockOrganismOwnProps = {};

type CanvasBlockOrganismProps = CanvasBlockOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof CanvasBlockOrganismOwnProps>;

const CanvasBlockOrganism = (
  { className, ...props }: CanvasBlockOrganismProps,
  ref: CanvasBlockOrganismProps['ref']
) => {
  return (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CanvasBlockOrganism);
export type { CanvasBlockOrganismProps };
