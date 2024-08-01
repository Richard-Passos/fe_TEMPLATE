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
        'fixed inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(currentColor_.8px,transparent_.8px),linear-gradient(to_right,currentColor_.8px,transparent_.8px)] opacity-20 [background-size:250px_200px] dark:opacity-5',
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
