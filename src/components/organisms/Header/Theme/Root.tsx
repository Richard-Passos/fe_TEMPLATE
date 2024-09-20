'use client';

import { forwardRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useThemeContext } from '@/hooks/contexts';

type HeaderThemeOrganismOwnProps = {};

type HeaderThemeOrganismProps = HeaderThemeOrganismOwnProps &
  Omit<SlotProps, keyof HeaderThemeOrganismOwnProps>;

const HeaderThemeOrganism = (
  props: HeaderThemeOrganismProps,
  ref: HeaderThemeOrganismProps['ref']
) => {
  const { theme } = useThemeContext();

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
