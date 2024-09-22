'use client';

import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/store';
import { Heights, setHeight } from '@/store/slices/height';
import { normKey, pick } from '@/utils';

const useHeightContext = () => {
  const context = useSelector((data) => data.height),
    dispatch = useDispatch();

  if (!context)
    throw new Error(
      'useHeightContext must be used within a HeightContextProvider'
    );

  const { heights, ...rest } = context;

  const handleSetHeight = useCallback(
      (height: Parameters<typeof setHeight>['0']) =>
        dispatch(setHeight(height)),
      [dispatch]
    ),
    handleGetHeight = useCallback(
      (key: keyof Heights | (keyof Heights)[]): Heights | undefined =>
        pick(heights, Array.isArray(key) ? key.map(normKey) : normKey(key)),
      [heights]
    );

  return {
    ...rest,
    heights,
    setHeight: handleSetHeight,
    getHeight: handleGetHeight
  };
};

export default useHeightContext;
