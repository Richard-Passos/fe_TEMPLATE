import { ComponentPropsWithRef, forwardRef } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { ScrollAnimate, Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type TextBlockOrganismOwnProps = {
  data: {
    title: Node[];
    description: Node[];
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
      className={cn('w-9/10 max-w-screen-lg pt-0', className)}
      ref={ref}
      {...props}
    >
      <Title
        order={3}
        {...titleProps}
        className={cn('mr-auto max-w-lg', titleProps?.className)}
      >
        {serialize(data.title)}
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
            <span className='absolute inset-0 border bg-body' />
          </ScrollAnimate>
        </span>

        <section className='flex max-w-md flex-col gap-md'>
          {serialize(data.description, {
            paragraph: {
              className: 'leading-relaxed text-dimmed *:text-text'
            }
          })}
        </section>
      </div>
    </CleanLayoutBlock>
  );
};

export default forwardRef(TextBlockOrganism);
export type { TextBlockOrganismProps };
