'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { cn, setRefs } from '@/utils';

import TextScrollAnimateWord from './Word';

type TextScrollAnimateMoleculeOwnProps = {
  text: string;
};

type TextScrollAnimateMoleculeProps = TextScrollAnimateMoleculeOwnProps &
  Omit<ComponentPropsWithRef<'span'>, keyof TextScrollAnimateMoleculeOwnProps>;

const TextScrollAnimateMolecule = (
  { text, className, ...props }: TextScrollAnimateMoleculeProps,
  ref: TextScrollAnimateMoleculeProps['ref']
) => {
  const innerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: innerRef,
    offset: ['0 .75', '1 .75']
  });

  const words = text.split(' ');

  return (
    <span
      aria-label={text}
      className={cn('flex flex-wrap', className)}
      ref={setRefs(ref, innerRef)}
      {...props}
    >
      {words.map((w, i, arr) => {
        const start = i / words.length,
          end = start + 1 / words.length;

        return (
          <TextScrollAnimateWord
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {w}
            {i !== arr.length - 1 && <>&nbsp;</>}
          </TextScrollAnimateWord>
        );
      })}
    </span>
  );
};

export default forwardRef(TextScrollAnimateMolecule);
export type { TextScrollAnimateMoleculeProps };
