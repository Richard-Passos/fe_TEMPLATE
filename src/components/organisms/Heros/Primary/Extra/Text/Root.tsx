import { forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { cn } from '@/utils';

type PrimaryHeroExtraTextOrganismOwnProps = {
  data: {
    text: string;
  };
};

type PrimaryHeroExtraTextOrganismProps = PrimaryHeroExtraTextOrganismOwnProps &
  Omit<TextProps, keyof PrimaryHeroExtraTextOrganismOwnProps>;

const PrimaryHeroExtraTextOrganism = (
  { className, data, ...props }: PrimaryHeroExtraTextOrganismProps,
  ref: PrimaryHeroExtraTextOrganismProps['ref']
) => {
  return (
    <Text
      className={cn('text-sm font-semibold', className)}
      ref={ref}
      {...props}
    >
      {data.text}
    </Text>
  );
};

export default forwardRef(PrimaryHeroExtraTextOrganism);
export type { PrimaryHeroExtraTextOrganismProps };
