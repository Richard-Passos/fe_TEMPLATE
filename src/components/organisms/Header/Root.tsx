import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

import HeaderContent from './Content';

type HeaderOrganismOwnProps = {};

type HeaderOrganismProps = HeaderOrganismOwnProps &
  Omit<ComponentPropsWithRef<'header'>, keyof HeaderOrganismOwnProps>;

const HeaderOrganism = (
  { className, ...props }: HeaderOrganismProps,
  ref: HeaderOrganismProps['ref']
) => {
  return (
    <header
      className={cn(
        'absolute z-10 flex w-full max-w-bounds flex-wrap items-center justify-between px-[6%] py-lg sm:px-[4%] sm:py-xl',
        className
      )}
      ref={ref}
      {...props}
    >
      {/* Using like these so Header doesn't use async, because Slot doesn't work with async children */}
      <HeaderContent />
    </header>
  );
};

export default forwardRef(HeaderOrganism);
export type { HeaderOrganismProps };
