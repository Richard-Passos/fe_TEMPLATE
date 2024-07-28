'use client';

import { Slot, SlotProps } from '@radix-ui/react-slot';
import { CSSProperties, ForwardedRef, forwardRef } from 'react';

import { useHeaderContext } from '@/hooks/contexts';

type HeaderStateOrganismOwnProps = {
  ref?: ForwardedRef<HTMLElement>;
};

type HeaderStateOrganismProps = HeaderStateOrganismOwnProps &
  Omit<SlotProps, keyof HeaderStateOrganismOwnProps>;

const HeaderStateOrganism = (
  { style, ...props }: HeaderStateOrganismProps,
  ref: HeaderStateOrganismProps['ref']
) => {
  const { height } = useHeaderContext();

  return (
    <Slot
      ref={ref}
      style={
        {
          '--header-h': `${height}px`,
          ...style
        } as CSSProperties
      }
      {...props}
    />
  );
};

export default forwardRef(HeaderStateOrganism);
export type { HeaderStateOrganismProps };
