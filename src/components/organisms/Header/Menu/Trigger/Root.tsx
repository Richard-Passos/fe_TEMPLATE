import { forwardRef } from 'react';

import { ScrollAnimate } from '@/components/atoms';
import { ConfigOptions } from '@/components/atoms/ScrollAnimate';
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
    scrollPoints: [0, 299.999, 300],
    prop: '--tw-scale-x',
    propPoints: [0, 0, 1]
  };

  return (
    <ScrollAnimate
      config={animationConfig}
      smoothConfig={smoothConfig}
    >
      <HeaderMenuTriggerButton
        className={cn(
          'data-open:theme-primary data-open:![--tw-scale-x:1] pointer-events-auto [--tw-scale-y:--tw-scale-x] dark:bg-blue-5',
          className
        )}
        ref={ref}
        {...props}
      >
        +
      </HeaderMenuTriggerButton>
    </ScrollAnimate>
  );
};

export default forwardRef(HeaderMenuTriggerOrganism);
export type { HeaderMenuTriggerOrganismProps };
