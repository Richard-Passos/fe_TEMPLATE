import { ComponentType } from 'react';

import Blocks from '@/components/organisms/Blocks';
import { Page } from '@/types';
import { cn } from '@/utils';

type PageTemplateProps = Pick<Page, 'blocks'>;

const PageTemplate = ({ blocks }: PageTemplateProps) => {
  return blocks?.map(({ type, id, className, ...props }) => {
    const Block = Blocks[type] as ComponentType<any>;

    return (
      <Block
        className={cn(
          'last:pb-[--section-spacing-lg] has-[+[data-has-transition="true"]]:pb-[--section-spacing-lg]',
          className
        )}
        id={id}
        key={id}
        {...props}
      />
    );
  });
};
export default PageTemplate;
export type { PageTemplateProps };
