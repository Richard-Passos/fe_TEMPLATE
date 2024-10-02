'use client';

import { Slottable } from '@radix-ui/react-slot';
import { ComponentPropsWithRef } from 'react';

type SlottableUtilOwnProps = {};

type SlottableUtilProps = SlottableUtilOwnProps &
  Omit<ComponentPropsWithRef<typeof Slottable>, keyof SlottableUtilOwnProps>;

const SlottableUtil = (props: SlottableUtilProps) => {
  return <Slottable {...props} />;
};

export default SlottableUtil;
export type { SlottableUtilProps };
