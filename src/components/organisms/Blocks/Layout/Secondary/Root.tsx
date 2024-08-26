import { createPolymorphicComponent } from '@mantine/core';
import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { ScrollAnimate, Title } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type SecondaryLayoutBlockOrganismOwnProps = {
  data: {
    title: ReactNode;
  };
  subChildren?: ReactNode;
  headerProps?: Partial<ComponentPropsWithRef<'header'>>;
};

type SecondaryLayoutBlockOrganismProps = SecondaryLayoutBlockOrganismOwnProps &
  Omit<SectionProps, keyof SecondaryLayoutBlockOrganismOwnProps>;

const SecondaryLayoutBlockOrganism = (
  {
    data,
    subChildren,
    children,
    headerProps,
    ...props
  }: SecondaryLayoutBlockOrganismProps,
  ref: SecondaryLayoutBlockOrganismProps['ref']
) => {
  return (
    <Section
      ref={ref}
      {...props}
    >
      <header
        {...headerProps}
        className={cn(
          'mb-[--section-spacing-sm] flex w-9/10 max-w-screen-xl justify-between gap-md max-sm:flex-col sm:items-end',
          headerProps?.className
        )}
      >
        <div className='flex items-center gap-xs'>
          <span className='relative h-2 w-6 sm:w-12'>
            <ScrollAnimate
              config={lineLeftScrollAnim}
              layout
            >
              <span className='absolute inset-0 border bg-white dark:bg-black' />
            </ScrollAnimate>
          </span>

          <Title
            component='h2'
            order={3}
          >
            {data.title}
          </Title>
        </div>

        {subChildren}
      </header>

      {children}
    </Section>
  );
};

export default createPolymorphicComponent<
  'section',
  SecondaryLayoutBlockOrganismProps
>(forwardRef(SecondaryLayoutBlockOrganism));
export type { SecondaryLayoutBlockOrganismProps };
