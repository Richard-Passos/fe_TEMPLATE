'use client';

import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/store';
import { setHeight, setIsVisible } from '@/store/slices/header';

const useHeaderContext = () => {
  const context = useSelector((data) => data.header),
    dispatch = useDispatch();

  const handleSetHeight = useCallback(
      (height: number) => dispatch(setHeight(height)),
      [dispatch]
    ),
    handleSetIsVisible = useCallback(
      (isVisible: boolean) => dispatch(setIsVisible(isVisible)),
      [dispatch]
    );

  return {
    ...context,
    setHeight: handleSetHeight,
    setIsVisible: handleSetIsVisible
  };
};

export default useHeaderContext;
