import { ComponentType } from 'react';

import Blocks from '@/components/organisms/Blocks';
import { Page } from '@/types';

type PageTemplateProps = Pick<Page, 'blocks'>;

const PageTemplate = ({ blocks }: PageTemplateProps) => {
  return blocks?.map(({ type, id, ...props }) => {
    const Block = Blocks[type] as ComponentType<any>;

    return (
      <Block
        id={id}
        key={id}
        {...props}
      />
    );
  });
};
export default PageTemplate;
export type { PageTemplateProps };
