import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { Action } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
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
      ref={ref}
      size='md'
      className={cn('![--action-padding-x:--spacing-xs]', className)}
      {...props}
    >
      <Icon
        className='mr-sm h-2/3 w-auto'
        src={icon}
      />

      {label}
    </Action>
  );
};

export default forwardRef(LogoSecondaryVariantOrganism);
export type { LogoSecondaryVariantOrganismProps };
