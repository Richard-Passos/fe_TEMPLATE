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
          'flex w-9/10 max-w-screen-lg gap-md md:gap-2xl',
          wrapperProps?.className
        )}
      >
        <div className='relative grow basis-48 overflow-hidden bg-white dark:bg-black max-sm:hidden'>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className='!opacity-60 [background-size:83.333px_66.666px]' />
          </ScrollAnimate>

          <span className='absolute inset-0 rounded-inherit border opacity-60' />
        </div>

        <section className='flex max-w-xl grow flex-col gap-xl sm:my-2xl'>
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
