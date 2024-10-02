import { forwardRef } from 'react';

import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import FooterContent from './Content';

type FooterOrganismOwnProps = {};

type FooterOrganismProps = FooterOrganismOwnProps &
  Omit<SectionProps, keyof FooterOrganismOwnProps>;

const FooterOrganism = (
  { className, ...props }: FooterOrganismProps,
  ref: FooterOrganismProps['ref']
) => {
  return (
    <Section
      asChild
      className={cn(
        'max-w-bound !min-h-fit bg-gray-0 p-0 dark:bg-dark-5',
        className
      )}
      ref={ref}
      {...props}
    >
      <footer>
        {/* Using like these so Footer doesn't use async, because Slot doesn't work with async children */}
        <FooterContent />
      </footer>
    </Section>
  );
};

export default forwardRef(FooterOrganism);
export type { FooterOrganismProps };
