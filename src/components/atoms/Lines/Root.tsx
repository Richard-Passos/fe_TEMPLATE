import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type LinesAtomOwnProps = {
  amount?: number;
};

type LinesAtomProps = LinesAtomOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof LinesAtomOwnProps>;

const LinesAtom = (
  { className, amount = 6, ...props }: LinesAtomProps,
  ref: LinesAtomProps['ref']
) => {
  return (
    <div
      className={cn(
        'fixed left-1/2 top-0 h-[--main-h] w-screen -translate-x-1/2 bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(to_right,currentColor_1px,transparent_1px)] text-primary-6 opacity-60 [background-size:240px_240px] dark:opacity-20',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

/*
 */

export default forwardRef(LinesAtom);
export type { LinesAtomProps };
