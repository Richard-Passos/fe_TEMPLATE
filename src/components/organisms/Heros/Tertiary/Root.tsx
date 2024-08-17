import { ReactNode, forwardRef } from 'react';

import { Title } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type TertiaryHeroOrganismOwnProps = {
  data: {
    title: ReactNode;
  };
};

type TertiaryHeroOrganismProps = TertiaryHeroOrganismOwnProps &
  Omit<SectionProps, keyof TertiaryHeroOrganismOwnProps>;

const TertiaryHeroOrganism = (
  { className, data, ...props }: TertiaryHeroOrganismProps,
  ref: TertiaryHeroOrganismProps['ref']
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

export default forwardRef(TertiaryHeroOrganism);
export type { TertiaryHeroOrganismProps };
