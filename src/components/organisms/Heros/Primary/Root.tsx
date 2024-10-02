import { forwardRef } from 'react';

import { Title } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn, renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type PrimaryHeroOrganismOwnProps = {
  data: {
    title: Node[];
    description?: Node[];
  };
  asChild?: never;
};

type PrimaryHeroOrganismProps = PrimaryHeroOrganismOwnProps &
  Omit<SectionProps, keyof PrimaryHeroOrganismOwnProps>;

const PrimaryHeroOrganism = (
  { data, className, ...props }: PrimaryHeroOrganismProps,
  ref: PrimaryHeroOrganismProps['ref']
) => {
  return (
    <Section
      className={cn(
        'pt-[calc(var(--header-height)+var(--section-spacing-md))]',
        className
      )}
      ref={ref}
      {...props}
    >
      <Title
        className='max-w-lg text-center'
        order={1}
      >
        {serialize(data.title)}
      </Title>

      {renderComp(
        <section className='max-w-md text-center'>
          {serialize(data.description)}
        </section>,
        [data.description]
      )}
    </Section>
  );
};

export default forwardRef(PrimaryHeroOrganism);
export type { PrimaryHeroOrganismProps };
