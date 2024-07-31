import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn } from '@/utils';

type MainOrganismOwnProps = {};

type MainOrganismProps = MainOrganismOwnProps &
  Omit<ComponentPropsWithRef<'main'>, keyof MainOrganismOwnProps>;

const MainOrganism = (
  { className, ...props }: MainOrganismProps,
  ref: MainOrganismProps['ref']
) => {
  return (
    <main
      className={cn(
        'relative flex w-full max-w-bounds flex-col items-center max-2xl:grow 2xl:min-h-bounds',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MainOrganism);
export type { MainOrganismProps };
