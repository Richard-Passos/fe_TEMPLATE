'use client';

import { motion } from 'framer-motion';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

type HeaderNavLinkIndicatorOrganismOwnProps = {
  shouldHide?: boolean;
};

type HeaderNavLinkIndicatorOrganismProps =
  HeaderNavLinkIndicatorOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<typeof motion.span>,
      keyof HeaderNavLinkIndicatorOrganismOwnProps
    >;

const HeaderNavLinkIndicatorOrganism = (
  {
    shouldHide,
    className,
    style,
    transition,
    ...props
  }: HeaderNavLinkIndicatorOrganismProps,
  ref: HeaderNavLinkIndicatorOrganismProps['ref']
) => {
  return (
    <motion.span
      className={cn(
        'absolute bg-primary-filled',
        shouldHide &&
          `
            !opacity-0 transition-opacity delay-150

            group-hover/link:!opacity-100

            group-hover/nav:delay-0
          `,
        className
      )}
      layout
      layoutId='headerLinkActiveIndicator'
      ref={ref}
      style={{
        borderRadius: '9999px',
        ...style
      }}
      transition={{
        type: 'spring',
        ...smoothConfig,
        ...transition
      }}
      {...props}
    />
  );
};

export default forwardRef(HeaderNavLinkIndicatorOrganism);
export type { HeaderNavLinkIndicatorOrganismProps };
