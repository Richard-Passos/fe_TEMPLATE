import { ReactNode, forwardRef } from 'react';

import { Lines, Text } from '@/components/atoms';
import { ScrollToProps } from '@/components/atoms/ScrollTo';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn, serialize } from '@/utils';

import ScrollIndicator from '../../ScrollIndicator';
import PrimaryHeroScrollAnimate from './ScrollAnimate';
import PrimaryHeroTitle, { PrimaryHeroTitleProps } from './Title';

type PrimaryHeroOrganismOwnProps = {
  data: {
    title: PrimaryHeroTitleProps['children'];
    description: ReactNode;
    left: Parameters<typeof serialize>['0'];
    right: Parameters<typeof serialize>['0'];
  };
  scrollToProps?: Partial<ScrollToProps>;
};

type PrimaryHeroOrganismProps = PrimaryHeroOrganismOwnProps &
  Omit<SectionProps, keyof PrimaryHeroOrganismOwnProps>;

const PrimaryHeroOrganism = (
  {
    data,
    className,
    bgProps,
    scrollToProps,
    ...props
  }: PrimaryHeroOrganismProps,
  ref: PrimaryHeroOrganismProps['ref']
) => {
  return (
    <Section
      bgProps={{
        ...bgProps,
        className: cn('*:hidden', bgProps?.className)
      }}
      className={cn(
        'min-h-svh p-[--inset] pt-[--header-height] [--inset:calc(var(--w)*.025)] [--w:100vw] 2xl:[--w:--max-w]',
        className
      )}
      forceTheme
      hasTransition={false}
      ref={ref}
      {...props}
    >
      <div className='relative flex w-full grow overflow-hidden rounded-lg'>
        <PrimaryHeroScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full max-w-screen-xl grow flex-col items-center justify-center p-[calc(var(--inset)*1.5)] sm:opacity-[--opacity] sm:scale-[--scale]'>
              <PrimaryHeroTitle>{data.title}</PrimaryHeroTitle>

              <div className='mt-sm grid w-full grid-cols-3 gap-sm'>
                <div>
                  {serialize(data.left, {
                    paragraph: {
                      className: 'text-sm font-semibold'
                    },
                    icon: {
                      wrapperProps: { className: 'size-6' }
                    }
                  })}
                </div>

                <div className='col-end-4 justify-self-end text-end lg:order-last'>
                  {serialize(data.right, {
                    paragraph: {
                      className: 'text-sm font-semibold'
                    },
                    icon: {
                      wrapperProps: { className: 'size-6' }
                    }
                  })}
                </div>

                <Text className='col-span-full max-w-md justify-self-center text-center font-medium lg:sr-only'>
                  {data.description}
                </Text>
              </div>
            </div>

            <Lines className='top-auto -z-10 !text-border opacity-60 [background-size:83.333px_66.666px]' />
          </div>
        </PrimaryHeroScrollAnimate>

        <span className='pointer-events-none absolute inset-0 rounded-inherit border opacity-60' />
      </div>

      <ScrollIndicator
        {...scrollToProps}
        className={cn(
          'absolute bottom-[calc(var(--inset)*1.5)] right-[calc(var(--inset)*1.5)] max-sm:hidden',
          scrollToProps?.className
        )}
      />
    </Section>
  );
};

export default forwardRef(PrimaryHeroOrganism);
export type { PrimaryHeroOrganismProps };
