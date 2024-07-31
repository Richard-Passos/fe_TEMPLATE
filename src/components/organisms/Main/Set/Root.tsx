'use client';

import { useEventListener } from '@mantine/hooks';
import { Slot, SlotProps } from '@radix-ui/react-slot';
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef
} from 'react';

import { useMainContext } from '@/hooks/contexts';
import { setRefs } from '@/utils';

type MainSetOrganismOwnProps = {
  ref?: ForwardedRef<HTMLElement>;
};

type MainSetOrganismProps = MainSetOrganismOwnProps &
  Omit<SlotProps, keyof MainSetOrganismOwnProps>;

const MainSetOrganism = (
  props: MainSetOrganismProps,
  ref: MainSetOrganismProps['ref']
) => {
  const innerRef = useRef<HTMLElement>(null),
    { setHeight } = useMainContext();

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
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export default forwardRef(MainSetOrganism);
export type { MainSetOrganismProps };
