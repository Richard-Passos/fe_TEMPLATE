'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentPropsWithRef, forwardRef, useState } from 'react';

import { useUpdateEffect } from '@/hooks';
import { cn } from '@/utils';

import Link from './Link';

type HeaderNavOrganismOwnProps = {
  items: { href: string; label: string }[];
};

type HeaderNavOrganismProps = HeaderNavOrganismOwnProps &
  Omit<ComponentPropsWithRef<'nav'>, keyof HeaderNavOrganismOwnProps>;

const HeaderNavOrganism = (
  { items, className, ...props }: HeaderNavOrganismProps,
  ref: HeaderNavOrganismProps['ref']
) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const segment = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const [active, setActive] = useState(segment);

  const includesSegment = items.some((data) => data.href === segment);

  useUpdateEffect(() => setActive(segment), [segment]);

  return (
    <nav
      className={cn(
        'group flex w-full max-w-max items-center justify-center',
        className
      )}
      ref={ref}
      {...props}
    >
      {items.map((data) => (
        <Link
          isActive={active === data.href}
          key={data.href}
          onMouseEnter={() => {
            setActive(data.href);
          }}
          onMouseLeave={() => {
            if (includesSegment) setActive(segment);
          }}
          shouldHide={!includesSegment}
          {...data}
        >
          {data.label}
        </Link>
      ))}
    </nav>
  );
};

export default forwardRef(HeaderNavOrganism);
export type { HeaderNavOrganismProps };
