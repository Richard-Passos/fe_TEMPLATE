'use client';

import { useScroll } from 'framer-motion';
import { RefObject, useCallback, useRef } from 'react';

import {
  useColorScheme,
  useComputedColorScheme,
  useUpdateEffect
} from '@/hooks';

type Theme = 'light' | 'dark';

const useSetTheme = (ref: RefObject<HTMLElement>, theme: Theme) => {
  const { setColorScheme } = useColorScheme(),
    activeTheme = useComputedColorScheme();

  const lastTheme = useRef<Theme>(activeTheme);

  const { scrollYProgress: y } = useScroll({
    target: ref,
    offset: ['0 0.050001', '0 0.05']
  });

  const handleSetTheme = useCallback(
    (theme: Theme, last: Theme) => {
      lastTheme.current = last;

      setColorScheme(theme);
    },
    [setColorScheme]
  );

  useUpdateEffect(() => {
    const unsubscribe = y.on('change', (y) => {
      if (y === 0) handleSetTheme(lastTheme.current, theme);
      else if (y === 1) handleSetTheme(theme, activeTheme);
    });

    return () => {
      unsubscribe();
    };
  }, [y, handleSetTheme, theme, activeTheme]);

  return activeTheme;
};

export default useSetTheme;
