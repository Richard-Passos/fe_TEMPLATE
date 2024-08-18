'use client';

import { ComponentPropsWithRef, ReactNode, forwardRef, useRef } from 'react';

import { Magnetic } from '@/components/atoms';
import { MagneticProps } from '@/components/atoms/Magnetic';
import { CardRoot, CardRootProps } from '@/components/molecules/Card';
import { cn, setRefs } from '@/utils';

type TableProjectCardMagneticContainerOrganismOwnProps = {
  box: ReactNode;
  magneticProps?: Partial<MagneticProps>;
  boxProps?: Partial<ComponentPropsWithRef<'div'>>;
};

type TableProjectCardMagneticContainerOrganismProps =
  TableProjectCardMagneticContainerOrganismOwnProps &
    Omit<
      CardRootProps,
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
  const innerRef = useRef<HTMLLIElement>(null);

  return (
    <CardRoot
      className={cn(
        'relative flex-row items-center justify-center overflow-visible',
        className
      )}
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
    </CardRoot>
  );
};

export default forwardRef(TableProjectCardMagneticContainerOrganism);
export type { TableProjectCardMagneticContainerOrganismProps };
