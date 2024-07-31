import { forwardRef } from 'react';

import { Button, Magnetic } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';
import { MagneticProps } from '@/components/atoms/Magnetic';

import Link, { LinkProps } from './Link';

type ActionMoleculeOwnProps = Partial<Pick<MagneticProps, 'limit'>> & {
  href?: string;
  ref?: any;
};

type ActionMoleculeProps = ActionMoleculeOwnProps &
  Omit<ButtonProps & LinkProps, keyof ActionMoleculeOwnProps>;

const ActionMolecule = (
  { href, limit = 0.5, children, ...props }: ActionMoleculeProps,
  ref: ActionMoleculeProps['ref']
) => {
  const Content = (
    <Magnetic
      className='flex size-full items-center justify-center gap-[inherit] rounded-inherit'
      limit={limit * 0.8}
    >
      <span>{children}</span>
    </Magnetic>
  );

  if (href)
    return (
      <Magnetic limit={limit}>
        <Link
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
        ref={ref}
        {...(props as Omit<ButtonProps, keyof ActionMoleculeOwnProps>)}
      >
        {Content}
      </Button>
    </Magnetic>
  );
};

export default forwardRef(ActionMolecule);
export type { ActionMoleculeProps };
