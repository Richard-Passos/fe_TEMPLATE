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
        'overflow-y-clip p-0 [--inset:calc(var(--w)*.025)] [--w:100vw] 2xl:[--w:--max-w]',
        className
      )}
    >
      <HighImpactHeroScrollAnimate>
        <div className='relative flex min-h-[inherit] w-full flex-col items-center justify-center p-[--inset] pt-[--header-h]'>
          <div className='flex w-full grow flex-col items-center justify-center gap-lg p-[--inset] sm:scale-[--scale] sm:opacity-[--opacity]'>
            <HighImpactHeroTitle namespace={namespace} />

            <HighImpactHeroExtra namespace={namespace} />
          </div>

          <Lines className='absolute inset-[--inset] top-[--header-h] -z-10 w-auto translate-x-0 rounded-lg border border-solid border-current [background-size:83.333px_66.666px]' />
        </div>
      </HighImpactHeroScrollAnimate>

      <ScrollIndicator className='absolute bottom-[calc(var(--inset)*1.5)] right-[calc(var(--inset)*1.5)]' />
    </Section>
  );
};

export default forwardRef(HighImpactHeroOrganism);
export type { HighImpactHeroOrganismProps };
