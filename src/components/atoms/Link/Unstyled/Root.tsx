import { ComponentPropsWithRef, forwardRef } from 'react';

import { Link } from '@/i18n/routing';
import { isExternalUrl } from '@/utils';

type UnstyledLinkAtomOwnProps = {
  href: string;
  disabled?: boolean;
};

type UnstyledLinkAtomProps = UnstyledLinkAtomOwnProps &
  Omit<
    ComponentPropsWithRef<typeof Link>,
    'as' | keyof UnstyledLinkAtomOwnProps
  >;

const UnstyledLinkAtom = (
  { href, disabled, ...props }: UnstyledLinkAtomProps,
  ref: UnstyledLinkAtomProps['ref']
) => {
  const isExternal = isExternalUrl(href);

  const externalLinkProps = { rel: 'noreferrer', target: '_blank' };

  return (
    <Link
      aria-disabled={disabled}
      href={disabled ? '' : href}
      ref={ref}
      tabIndex={disabled ? -1 : 0}
      {...(isExternal && externalLinkProps)}
      {...props}
    />
  );
};

export default forwardRef(UnstyledLinkAtom);
export type { UnstyledLinkAtomProps };
