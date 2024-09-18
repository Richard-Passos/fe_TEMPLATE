import { forwardRef } from 'react';

import { ScrollAnimate, Title } from '@/components/atoms';
import HorizontalScroll, {
  HorizontalScrollProps
} from '@/components/atoms/HorizontalScroll';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';

const CLIP_PATHS = {
  rtl: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
  ltr: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
};

const ANIMATION_CONFIG = (
  dir: keyof typeof CLIP_PATHS
): ScrollAnimateConfigOptions => ({
  scrollConfig: {
    offset: ['0 1', '0 .6']
  },
  prop: 'clipPath',
  propPoints: CLIP_PATHS[dir]
});

type ListHorizontalScrollItemMoleculeOwnProps = {
  baseVelocity?: HorizontalScrollProps['baseVelocity'];
};

type ListHorizontalScrollItemMoleculeProps =
  ListHorizontalScrollItemMoleculeOwnProps &
    Omit<TitleProps, keyof ListHorizontalScrollItemMoleculeOwnProps>;

const ListHorizontalScrollItemMolecule = (
  {
    className,
    baseVelocity = 1,
    children,
    ...props
  }: ListHorizontalScrollItemMoleculeProps,
  ref: ListHorizontalScrollItemMoleculeProps['ref']
) => {
  return (
    <ScrollAnimate config={ANIMATION_CONFIG(baseVelocity >= 0 ? 'ltr' : 'rtl')}>
      <Title
        className={cn(
          `
            border-x-0 border-y bg-body py-md

            even:rotate-[.5deg]

            odd:-rotate-[.5deg]
          `,
          className
        )}
        component='li'
        ref={ref}
        {...props}
      >
        <HorizontalScroll baseVelocity={baseVelocity}>
          {children}
        </HorizontalScroll>
      </Title>
    </ScrollAnimate>
  );
};

export default forwardRef(ListHorizontalScrollItemMolecule);
export type { ListHorizontalScrollItemMoleculeProps };
