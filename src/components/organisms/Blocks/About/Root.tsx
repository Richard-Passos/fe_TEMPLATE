import { ComponentPropsWithRef, forwardRef } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate } from '@/components/atoms';
import { cn } from '@/utils';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import AboutBlockText, { AboutBlockTextProps } from './Text';

type AboutBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    texts: ({ id: string } & AboutBlockTextProps['data'])[];
  };
  wrapperProps?: Partial<ComponentPropsWithRef<'section'>>;
};

type AboutBlockOrganismProps = AboutBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof AboutBlockOrganismOwnProps>;

const AboutBlockOrganism = (
  { data, wrapperProps, ...props }: AboutBlockOrganismProps,
  ref: AboutBlockOrganismProps['ref']
) => {
  return (
    <PrimaryLayoutBlock
      data={{
        title: data.title,
        description: data.description
      }}
      ref={ref}
      {...props}
    >
      <section
        {...wrapperProps}
        className={cn(
          'flex w-9/10 max-w-screen-lg gap-md md:gap-2xl',
          wrapperProps?.className
        )}
      >
        <div className='relative grow basis-48 overflow-hidden bg-white dark:bg-dark-8 max-sm:hidden'>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className='h-screen !text-border translate-y-0 [background-size:83.333px_66.666px]' />
          </ScrollAnimate>

          <span className='absolute inset-0 rounded-inherit border' />
        </div>

        <section className='flex max-w-xl grow flex-col gap-xl'>
          {data.texts.map(({ id, ...data }) => (
            <AboutBlockText
              data={data}
              key={id}
            />
          ))}
        </section>
      </section>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(AboutBlockOrganism);
export type { AboutBlockOrganismProps };
