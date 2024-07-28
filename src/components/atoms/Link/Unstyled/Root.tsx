import { ComponentPropsWithRef, forwardRef } from 'react';

import { Link } from '@/navigation';
import { isExternalUrl } from '@/utils';

type UnstyledLinkAtomOwnProps = {
  href: string;
};

type UnstyledLinkAtomProps = UnstyledLinkAtomOwnProps &
  Omit<ComponentPropsWithRef<typeof Link>, keyof UnstyledLinkAtomOwnProps>;

const UnstyledLinkAtom = (
  { href, ...props }: UnstyledLinkAtomProps,
  ref: UnstyledLinkAtomProps['ref']
) => {
  const isExternal = isExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Link
      href={href}
      ref={ref}
      {...(isExternal && externalLinkProps)}
      {...props}
    />
  );
};

export default forwardRef(UnstyledLinkAtom);
export type { UnstyledLinkAtomProps };
