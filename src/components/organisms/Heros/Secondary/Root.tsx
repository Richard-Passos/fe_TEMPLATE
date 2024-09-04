import { ReactNode, forwardRef } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import { Lines, ScrollAnimate, Title } from '@/components/atoms';
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
        'min-h-fit pt-[calc(var(--header-height)+var(--section-spacing-md))] 2xl:min-h-fit',
        className
      )}
      forceTheme
      hasTransition={false}
      ref={ref}
      {...props}
    >
      <div className='relative w-9/10 max-w-screen-lg pb-[calc(theme(spacing.2xl)*1.5)] pt-2xl'>
        <Title
          className='relative z-10 max-w-md break-words uppercase md:max-w-lg lg:max-w-xl xl:max-w-[75%]'
          order={1}
        >
          {data.title}
        </Title>

        <div className='absolute inset-y-0 right-0 w-2/3 max-w-md overflow-hidden rounded-lg bg-white dark:bg-dark-8'>
          <ScrollAnimate config={yFullScrollAnim}>
            <Lines className='h-screen !text-border translate-y-0 [background-size:83.333px_66.666px]' />
          </ScrollAnimate>

          <span className='absolute inset-0 rounded-inherit border' />
        </div>
      </div>
    </Section>
  );
};

export default forwardRef(SecondaryHeroOrganism);
export type { SecondaryHeroOrganismProps };
