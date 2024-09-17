import { Metadata } from 'next';
import { ComponentPropsWithoutRef } from 'react';

import Blocks from '@/components/templates/SingleProject/Blocks';
import { SingleProjectHeroProps } from '@/components/templates/SingleProject/Hero';

type SingleProjectPage = {
  slug: string;
  hero: SingleProjectHeroProps;
  blocks: {
    [K in keyof typeof Blocks]?: Partial<
      ComponentPropsWithoutRef<(typeof Blocks)[K]>
    >;
  };
  metadata: Metadata;
};

export default SingleProjectPage;
