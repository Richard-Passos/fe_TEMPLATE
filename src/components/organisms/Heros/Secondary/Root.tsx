import { ReactNode, forwardRef } from 'react';

import { Title } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type SecondaryHeroOrganismOwnProps = {
  data: {
    title: ReactNode;
  };
};

type SecondaryHeroOrganismProps = SecondaryHeroOrganismOwnProps &
  Omit<SectionProps, keyof SecondaryHeroOrganismOwnProps>;

const SecondaryHeroOrganism = (
  { className, data, ...props }: SecondaryHeroOrganismProps,
  ref: SecondaryHeroOrganismProps['ref']
) => {
  return (
    <Section
      className={cn(
        'min-h-svh justify-center pt-[calc(var(--header-h)+var(--py))] 2xl:min-h-bounds',
        className
      )}
      ref={ref}
      {...props}
    >
      <Title
        className='text-center'
        order={1}
      >
        {data.title}
      </Title>
    </Section>
  );
};

export default forwardRef(SecondaryHeroOrganism);
export type { SecondaryHeroOrganismProps };
