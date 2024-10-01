import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type LocationIconAtomOwnProps = {};

type LocationIconAtomProps = LocationIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof LocationIconAtomOwnProps>;

const LocationIconAtom = (
  { className, ...props }: LocationIconAtomProps,
  ref: LocationIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 fill-current', className)}
      data-icon='Location'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M12 2.5A8.51 8.51 0 0 0 3.5 11c0 4.983 4.629 8.041 7.692 10.064l.531.352a.5.5 0 0 0 .554 0l.531-.352C15.871 19.041 20.5 15.983 20.5 11A8.51 8.51 0 0 0 12 2.5Zm0 11a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z' />
    </svg>
  );
};

export default forwardRef(LocationIconAtom);
export type { LocationIconAtomProps };
