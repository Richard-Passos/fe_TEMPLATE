import { forwardRef } from 'react';

import { Action } from '@/components/molecules';
import { ActionProps } from '@/components/molecules/Action';
import { CarouselActionProps } from '@/components/molecules/Carousel';
import { cn } from '@/utils';

const ACTIONS = {
  next: 'splide__arrow--next',
  prev: 'splide__arrow--prev'
};

type SkillsActionBlockOrganismOwnProps = Pick<CarouselActionProps, 'action'>;

type SkillsActionBlockOrganismProps = SkillsActionBlockOrganismOwnProps &
  Omit<ActionProps, keyof SkillsActionBlockOrganismOwnProps>;

const SkillsActionBlockOrganism = (
  { action, className, ...props }: SkillsActionBlockOrganismProps,
  ref: SkillsActionBlockOrganismProps['ref']
) => {
  return (
    <Action
      className={cn('splide__arrow', ACTIONS[action], className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SkillsActionBlockOrganism);
export type { SkillsActionBlockOrganismProps };
