'use client';

import {
  CarouselRoot,
  CarouselRootProps
} from '@/components/molecules/Carousel';

import { SecondaryLayoutBlock } from '../../Layout';
import { SecondaryLayoutBlockProps } from '../../Layout/Secondary';

type SkillsClientBlockOrganismOwnProps = {};

type SkillsClientBlockOrganismProps = SkillsClientBlockOrganismOwnProps &
  Omit<
    SecondaryLayoutBlockProps & CarouselRootProps,
    keyof SkillsClientBlockOrganismOwnProps | 'ref'
  >;

const SkillsClientBlockOrganism = (props: SkillsClientBlockOrganismProps) => {
  return (
    <SecondaryLayoutBlock
      component={CarouselRoot}
      {...props}
    />
  );
};

export default SkillsClientBlockOrganism;
export type { SkillsClientBlockOrganismProps };
