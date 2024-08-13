'use client';

import { ComponentPropsWithRef, ReactNode, forwardRef, useRef } from 'react';

import { Magnetic } from '@/components/atoms';
import { MagneticProps } from '@/components/atoms/Magnetic';
import { cn, setRefs } from '@/utils';

type TableProjectCardMagneticContainerOrganismOwnProps = {
  box: ReactNode;
  magneticProps?: Partial<MagneticProps>;
  boxProps?: Partial<ComponentPropsWithRef<'div'>>;
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
    box,
    magneticProps,
    boxProps,
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
        container={innerRef}
        {...magneticProps}
        limit={{ x: 0.2, y: 0.35, ...magneticProps?.limit }}
        smoothConfig={{
          damping: 15,
          stiffness: 150,
          ...magneticProps?.smoothConfig
        }}
      >
        <div
          {...boxProps}
          className={cn('pointer-events-none absolute', boxProps?.className)}
        >
          {box}
        </div>
      </Magnetic>
    </div>
  );
};

export default forwardRef(TableProjectCardMagneticContainerOrganism);
export type { TableProjectCardMagneticContainerOrganismProps };
