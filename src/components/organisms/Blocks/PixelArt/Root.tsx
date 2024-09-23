'use client';

import { Suspense, forwardRef, useRef } from 'react';

import { ColorsProvider } from '@/Providers';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import PixelArtCanvasBlock from './Canvas';
import PixelArtFormBlock from './Form';

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

type PixelArtBlockOrganismOwnProps = {};

type PixelArtBlockOrganismProps = PixelArtBlockOrganismOwnProps &
  Omit<SectionProps, keyof PixelArtBlockOrganismOwnProps>;

const PixelArtBlockOrganism = (
  { className, ...props }: PixelArtBlockOrganismProps,
  ref: PixelArtBlockOrganismProps['ref']
) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <ColorsProvider>
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
            canvasRef={canvasRef}
            defaults={defaults}
          />
        </Suspense>

        <Suspense fallback={<>Loading canvas...</>}>
          <PixelArtCanvasBlock
            defaults={defaults}
            ref={canvasRef}
          />
        </Suspense>

        <div
          className='mx-xs w-1 cursor-col-resize bg-border'
          id='pixel-art-resize'
        />
      </Section>
    </ColorsProvider>
  );
};

export default forwardRef(PixelArtBlockOrganism);
export type { PixelArtBlockOrganismProps, SearchParams };
export { parseSize, DEFAULT_SIZE, MAX_SIZE, MIN_SIZE };
