'use client';

import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/store';
import { setTheme } from '@/store/slices/theme';

const useThemeContext = () => {
  const context = useSelector((data) => data.theme),
    dispatch = useDispatch();

  if (!context)
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    );

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
