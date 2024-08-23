import { ComponentPropsWithRef, forwardRef } from 'react';

import { Image, ScrollAnimate } from '@/components/atoms';
import { ImageProps } from '@/components/atoms/Image';
import { cn } from '@/utils';

type ServicesBlockImageOrganismOwnProps = {
  data: {
    image: Pick<ImageProps, 'src' | 'alt'>;
  };
  wrapperProps?: Partial<ComponentPropsWithRef<'div'>>;
  imageProps?: Partial<ImageProps>;
};

type ServicesBlockImageOrganismProps = ServicesBlockImageOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof ServicesBlockImageOrganismOwnProps>;

const ServicesBlockImageOrganism = (
  {
    className,
    data,
    wrapperProps,
    imageProps,
    ...props
  }: ServicesBlockImageOrganismProps,
  ref: ServicesBlockImageOrganismProps['ref']
) => {
  return (
    <div
      className={cn(
        'aspect-[1/1.15] rounded-[--radius] border p-[--p] [--p:theme(spacing.xs)] [--radius:theme(borderRadius.xl)]',
        className
      )}
      ref={ref}
      {...props}
    >
      <div
        {...wrapperProps}
        className={cn(
          'relative size-full overflow-hidden rounded-[calc(var(--radius)-var(--p))] bg-gray-1 dark:bg-dark-7',
          wrapperProps?.className
        )}
      >
        <ScrollAnimate config={{ prop: 'y', propPoints: ['-13%', '0%'] }}>
          <Image
            alt={data.image.alt}
            height={605}
            src={data.image.src}
            width={465}
            {...imageProps}
            className={cn('h-[115%] object-cover', imageProps?.className)}
          />
        </ScrollAnimate>
      </div>
    </div>
  );
};

export default forwardRef(ServicesBlockImageOrganism);
export type { ServicesBlockImageOrganismProps };
