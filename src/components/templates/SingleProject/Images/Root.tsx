import { ComponentPropsWithRef, forwardRef } from 'react';

import { imageYScrollAnim } from '@/animations/scroll';
import { Image, ScrollAnimate, Text } from '@/components/atoms';
import { ImageProps } from '@/components/atoms/Image';
import { TextProps } from '@/components/atoms/Text';
import { Section } from '@/components/organisms';
import { SectionProps } from '@/components/organisms/Section';
import { cn, renderComp } from '@/utils';

type SingleProjectImagesTemplateOwnProps = {
  data: {
    description?: TextProps['children'];
    items: ({ id: string } & Pick<ImageProps, 'src' | 'alt'>)[];
  };
  wrapperProps?: Partial<ComponentPropsWithRef<'div'>>;
  descriptionProps?: Partial<TextProps>;
  imagesProps?: Partial<ComponentPropsWithRef<'div'>>;
};

type SingleProjectImagesTemplateProps = SingleProjectImagesTemplateOwnProps &
  Omit<SectionProps, keyof SingleProjectImagesTemplateOwnProps>;

const SingleProjectImagesTemplate = (
  {
    data,
    wrapperProps,
    descriptionProps,
    imagesProps,
    ...props
  }: SingleProjectImagesTemplateProps,
  ref: SingleProjectImagesTemplateProps['ref']
) => {
  return (
    <Section
      ref={ref}
      {...props}
    >
      <div
        {...wrapperProps}
        className={cn(
          'flex w-9/10 max-w-screen-xl gap-md max-md:flex-col md:justify-end',
          wrapperProps?.className
        )}
      >
        {renderComp(
          <Text
            className='w-full max-w-48 text-dimmed md:max-w-36'
            {...descriptionProps}
          >
            {data.description}
          </Text>,
          [data.description]
        )}

        <div
          {...imagesProps}
          className={cn(
            'flex max-w-screen-md grow flex-col items-center gap-xs',
            imagesProps?.className
          )}
        >
          {data.items.map((data) => (
            <div
              className='relative aspect-[1/1.1] w-full overflow-hidden rounded-xl border bg-gray-1 dark:bg-dark-6'
              key={data.id}
            >
              <ScrollAnimate config={imageYScrollAnim}>
                <div className='absolute h-[115%] w-full'>
                  <Image
                    alt={data.alt}
                    className='object-cover'
                    fill
                    sizes='100vw, (min-width: 1536px) 50vw'
                    src={data.src}
                  />
                </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default forwardRef(SingleProjectImagesTemplate);
export type { SingleProjectImagesTemplateProps };
