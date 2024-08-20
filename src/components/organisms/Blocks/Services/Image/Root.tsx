import { ComponentPropsWithRef, forwardRef } from 'react';

import scrollAnimations from '@/animations/scroll';
import { Image, ScrollAnimate } from '@/components/atoms';
import Icon, { IconProps } from '@/components/atoms/Icon';
import { ImageProps } from '@/components/atoms/Image';
import { cn } from '@/utils';

type ServicesBlockImageOrganismIcon = {
  src: IconProps['src'];
  animation: keyof typeof scrollAnimations;
};

type ServicesBlockImageOrganismOwnProps = {
  data: {
    image: Pick<ImageProps, 'src' | 'alt'>;
    icons: {
      topLeft: ServicesBlockImageOrganismIcon;
      topRight: ServicesBlockImageOrganismIcon;
      bottomLeft: ServicesBlockImageOrganismIcon;
      bottomRight: ServicesBlockImageOrganismIcon;
    };
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

        <ScrollAnimate config={scrollAnimations[data.icons.topLeft.animation]}>
          <div className='absolute left-sm top-xs size-6 text-gray-0 dark:text-dark-7'>
            <Icon src={data.icons.topLeft.src} />
          </div>
        </ScrollAnimate>

        <ScrollAnimate config={scrollAnimations[data.icons.topRight.animation]}>
          <div className='absolute right-xs top-xs size-6 text-gray-0 dark:text-dark-7'>
            <Icon src={data.icons.topRight.src} />
          </div>
        </ScrollAnimate>

        <ScrollAnimate
          config={scrollAnimations[data.icons.bottomLeft.animation]}
        >
          <div className='absolute bottom-xs left-xs size-6 text-gray-0 dark:text-dark-7'>
            <Icon src={data.icons.bottomLeft.src} />
          </div>
        </ScrollAnimate>

        <ScrollAnimate
          config={scrollAnimations[data.icons.bottomRight.animation]}
        >
          <div className='absolute bottom-xs right-xs size-6 text-gray-0 dark:text-dark-7'>
            <Icon src={data.icons.bottomRight.src} />
          </div>
        </ScrollAnimate>
      </div>
    </div>
  );
};

export default forwardRef(ServicesBlockImageOrganism);
export type { ServicesBlockImageOrganismProps, ServicesBlockImageOrganismIcon };
