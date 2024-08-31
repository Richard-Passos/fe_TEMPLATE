import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import { PrimaryLayoutBlockProps } from '.';
import PrimaryLayoutBlockHeader, {
  PrimaryLayoutBlockHeaderProps
} from './Header';

type PrimaryLayoutBlockOrganismOwnProps = {
  data: {
    title: PrimaryLayoutBlockHeaderProps['title'];
    description?: PrimaryLayoutBlockHeaderProps['description'];
  };
  headerProps?: Partial<PrimaryLayoutBlockHeaderProps>;
};

type PrimaryLayoutBlockOrganismProps = PrimaryLayoutBlockOrganismOwnProps &
  Omit<SectionProps, keyof PrimaryLayoutBlockOrganismOwnProps>;

const PrimaryLayoutBlockOrganism = (
  { children, data, headerProps, ...props }: PrimaryLayoutBlockOrganismProps,
  ref: PrimaryLayoutBlockOrganismProps['ref']
) => {
  return (
    <Section
      ref={ref}
      {...props}
    >
      <PrimaryLayoutBlockHeader
        description={data.description}
        title={data.title}
        {...headerProps}
        className={cn('mb-[--section-spacing-md]', headerProps?.className)}
      />

      {children}
    </Section>
  );
};

export default createPolymorphicComponent<'section', PrimaryLayoutBlockProps>(
  forwardRef(PrimaryLayoutBlockOrganism)
);
export type { PrimaryLayoutBlockOrganismProps };
