import { forwardRef } from 'react';

import { Text, Title } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
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
  { data, ...props }: PrimaryHeroOrganismProps,
  ref: PrimaryHeroOrganismProps['ref']
) => {
  return (
    <Section
      ref={ref}
      {...props}
    >
      <Title
        order={1}
        className='max-w-lg text-center'
      >
        {serialize(data.title)}
      </Title>

      <Text className='max-w-md text-center'>
        {serialize(data.description)}
      </Text>
    </Section>
  );
};

export default forwardRef(PrimaryHeroOrganism);
export type { PrimaryHeroOrganismProps };
