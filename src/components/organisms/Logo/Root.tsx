import { forwardRef } from 'react';

import {
  PrimaryLogoIcon,
  SecondaryLogoIcon
} from '@/components/atoms/Icon/icons';
import ActionLink, {
  ActionLinkProps
} from '@/components/molecules/Action/Link';
import { cn } from '@/utils';

const VARIANTS = {
  primary: PrimaryLogoIcon,
  secondary: SecondaryLogoIcon
};

type LogoOrganismOwnProps = {
  variant?: keyof typeof VARIANTS;
} & Partial<Pick<ActionLinkProps, 'href'>>;

type LogoOrganismProps = LogoOrganismOwnProps &
  Omit<ActionLinkProps, keyof LogoOrganismOwnProps>;

const LogoOrganism = (
  { variant = 'primary', className, style, ...props }: LogoOrganismProps,
  ref: LogoOrganismProps['ref']
) => {
  const Variant = VARIANTS[variant];

  return (
    <ActionLink
      className={cn('aspect-auto', className)}
      href='/'
      isIconOnly
      ref={ref}
      size='md'
      style={{
        '--button-bg': 'transparent',
        '--button-bd': 'transparent',
        '--button-padding-x': 'var(--mantine-spacing-xs)',
        ...style
      }}
      variant='default'
      {...props}
    >
      <Variant className='h-2/3' />
    </ActionLink>
  );
};

export default forwardRef(LogoOrganism);
export type { LogoOrganismProps };
