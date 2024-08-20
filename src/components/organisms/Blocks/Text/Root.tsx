import { ComponentPropsWithRef, forwardRef } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { ScrollAnimate, Text, Title } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type TextBlockOrganismOwnProps = {
  data: {
    title: TitleProps['children'];
    description?: TextProps['children'];
  };
  wrapperProps?: Partial<ComponentPropsWithRef<'div'>>;
  titleProps?: Partial<TitleProps>;
  descriptionProps?: Partial<TextProps>;
};

type TextBlockOrganismProps = TextBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof TextBlockOrganismOwnProps | 'data'>;

const TextBlockOrganism = (
  {
    className,
    data,
    wrapperProps,
    titleProps,
    descriptionProps,
    ...props
  }: TextBlockOrganismProps,
  ref: TextBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      className={cn(
        'min-h-fit w-9/10 max-w-screen-lg items-start pt-0 2xl:min-h-fit',
        className
      )}
      ref={ref}
      {...props}
    >
      <Title
        order={2}
        {...titleProps}
        className={cn('max-w-2xl', titleProps?.className)}
      >
        {data.title}
      </Title>

      <div
        {...wrapperProps}
        className={cn(
          'mt-xl flex items-start gap-md sm:ml-[5%]',
          wrapperProps?.className
        )}
      >
        <span className='relative mt-2.5 h-2 w-12 shrink-0'>
          <ScrollAnimate
            config={lineLeftScrollAnim}
            layout
          >
            <span className='absolute inset-0 border bg-white dark:bg-black' />
          </ScrollAnimate>
        </span>

        <Text
          {...descriptionProps}
          className={cn(
            'w-full max-w-md leading-relaxed sm:text-lg',
            descriptionProps?.className
          )}
        >
          {data.description}
        </Text>
      </div>
    </CleanLayoutBlock>
  );
};

export default forwardRef(TextBlockOrganism);
export type { TextBlockOrganismProps };
