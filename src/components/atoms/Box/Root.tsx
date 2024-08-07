import { Box, BoxProps, createPolymorphicComponent } from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

type BoxAtomOwnProps = ComponentPropsWithRef<'div'>;

type BoxAtomProps = BoxAtomOwnProps & Omit<BoxProps, keyof BoxAtomOwnProps>;

const BoxAtom = (props: BoxAtomProps, ref: BoxAtomProps['ref']) => {
  return (
    <Box
      ref={ref}
      {...props}
    />
  );
};

export default createPolymorphicComponent<'div', BoxAtomProps>(
  forwardRef(BoxAtom)
);
export type { BoxAtomProps };
