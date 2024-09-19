import { Metadata } from 'next';

import { Node } from '@/utils/serialize';

import Theme from './Theme';

type LegalPage = {
  type: 'legal';
  slug: string;
  label: string;
  blocks: {
    theme: Theme;
    header: {
      title: Node[];
      effectiveDate: Node[];
    };
    data: Node[];
    footer?: Node[];
  };
  metadata: Metadata;
  isSelected?: never;
  hero?: never;
};

export default LegalPage;
