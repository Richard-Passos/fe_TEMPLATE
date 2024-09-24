import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import ActionLink, {
  ActionLinkProps
} from '@/components/molecules/Action/Link';
import { cn } from '@/utils';

type LogoOrganismOwnProps = {
  variant?: 'primary' | 'secondary';
} & Partial<Pick<ActionLinkProps, 'href'>>;

type LogoOrganismProps = LogoOrganismOwnProps &
  Omit<ActionLinkProps, keyof LogoOrganismOwnProps>;

const LogoOrganism = (
  { variant = 'primary', className, style, ...props }: LogoOrganismProps,
  ref: LogoOrganismProps['ref']
) => {
  return (
    <ActionLink
      className={cn('px aspect-auto px-xs', className)}
      href='/'
      isIconOnly
      ref={ref}
      size='md'
      style={{
        '--button-bg': 'transparent',
        '--button-bd': 'transparent',
        ...style
      }}
      variant='default'
      {...props}
    >
      <Icon
        className='h-2/3'
        src={`/icons/logo-${variant}.svg`}
      />
    </ActionLink>
  );
};

export default forwardRef(LogoOrganism);
export type { LogoOrganismProps };
