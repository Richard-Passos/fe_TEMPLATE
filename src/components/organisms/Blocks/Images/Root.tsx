import { forwardRef } from 'react';

import ScrollAnimate, {
  ScrollAnimateConfigOptions
} from '@/components/atoms/ScrollAnimate';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';
import ImagesBlockImage, { ImagesBlockImageProps } from './Image';

const SCROLL_OFFSET = ['.5 1', '.5 .6'],
  ANIMATION_CONFIG = {
    y1: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--y',
      propPoints: ['-5%', '0%']
    } as ScrollAnimateConfigOptions,
    y2: {
      prop: 'y',
      propPoints: ['-13%', '0%']
    } as ScrollAnimateConfigOptions,
    x: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--smooth-x',
      propPoints: [1, 0]
    } as ScrollAnimateConfigOptions,
    rotate: {
      scrollConfig: {
        offset: SCROLL_OFFSET
      },
      prop: '--rotate',
      propPoints: ['15deg', '0deg']
    } as ScrollAnimateConfigOptions
  };

type ImagesBlockOrganismOwnProps = {
  data: {
    items: [
      ImagesBlockImageProps['data'],
      ImagesBlockImageProps['data'],
      ImagesBlockImageProps['data']
    ];
  };
};

type ImagesBlockOrganismProps = ImagesBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof ImagesBlockOrganismOwnProps>;

const ImagesBlockOrganism = (
  { className, data, ...props }: ImagesBlockOrganismProps,
  ref: ImagesBlockOrganismProps['ref']
) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG.y1}>
      <ScrollAnimate config={ANIMATION_CONFIG.x}>
        <ScrollAnimate config={ANIMATION_CONFIG.rotate}>
          <CleanLayoutBlock
            className={cn(
              'grid min-h-fit w-9/10 max-w-screen-lg gap-[--gap] pt-0 [--gap:theme(spacing.xs)] sm:grid-cols-3 sm:[--x:calc(var(--smooth-x)*(var(--gap)+35%))] 2xl:min-h-fit',
              className
            )}
            ref={ref}
            {...props}
          >
            <ImagesBlockImage
              className='sm:mt-[25%] sm:translate-x-[--x] sm:translate-y-[--y] sm:-rotate-[--rotate]'
              data={data.items[0]}
            />

            <ImagesBlockImage
              className='z-10 sm:-mt-[25%]'
              data={data.items[1]}
            />

            <ImagesBlockImage
              className='max-sm:hidden sm:mt-[25%] sm:-translate-x-[--x] sm:translate-y-[--y] sm:rotate-[--rotate]'
              data={data.items[2]}
            />
          </CleanLayoutBlock>
        </ScrollAnimate>
      </ScrollAnimate>
    </ScrollAnimate>
  );
};

export default forwardRef(ImagesBlockOrganism);
export type { ImagesBlockOrganismProps };
