import { ImageProps } from 'next/image';
import { forwardRef } from 'react';

import { Image, ScrollAnimate } from '@/components/atoms';
import Card, { CardRootProps } from '@/components/molecules/Card';
import { cn } from '@/utils';

type ImageCardOrganismOwnProps = {
  data: Pick<ImageProps, 'src' | 'alt'>;
  imageProps?: Partial<ImageProps>;
};

type ImageCardOrganismProps = ImageCardOrganismOwnProps &
  Omit<CardRootProps, keyof ImageCardOrganismOwnProps>;

const ImageCardOrganism = (
  { className, data, imageProps, ...props }: ImageCardOrganismProps,
  ref: ImageCardOrganismProps['ref']
) => {
  return (
    <Card.Root
      className={cn('size-full', className)}
      padding='xs'
      radius='xl'
      ref={ref}
      {...props}
    >
      <div className='size-full overflow-hidden rounded-[calc(var(--paper-radius)-var(--card-padding))]'>
        <div className='relative h-[115%]'>
          <ScrollAnimate config={{ prop: 'y', propPoints: ['-13%', '0%'] }}>
            <Image
              alt={data.alt}
              fill
              src={data.src}
              {...imageProps}
              className={cn('object-cover', imageProps?.className)}
            />
          </ScrollAnimate>
        </div>
      </div>
    </Card.Root>
  );
};

export default forwardRef(ImageCardOrganism);
export type { ImageCardOrganismProps };
