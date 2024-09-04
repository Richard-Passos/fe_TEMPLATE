'use client';

import { forwardRef, useCallback, useEffect, useRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useEventListener } from '@/hooks';
import { useHeightContext } from '@/hooks/contexts';
import { Heights } from '@/store/slices/height';
import { setRefs } from '@/utils';

type HeightSetAtomOwnProps = {
  name: keyof Heights;
};

type HeightSetAtomProps = HeightSetAtomOwnProps &
  Omit<SlotProps, keyof HeightSetAtomOwnProps>;

const HeightSetAtom = (
  { name, ...props }: HeightSetAtomProps,
  ref: HeightSetAtomProps['ref']
) => {
  const innerRef = useRef<HTMLElement>(null),
    { setHeight } = useHeightContext();

  const handleSetHeight = useCallback(() => {
      if (!innerRef.current) return;

      const height = innerRef.current.offsetHeight;

      setHeight({ [name]: height });
    }, [name, setHeight]),
    resetHeight = useCallback(() => {
      setHeight({ [name]: 0 });
    }, [name, setHeight]);

  useEventListener('resize', handleSetHeight);

  useEffect(() => {
    handleSetHeight();

    return () => {
      resetHeight();
    };
  }, [handleSetHeight, resetHeight]);

  return (
    <Slot
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export default forwardRef(HeightSetAtom);
export type { HeightSetAtomProps };
