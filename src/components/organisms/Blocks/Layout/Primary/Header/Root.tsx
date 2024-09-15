import { ComponentPropsWithRef, forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { cn, renderComp, serialize } from '@/utils';

type PrimaryLayoutBlockHeaderOrganismOwnProps = {
  title: Parameters<typeof serialize>['0'];
  description?: Parameters<typeof serialize>['0'];
  titleProps?: Partial<TitleProps>;
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
    description = [],
    titleProps,
    ...props
  }: PrimaryLayoutBlockHeaderOrganismProps,
  ref: PrimaryLayoutBlockHeaderOrganismProps['ref']
) => {
  return (
    <header
      className={cn(
        'flex w-9/10 gap-[--section-spacing-md] max-md:flex-col md:items-end',
        className
      )}
      ref={ref}
      {...props}
    >
      <Title
        order={2}
        {...titleProps}
        className={cn(
          'shrink-0 break-words pl-[min(10vw,theme(spacing.20))] uppercase data-[align=left]:*:-ml-[min(10vw,theme(spacing.20))]',
          titleProps?.className
        )}
      >
        {serialize(title)}
      </Title>

      <section className='max-w-md -translate-y-3.5'>
        {renderComp(
          serialize(description, {
            paragraph: {
              className: 'text-sm text-dimmed *:text-text'
            }
          }),
          [!!description.length]
        )}
      </section>
    </header>
  );
};

export default forwardRef(PrimaryLayoutBlockHeaderOrganism);
export type { PrimaryLayoutBlockHeaderOrganismProps };
