import {
  DrawerBody,
  DrawerBodyProps,
  DrawerCloseButton,
  DrawerCloseButtonProps,
  DrawerContent,
  DrawerContentProps,
  DrawerHeader,
  DrawerHeaderProps,
  DrawerOverlay,
  DrawerOverlayProps,
  DrawerTitle,
  DrawerTitleProps
} from '@mantine/core';
import { PropsWithChildren, ReactNode, forwardRef } from 'react';

import { PolymorphicRef } from '@/types';

type DrawerContentMoleculeOwnProps = PropsWithChildren<{
  title?: ReactNode;
  overlayProps?: Partial<DrawerOverlayProps>;
  headerProps?: Partial<DrawerHeaderProps>;
  titleProps?: Partial<DrawerTitleProps>;
  closeProps?: Partial<DrawerCloseButtonProps>;
  bodyProps?: Partial<DrawerBodyProps>;
  ref?: PolymorphicRef<'div'>;
}>;

type DrawerContentMoleculeProps = DrawerContentMoleculeOwnProps &
  Omit<DrawerContentProps, keyof DrawerContentMoleculeOwnProps>;

const DrawerContentMolecule = (
  {
    title,
    children,
    overlayProps,
    headerProps,
    titleProps,
    closeProps,
    bodyProps,
    ...props
  }: DrawerContentMoleculeProps,
  ref: DrawerContentMoleculeProps['ref']
) => {
  return (
    <>
      <DrawerOverlay {...overlayProps} />

      <DrawerContent
        ref={ref}
        {...props}
      >
        <DrawerHeader {...headerProps}>
          <DrawerTitle {...titleProps}>{title}</DrawerTitle>

          <DrawerCloseButton {...closeProps} />
        </DrawerHeader>

        <DrawerBody {...bodyProps}>{children}</DrawerBody>
      </DrawerContent>
    </>
  );
};

export default forwardRef(DrawerContentMolecule);
export type { DrawerContentMoleculeProps };
