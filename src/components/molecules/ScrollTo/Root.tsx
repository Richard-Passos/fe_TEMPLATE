'use client';

import { createPolymorphicComponent } from '@mantine/core';
import { useLenis } from '@studio-freight/react-lenis';
import { forwardRef } from 'react';

import { Box } from '@/components/atoms';
import UnstyledLink, {
  UnstyledLinkProps
} from '@/components/atoms/Link/Unstyled';

type ScrollToMoleculeOwnProps = {};

type ScrollToMoleculeProps = ScrollToMoleculeOwnProps &
  Omit<UnstyledLinkProps, keyof ScrollToMoleculeOwnProps>;

const ScrollToMolecule = (
  { href, ...props }: ScrollToMoleculeProps,
  ref: ScrollToMoleculeProps['ref']
) => {
  const lenis = useLenis();

  return (
    <Box
      component={UnstyledLink}
      href={href}
      ref={ref}
      {...props}
      onClick={(ev) => {
        lenis?.scrollTo(href, {
          duration: 2,
          easing: (x) =>
            x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2 // easeInOutQuart
        });

        props.onClick?.(ev);
      }}
    />
  );
};

export default createPolymorphicComponent<'a', ScrollToMoleculeProps>(
  forwardRef(ScrollToMolecule)
);
export type { ScrollToMoleculeProps };
