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
    limit = 0.5,
    className,
    style,
    children,
    ...props
  }: ActionMoleculeProps,
  ref: ActionMoleculeProps['ref']
) => {
  const Content = (
    <>
      <Magnetic limit={limit * 0.8}>
        <span className='relative z-10 flex size-full items-center justify-center gap-[inherit] rounded-inherit px-[--action-padding-x]'>
          {children}
        </span>
      </Magnetic>

      <span className='absolute inset-0 bg-[--action-hover] transition-[clip-path] duration-300 [clip-path:inset(100%_0_0_0_round_50%_50%_0_0)] group-hover/action:[clip-path:inset(0_round_0)]' />
    </>
  );

  className = cn(
    'group/action relative bg-[--action-bg] hover:bg-[--action-bg] px-0 *:*:w-full',
    className
  );

  style = {
    '--action-size': 'var(--button-size)',
    '--action-bg': 'var(--button-bg)',
    '--action-bd': 'var(--button-bd)',
    '--action-color': 'var(--button-color)',
    '--action-fz': 'var(--button-fz)',
    '--action-height': 'var(--button-height)',
    '--action-hover': 'var(--button-hover)',
    '--action-padding-x': 'var(--button-padding-x)',
    ...style
  } as typeof style;

  if (href)
    return (
      <Magnetic limit={limit}>
        <Link
          className={className}
          href={href}
          ref={ref}
          style={style}
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
        style={style}
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
