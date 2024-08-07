import { ReactNode, forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';

import SecondaryLayoutBlockSubChildren, {
  SecondaryLayoutBlockSubChildrenProps
} from './SubChildren';
import SecondaryLayoutBlockTitle, {
  SecondaryLayoutBlockTitleProps
} from './Title';
import SecondaryLayoutBlockWrapper, {
  SecondaryLayoutBlockWrapperProps
} from './Wrapper';

type SecondaryLayoutBlockOrganismOwnProps = {
  data: {
    title: ReactNode;
    subtitle?: SecondaryLayoutBlockTitleProps['subtitle'];
  };
  subChildren?: ReactNode;
  wrapperProps?: Partial<SecondaryLayoutBlockWrapperProps>;
  titleProps?: Partial<SecondaryLayoutBlockTitleProps>;
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
    titleProps,
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
        <SecondaryLayoutBlockTitle
          subtitle={data.subtitle}
          {...titleProps}
        >
          {data.title}
        </SecondaryLayoutBlockTitle>

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
