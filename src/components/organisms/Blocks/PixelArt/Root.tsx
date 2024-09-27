import { Suspense, forwardRef } from 'react';

import { ColorsProvider, RefProvider } from '@/Providers';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import PixelArtCanvasBlock from './Canvas';
import PixelArtFormBlock, { PixelArtFormBlockProps } from './Form';

const DEFAULT_SIZE = 4,
  MIN_SIZE = 2,
  MAX_SIZE = 50;

type SearchParams = {
  size: number;
  color: string;
};

const defaults: SearchParams = {
  size: DEFAULT_SIZE,
  color: '#000'
};

const parseSize = (n?: number) =>
  parseInt(
    (n ? Math.max(Math.min(n, MAX_SIZE), MIN_SIZE) : defaults.size).toString()
  );

type PixelArtBlockOrganismOwnProps = {
  data: PixelArtFormBlockProps['data'];
};

type PixelArtBlockOrganismProps = PixelArtBlockOrganismOwnProps &
  Omit<SectionProps, keyof PixelArtBlockOrganismOwnProps>;

const PixelArtBlockOrganism = (
  { data, className, ...props }: PixelArtBlockOrganismProps,
  ref: PixelArtBlockOrganismProps['ref']
) => {
  return (
    <ColorsProvider>
      <RefProvider>
        <Section
          className={cn(
            'w-full items-stretch pb-0 pt-[--header-height] sm:flex-row',
            className
          )}
          ref={ref}
          {...props}
        >
          <Suspense fallback={<>Loading form...</>}>
            <PixelArtFormBlock
              data={data}
              defaults={defaults}
            />
          </Suspense>

          <Suspense fallback={<>Loading canvas...</>}>
            <PixelArtCanvasBlock defaults={defaults} />
          </Suspense>

          <div
            className='m-md cursor-col-resize px-2'
            id='pixel-art-resize'
          >
            <div className='h-full w-1 bg-border' />
          </div>
        </Section>
      </RefProvider>
    </ColorsProvider>
  );
};

export default forwardRef(PixelArtBlockOrganism);
export type { PixelArtBlockOrganismProps, SearchParams };
export { parseSize, DEFAULT_SIZE, MAX_SIZE, MIN_SIZE };
