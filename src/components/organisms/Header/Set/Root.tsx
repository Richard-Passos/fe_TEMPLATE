'use client';

import { forwardRef, useCallback, useEffect, useRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useComputedColorScheme, useEventListener } from '@/hooks';
import { useHeaderContext } from '@/hooks/contexts';
import { setRefs } from '@/utils';

type HeaderSetOrganismOwnProps = {};

type HeaderSetOrganismProps = HeaderSetOrganismOwnProps &
  Omit<SlotProps, keyof HeaderSetOrganismOwnProps>;

const HeaderSetOrganism = (
  props: HeaderSetOrganismProps,
  ref: HeaderSetOrganismProps['ref']
) => {
  const innerRef = useRef<HTMLElement>(null),
    { setHeight } = useHeaderContext(),
    theme = useComputedColorScheme();

  const handleSetHeight = useCallback(() => {
      if (!innerRef.current) return;

      const { height } = innerRef.current.getBoundingClientRect();

      setHeight(height);
    }, [setHeight]),
    resetHeight = useCallback(() => {
      setHeight(0);
    }, [setHeight]);

  useEventListener('resize', handleSetHeight);

  useEffect(() => {
    handleSetHeight();

    return resetHeight;
  }, [handleSetHeight, resetHeight]);

  return (
    <Slot
      data-theme={theme}
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export default forwardRef(HeaderSetOrganism);
export type { HeaderSetOrganismProps };
