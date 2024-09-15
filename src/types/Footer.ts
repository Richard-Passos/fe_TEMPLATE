import { Node } from '@/utils/serialize';

type Personal = {
  cta: {
    title: Node[];
    subtitle: Node[];
    action: {
      label: string;
    };
  };
  locationSeparator: string;
  description: Node[];
  madeBy: Node[];
  copyright: Node[];
};

export default Personal;
