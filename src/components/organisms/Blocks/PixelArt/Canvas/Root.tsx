'use client';

import {
  CSSProperties,
  ComponentPropsWithRef,
  Suspense,
  forwardRef,
  useCallback,
  useRef,
  useState
} from 'react';

import { useEventListener } from '@/hooks';
import { cn } from '@/utils';

import { SearchParams } from '../Root';
import PixelArtCanvasBoardBlock from './Board';

const BOARD_MIN_WIDTH = 100;

type PixelArtCanvasBlockOrganismOwnProps = {
  defaults: SearchParams;
};

type PixelArtCanvasBlockOrganismProps = PixelArtCanvasBlockOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof PixelArtCanvasBlockOrganismOwnProps>;

const PixelArtCanvasBlockOrganism = (
  { defaults, className, ...props }: PixelArtCanvasBlockOrganismProps,
  ref: PixelArtCanvasBlockOrganismProps['ref']
) => {
  const boardRef = useRef<HTMLDivElement>(null),
    [isResizing, setIsResizing] = useState(false),
    [maxWidth, setMaxWidth] = useState<number | undefined>(undefined);

  const handleResizeBoard = useCallback(
    (x: number) => {
      if (!boardRef.current || !isResizing) return;

      const offset = boardRef.current.getBoundingClientRect().left;

      setMaxWidth(Math.max(x - offset, BOARD_MIN_WIDTH));
    },
    [isResizing, setMaxWidth]
  );

  useEventListener('mousemove', ({ clientX }) => handleResizeBoard(clientX));
  useEventListener('mouseup', () => setIsResizing(false));

  return (
    <div
      className={cn('grow', isResizing && 'cursor-w-resize', className)}
      ref={ref}
      {...props}
    >
      <div className='flex h-fit'>
        <div
          className='max-w-[--max-w,100%] grow pr-md'
          ref={boardRef}
          style={
            {
              '--max-w': maxWidth && `${maxWidth}px`
            } as CSSProperties
          }
        >
          <Suspense>
            <PixelArtCanvasBoardBlock defaults={defaults} />
          </Suspense>
        </div>

        <div
          className='m-md ml-0 cursor-w-resize select-none px-2'
          id='pixel-art-resize'
          onMouseDown={() => setIsResizing(true)}
        >
          <div className='h-full w-1 bg-border' />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(PixelArtCanvasBlockOrganism);
export type { PixelArtCanvasBlockOrganismProps };
