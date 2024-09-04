'use client';

import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useComputedColorScheme } from '@/hooks';

type HeaderThemeOrganismOwnProps = {};

type HeaderThemeOrganismProps = HeaderThemeOrganismOwnProps &
  Omit<SlotProps, keyof HeaderThemeOrganismOwnProps>;

const HeaderThemeOrganism = (
  { className, ...props }: HeaderThemeOrganismProps,
  ref: HeaderThemeOrganismProps['ref']
) => {
  const theme = useComputedColorScheme();

  return (
    <Slot
      data-theme={theme}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(HeaderThemeOrganism);
export type { HeaderThemeOrganismProps };
