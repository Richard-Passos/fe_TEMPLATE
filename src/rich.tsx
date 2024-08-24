import { ElementType, ReactNode } from 'react';

import { Text } from '@/components/atoms';
import { List } from '@/components/molecules';

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
  ul: richRender(({ children }) => (
    <List.Root
      className='my-sm pl-md'
      type='unordered'
    >
      {children}
    </List.Root>
  )),
  ol: richRender(({ children }) => (
    <List.Root
      className='my-sm pl-md'
      type='ordered'
    >
      {children}
    </List.Root>
  )),
  text: richRender(({ children }) => (
    <span className='text-text'>{children}</span>
  ))
};

export default rich;
export { richRender };
