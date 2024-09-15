'use client';

import escapeHTML from 'escape-html';
import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ReactNode,
  memo,
  useCallback
} from 'react';

import scrollAnimations from '@/animations/scroll';
import {
  Blockquote,
  Icon,
  Image,
  Link,
  ScrollAnimate,
  Text,
  Title
} from '@/components/atoms';
import { BlockquoteProps } from '@/components/atoms/Blockquote';
import { IconProps } from '@/components/atoms/Icon';
import { ImageProps } from '@/components/atoms/Image';
import { LinkProps } from '@/components/atoms/Link';
import { TextProps } from '@/components/atoms/Text';
import { TitleOrder, TitleProps } from '@/components/atoms/Title';
import { List } from '@/components/molecules';
import { ListItemProps, ListRootProps } from '@/components/molecules/List';

import cn from './cn';
import exhaustiveMatchingGuard from './exhaustiveMatchingGuard';
import { Node } from './serialize';

type ElementNode =
  | { type: 'heading'; level: TitleOrder; children: Node[] }
  | { type: 'paragraph'; children: Node[] }
  | { type: 'alignText'; align: CSSProperties['textAlign']; children: Node[] }
  | { type: 'quote'; cite?: string; children: Node[] }
  | { type: 'ul'; children: Node[] }
  | { type: 'ol'; children: Node[] }
  | { type: 'li'; children: Node[] }
  | { type: 'link'; url: string; children: Node[] }
  | { type: 'image'; src: string; alt: string }
  | { type: 'icon'; src: string; animation?: keyof typeof scrollAnimations };

type ElementProps = {
  heading?: Partial<TitleProps>;
  paragraph?: Partial<TextProps>;
  alignText?: Partial<ComponentPropsWithoutRef<'span'>>;
  quote?: Partial<BlockquoteProps>;
  ul?: Partial<ListRootProps>;
  ol?: Partial<ListRootProps>;
  li?: Partial<ListItemProps>;
  link?: Partial<LinkProps>;
  image?: Partial<ImageProps>;
  icon?: Partial<
    IconProps & {
      wrapperProps?: ComponentPropsWithoutRef<'div'>;
    }
  >;
};

const SerializedElement = memo(
  ({
    node,
    children,
    props
  }: {
    node: ElementNode;
    children?: ReactNode;
    props?: ElementProps;
  }) => {
    const renderElement = useCallback(() => {
      switch (node.type) {
        case 'heading':
          return (
            <Title
              order={node.level}
              {...props?.heading}
            >
              {children}
            </Title>
          );
        case 'paragraph':
          return <Text {...props?.paragraph}>{children}</Text>;
        case 'alignText':
          return (
            <span
              data-align={node.align}
              style={{ textAlign: node.align }}
              {...props?.alignText}
              className={cn('block', props?.alignText?.className)}
            >
              {children}
            </span>
          );
        case 'quote':
          return (
            <Blockquote
              cite={node.cite}
              {...props?.quote}
            >
              {children}
            </Blockquote>
          );
        case 'ul':
          return (
            <List.Root
              type='unordered'
              {...props?.ul}
            >
              {children}
            </List.Root>
          );
        case 'ol':
          return (
            <List.Root
              type='ordered'
              {...props?.ol}
            >
              {children}
            </List.Root>
          );
        case 'li':
          return <List.Item {...props?.li}>{children}</List.Item>;
        case 'link':
          return (
            <Link
              href={escapeHTML(node.url)}
              {...props?.link}
              className={cn('text-[1em] font-semibold', props?.link?.className)}
            >
              {children}
            </Link>
          );
        case 'image':
          return (
            <Image
              alt={node.alt}
              src={escapeHTML(node.src)}
              {...props?.image}
            />
          );
        case 'icon': {
          const { wrapperProps, ...iconProps } = props?.icon ?? {};

          const content = (
            <div
              {...wrapperProps}
              className={cn('size-[1em]', wrapperProps?.className)}
            >
              <Icon
                src={escapeHTML(node.src)}
                {...iconProps}
              />
            </div>
          );

          if (!node.animation) return content;

          return (
            <ScrollAnimate config={scrollAnimations[node.animation]}>
              {content}
            </ScrollAnimate>
          );
        }
        default:
          return exhaustiveMatchingGuard(node);
      }
    }, [node, children, props]);

    return renderElement();
  }
);
SerializedElement.displayName = 'SerializedElement';

export default SerializedElement;
export type { ElementNode, ElementProps };
