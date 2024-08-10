import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type ArrowUpRightIconAtomOwnProps = {};

type ArrowUpRightIconAtomProps = ArrowUpRightIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof ArrowUpRightIconAtomOwnProps>;

const ArrowUpRightIconAtom = (
  { className, ...props }: ArrowUpRightIconAtomProps,
  ref: ArrowUpRightIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      data-icon='Arrow up-right'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M16.707 8.707a1 1 0 0 1-1.414 0L13 6.414V20a1 1 0 0 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.416 0l4 4a1 1 0 0 1-.002 1.414Z' rotate={45} />
    </svg>
  );
};

export default forwardRef(ArrowUpRightIconAtom);
export type { ArrowUpRightIconAtomProps };
