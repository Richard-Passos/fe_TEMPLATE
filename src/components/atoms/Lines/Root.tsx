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
        'absolute left-1/2 h-screen w-screen -translate-x-[(50%_+_var(--removed-body-scroll-bar-size,0px))] bg-[linear-gradient(theme(colors.border).8px,transparent_.8px),linear-gradient(to_right,theme(colors.border).8px,transparent_.8px)] bg-center opacity-30 [background-size:250px_200px] dark:opacity-10',
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
