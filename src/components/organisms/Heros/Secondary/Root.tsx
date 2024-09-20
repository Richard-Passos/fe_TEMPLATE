import { forwardRef } from 'react';

import { ActionProps } from '@/components/molecules/Action';
import Section, { SectionProps } from '@/components/organisms/Section';
import { Node } from '@/utils/serialize';

type Action = {
  href?: string;
  label?: Node[];
  onClick?: ActionProps['onClick'];
};

type SecondaryHeroOrganismOwnProps = {
  data: {
    title: Node[];
    description?: Node[];
    actions?: {
      primary?: Action;
      secondary?: Action;
    };
  };
  asChild?: never;
};

type SecondaryHeroOrganismProps = SecondaryHeroOrganismOwnProps &
  Omit<SectionProps, keyof SecondaryHeroOrganismOwnProps>;

const SecondaryHeroOrganism = (
  { data, ...props }: SecondaryHeroOrganismProps,
  ref: SecondaryHeroOrganismProps['ref']
) => {
  return (
    <Section
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SecondaryHeroOrganism);
export type { SecondaryHeroOrganismProps };
