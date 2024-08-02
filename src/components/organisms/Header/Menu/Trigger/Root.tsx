import { forwardRef } from 'react';

import { Portal, ScrollAnimate } from '@/components/atoms';
import { MenuIcon, TimesIcon } from '@/components/atoms/Icon/icons';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';
import { HeaderState } from '@/components/organisms/Header';
import { smoothConfig } from '@/hooks/useSmooth';
import { cn } from '@/utils';

import HeaderMenuTriggerButton, {
  HeaderMenuTriggerButtonProps
} from './Button';

type HeaderMenuTriggerOrganismOwnProps = {};

type HeaderMenuTriggerOrganismProps = HeaderMenuTriggerOrganismOwnProps &
  Omit<HeaderMenuTriggerButtonProps, keyof HeaderMenuTriggerOrganismOwnProps>;

const HeaderMenuTriggerOrganism = (
  { className, ...props }: HeaderMenuTriggerOrganismProps,
  ref: HeaderMenuTriggerOrganismProps['ref']
) => {
  const animationConfig: ScrollAnimateConfigOptions = {
    scroll: 'scrollY',
    scrollPoints: [0, 99.999, 100],
    prop: '--tw-scale-x',
    propPoints: [0, 0, 1]
  };

  return (
    <Portal>
      <HeaderState>
        <ScrollAnimate
          config={animationConfig}
          smoothConfig={smoothConfig}
        >
          <div className='fixed right-[calc(var(--side)+var(--removed-body-scroll-bar-size,0px))] top-[--side] z-max flex items-center justify-center [--side:--spacing-xl] [--tw-scale-y:--tw-scale-x] data-open:![--tw-scale-x:1]'>
            <HeaderMenuTriggerButton
              className={cn('rounded-full', className)}
              isIconOnly
              ref={ref}
              size={'72'}
              variant='default'
              {...props}
            >
              <MenuIcon className='absolute inset-[30%] group-data-open/action:hidden' />

              <TimesIcon className='absolute inset-[30%] group-data-closed/action:hidden' />
            </HeaderMenuTriggerButton>
          </div>
        </ScrollAnimate>
      </HeaderState>
    </Portal>
  );
};

export default forwardRef(HeaderMenuTriggerOrganism);
export type { HeaderMenuTriggerOrganismProps };
