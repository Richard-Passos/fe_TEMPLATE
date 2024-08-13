'use client';

import { ComponentPropsWithRef, ReactNode, forwardRef, useRef } from 'react';

import { Magnetic } from '@/components/atoms';
import { MagneticProps } from '@/components/atoms/Magnetic';
import { cn, setRefs } from '@/utils';

type TableProjectCardMagneticContainerOrganismOwnProps = {
  limit?: MagneticProps['limit'];
  box: ReactNode;
};

type TableProjectCardMagneticContainerOrganismProps =
  TableProjectCardMagneticContainerOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'div'>,
      keyof TableProjectCardMagneticContainerOrganismOwnProps
    >;

const TableProjectCardMagneticContainerOrganism = (
  {
    className,
    children,
    limit = { x: 0.2, y: 0.35 },
    box,
    ...props
  }: TableProjectCardMagneticContainerOrganismProps,
  ref: TableProjectCardMagneticContainerOrganismProps['ref']
) => {
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn('relative flex items-center justify-center', className)}
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {children}

      <Magnetic
        className='pointer-events-none absolute'
        container={innerRef}
        limit={limit}
      >
        <div>{box}</div>
      </Magnetic>
    </div>
  );
};

export default forwardRef(TableProjectCardMagneticContainerOrganism);
export type { TableProjectCardMagneticContainerOrganismProps };
