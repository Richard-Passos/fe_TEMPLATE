import { createPolymorphicComponent } from '@mantine/core';
import { forwardRef } from 'react';

import { Button, Magnetic } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { MagneticProps } from '@/components/atoms/Magnetic';
import { cn } from '@/utils';

import Link, { LinkProps } from './Link';

type ActionMoleculeOwnProps = Partial<Pick<MagneticProps, 'limit'>> & {
  href?: string;
  ref?: any;
};

type ActionMoleculeProps = ActionMoleculeOwnProps &
  Omit<ButtonProps & LinkProps, keyof ActionMoleculeOwnProps>;

const ActionMolecule = (
  {
    href,
    limit = { x: 0.35, y: 0.35 },
    className,
    children,
    ...props
  }: ActionMoleculeProps,
  ref: ActionMoleculeProps['ref']
) => {
  const Content = (
    <>
      <Magnetic limit={{ x: limit.x * 0.8, y: limit.y * 0.8 }}>
        <span className='relative z-10 flex size-full items-center justify-center gap-[inherit] rounded-inherit px-[--button-padding-x]'>
          {children}
        </span>
      </Magnetic>

      <span className='absolute inset-0 bg-[--button-hover] transition-[clip-path] duration-300 [clip-path:inset(100%_0_0_0_round_50%_50%_0_0)] group-hover/action:[clip-path:inset(0_round_0)]' />
    </>
  );

  className = cn(
    'group/action relative hover:bg-[--button-bg] px-0 *:*:w-full hover:z-10',
    className
  );

  if (href)
    return (
      <Magnetic limit={limit}>
        <Link
          className={className}
          href={href}
          ref={ref}
          {...(props as Omit<LinkProps, keyof ActionMoleculeOwnProps>)}
        >
          {Content}
        </Link>
      </Magnetic>
    );

  return (
    <Magnetic limit={limit}>
      <Button
        className={className}
        ref={ref}
        {...(props as Omit<ButtonProps, keyof ActionMoleculeOwnProps>)}
      >
        {Content}
      </Button>
    </Magnetic>
  );
};

export default createPolymorphicComponent<'button', ActionMoleculeProps>(
  forwardRef(ActionMolecule)
);
export type { ActionMoleculeProps };
