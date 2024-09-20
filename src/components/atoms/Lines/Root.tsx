'use client';

import {
  ComponentPropsWithRef,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from 'react';

import { useEventListener } from '@/hooks';
import { cn, setRefs } from '@/utils';

type LinesAtomOwnProps = {
  amount?: number;
};

type LinesAtomProps = LinesAtomOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof LinesAtomOwnProps>;

const LinesAtom = (
  { className, style, ...props }: LinesAtomProps,
  ref: LinesAtomProps['ref']
) => {
  const innerRef = useRef<HTMLDivElement>(null),
    [top, setTop] = useState(0);

  const handleSetTop = useCallback(() => {
      if (!innerRef.current) return;

      const rect = innerRef.current.getBoundingClientRect();

      const top = rect.top + document.documentElement.scrollTop;

      setTop(top);
    }, [setTop]),
    resetTop = useCallback(() => {
      setTop(0);
    }, [setTop]);

  useLayoutEffect(() => {
    handleSetTop();

    return resetTop;
  }, [handleSetTop, resetTop]);

  useEventListener('resize', handleSetTop);

  return (
    <div
      className={cn(
        `pointer-events-none absolute inset-x-0 top-0 h-[--document-height] bg-[linear-gradient(currentColor_.8px,transparent_.8px),linear-gradient(to_right,currentColor_.8px,transparent_.8px)] bg-center text-gray-1 translate-y-[--document-top] [background-size:250px_200px] dark:text-dark-5`,
        className
      )}
      ref={setRefs(ref, innerRef)}
      style={
        {
          '--document-top': `-${top}px`,
          ...style
        } as typeof style
      }
      {...props}
    />
  );
};

export default forwardRef(LinesAtom);
export type { LinesAtomProps };
