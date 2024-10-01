import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type PrimaryLogoIconAtomOwnProps = {};

type PrimaryLogoIconAtomProps = PrimaryLogoIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof PrimaryLogoIconAtomOwnProps>;

const PrimaryLogoIconAtom = (
  { className, ...props }: PrimaryLogoIconAtomProps,
  ref: PrimaryLogoIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('h-8 fill-current', className)}
      data-icon='PrimaryLogo'
      ref={ref}
      viewBox='0 0 365.27 117.45'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M5.42 5.68h39.37c22.66 0 35.76 13.68 35.76 34.94 0 14.62-6.29 25.23-17.64 30.45l21.19 41.58H60.81l-18.9-37.92h-15.4v37.92H5.42zm35.42 50.87c12.08 0 17.98-5.33 17.98-15.93s-5.9-16.45-18.08-16.45H26.51v32.38h14.32ZM285.45 5.68h39.37c22.66 0 35.76 14.99 35.76 36.25s-13.35 36.04-36.3 36.04h-17.73v34.68h-21.1zm35.42 54.16c12.08 0 17.98-7.31 17.98-17.92s-5.9-17.76-18.08-17.76h-14.23v35.67h14.32Zm-201.66 5.57h127.01v15.08H119.21z' />
    </svg>
  );
};

export default forwardRef(PrimaryLogoIconAtom);
export type { PrimaryLogoIconAtomProps };
