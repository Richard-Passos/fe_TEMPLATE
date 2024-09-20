import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type CleanLayoutBlockOrganismOwnProps = {};

type CleanLayoutBlockOrganismProps = CleanLayoutBlockOrganismOwnProps &
  Omit<SectionProps, keyof CleanLayoutBlockOrganismOwnProps>;

const CleanLayoutBlockOrganism = (
  { className, ...props }: CleanLayoutBlockOrganismProps,
  ref: CleanLayoutBlockOrganismProps['ref']
) => {
  return (
    <Section
      className={cn(`min-h-fit justify-center 2xl:min-h-fit`, className)}
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<
  'section',
  CleanLayoutBlockOrganismProps
>(forwardRef(CleanLayoutBlockOrganism));
export type { CleanLayoutBlockOrganismProps };
