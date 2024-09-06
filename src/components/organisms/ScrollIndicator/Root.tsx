import { forwardRef } from 'react';

import { ArrowDownIcon } from '@/components/atoms/Icon/icons';
import ScrollTo, { ScrollToProps } from '@/components/atoms/ScrollTo';
import Action, { ActionProps } from '@/components/molecules/Action';

type ScrollIndicatorOrganismOwnProps = Partial<Pick<ScrollToProps, 'target'>>;

type ScrollIndicatorOrganismProps = ScrollIndicatorOrganismOwnProps &
  ActionProps;

const ScrollIndicatorOrganism = (
  { target = '#scroll-to', ...props }: ScrollIndicatorOrganismProps,
  ref: ScrollIndicatorOrganismProps['ref']
) => {
  return (
    <ScrollTo target={target}>
      <Action
        isIconOnly
        ref={ref}
        {...props}
      >
        <span className='flex size-full animate-scroll-indicator items-center justify-center'>
          <ArrowDownIcon className='size-[40%]' />

          <ArrowDownIcon className='absolute bottom-[150%] size-[40%] translate-y-1/2' />
        </span>
      </Action>
    </ScrollTo>
  );
};

export default forwardRef(ScrollIndicatorOrganism);
export type { ScrollIndicatorOrganismProps };
