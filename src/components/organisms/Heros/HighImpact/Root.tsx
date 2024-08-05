import { forwardRef } from 'react';

import { Lines } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import ScrollIndicator from '../../ScrollIndicator';
import HighImpactHeroExtra from './Extra';
import HighImpactHeroScrollAnimate from './ScrollAnimate';
import HighImpactHeroTitle from './Title';

type HighImpactHeroOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.hero`>;
  ref?: PolymorphicRef<'div'>;
};

type HighImpactHeroOrganismProps = HighImpactHeroOrganismOwnProps &
  Omit<SectionProps, keyof HighImpactHeroOrganismOwnProps>;

const HighImpactHeroOrganism = (
  { namespace, className, ...props }: HighImpactHeroOrganismProps,
  ref: HighImpactHeroOrganismProps['ref']
) => {
  return (
    <Section
      bgProps={{
        className: '*:hidden'
      }}
      hasTransition={false}
      ref={ref}
      {...props}
      className={cn(
        'min-h-svh p-[--inset] pt-[--header-h] [--inset:calc(var(--w)*.025)] [--w:100vw] 2xl:[--w:--max-w]',
        className
      )}
    >
      <div className='relative flex w-full grow overflow-hidden rounded-lg'>
        <HighImpactHeroScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full grow flex-col items-center justify-center gap-lg p-[calc(var(--inset)*1.5)] sm:scale-[--scale] sm:opacity-[--opacity]'>
              <HighImpactHeroTitle namespace={namespace} />

              <HighImpactHeroExtra namespace={namespace} />
            </div>

            <Lines className='absolute -inset-y-full inset-x-0 -z-10 w-auto translate-x-0 [background-size:83.333px_66.666px]' />
          </div>
        </HighImpactHeroScrollAnimate>

        <span className='pointer-events-none absolute inset-0 rounded-inherit border border-solid border-current opacity-20 dark:opacity-5' />
      </div>

      <ScrollIndicator className='absolute bottom-[calc(var(--inset)*1.5)] right-[calc(var(--inset)*1.5)] max-sm:hidden' />
    </Section>
  );
};

export default forwardRef(HighImpactHeroOrganism);
export type { HighImpactHeroOrganismProps };
