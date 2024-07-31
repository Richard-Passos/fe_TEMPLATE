'use client';

import { useScroll } from 'framer-motion';
import { RefObject, useCallback, useEffect, useRef } from 'react';

import {
  useColorScheme,
  useComputedColorScheme,
  useUpdateMotionValueEvent
} from '@/hooks';

const useSetTheme = (
  ref: RefObject<HTMLElement>,
  theme: 'light' | 'dark',
  force?: boolean
) => {
  const lastTheme = useRef<'light' | 'dark'>('light');

  const { setColorScheme } = useColorScheme(),
    activeTheme = useComputedColorScheme();

  const { scrollYProgress: y1 } = useScroll({
    target: ref,
    offset: ['0 0.10001', '0 0.1']
  });

  const handleSetTheme = useCallback(
    (theme: 'light' | 'dark', last: 'light' | 'dark') => {
      lastTheme.current = last;

      setColorScheme(theme);
    },
    [setColorScheme]
  );

  const onChange = useCallback(
    (y: number) => {
      console.log('-  y    -', y);
      if (y === 0) handleSetTheme(lastTheme.current, theme);
      else if (y === 1) handleSetTheme(theme, activeTheme);
    },
    [activeTheme, theme, handleSetTheme]
  );

  useUpdateMotionValueEvent(y1, 'change', onChange, 0);

  useEffect(() => {
    if (force) handleSetTheme(theme, activeTheme);
  }, [force]);

  return activeTheme;
};

export default useSetTheme;
