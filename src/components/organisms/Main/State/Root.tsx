'use client';

import { Slot, SlotProps } from '@radix-ui/react-slot';
import { CSSProperties, ForwardedRef, forwardRef } from 'react';

import { useMainContext } from '@/hooks/contexts';

type MainStateOrganismOwnProps = {
  ref?: ForwardedRef<HTMLElement>;
};

type MainStateOrganismProps = MainStateOrganismOwnProps &
  Omit<SlotProps, keyof MainStateOrganismOwnProps>;

const MainStateOrganism = (
  { style, ...props }: MainStateOrganismProps,
  ref: MainStateOrganismProps['ref']
) => {
  const { height } = useMainContext();

  return (
    <Slot
      ref={ref}
      style={
        {
          '--main-h': `${height}px`,
          ...style
        } as CSSProperties
      }
      {...props}
    />
  );
};

export default forwardRef(MainStateOrganism);
export type { MainStateOrganismProps };
