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
      hasTransition={false}
      ref={ref}
      {...props}
      className={cn(
        'min-h-svh p-[--inset] pt-[--header-h] [--inset:calc(var(--w)*.025)] [--w:100vw] 2xl:[--w:--max-w]',
        className
      )}
    >
      <div className='relative flex w-full grow overflow-hidden rounded-lg border'>
        <PrimaryHeroScrollAnimate>
          <div className='relative flex w-full flex-col items-center justify-center'>
            <div className='flex w-full grow flex-col items-center justify-center p-[calc(var(--inset)*1.5)] sm:scale-[--scale] sm:opacity-[--opacity]'>
              <PrimaryHeroTitle>{data.title}</PrimaryHeroTitle>

              <div className='mt-sm grid w-full max-w-screen-lg grid-cols-2 gap-sm md:grid-cols-6'>
                <Text className='col-span-full max-w-lg justify-self-center text-center md:col-span-4 lg:sr-only'>
                  {data.description}
                </Text>

                <div className='md:-order-1'>
                  <Left {...leftProps} />
                </div>

                <div className='justify-self-end lg:col-end-7'>
                  <Right {...rightProps} />
                </div>
              </div>
            </div>

            <Lines className='-z-10 !opacity-60 [background-size:83.333px_66.666px]' />
          </div>
        </PrimaryHeroScrollAnimate>

        <span className='pointer-events-none absolute inset-0 rounded-inherit border border-solid border-border opacity-60' />
      </div>

      <ScrollIndicator className='absolute bottom-[calc(var(--inset)*1.5)] right-[calc(var(--inset)*1.5)] max-sm:hidden' />
    </Section>
  );
};

export default forwardRef(PrimaryHeroOrganism);
export type { PrimaryHeroOrganismProps };
