import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { ScrollAnimate, Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type TextBlockOrganismOwnProps = {
  data: {
    title: TitleProps['children'];
    description?: ReactNode;
  };
  wrapperProps?: Partial<ComponentPropsWithRef<'div'>>;
  titleProps?: Partial<TitleProps>;
};

type TextBlockOrganismProps = TextBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof TextBlockOrganismOwnProps | 'data'>;

const TextBlockOrganism = (
  {
    className,
    data,
    wrapperProps,
    titleProps,
    ...props
  }: TextBlockOrganismProps,
  ref: TextBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      className={cn(
        'min-h-fit w-9/10 max-w-screen-lg pt-0 2xl:min-h-fit',
        className
      )}
      ref={ref}
      {...props}
    >
      <Title
        order={3}
        {...titleProps}
        className={cn('mr-auto max-w-lg', titleProps?.className)}
      >
        {data.title}
      </Title>

      <div
        {...wrapperProps}
        className={cn('mr-auto mt-lg flex gap-md', wrapperProps?.className)}
      >
        <span className='relative mt-2.5 h-2 w-12 shrink-0'>
          <ScrollAnimate
            config={lineLeftScrollAnim}
            layout
          >
            <span className='absolute inset-0 border bg-white dark:bg-black' />
          </ScrollAnimate>
        </span>

        <section className='flex flex-col gap-md'>{data.description}</section>
      </div>
    </CleanLayoutBlock>
  );
};

export default forwardRef(TextBlockOrganism);
export type { TextBlockOrganismProps };
