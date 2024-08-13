'use client';

import { Slot } from '@radix-ui/react-slot';
import { deviceType } from 'detect-it';
import { motion } from 'framer-motion';
import { ComponentPropsWithRef, RefObject, forwardRef, useRef } from 'react';

import { useEventListener, useSmooth } from '@/hooks';
import { UseSmoothParams } from '@/hooks/useSmooth';
import { setRefs } from '@/utils';

const magneticAtomSmoothConfig = { damping: 7, stiffness: 100, mass: 0.5 };

type MagneticAtomOwnProps = {
  container?: RefObject<HTMLElement>;
  smoothConfig?: UseSmoothParams['1'];
  limit?: { x: number; y: number };
};

type MagneticAtomProps = MagneticAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof MotionChild>, keyof MagneticAtomOwnProps>;

const MagneticAtom = (
  {
    container,
    smoothConfig,
    limit = { x: 0.35, y: 0.35 },
    style,
    ...props
  }: MagneticAtomProps,
  ref: MagneticAtomProps['ref']
) => {
  const innerRef = useRef<HTMLElement>(null),
    position = {
      x: useSmooth(0, { ...magneticAtomSmoothConfig, ...smoothConfig }),
      y: useSmooth(0, { ...magneticAtomSmoothConfig, ...smoothConfig })
    };

  const resetPosition = () => {
      position.x.set(0);
      position.y.set(0);
    },
    updatePosition = (
      { clientX, clientY }: MouseEvent,
      element: RefObject<HTMLElement>
    ) => {
      if (!element.current) return;

      const { left, top, width, height } =
        element.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };

      const pos =
        deviceType !== 'touchOnly'
          ? {
              x: (clientX - center.x) * limit.x,
              y: (clientY - center.y) * limit.y
            }
          : { x: 0, y: 0 };

      position.x.set(pos.x);
      position.y.set(pos.y);
    };

  const element = container ?? innerRef;

  useEventListener('mousemove', (ev) => updatePosition(ev, element), element);
  useEventListener('mouseleave', resetPosition, element);

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{
        ...position,
        ...style
      }}
      {...props}
    />
  );
};

const MotionChild = motion(Slot);

export default forwardRef(MagneticAtom);
export { magneticAtomSmoothConfig };
export type { MagneticAtomProps };
