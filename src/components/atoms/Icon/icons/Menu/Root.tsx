import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type MenuIconAtomOwnProps = {};

type MenuIconAtomProps = MenuIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof MenuIconAtomOwnProps>;

const MenuIconAtom = (
  { className, ...props }: MenuIconAtomProps,
  ref: MenuIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Menu'
      ref={ref}
      transform='scale(-1 1)'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M16 6.75H3a.75.75 0 0 1 0-1.5h13a.75.75 0 0 1 0 1.5ZM21.75 12a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 .75-.75Zm-9 6a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 .75-.75Z' />
    </svg>
  );
};

export default forwardRef(MenuIconAtom);
export type { MenuIconAtomProps };
