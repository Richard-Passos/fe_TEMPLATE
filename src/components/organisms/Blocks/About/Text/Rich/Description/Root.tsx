import { forwardRef } from 'react';

import Text, { TextProps } from '@/components/atoms/Text';
import { cn } from '@/utils';

type AboutBlockTextDescriptionOrganismOwnProps = {};

type AboutBlockTextDescriptionOrganismProps =
  AboutBlockTextDescriptionOrganismOwnProps &
    Omit<TextProps, keyof AboutBlockTextDescriptionOrganismOwnProps>;

const AboutBlockTextDescriptionOrganism = (
  { className, ...props }: AboutBlockTextDescriptionOrganismProps,
  ref: AboutBlockTextDescriptionOrganismProps['ref']
) => {
  return (
    <Text
      className={cn(
        'w-full max-w-md text-sm leading-relaxed text-dimmed',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AboutBlockTextDescriptionOrganism);
export type { AboutBlockTextDescriptionOrganismProps };
