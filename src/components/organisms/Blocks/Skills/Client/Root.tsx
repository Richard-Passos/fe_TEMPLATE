'use client';

import { forwardRef } from 'react';

import {
  CarouselRoot,
  CarouselRootProps
} from '@/components/molecules/Carousel';

import { SecondaryLayoutBlock } from '../../Layout';
import { SecondaryLayoutBlockProps } from '../../Layout/Secondary';

type SkillsClientBlockOrganismOwnProps = SecondaryLayoutBlockProps;

type SkillsClientBlockOrganismProps = SkillsClientBlockOrganismOwnProps &
  Omit<CarouselRootProps, keyof SkillsClientBlockOrganismOwnProps>;

const SkillsClientBlockOrganism = (
  props: SkillsClientBlockOrganismProps,
  ref: SkillsClientBlockOrganismProps['ref']
) => {
  return (
    <SecondaryLayoutBlock
      component={CarouselRoot}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SkillsClientBlockOrganism);
export type { SkillsClientBlockOrganismProps };
