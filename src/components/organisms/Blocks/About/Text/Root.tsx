import { ComponentPropsWithRef, forwardRef } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { Title } from '@/components/atoms';
import ScrollAnimate from '@/components/atoms/ScrollAnimate';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type AboutBlockTextOrganismOwnProps = {
  data: {
    title: Node[];
    description: Node[];
  };
  titleProps?: Partial<TitleProps>;
  wrapperProps?: Partial<ComponentPropsWithRef<'div'>>;
};

type AboutBlockTextOrganismProps = AboutBlockTextOrganismOwnProps &
  Omit<ComponentPropsWithRef<'section'>, keyof AboutBlockTextOrganismOwnProps>;

const AboutBlockTextOrganism = (
  { data, titleProps, wrapperProps, ...props }: AboutBlockTextOrganismProps,
  ref: AboutBlockTextOrganismProps['ref']
) => {
  return (
    <section
      ref={ref}
      {...props}
    >
      <Title
        component='h3'
        order={4}
        {...titleProps}
        className={cn('max-w-lg', titleProps?.className)}
      >
        {serialize(data.title)}
      </Title>

      <div
        {...wrapperProps}
        className={cn(
          `
            mt-md flex items-start gap-md

            sm:ml-[5%]
          `,
          wrapperProps?.className
        )}
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
              className: 'text-sm leading-relaxed text-dimmed *:text-text'
            }
          })}
        </section>
      </div>
    </section>
  );
};

export default forwardRef(AboutBlockTextOrganism);
export type { AboutBlockTextOrganismProps };
