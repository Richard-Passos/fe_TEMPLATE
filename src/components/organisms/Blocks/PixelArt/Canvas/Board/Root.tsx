'use client';

import { useSearchParams } from 'next/navigation';
import {
  CSSProperties,
  ComponentPropsWithRef,
  forwardRef,
  useState
} from 'react';

import { useRefContext } from '@/hooks/contexts';
import { cn, isType, times } from '@/utils';

import { SearchParams, parseSize } from '../../Root';
import PixelArtCanvasPixelBlock from './Pixel';

type PixelArtCanvasBoardBlockOrganismOwnProps = {
  defaults: SearchParams;
};

type PixelArtCanvasBoardBlockOrganismProps =
  PixelArtCanvasBoardBlockOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'div'>,
      keyof PixelArtCanvasBoardBlockOrganismOwnProps
    >;

const PixelArtCanvasBoardBlockOrganism = (
  { defaults, className, ...props }: PixelArtCanvasBoardBlockOrganismProps,
  ref: PixelArtCanvasBoardBlockOrganismProps['ref']
) => {
  const canvasRef = useRefContext(),
    [state, setState] = useState<'painting' | 'idle'>('idle'),
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
    <div
      className={cn('aspect-square bg-gray-0 dark:bg-dark-5', className)}
      ref={ref}
      {...props}
    >
      <section
        className='grid size-full grid-cols-[repeat(var(--size),minmax(0,1fr))] grid-rows-[repeat(var(--size),minmax(0,1fr))]'
        onMouseDown={() => {
          setState('painting');
        }}
        onMouseUp={() => {
          setState('idle');
        }}
        ref={canvasRef}
        style={
          {
            '--size': `${size}`
          } as CSSProperties
        }
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

export default forwardRef(PixelArtCanvasBoardBlockOrganism);
export type { PixelArtCanvasBoardBlockOrganismProps };
