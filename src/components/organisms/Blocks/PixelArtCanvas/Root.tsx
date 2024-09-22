import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type PixelArtCanvasBlockOrganismOwnProps = {};

type PixelArtCanvasBlockOrganismProps = PixelArtCanvasBlockOrganismOwnProps &
  Omit<
    ComponentPropsWithRef<'section'>,
    keyof PixelArtCanvasBlockOrganismOwnProps
  >;

const PixelArtCanvasBlockOrganism = (
  { className, ...props }: PixelArtCanvasBlockOrganismProps,
  ref: PixelArtCanvasBlockOrganismProps['ref']
) => {
  return (
    <section
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      <aside></aside>

      <section className='sif'>
        <canvas />
      </section>
      <div id='pixel-art-resize' />
    </section>
  );
};

export default forwardRef(PixelArtCanvasBlockOrganism);
export type { PixelArtCanvasBlockOrganismProps };
