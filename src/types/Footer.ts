import { Node } from '@/utils/serialize';

type Personal = {
  cta: {
    title: Node[];
  };
  location: {
    title: Node[];
    description: Node[];
  };
  contact: {
    title: Node[];
    description: Node[];
  };
  madeBy: Node[];
};

export default Personal;
