import { useTranslations } from 'next-intl';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { capitalize, cn } from '@/utils';

import Variants from './variants';

type LogoOrganismOwnProps = {
  variant: 'primary' | 'secondary';
};

type LogoOrganismProps = LogoOrganismOwnProps &
  Omit<
    Partial<ComponentPropsWithRef<typeof Variants.Primary>>,
    keyof LogoOrganismOwnProps
  >;

const LogoOrganism = (
  { variant = 'primary', className, ...props }: LogoOrganismProps,
  ref: LogoOrganismProps['ref']
) => {
  const t = useTranslations('personal.logo');

  const Variant = Variants[capitalize(variant) as Capitalize<typeof variant>];

  return (
    <Variant
      className={cn(
        'text-inherit hover:bg-gray-0 dark:hover:bg-dark-7',
        className
      )}
      href='/'
      icon={t('icon')}
      label={t('label')}
      limit={0}
      ref={ref}
      size='md'
      variant='transparent'
      {...props}
    />
  );
};

export default forwardRef(LogoOrganism);
export type { LogoOrganismProps };
