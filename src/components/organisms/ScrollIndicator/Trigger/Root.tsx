'use client';

import { forwardRef } from 'react';

import { Action, ScrollTo } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { ScrollToProps } from '@/components/molecules/ScrollTo';

type ScrollIndicatorTriggerOrganismOwnProps = Pick<ActionProps, 'href'>;

type ScrollIndicatorTriggerOrganismProps =
  ScrollIndicatorTriggerOrganismOwnProps &
    Omit<
      ActionProps & ScrollToProps,
      keyof ScrollIndicatorTriggerOrganismOwnProps
    >;

const ScrollIndicatorTriggerOrganism = (
  props: ScrollIndicatorTriggerOrganismProps,
  ref: ScrollIndicatorTriggerOrganismProps['ref']
) => {
  return (
    <Action
      component={ScrollTo}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ScrollIndicatorTriggerOrganism);
export type { ScrollIndicatorTriggerOrganismProps };
