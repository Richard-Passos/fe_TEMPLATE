import { Metadata } from 'next';

import Blocks from '@/components/organisms/Blocks';
import { SecondaryHeroProps } from '@/components/organisms/Heros/Secondary';

import TypeVariants from './TypeVariants';

type ErrorPage = {
  slug: string;
  hero: SecondaryHeroProps;
  blocks: TypeVariants<typeof Blocks>[];
  metadata: Metadata;
};

export default ErrorPage;
