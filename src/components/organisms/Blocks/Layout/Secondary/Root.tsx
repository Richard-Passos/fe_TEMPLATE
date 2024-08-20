import { createPolymorphicComponent } from '@mantine/core';
import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import { Title } from '@/components/atoms';
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
        <Title order={2}>{data.title}</Title>

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
