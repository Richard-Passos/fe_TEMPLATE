import { forwardRef } from 'react';

import { imageYScrollAnim } from '@/animations/scroll';
import Image, { ImageProps } from '@/components/atoms/Image';
import ScrollAnimate from '@/components/atoms/ScrollAnimate';
import { CardRoot, CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type ImagesBlockImageOrganismOwnProps = {
  data: {
    image: Pick<ImageProps, 'src' | 'alt' | 'width' | 'height'>;
  };
};

type ImagesBlockImageOrganismProps = ImagesBlockImageOrganismOwnProps &
  Omit<CardRootProps, keyof ImagesBlockImageOrganismOwnProps>;

const ImagesBlockImageOrganism = (
  { className, data, ...props }: ImagesBlockImageOrganismProps,
  ref: ImagesBlockImageOrganismProps['ref']
) => {
  return (
    <CardRoot
      className={cn('aspect-[1/1.25] !bg-transparent', className)}
      padding='xs'
      radius='xl'
      ref={ref}
      {...props}
    >
      <div className='relative size-full overflow-hidden rounded-[calc(var(--paper-radius)-var(--card-padding))] bg-gray-1 dark:bg-dark-7'>
        <ScrollAnimate config={imageYScrollAnim}>
          <Image
            alt={data.image.alt}
            className='h-[115%] object-cover'
            height={data.image.height}
            src={data.image.src}
            width={data.image.width}
          />
        </ScrollAnimate>
      </div>
    </CardRoot>
  );
};

export default forwardRef(ImagesBlockImageOrganism);
export type { ImagesBlockImageOrganismProps };
