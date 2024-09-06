import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import Action, { ActionProps } from '@/components/molecules/Action';
import { cn } from '@/utils';

type LogoOrganismOwnProps = {
  variant?: 'primary' | 'secondary';
};

type LogoOrganismProps = LogoOrganismOwnProps & ActionProps;

const LogoOrganism = (
  {
    variant = 'primary',
    className,
    magneticProps,
    ...props
  }: LogoOrganismProps,
  ref: LogoOrganismProps['ref']
) => {
  const t = useTranslations('personal.logo');

  return (
    <Action
      className={cn(
        'border-transparent ![--button-bg:transparent] ![--button-padding-x:theme(spacing.xs)]',
        className
      )}
      as='link'
      href='/'
      ref={ref}
      size='md'
      variant='default'
      magneticProps={{
        limit: { x: 0, y: 0 },
        ...magneticProps
      }}
      {...props}
    >
      <Icon
        className='h-2/3'
        src={t(variant)}
      />
    </Action>
  );
};

export default forwardRef(LogoOrganism);
export type { LogoOrganismProps };
