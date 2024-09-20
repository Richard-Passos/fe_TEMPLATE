import { forwardRef } from 'react';

import { imageYScrollAnim } from '@/animations/scroll';
import { Image, ScrollAnimate } from '@/components/atoms';
import { ImageProps } from '@/components/atoms/Image';
import { Section } from '@/components/organisms';
import { SectionProps } from '@/components/organisms/Section';
import serialize, { Node } from '@/utils/serialize';

type SingleProjectImagesTemplateOwnProps = {
  data: {
    description?: Node[];
    items: ({ id: string } & Pick<ImageProps, 'src' | 'alt'>)[];
  };
};

type SingleProjectImagesTemplateProps = SingleProjectImagesTemplateOwnProps &
  Omit<SectionProps, keyof SingleProjectImagesTemplateOwnProps>;

const SingleProjectImagesTemplate = (
  { data, ...props }: SingleProjectImagesTemplateProps,
  ref: SingleProjectImagesTemplateProps['ref']
) => {
  return (
    <Section
      ref={ref}
      {...props}
    >
      <div className='flex w-9/10 max-w-screen-xl gap-md max-md:flex-col md:justify-end'>
        <section className='w-full max-w-48 md:max-w-36'>
          {serialize(data.description ?? [], {
            paragraph: {
              className: 'text-dimmed *:text-text'
            }
          })}
        </section>

        <div className='flex max-w-screen-md grow flex-col items-center gap-xs'>
          {data.items.map((data) => (
            <div
              className={
                'relative aspect-square w-full overflow-hidden rounded-xl border bg-gray-1 dark:bg-dark-6'
              }
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
