import { Suspense, forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import PixelArtCanvasBlock from './Canvas';
import PixelArtFormBlock from './Form';

type SearchParams = {
  size: number;
  color: string;
};

const defaults: SearchParams = {
  size: 4,
  color: '#000'
};

const parseSize = (n?: number) =>
  parseInt((n ? Math.max(Math.min(n, 50), 2) : defaults.size).toString());

type PixelArtBlockOrganismOwnProps = {};

type PixelArtBlockOrganismProps = PixelArtBlockOrganismOwnProps &
  Omit<SectionProps, keyof PixelArtBlockOrganismOwnProps>;

const PixelArtBlockOrganism = (
  { className, ...props }: PixelArtBlockOrganismProps,
  ref: PixelArtBlockOrganismProps['ref']
) => {
  return (
    <Section
      className={cn(
        'w-full items-stretch pb-0 pt-[--header-height] sm:flex-row',
        className
      )}
      ref={ref}
      {...props}
    >
      <Suspense fallback={<>Loading form...</>}>
        <PixelArtFormBlock defaults={defaults} />
      </Suspense>

      <Suspense fallback={<>Loading canvas...</>}>
        <PixelArtCanvasBlock defaults={defaults} />
      </Suspense>

      <div
        className='mx-xs w-1 cursor-col-resize bg-border'
        id='pixel-art-resize'
      />
    </Section>
  );
};

export default forwardRef(PixelArtBlockOrganism);
export type { PixelArtBlockOrganismProps, SearchParams };
export { parseSize };
