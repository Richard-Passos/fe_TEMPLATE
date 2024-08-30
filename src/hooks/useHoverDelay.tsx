'use client';

import { RefObject, useState } from 'react';

import useDebounceCallback from './useDebounceCallback';
import useEventListener from './useEventListener';

const useHoverDelay = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  delay: number
) => {
  const [isHover, setIsHover] = useState(false);

  const debounced = useDebounceCallback(setIsHover, delay);

  const handleMouseEnter = () => {
    debounced.cancel();
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    debounced(false);
  };

  useEventListener('mouseenter', handleMouseEnter, ref);
  useEventListener('mouseleave', handleMouseLeave, ref);

  return isHover;
};

export default useHoverDelay;
