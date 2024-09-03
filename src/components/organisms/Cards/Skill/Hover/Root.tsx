'use client';

import { forwardRef, useRef } from 'react';

import Slot, { SlotProps } from '@/components/atoms/Slot';
import { useHoverDelay } from '@/hooks';
import { setRefs } from '@/utils';

type SkillCardHoverOrganismOwnProps = {
  delay: Parameters<typeof useHoverDelay>['1'];
};

type SkillCardHoverOrganismProps = SkillCardHoverOrganismOwnProps &
  Omit<SlotProps, keyof SkillCardHoverOrganismOwnProps>;

const SkillCardHoverOrganism = (
  { delay, ...props }: SkillCardHoverOrganismProps,
  ref: SkillCardHoverOrganismProps['ref']
) => {
  const innerRef = useRef<HTMLDivElement>(null);

  const isHover = useHoverDelay(innerRef, delay);

  return (
    <Slot
      data-active={isHover}
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export default forwardRef(SkillCardHoverOrganism);
export type { SkillCardHoverOrganismProps };
