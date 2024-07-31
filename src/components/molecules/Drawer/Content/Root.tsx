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

type DrawerContentMoleculeOwnProps = PropsWithChildren<{
  title?: ReactNode;
  overlayProps?: DrawerOverlayProps;
  headerProps?: DrawerHeaderProps;
  titleProps?: DrawerTitleProps;
  closeProps?: DrawerCloseButtonProps;
  bodyProps?: DrawerBodyProps;
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
