'use client';

import { useCallback, useLayoutEffect, useState } from 'react';

import useEventListener from './useEventListener';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSetWindowSize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, [setWindowSize]);

  useLayoutEffect(() => {
    handleSetWindowSize();
  }, [handleSetWindowSize]);

  useEventListener('resize', handleSetWindowSize);

  return windowSize;
};

export default useWindowSize;
