import { ReactNode, forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import SecondaryLayoutBlockHeader, {
  SecondaryLayoutBlockHeaderProps
} from './Header';
import SecondaryLayoutBlockSubChildren, {
  SecondaryLayoutBlockSubChildrenProps
} from './SubChildren';
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
  subChildrenProps?: Partial<SecondaryLayoutBlockSubChildrenProps>;
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
    subChildrenProps,
    ...props
  }: SecondaryLayoutBlockOrganismProps,
  ref: SecondaryLayoutBlockOrganismProps['ref']
) => {
  return (
    <Section
      ref={ref}
      {...props}
    >
      <SecondaryLayoutBlockWrapper {...wrapperProps}>
        <SecondaryLayoutBlockHeader
          subtitle={data.subtitle}
          texts={data.title}
          {...headerProps}
          className={cn('shrink-0', headerProps?.className)}
        />

        <SecondaryLayoutBlockSubChildren {...subChildrenProps}>
          {subChildren}
        </SecondaryLayoutBlockSubChildren>
      </SecondaryLayoutBlockWrapper>

      {children}
    </Section>
  );
};

export default forwardRef(SecondaryLayoutBlockOrganism);
export type { SecondaryLayoutBlockOrganismProps };
