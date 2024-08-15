import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import Box, { BoxProps } from '@/components/atoms/Box';
import { PolymorphicRef } from '@/types';
import { cn, keys } from '@/utils';

type BentoGridMoleculeOwnProps = {
  templates: {
    base: '';
    sm?: 'var(--base-template)';
    md?: 'var(--sm-template)';
    lg?: 'var(--md-template)';
    xl?: 'var(--lg-template)';
    '2xl'?: 'var(--xl-template)';
  };
  ref?: PolymorphicRef<'ul'> & BoxProps['ref'];
};

type BentoGridMoleculeProps = BentoGridMoleculeOwnProps &
  Omit<BoxProps, keyof BentoGridMoleculeOwnProps>;

const BentoGridMolecule = (
  { templates, className, style, ...props }: BentoGridMoleculeProps,
  ref: BentoGridMoleculeProps['ref']
) => {
  return (
    <Box
      className={cn(
        'grid grid-cols-[repeat(auto-fit,minmax(0px,1fr))] gap-xs [--template:--base-template] [grid-template-areas:--template] sm:[--template:--sm-template] md:[--template:--md-template] lg:[--template:--lg-template] xl:[--template:--xl-template] 2xl:[--template:--2xl-template]',
        className
      )}
      component='ul'
      ref={ref}
      style={
        {
          ...keys(templates).reduce(
            (obj, key) => ({ ...obj, [key]: templates[key] }),
            {}
          ),
          ...style
        } as typeof style
      }
      {...props}
    />
  );
};

export default createPolymorphicComponent<'ul', BentoGridMoleculeProps>(
  forwardRef(BentoGridMolecule)
);
export type { BentoGridMoleculeProps };
