'use client'

import { Anchor, AnchorProps } from '@mantine/core';
import { forwardRef } from 'react';

import UnstyledLink, { UnstyledLinkProps } from './Unstyled';

type LinkAtomOwnProps = {};

type LinkAtomProps = LinkAtomOwnProps &
  Omit<AnchorProps & UnstyledLinkProps, keyof LinkAtomOwnProps>;

const LinkAtom = (props: LinkAtomProps, ref: LinkAtomProps['ref']) => {
  return (
    <Anchor
      component={UnstyledLink}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(LinkAtom);
export type { LinkAtomProps };
