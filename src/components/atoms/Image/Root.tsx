import { Image, ImageProps } from '@mantine/core';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { ForwardedRef, forwardRef } from 'react';

type ImageAtomOwnProps = {
  ref?: ForwardedRef<HTMLImageElement>;
};

type ImageAtomProps = ImageAtomOwnProps &
  Omit<ImageProps & NextImageProps, keyof ImageAtomOwnProps>;

const ImageAtom = (props: ImageAtomProps, ref: ImageAtomProps['ref']) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      component={NextImage}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ImageAtom);
export type { ImageAtomProps };
