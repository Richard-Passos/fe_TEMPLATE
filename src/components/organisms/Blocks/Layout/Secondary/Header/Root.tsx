import { ComponentPropsWithRef, Fragment, forwardRef } from 'react';

import { Badge, Title } from '@/components/atoms';
import { cn, renderComp } from '@/utils';

type SecondaryLayoutBlockHeaderOrganismOwnProps = {
  texts: string[];
  subtitle?: string;
};

type SecondaryLayoutBlockHeaderOrganismProps =
  SecondaryLayoutBlockHeaderOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'div'>,
      keyof SecondaryLayoutBlockHeaderOrganismOwnProps
    >;

const SecondaryLayoutBlockHeaderOrganism = (
  {
    className,
    texts,
    subtitle,
    ...props
  }: SecondaryLayoutBlockHeaderOrganismProps,
  ref: SecondaryLayoutBlockHeaderOrganismProps['ref']
) => {
  const lastText = texts.at(-1);

  texts = texts.slice(0, -1);

  return (
    <header
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      <Title
        aria-label={texts.join(' ')}
        className='flex flex-col leading-none [word-break:break-word]'
        order={2}
      >
        {texts.map((text, i) => (
          <span key={i}>{text}&nbsp;</span>
        ))}

        {renderComp(
          <span className='relative w-fit'>
            {lastText}

            <Badge
              className='absolute bottom-0 right-0 h-auto w-max -translate-x-6 -rotate-12 border-current px-[1em] py-[.75em] text-[.24em] normal-case tracking-normal max-sm:translate-y-1/3 sm:text-[.14em]'
              component='span'
            >
              {subtitle}
            </Badge>
          </span>,
          [subtitle]
        )}

        {renderComp(lastText, [!subtitle])}
      </Title>

      <span className='sr-only'>{subtitle}</span>
    </header>
  );
};

export default forwardRef(SecondaryLayoutBlockHeaderOrganism);
export type { SecondaryLayoutBlockHeaderOrganismProps };
