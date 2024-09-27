import { Node } from '@/utils/serialize';

type Field<E extends string[] | undefined = undefined> = {
  label: Node[];
  placeholder?: string;
  defaultValue?: any;
} & (E extends string[] ? { errors: Record<E[number], string> } : {});

export default Field;
