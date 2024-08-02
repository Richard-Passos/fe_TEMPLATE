import { PropsWithChildren, forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { cn } from '@/utils';

type HighImpactHeroExtraTextOrganismOwnProps = PropsWithChildren<{}>;

type HighImpactHeroExtraTextOrganismProps =
  HighImpactHeroExtraTextOrganismOwnProps &
    Omit<TextProps, keyof HighImpactHeroExtraTextOrganismOwnProps>;

const HighImpactHeroExtraTextOrganism = (
  { className, ...props }: HighImpactHeroExtraTextOrganismProps,
  ref: HighImpactHeroExtraTextOrganismProps['ref']
) => {
  return (
    <Text
      className={cn('text-sm font-semibold', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(HighImpactHeroExtraTextOrganism);
export type { HighImpactHeroExtraTextOrganismProps };
