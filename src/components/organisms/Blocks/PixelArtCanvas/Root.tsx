import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type PixelArtCanvasBlockOrganismOwnProps = {};

type PixelArtCanvasBlockOrganismProps = PixelArtCanvasBlockOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof PixelArtCanvasBlockOrganismOwnProps>;

const PixelArtCanvasBlockOrganism = (
  { className, ...props }: PixelArtCanvasBlockOrganismProps,
  ref: PixelArtCanvasBlockOrganismProps['ref']
) => {
  return (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PixelArtCanvasBlockOrganism);
export type { PixelArtCanvasBlockOrganismProps };
