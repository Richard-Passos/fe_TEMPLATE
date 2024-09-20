'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';
import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from 'react';

import { cn } from '@/utils';

type TextScrollAnimateWordMoleculeOwnProps = PropsWithChildren<{
  progress: MotionValue<number>;
  range: [any, any];
}>;

type TextScrollAnimateWordMoleculeProps =
  TextScrollAnimateWordMoleculeOwnProps &
    Omit<
      ComponentPropsWithRef<typeof motion.span>,
      keyof TextScrollAnimateWordMoleculeOwnProps
    >;

const TextScrollAnimateWordMolecule = (
  {
    progress,
    range,
    className,
    style,
    children,
    ...props
  }: TextScrollAnimateWordMoleculeProps,
  ref: TextScrollAnimateWordMoleculeProps['ref']
) => {
  const x = useTransform(progress, range, ['100%', '0%']);

  return (
    <motion.span
      aria-hidden
      className={cn('relative inline-block', className)}
      ref={ref}
      style={
        {
          '--x': x,
          ...style
        } as typeof style
      }
      {...props}
    >
      <span className={`absolute inset-0 [clip-path:inset(0_var(--x)_0_0)]`}>
        {children}
      </span>

      <span
        className={`pointer-events-none select-none opacity-10 dark:opacity-[.05]`}
      >
        {children}
      </span>
    </motion.span>
  );
};

export default forwardRef(TextScrollAnimateWordMolecule);
export type { TextScrollAnimateWordMoleculeProps };
