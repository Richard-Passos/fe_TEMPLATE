import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { Action } from '@/components/molecules';
import type { ActionProps } from '@/components/molecules/Action';
import { cn } from '@/utils';

type LogoSecondaryVariantOrganismOwnProps = {
  label: string;
  icon: string;
};

type LogoSecondaryVariantOrganismProps = LogoSecondaryVariantOrganismOwnProps &
  Omit<ActionProps, keyof LogoSecondaryVariantOrganismOwnProps>;

const LogoSecondaryVariantOrganism = (
  { className, icon, label, ...props }: LogoSecondaryVariantOrganismProps,
  ref: LogoSecondaryVariantOrganismProps['ref']
) => {
  return (
    <Action
      className={cn(
        'data-[position=left]:*:*:h-2/3 data-[position=right]:*:*:h-2/3',
        className
      )}
      leftSection={<Icon src={icon} />}
      ref={ref}
      size='md'
      {...props}
    >
      {label}
    </Action>
  );
};

export default forwardRef(LogoSecondaryVariantOrganism);
export type { LogoSecondaryVariantOrganismProps };
