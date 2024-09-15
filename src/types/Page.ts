import { Metadata } from 'next';

import Blocks from '@/components/organisms/Blocks';
import Heros from '@/components/organisms/Heros';

import TypeVariants from './TypeVariants';

type Page = {
  slug: string;
  isSelected?: boolean;
  label: string;
  path: string;
  hero: TypeVariants<typeof Heros>;
  blocks: TypeVariants<typeof Blocks>[];
  metadata: Metadata;
};

export default Page;
