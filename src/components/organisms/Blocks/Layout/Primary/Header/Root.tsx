import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';

import { Text, Title } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import { cn, renderComp } from '@/utils';

type PrimaryLayoutBlockHeaderOrganismOwnProps = {
  title: { id: string; text: ReactNode }[];
  description?: TextProps['children'];
  titleProps?: Partial<TitleProps>;
  descriptionProps?: Partial<TextProps>;
};

type PrimaryLayoutBlockHeaderOrganismProps =
  PrimaryLayoutBlockHeaderOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'header'>,
      keyof PrimaryLayoutBlockHeaderOrganismOwnProps
    >;

const PrimaryLayoutBlockHeaderOrganism = (
  {
    className,
    title,
    description,
    titleProps,
    descriptionProps,
    ...props
  }: PrimaryLayoutBlockHeaderOrganismProps,
  ref: PrimaryLayoutBlockHeaderOrganismProps['ref']
) => {
  return (
    <header
      className={cn(
        'flex w-9/10 gap-[--section-spacing-md] max-sm:flex-col sm:items-end',
        className
      )}
      ref={ref}
      {...props}
    >
      <Title
        order={2}
        {...titleProps}
        className={cn(
          'shrink-0 break-words pl-[min(10vw,theme(spacing.20))] uppercase',
          titleProps?.className
        )}
      >
        {title.map((t) => (
          <span
            className='block odd:-ml-[min(10vw,theme(spacing.20))]'
            key={t.id}
          >
            {t.text}
          </span>
        ))}
      </Title>

      {renderComp(
        <Text
          {...descriptionProps}
          className={cn(
            'max-w-xs text-sm text-dimmed -translate-y-3.5',
            descriptionProps?.className
          )}
        >
          {description}
        </Text>,
        [description]
      )}
    </header>
  );
};

export default forwardRef(PrimaryLayoutBlockHeaderOrganism);
export type { PrimaryLayoutBlockHeaderOrganismProps };
