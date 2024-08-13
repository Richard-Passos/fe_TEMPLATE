import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Lines } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { ExtractPrefix, Namespace, PolymorphicRef } from '@/types';
import { cn } from '@/utils';

import ScrollIndicator from '../../ScrollIndicator';
import PrimaryHeroExtra from './Extra';
import PrimaryHeroScrollAnimate from './ScrollAnimate';
import PrimaryHeroTitle from './Title';

type PrimaryHeroOrganismOwnProps = Partial<Pick<SectionProps, 'theme'>> & {
  namespace: ExtractPrefix<Namespace, `${string}.hero`>;
  ref?: PolymorphicRef<'div'>;
};

type PrimaryHeroOrganismProps = PrimaryHeroOrganismOwnProps &
  Omit<SectionProps, keyof PrimaryHeroOrganismOwnProps>;

const PrimaryHeroOrganism = (
  { namespace, className, ...props }: PrimaryHeroOrganismProps,
  ref: PrimaryHeroOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  return (
    <Section
      bgProps={{
        className: '*:hidden'
      }}
      hasTransition={false}
      ref={ref}
      theme={t('theme') as SectionProps['theme']}
      {...props}
      className={cn(
        'min-h-svh p-[--inset] pt-[--header-h] [--inset:calc(var(--w)*.025)] [--w:100vw] 2xl:[--w:--max-w]',
        className
      )}
    >
      <div className='relative flex w-full grow overflow-hidden rounded-lg border'>
        <PrimaryHeroScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full grow flex-col items-center justify-center gap-lg p-[calc(var(--inset)*1.5)] sm:scale-[--scale] sm:opacity-[--opacity]'>
              <PrimaryHeroTitle namespace={namespace} />

              <PrimaryHeroExtra namespace={namespace} />
            </div>

            <Lines className='-z-10 !opacity-60 [background-size:83.333px_66.666px]' />
          </div>
        </PrimaryHeroScrollAnimate>

        <span className='pointer-events-none absolute inset-0 rounded-inherit border border-solid border-border opacity-60' />
      </div>

      <ScrollIndicator className='absolute bottom-[calc(var(--inset)*1.5)] right-[calc(var(--inset)*1.5)] max-sm:hidden' />
    </Section>
  );
};

export default forwardRef(PrimaryHeroOrganism);
export type { PrimaryHeroOrganismProps };
