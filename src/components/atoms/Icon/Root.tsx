import { forwardRef } from 'react';
import Icon, { type Props } from 'react-inlinesvg';

import { cn } from '@/utils';

type IconAtomOwnProps = {
  ref?: PolimorphicRef<'svg'>;
};

type IconAtomProps = IconAtomOwnProps & Omit<Props, keyof IconAtomOwnProps>;

const IconAtom = (
  { className, ...props }: IconAtomProps,
  ref: IconAtomProps['ref']
) => {
  return (
    <Icon
      className={cn('*:fill-current *:stroke-transparent size-full', className)}
      innerRef={ref}
      {...props}
    />
  );
};

export default forwardRef(IconAtom);
export type { IconAtomProps };
