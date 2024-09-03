'use client';

import { CSSProperties, forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useHeaderContext } from '@/hooks/contexts';

type HeaderStateOrganismOwnProps = {};

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
