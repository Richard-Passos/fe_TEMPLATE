'use client';

import { RefObject, useEffect, useRef } from 'react';

const useEventListener = (
  type: keyof HTMLElementEventMap,
  listener: (this: HTMLElement, ev: Event) => any,
  element?: RefObject<HTMLElement>,
  options?: EventListenerOptions
) => {
  listener = useRef(listener).current;

  useEffect(() => {
    const targetEl = element?.current ?? window;

    targetEl.addEventListener(type, listener, options);

    return () => targetEl.removeEventListener(type, listener, options);
  }, [element, type, listener, options]);
};

export default useEventListener;
