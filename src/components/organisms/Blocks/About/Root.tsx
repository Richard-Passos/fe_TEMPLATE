import { ComponentPropsWithRef, forwardRef } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate } from '@/components/atoms';
import { cn } from '@/utils';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import AboutBlockText, { AboutBlockTextProps } from './Text';

type AboutBlockOrganismOwnProps = {
  data: PrimaryLayoutBlockProps['data'] & {
    intro: AboutBlockTextProps['data'];
    personality: AboutBlockTextProps['data'];
    mission: AboutBlockTextProps['data'];
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
          'grid w-9/10 max-w-screen-lg gap-md sm:grid-cols-12 md:gap-2xl',
          wrapperProps?.className
        )}
      >
        <div className='relative size-full overflow-hidden bg-white dark:bg-black sm:col-span-5'>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className='!opacity-60 [background-size:83.333px_66.666px]' />
          </ScrollAnimate>

          <span className='pointer-events-none absolute inset-0 rounded-inherit border opacity-60' />
        </div>

        <section className='my-2xl flex flex-col gap-xl sm:col-span-7'>
          <AboutBlockText data={data.intro} />

          <AboutBlockText data={data.personality} />

          <AboutBlockText data={data.mission} />
        </section>
      </section>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(AboutBlockOrganism);
export type { AboutBlockOrganismProps };
