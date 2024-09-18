import { ReactNode, forwardRef } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/atoms/Icon/icons';
import { Action } from '@/components/molecules';
import { ActionLinkProps } from '@/components/molecules/Action/Link';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

type SingleProjectAdjacentsTemplateOwnProps = {
  data: {
    prev: {
      label: ReactNode;
      name: ReactNode;
      href: ActionLinkProps['href'];
    };
    next: {
      label: ReactNode;
      name: ReactNode;
      href: ActionLinkProps['href'];
    };
  };
};

type SingleProjectAdjacentsTemplateProps =
  SingleProjectAdjacentsTemplateOwnProps &
    Omit<SectionProps, keyof SingleProjectAdjacentsTemplateOwnProps>;

const SingleProjectAdjacentsTemplate = (
  { data, className, ...props }: SingleProjectAdjacentsTemplateProps,
  ref: SingleProjectAdjacentsTemplateProps['ref']
) => {
  return (
    <Section
      className={cn(`
        min-h-fit

        2xl:min-h-fit
      `, className)}
      ref={ref}
      {...props}
    >
      <div className={`
        flex w-9/10 max-w-screen-xl flex-wrap justify-between gap-xs border
        border-x-0 border-b-0 p-md
      `}>
        <Action
          as='link'
          className='h-fit'
          disabled={!data.prev.href}
          href={data.prev.href}
          magneticProps={{
            limit: {
              x: 0.15,
              y: 0.35
            }
          }}
          variant='default'
        >
          <div className='flex justify-start gap-2 py-sm'>
            <ArrowLeftIcon className='mb-auto size-[1.25em]' />

            <div className='flex flex-col items-start gap-0.5'>
              <span className={`
                max-w-24 overflow-hidden text-ellipsis text-xs font-normal
                tracking-wide opacity-50
              `}>
                {data.prev.name}
              </span>

              <span className='mt-1'>{data.prev.label}</span>
            </div>
          </div>
        </Action>

        <Action
          as='link'
          className='h-fit'
          disabled={!data.next.href}
          href={data.next.href}
          magneticProps={{
            limit: {
              x: 0.15,
              y: 0.35
            }
          }}
          variant='default'
        >
          <div className='flex justify-end gap-2 py-sm'>
            <div className='flex flex-col items-end gap-0.5'>
              <span className={`
                max-w-24 overflow-hidden text-ellipsis text-xs font-normal
                tracking-wide opacity-50
              `}>
                {data.next.name}
              </span>

              <span className='mt-1'>{data.next.label}</span>
            </div>

            <ArrowRightIcon className='mb-auto size-[1.25em]' />
          </div>
        </Action>
      </div>
    </Section>
  );
};

export default forwardRef(SingleProjectAdjacentsTemplate);
export type { SingleProjectAdjacentsTemplateProps };
