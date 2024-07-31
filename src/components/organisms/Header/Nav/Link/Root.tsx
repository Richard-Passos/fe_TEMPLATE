'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

import { Link, Magnetic } from '@/components/atoms';
import { LinkProps } from '@/components/atoms/Link';
import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

type HeaderNavLinkOrganismOwnProps = {
  isActive?: boolean;
  shouldHide?: boolean;
};

type HeaderNavLinkOrganismProps = HeaderNavLinkOrganismOwnProps &
  Omit<LinkProps, keyof HeaderNavLinkOrganismOwnProps>;

const HeaderNavLinkOrganism = (
  {
    className,
    isActive,
    shouldHide,
    children,
    ...props
  }: HeaderNavLinkOrganismProps,
  ref: HeaderNavLinkOrganismProps['ref']
) => {
  return (
    <Magnetic
      limit={0.3}
      smoothConfig={{ damping: 5 }}
    >
      <Link
        className={cn(
          'group/link text-inherit relative flex h-10 items-center justify-center rounded-sm px-4 font-semibold no-underline transition-none hover:z-10',
          className
        )}
        ref={ref}
        {...props}
      >
        <span className='lowercase first-letter:capitalize'>{children}</span>

        {isActive && (
          <motion.span
            className={cn(
              'absolute bottom-1 h-[.15em] w-1/3 bg-primary-filled',
              shouldHide &&
                '!opacity-0 transition-opacity delay-150 group-hover/link:!opacity-100 group-hover:delay-0'
            )}
            layoutId='headerLinkActiveIndicator'
            style={{ borderRadius: '9999px' }}
            transition={{
              type: 'spring',
              ...smoothConfig
            }}
          />
        )}
      </Link>
    </Magnetic>
  );
};

export default forwardRef(HeaderNavLinkOrganism);
export type { HeaderNavLinkOrganismProps };
