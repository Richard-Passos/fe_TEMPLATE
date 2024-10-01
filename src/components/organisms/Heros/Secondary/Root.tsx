import { forwardRef } from 'react';

import { Text, Title } from '@/components/atoms';
import Action, { ActionProps } from '@/components/molecules/Action';
import Section, { SectionProps } from '@/components/organisms/Section';
import serialize, { Node } from '@/utils/serialize';

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

      <section className='flex gap-2 max-sm:flex-col sm:items-center sm:justify-center'>
        <Action
          variant='default'
          as={data.actions?.secondary?.href ? 'link' : 'button'}
          href={data.actions?.secondary?.href ?? ''}
          onClick={data.actions?.secondary?.onClick}
        >
          {serialize(data.actions?.secondary?.label)}
        </Action>

        <Action
          as={data.actions?.primary?.href ? 'link' : 'button'}
          href={data.actions?.primary?.href ?? ''}
          onClick={data.actions?.primary?.onClick}
        >
          {serialize(data.actions?.primary?.label)}
        </Action>
      </section>
    </Section>
  );
};

export default forwardRef(SecondaryHeroOrganism);
export type { SecondaryHeroOrganismProps };
