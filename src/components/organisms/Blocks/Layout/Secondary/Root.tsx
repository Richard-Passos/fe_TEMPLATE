import { createPolymorphicComponent } from '@mantine/core';
import { ReactNode, forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import SecondaryLayoutBlockHeader, {
  SecondaryLayoutBlockHeaderProps
} from './Header';
import SecondaryLayoutBlockWrapper, {
  SecondaryLayoutBlockWrapperProps
} from './Wrapper';

type SecondaryLayoutBlockOrganismOwnProps = {
  data: {
    title: SecondaryLayoutBlockHeaderProps['texts'];
    subtitle?: SecondaryLayoutBlockHeaderProps['subtitle'];
  };
  subChildren?: ReactNode;
  wrapperProps?: Partial<SecondaryLayoutBlockWrapperProps>;
  headerProps?: Partial<SecondaryLayoutBlockHeaderProps>;
};

type SecondaryLayoutBlockOrganismProps = SecondaryLayoutBlockOrganismOwnProps &
  Omit<SectionProps, keyof SecondaryLayoutBlockOrganismOwnProps>;

const SecondaryLayoutBlockOrganism = (
  {
    data,
    subChildren,
    children,
    wrapperProps,
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
      <SecondaryLayoutBlockWrapper
        {...wrapperProps}
        className={cn('mb-[--section-spacing-md]', wrapperProps?.className)}
      >
        <SecondaryLayoutBlockHeader
          subtitle={data.subtitle}
          texts={data.title}
          {...headerProps}
          className={cn('shrink-0', headerProps?.className)}
        />

        {subChildren}
      </SecondaryLayoutBlockWrapper>

      {children}
    </Section>
  );
};

export default createPolymorphicComponent<
  'section',
  SecondaryLayoutBlockOrganismProps
>(forwardRef(SecondaryLayoutBlockOrganism));
export type { SecondaryLayoutBlockOrganismProps };
