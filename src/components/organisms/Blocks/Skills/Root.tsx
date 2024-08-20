import { ComponentPropsWithRef } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/atoms/Icon/icons';
import { Carousel } from '@/components/molecules';
import {
  CarouselActionsProps,
  CarouselActiveIdxProps,
  CarouselProgressProps,
  CarouselTrackProps
} from '@/components/molecules/Carousel';
import SkillCard, { SkillCardProps } from '@/components/organisms/Cards/Skill';
import { cn } from '@/utils';

import SkillsActionBlock, { SkillsActionBlockProps } from './Action';
import SkillsClientBlock, { SkillsClientBlockProps } from './Client';

type SkillsBlockOrganismOwnProps = {
  data: SkillsClientBlockProps['data'] & {
    items: SkillCardProps['data'][];
  };
  subChildrenProps?: Partial<ComponentPropsWithRef<'section'>>;
  activeIdxProps?: Partial<CarouselActiveIdxProps>;
  progressProps?: Partial<CarouselProgressProps>;
  actionsProps?: Partial<CarouselActionsProps>;
  prevProps?: Partial<SkillsActionBlockProps>;
  nextProps?: Partial<SkillsActionBlockProps>;
  trackProps?: Partial<CarouselTrackProps>;
};

type SkillsBlockOrganismProps = SkillsBlockOrganismOwnProps &
  Omit<SkillsClientBlockProps, keyof SkillsBlockOrganismOwnProps>;

const SkillsBlockOrganism = ({
  className,
  data,
  options,
  subChildrenProps,
  activeIdxProps,
  progressProps,
  actionsProps,
  prevProps,
  nextProps,
  trackProps,
  ...props
}: SkillsBlockOrganismProps) => {
  return (
    <SkillsClientBlock
      className={cn('min-h-fit 2xl:min-h-fit', className)}
      data={{
        title: data.title,
        subtitle: data.subtitle
      }}
      options={{ slideFocus: true, options }}
      subChildren={
        <section
          {...subChildrenProps}
          className={cn(
            'flex w-full items-center gap-sm sm:max-w-xl',
            subChildrenProps?.className
          )}
        >
          <Carousel.ActiveIdx
            length={data.items.length}
            {...activeIdxProps}
            className={cn('shrink-0', activeIdxProps?.className)}
          />

          <Carousel.Progress
            {...progressProps}
            className={cn('grow', progressProps?.className)}
          />

          <Carousel.Actions {...actionsProps}>
            <SkillsActionBlock
              action='prev'
              isIconOnly
              size='input-sm'
              variant='default'
              {...prevProps}
            >
              <ArrowLeftIcon className='absolute aspect-square h-1/2 w-auto' />
            </SkillsActionBlock>

            <SkillsActionBlock
              action='next'
              isIconOnly
              size='input-sm'
              variant='default'
              {...nextProps}
            >
              <ArrowRightIcon className='absolute aspect-square h-1/2 w-auto' />
            </SkillsActionBlock>
          </Carousel.Actions>
        </section>
      }
      {...props}
    >
      <Carousel.Track {...trackProps}>
        {data.items?.map((data) => (
          <Carousel.Item
            className='focus-visible:outline-0 *:focus-visible:outline'
            key={data.id}
          >
            <SkillCard data={data} />
          </Carousel.Item>
        ))}
      </Carousel.Track>
    </SkillsClientBlock>
  );
};

export default SkillsBlockOrganism;
export type { SkillsBlockOrganismProps };
