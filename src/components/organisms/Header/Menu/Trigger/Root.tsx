import { forwardRef } from 'react';

import { Portal, ScrollAnimate } from '@/components/atoms';
import { MenuIcon, TimesIcon } from '@/components/atoms/Icon/icons';
import { ConfigOptions } from '@/components/atoms/ScrollAnimate';
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
  const animationConfig: ConfigOptions = {
    scroll: 'scrollY',
    scrollPoints: [0, 199.999, 200],
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
          <div className='fixed right-[calc(2.5%+var(--removed-body-scroll-bar-size,0px))] top-[calc(var(--header-h)/2)] z-[60] -translate-y-1/2 [--tw-scale-y:--tw-scale-x] data-open:![--tw-scale-x:1]'>
            <HeaderMenuTriggerButton
              className={cn('relative', className)}
              isIconOnly
              ref={ref}
              size='xl'
              variant='default'
              {...props}
            >
              <MenuIcon className='absolute inset-1/4 data-open:hidden' />

              <TimesIcon className='absolute inset-1/4 data-closed:hidden' />
            </HeaderMenuTriggerButton>
          </div>
        </ScrollAnimate>
      </HeaderState>
    </Portal>
  );
};

export default forwardRef(HeaderMenuTriggerOrganism);
export type { HeaderMenuTriggerOrganismProps };
