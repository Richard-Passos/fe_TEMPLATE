'use client';

import { Slot } from '@radix-ui/react-slot';
import {
  MotionStyle,
  SpringOptions,
  UseScrollOptions,
  motion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';
import { ComponentPropsWithRef, forwardRef, useRef } from 'react';

import { setRefs } from '@/utils';

type ConfigOptions = {
  scrollConfig?: UseScrollOptions;
  scroll?: keyof ReturnType<typeof useScroll>;
  scrollPoints?: any[];
  prop: keyof MotionStyle | `--${string}`;
  propPoints: any[];
  transformConfig?: {};
};

type ScrollAnimateAtomOwnProps = {
  config: ConfigOptions;
  smoothConfig?: SpringOptions;
};

type ScrollAnimateAtomProps = ScrollAnimateAtomOwnProps &
  Omit<
    ComponentPropsWithRef<typeof MotionChild>,
    keyof ScrollAnimateAtomOwnProps
  >;

const ScrollAnimateAtom = (
  { config, smoothConfig, style, ...props }: ScrollAnimateAtomProps,
  ref: ScrollAnimateAtomProps['ref']
) => {
  const innerRef = useRef(null);

  const options: Pick<ConfigOptions, 'transformConfig' | 'scrollConfig'> &
    Required<Omit<ConfigOptions, 'transformConfig' | 'scrollConfig'>> = {
    scroll: 'scrollYProgress',
    scrollPoints: [0, 1],
    ...config,
    scrollConfig: {
      target: innerRef,
      offset: ['0 1', '1 0'],
      ...config.scrollConfig
    }
  };

  const scroll = useScroll(config.scrollConfig);

  const prop = useTransform(
      scroll[options.scroll],
      options.scrollPoints,
      options.propPoints,
      options.transformConfig
    ),
    smoothProp = useSpring(prop, smoothConfig);

  return (
    <MotionChild
      ref={setRefs(ref, innerRef)}
      style={{
        [options.prop]: smoothConfig ? smoothProp : prop,
        ...style
      }}
      {...props}
    />
  );
};

const MotionChild = motion(Slot);

export default forwardRef(ScrollAnimateAtom);
export type { ScrollAnimateAtomProps, ConfigOptions };
