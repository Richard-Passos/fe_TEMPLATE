import { ComponentType, ReactNode, forwardRef } from 'react';

import { Lines, Text } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import { TypeVariants } from '@/types';
import { cn } from '@/utils';

import ScrollIndicator from '../../ScrollIndicator';
import PrimaryHeroExtra from './Extra';
import PrimaryHeroScrollAnimate from './ScrollAnimate';
import PrimaryHeroTitle, { PrimaryHeroTitleProps } from './Title';

type PrimaryHeroOrganismOwnProps = {
  data: {
    title: PrimaryHeroTitleProps['children'];
    description: ReactNode;
    left: TypeVariants<typeof PrimaryHeroExtra>;
    right: TypeVariants<typeof PrimaryHeroExtra>;
  };
};

type PrimaryHeroOrganismProps = PrimaryHeroOrganismOwnProps &
  Omit<SectionProps, keyof PrimaryHeroOrganismOwnProps>;

const PrimaryHeroOrganism = (
  { data, className, ...props }: PrimaryHeroOrganismProps,
  ref: PrimaryHeroOrganismProps['ref']
) => {
  const { type: leftType, ...leftProps } = data.left,
    { type: rightType, ...rightProps } = data.right;

  const Left = PrimaryHeroExtra[leftType] as ComponentType<any>,
    Right = PrimaryHeroExtra[rightType] as ComponentType<any>;

  return (
    <Section
      bgProps={{
        className: '*:hidden'
      }}
      forceTheme
      hasTransition={false}
      ref={ref}
      {...props}
      className={cn(
        'min-h-svh p-[--inset] pt-[--header-height] [--inset:calc(var(--w)*.025)] [--w:100vw] 2xl:[--w:--max-w]',
        className
      )}
    >
      <div className='relative flex w-full grow overflow-hidden rounded-lg'>
        <PrimaryHeroScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full max-w-screen-xl grow flex-col items-center justify-center p-[calc(var(--inset)*1.5)] sm:opacity-[--opacity] sm:scale-[--scale]'>
              <PrimaryHeroTitle>{data.title}</PrimaryHeroTitle>

              <div className='mt-sm grid w-full grid-cols-3 gap-sm'>
                <div>
                  <Left {...leftProps} />
                </div>

                <div className='col-end-4 justify-self-end text-end lg:order-last'>
                  <Right {...rightProps} />
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

      <ScrollIndicator className='absolute bottom-[calc(var(--inset)*1.5)] right-[calc(var(--inset)*1.5)] max-sm:hidden' />
    </Section>
  );
};

export default forwardRef(PrimaryHeroOrganism);
export type { PrimaryHeroOrganismProps };
