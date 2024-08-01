import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type TimesIconAtomOwnProps = {};

type TimesIconAtomProps = TimesIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof TimesIconAtomOwnProps>;

const TimesIconAtom = (
  { className, ...props }: TimesIconAtomProps,
  ref: TimesIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Times'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.061 6.53 18.53a.75.75 0 0 1-1.06-1.06L10.939 12 5.47 6.53a.75.75 0 0 1 1.06-1.06L12 10.939l5.47-5.469a.75.75 0 0 1 1.06 1.06L13.061 12Z' />
    </svg>
  );
};

export default forwardRef(TimesIconAtom);
export type { TimesIconAtomProps };
