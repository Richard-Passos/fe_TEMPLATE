import { forwardRef } from 'react';

import { Portal, ScrollAnimate } from '@/components/atoms';
import { MenuIcon, TimesIcon } from '@/components/atoms/Icon/icons';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import Action, { ActionProps } from '@/components/molecules/Action';
import { DrawerTrigger } from '@/components/molecules/Drawer';
import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

const ANIMATION_CONFIG: ScrollAnimateConfigOptions = {
  scroll: 'scrollY',
  scrollPoints: [0, 99.999, 100],
  prop: '--scale',
  propPoints: [0, 0, 1]
};

type HeaderMenuTriggerOrganismOwnProps = {};

type HeaderMenuTriggerOrganismProps = HeaderMenuTriggerOrganismOwnProps &
  ActionProps;

const HeaderMenuTriggerOrganism = (
  { className, magneticProps, ...props }: HeaderMenuTriggerOrganismProps,
  ref: HeaderMenuTriggerOrganismProps['ref']
) => {
  return (
    <Portal>
      <ScrollAnimate
        config={ANIMATION_CONFIG}
        smoothConfig={smoothConfig}
      >
        <div className='fixed right-[calc(var(--side)+var(--removed-body-scroll-bar-size,0px))] top-[--side] z-max scale-[--scale] [--side:theme(spacing.md)] has-[[data-state="open"]]:scale-100 sm:[--side:theme(spacing.xl)]'>
          <DrawerTrigger>
            <Action
              className={cn('h-16 rounded-full sm:h-20', className)}
              isIconOnly
              ref={ref}
              variant='default'
              magneticProps={{
                ...magneticProps,
                limit: { x: 0.5, y: 0.5, ...magneticProps?.limit }
              }}
              {...props}
            >
              <MenuIcon className='size-[40%] group-data-open/action:hidden' />

              <TimesIcon className='absolute size-[40%] group-data-closed/action:hidden' />
            </Action>
          </DrawerTrigger>
        </div>
      </ScrollAnimate>
    </Portal>
  );
};

export default forwardRef(HeaderMenuTriggerOrganism);
export type { HeaderMenuTriggerOrganismProps };
