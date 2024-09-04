'use client';

import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/store';
import { Heights, setHeight } from '@/store/slices/height';
import { normKey, pick } from '@/utils';

const useHeightContext = () => {
  const { heights, ...context } = useSelector((data) => data.height),
    dispatch = useDispatch();

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
    ...context,
    heights,
    setHeight: handleSetHeight,
    getHeight: handleGetHeight
  };
};

export default useHeightContext;
