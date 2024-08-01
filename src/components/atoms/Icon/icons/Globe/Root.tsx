import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type GlobeIconAtomOwnProps = {};

type GlobeIconAtomProps = GlobeIconAtomOwnProps &
  Omit<ComponentPropsWithRef<'svg'>, keyof GlobeIconAtomOwnProps>;

const GlobeIconAtom = (
  { className, ...props }: GlobeIconAtomProps,
  ref: GlobeIconAtomProps['ref']
) => {
  return (
    <svg
      className={cn('fill-current', className)}
      data-icon='Globe'
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M12 1.25A10.75 10.75 0 1 0 22.75 12 10.762 10.762 0 0 0 12 1.25Zm9.212 10h-4.05a18.156 18.156 0 0 0-2.435-8.089 9.268 9.268 0 0 1 6.485 8.089ZM12.73 2.787a16.934 16.934 0 0 1 2.932 8.463H8.338a16.934 16.934 0 0 1 2.932-8.463c.241-.019.484-.037.73-.037s.489.018.73.037Zm-3.457.374a18.144 18.144 0 0 0-2.435 8.089h-4.05a9.268 9.268 0 0 1 6.485-8.089ZM2.788 12.75h4.05a18.144 18.144 0 0 0 2.435 8.089 9.268 9.268 0 0 1-6.485-8.089Zm8.482 8.463a16.934 16.934 0 0 1-2.932-8.463h7.324a16.934 16.934 0 0 1-2.932 8.463c-.241.019-.484.037-.73.037s-.489-.018-.73-.037Zm3.457-.374a18.156 18.156 0 0 0 2.435-8.089h4.05a9.268 9.268 0 0 1-6.485 8.089Z' />
    </svg>
  );
};

export default forwardRef(GlobeIconAtom);
export type { GlobeIconAtomProps };
