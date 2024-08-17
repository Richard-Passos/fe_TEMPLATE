import { forwardRef } from 'react';

import { Title } from '@/components/atoms';
import { TitleProps } from '@/components/atoms/Title';
import { cn } from '@/utils';

type PrimaryHeroTitleOrganismOwnProps = {};

type PrimaryHeroTitleOrganismProps = PrimaryHeroTitleOrganismOwnProps &
  Omit<TitleProps, keyof PrimaryHeroTitleOrganismOwnProps>;

const PrimaryHeroTitleOrganism = (
  { className, ...props }: PrimaryHeroTitleOrganismProps,
  ref: PrimaryHeroTitleOrganismProps['ref']
) => {
  return (
    <Title
      className={cn(
        'flex w-full flex-col items-center text-center font-black [word-break:break-word] lg:px-[--inset]',
        className
      )}
      order={1}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(PrimaryHeroTitleOrganism);
export type { PrimaryHeroTitleOrganismProps };
