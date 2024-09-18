import { forwardRef } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate, Title } from '@/components/atoms';
import Action, { ActionProps } from '@/components/molecules/Action';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn, renderComp } from '@/utils';
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
        `
          min-h-fit pt-[calc(var(--header-height)+var(--section-spacing-md))]

          2xl:min-h-fit
        `,
        className
      )}
      forceTheme
      hasTransition={false}
      ref={ref}
      {...props}
    >
      <div className={`
        relative w-9/10 max-w-screen-lg pb-[calc(theme(spacing.2xl)*1.5)] pt-2xl
      `}>
        <Title
          className={`
            relative z-10 max-w-md break-words uppercase

            lg:max-w-xl

            md:max-w-lg

            xl:max-w-[75%]
          `}
          order={1}
        >
          {serialize(data.title)}
        </Title>

        {renderComp(
          <section className='max-w-2xl'>
            {serialize(data.description)}
          </section>,
          [data.description?.length]
        )}

        {renderComp(
          <section className='mt-xl flex items-center gap-xs'>
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
          [data.actions?.primary ?? data.actions?.secondary]
        )}

        <div className={`
          absolute inset-y-0 right-0 flex w-2/3 max-w-md items-center
          justify-center overflow-hidden rounded-lg bg-white

          dark:bg-dark-8
        `}>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className={`
              top-auto h-screen !text-border opacity-60 translate-y-0

              [background-size:83.333px_66.666px]
            `} />
          </ScrollAnimate>

          <span className='absolute inset-0 rounded-inherit border opacity-60' />
        </div>
      </div>
    </Section>
  );
};

export default forwardRef(SecondaryHeroOrganism);
export type { SecondaryHeroOrganismProps };
