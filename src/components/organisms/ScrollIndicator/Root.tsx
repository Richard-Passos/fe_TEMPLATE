import { forwardRef } from 'react';

import { ArrowDownIcon } from '@/components/atoms/Icon/icons';

import ScrollIndicatorTrigger, { ScrollIndicatorTriggerProps } from './Trigger';

type ScrollIndicatorOrganismOwnProps = {};

type ScrollIndicatorOrganismProps = ScrollIndicatorOrganismOwnProps &
  Omit<ScrollIndicatorTriggerProps, keyof ScrollIndicatorOrganismOwnProps>;

const ScrollIndicatorOrganism = (
  props: ScrollIndicatorOrganismProps,
  ref: ScrollIndicatorOrganismProps['ref']
) => {
  return (
    <ScrollIndicatorTrigger
      color='dark'
      href='#scroll-to'
      isIconOnly
      ref={ref}
      size='input-sm'
      {...props}
    >
      <span className='flex size-full animate-scroll-indicator items-center justify-center'>
        <ArrowDownIcon className='absolute bottom-[150%] size-[40%] translate-y-1/2' />

        <ArrowDownIcon className='size-[40%]' />
      </span>
    </ScrollIndicatorTrigger>
  );
};

export default forwardRef(ScrollIndicatorOrganism);
export type { ScrollIndicatorOrganismProps };
