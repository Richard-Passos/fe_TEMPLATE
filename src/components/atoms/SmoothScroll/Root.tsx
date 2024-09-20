'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { ComponentPropsWithRef, forwardRef } from 'react';

type SmoothScrollAtomOwnProps = {};

type SmoothScrollAtomProps = SmoothScrollAtomOwnProps &
  Omit<
    ComponentPropsWithRef<typeof ReactLenis>,
    keyof SmoothScrollAtomOwnProps
  >;

const SmoothScrollAtom = (
  props: SmoothScrollAtomProps,
  ref: SmoothScrollAtomProps['ref']
) => {
  return (
    <ReactLenis
      ref={ref}
      root
      {...props}
    />
  );
};

export default forwardRef(SmoothScrollAtom);
export type { SmoothScrollAtomProps };
