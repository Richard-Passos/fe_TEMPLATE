'use client';

import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/store';
import { setTheme } from '@/store/slices/theme';

const useThemeContext = () => {
  const context = useSelector((data) => data.theme),
    dispatch = useDispatch();

  const handleSetTheme = useCallback(
    (theme: Parameters<typeof setTheme>['0']) => dispatch(setTheme(theme)),
    [dispatch]
  );

  return {
    ...context,
    setTheme: handleSetTheme
  };
};

export default useThemeContext;
