import { forwardRef } from 'react';

import { ArrowDownIcon } from '@/components/atoms/Icon/icons';
import { Action } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { cn } from '@/utils';

type ScrollIndicatorOrganismOwnProps = {};

type ScrollIndicatorOrganismProps = ScrollIndicatorOrganismOwnProps &
  Omit<ActionProps, keyof ScrollIndicatorOrganismOwnProps>;

const ScrollIndicatorOrganism = (
  { className, ...props }: ScrollIndicatorOrganismProps,
  ref: ScrollIndicatorOrganismProps['ref']
) => {
  return (
    <Action
      className={cn('[&>span]:animate-scroll-indicator', className)}
      href=''
      isIconOnly
      ref={ref}
      size='input-sm'
      variant='default'
      {...props}
    >
      <ArrowDownIcon className='absolute bottom-[150%] size-[40%] translate-y-1/2' />

      <ArrowDownIcon className='size-[40%]' />
    </Action>
  );
};

export default forwardRef(ScrollIndicatorOrganism);
export type { ScrollIndicatorOrganismProps };
