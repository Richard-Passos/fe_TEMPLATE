import { forwardRef } from 'react';

import Text, { TextProps } from '@/components/atoms/Text';
import { cn } from '@/utils';

type TextBlockDescriptionOrganismOwnProps = {};

type TextBlockDescriptionOrganismProps = TextBlockDescriptionOrganismOwnProps &
  Omit<TextProps, keyof TextBlockDescriptionOrganismOwnProps>;

const TextBlockDescriptionOrganism = (
  { className, ...props }: TextBlockDescriptionOrganismProps,
  ref: TextBlockDescriptionOrganismProps['ref']
) => {
  return (
    <Text
      className={cn('w-full max-w-md leading-relaxed text-dimmed', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextBlockDescriptionOrganism);
export type { TextBlockDescriptionOrganismProps };
