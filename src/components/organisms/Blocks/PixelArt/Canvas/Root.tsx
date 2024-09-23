'use client';

import { useSearchParams } from 'next/navigation';
import { ComponentPropsWithRef, forwardRef, useRef, useState } from 'react';

import { cn, isType, setRefs, times } from '@/utils';

import { SearchParams, parseSize } from '../Root';
import PixelArtCanvasPixelBlock from './Pixel';

type PixelArtCanvasBlockOrganismOwnProps = {
  defaults: SearchParams;
};

type PixelArtCanvasBlockOrganismProps = PixelArtCanvasBlockOrganismOwnProps &
  Omit<
    ComponentPropsWithRef<'section'>,
    keyof PixelArtCanvasBlockOrganismOwnProps
  >;

const PixelArtCanvasBlockOrganism = (
  { defaults, className, style, ...props }: PixelArtCanvasBlockOrganismProps,
  ref: PixelArtCanvasBlockOrganismProps['ref']
) => {
  const innerRef = useRef<HTMLDivElement>(null),
    [state, setState] = useState<'painting' | 'resizing' | 'idle'>('idle'),
    searchParams = useSearchParams();

  const params: Record<keyof SearchParams, string | null> = {
    size: searchParams.get('size'),
    color: searchParams.get('color')
  };

  const size = isType<SearchParams['size']>(!!params.size, params.size)
      ? parseSize(params.size)
      : defaults.size,
    color = isType<SearchParams['color']>(!!params.color, params.color)
      ? params.color
      : defaults.color;

  return (
    <div className='aspect-square grow bg-gray-0 dark:bg-dark-5'>
      <section
        className={cn(
          'grid size-full grid-cols-[repeat(var(--size),minmax(0,1fr))] grid-rows-[repeat(var(--size),minmax(0,1fr))]',
          className
        )}
        onMouseDown={() => {
          setState('painting');
        }}
        onMouseUp={() => {
          setState('idle');
        }}
        ref={setRefs(ref, innerRef)}
        style={
          {
            '--size': `${size}`,
            ...style
          } as typeof style
        }
        {...props}
      >
        {times(size * size, String).map((id) => (
          <PixelArtCanvasPixelBlock
            color={color}
            isPainting={state === 'painting'}
            key={id}
          />
        ))}
      </section>
    </div>
  );
};

export default forwardRef(PixelArtCanvasBlockOrganism);
export type { PixelArtCanvasBlockOrganismProps };
