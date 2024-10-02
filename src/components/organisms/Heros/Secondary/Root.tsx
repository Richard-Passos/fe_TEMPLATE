import { forwardRef } from 'react';

import { Title } from '@/components/atoms';
import Action, { ActionProps } from '@/components/molecules/Action';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn, renderComp } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type Action = {
  label: Node[];
  href?: string;
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
  { data, className, ...props }: SecondaryHeroOrganismProps,
  ref: SecondaryHeroOrganismProps['ref']
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

      {renderComp(
        <section className='mt-xl flex gap-2 max-sm:flex-col sm:items-center sm:justify-center'>
          {renderComp(
            <Action
              as={data.actions?.secondary?.href ? 'link' : 'button'}
              href={data.actions?.secondary?.href ?? ''}
              onClick={data.actions?.secondary?.onClick}
              variant='default'
            >
              {serialize(data.actions?.secondary?.label)}
            </Action>,
            [data.actions?.secondary]
          )}

          {renderComp(
            <Action
              as={data.actions?.primary?.href ? 'link' : 'button'}
              href={data.actions?.primary?.href ?? ''}
              onClick={data.actions?.primary?.onClick}
            >
              {serialize(data.actions?.primary?.label)}
            </Action>,
            [data.actions?.primary]
          )}
        </section>,
        [data.actions]
      )}
    </Section>
  );
};

export default forwardRef(SecondaryHeroOrganism);
export type { SecondaryHeroOrganismProps };
