import { forwardRef } from 'react';
import Icon, { Props } from 'react-inlinesvg';

import { cn } from '@/utils';

type IconAtomOwnProps = {
  ref?: PolymorphicRef<'svg'>;
};

type IconAtomProps = IconAtomOwnProps & Omit<Props, keyof IconAtomOwnProps>;

const IconAtom = (
  { className, ...props }: IconAtomProps,
  ref: IconAtomProps['ref']
) => {
  return (
    <Icon
      className={cn('size-full *:fill-current', className)}
      innerRef={ref}
      {...props}
    />
  );
};

export default forwardRef(IconAtom);
export type { IconAtomProps };
