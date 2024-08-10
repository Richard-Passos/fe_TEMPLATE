import { ElementType, PropsWithChildren, ReactNode } from 'react';

import { Text } from '@/components/atoms';
import { List } from '@/components/molecules';

type RichProps = PropsWithChildren<{}>;

// eslint-disable-next-line react/display-name
const richRender = (Comp: ElementType) => (chunks: ReactNode) => (
  <Comp>{chunks}</Comp>
);

const rich = {
  p: richRender(Text),
  span: richRender('span'),
  br: richRender(() => <br />),
  strong: richRender('strong'),
  em: richRender('em'),
  i: richRender('i'),
  li: richRender(List.Item),
  ul: richRender((props: RichProps) => (
    <List.Root
      className='my-sm pl-md'
      type='unordered'
      {...props}
    />
  )),
  ol: richRender((props: RichProps) => (
    <List.Root
      className='my-sm pl-md'
      type='ordered'
      {...props}
    />
  ))
};

export default rich;
export { richRender };
export type { RichProps };
