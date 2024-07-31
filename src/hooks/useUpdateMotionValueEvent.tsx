'use client';

import { MotionValue, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useUpdateMotionValueEvent = <T,>(
  value: MotionValue<T>,
  event: any,
  callback: any,
  defaultValue: T
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = false;
  }, []);

  useMotionValueEvent(value, event, (latest: T) => {
    if (isMounted.current) return callback(latest);
    else {
      isMounted.current = true;

      return defaultValue && callback(defaultValue);
    }
  });
};

export default useUpdateMotionValueEvent;
