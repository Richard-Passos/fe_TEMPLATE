import { ComponentPropsWithRef, forwardRef } from 'react';

import { lineLeftScrollAnim } from '@/animations/scroll';
import { ScrollAnimate, Text, Title } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { ScrollTextProps } from '@/components/molecules/ScrollText';
import { cn, renderComp } from '@/utils';

type PrimaryLayoutBlockHeaderOrganismOwnProps = {
  texts: ScrollTextProps['text'][];
  description?: TextProps['children'];
};

type PrimaryLayoutBlockHeaderOrganismProps =
  PrimaryLayoutBlockHeaderOrganismOwnProps &
    Omit<
      ComponentPropsWithRef<'header'>,
      keyof PrimaryLayoutBlockHeaderOrganismOwnProps
    >;

const PrimaryLayoutBlockHeaderOrganism = (
  {
    className,
    texts,
    description,
    ...props
  }: PrimaryLayoutBlockHeaderOrganismProps,
  ref: PrimaryLayoutBlockHeaderOrganismProps['ref']
) => {
  const lastText = texts.at(-1),
    restTexts = texts.slice(0, -1);

  return (
    <header
      aria-label={texts.join(' ')}
      className={cn('flex w-9/10 flex-col items-center', className)}
      ref={ref}
      {...props}
    >
      <Title
        className='flex w-full flex-col'
        order={2}
      >
        {restTexts.map((text, i) => (
          <span
            className='flex items-center gap-xl'
            key={i}
          >
            {text}

            <span className='relative h-2 grow'>
              <ScrollAnimate
                config={lineLeftScrollAnim}
                layout
              >
                <span className='absolute inset-0 border bg-white dark:bg-black' />
              </ScrollAnimate>
            </span>
          </span>
        ))}

        <span className='mx-auto flex w-9/10 items-center gap-xl max-sm:first:w-full'>
          <span>{lastText}</span>

          <span className='relative h-2 grow'>
            <ScrollAnimate
              config={lineLeftScrollAnim}
              layout
            >
              <span className='absolute inset-0 border bg-white dark:bg-black' />
            </ScrollAnimate>
          </span>

          {renderComp(
            <Text
              aria-hidden
              className='max-w-sm font-display text-sm font-medium leading-relaxed text-dimmed max-lg:hidden'
              component='span'
            >
              {description}
            </Text>,
            [description]
          )}
        </span>
      </Title>

      {renderComp(
        <Text className='mr-auto mt-sm text-sm text-dimmed sm:ml-[5%] sm:max-w-xl lg:sr-only'>
          {description}
        </Text>,
        [description]
      )}
    </header>
  );
};

export default forwardRef(PrimaryLayoutBlockHeaderOrganism);
export type { PrimaryLayoutBlockHeaderOrganismProps };
