import { forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';

import PrimaryLayoutBlockHeader, {
  PrimaryLayoutBlockHeaderProps
} from './Header';

type PrimaryLayoutBlockOrganismOwnProps = {
  data: {
    title: PrimaryLayoutBlockHeaderProps['texts'];
    description?: PrimaryLayoutBlockHeaderProps['description'];
  };
  titleProps?: Partial<PrimaryLayoutBlockHeaderProps>;
};

type PrimaryLayoutBlockOrganismProps = PrimaryLayoutBlockOrganismOwnProps &
  Omit<SectionProps, keyof PrimaryLayoutBlockOrganismOwnProps>;

const PrimaryLayoutBlockOrganism = (
  { children, data, titleProps, ...props }: PrimaryLayoutBlockOrganismProps,
  ref: PrimaryLayoutBlockOrganismProps['ref']
) => {
  return (
    <Section
      ref={ref}
      {...props}
    >
      <PrimaryLayoutBlockHeader
        description={data.description}
        texts={data.title}
        {...titleProps}
      />

      {children}
    </Section>
  );
};

export default forwardRef(PrimaryLayoutBlockOrganism);
export type { PrimaryLayoutBlockOrganismProps };
