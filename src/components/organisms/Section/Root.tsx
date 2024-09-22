import { ComponentPropsWithRef, forwardRef } from 'react';

import Slot, { AsChildProps } from '@/components/atoms/Slot';
import { cn } from '@/utils';

type SectionOrganismOwnProps = {};

type SectionOrganismProps = SectionOrganismOwnProps &
  Omit<
    AsChildProps<ComponentPropsWithRef<'section'>>,
    keyof SectionOrganismOwnProps
  >;

const SectionOrganism = (
  { asChild, className, ...props }: SectionOrganismProps,
  ref: SectionOrganismProps['ref']
) => {
  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center py-[--section-spacing-md] [--section-spacing-lg:calc(theme(spacing.2xl)*2)] [--section-spacing-md:calc(theme(spacing.xl)+theme(spacing.sm))] [--section-spacing-sm:calc(theme(spacing.lg)+theme(spacing.sm))] 2xl:min-h-bounds',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SectionOrganism);
export type { SectionOrganismProps };
