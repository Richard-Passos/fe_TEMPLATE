'use client';

import { Slot } from '@radix-ui/react-slot';
import { deviceType } from 'detect-it';
import { motion } from 'framer-motion';
import { ComponentPropsWithRef, MouseEvent, forwardRef, useRef } from 'react';

import { useSmooth } from '@/hooks';
import { setRefs } from '@/utils';

const magneticAtomSmoothConfig = { damping: 7, stiffness: 100, mass: 0.5 };

type MagneticAtomOwnProps = {
  smoothConfig: {};
  limit: number;
};

type MagneticAtomProps = MagneticAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof MotionChild>, keyof MagneticAtomOwnProps>;

const MagneticAtom = (
  { smoothConfig, limit = 0.5, style, ...props }: MagneticAtomProps,
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
    updatePosition = ({ clientX, clientY }: MouseEvent<HTMLElement>) => {
      if (!innerRef.current) return;

      const { left, top, width, height } =
        innerRef.current.getBoundingClientRect();

      const center = { x: left + width / 2, y: top + height / 2 };

      position.x.set((clientX - center.x) * limit);
      position.y.set((clientY - center.y) * limit);
    };

  const onMouseLeave = (ev: MouseEvent<HTMLElement>) => {
      resetPosition();

      props.onMouseLeave?.(ev);
    },
    onMouseMove = (ev: MouseEvent<HTMLElement>) => {
      deviceType !== 'touchOnly' && updatePosition(ev);

      props.onMouseMove?.(ev);
    };

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{
        ...style,
        x: position.x,
        y: position.y
      }}
      {...props}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    />
  );
};

const MotionChild = motion(Slot);

export default forwardRef(MagneticAtom);
export { magneticAtomSmoothConfig };
export type { MagneticAtomProps };
