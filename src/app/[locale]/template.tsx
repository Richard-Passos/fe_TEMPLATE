import { PropsWithChildren } from 'react';

import { Height } from '@/components/atoms';

type TemplateOwnProps = PropsWithChildren<{}>;

type TemplateProps = TemplateOwnProps;

const Template = ({ children }: TemplateProps) => {
  return (
    <Height.Set
      isDocument
      name='document'
    >
      {children}
    </Height.Set>
  );
};

export default Template;
export type { TemplateProps };
