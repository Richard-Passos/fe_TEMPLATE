import { ComponentPropsWithRef, forwardRef } from 'react';

import { Text, Title } from '@/components/atoms';
import { TextProps } from '@/components/atoms/Text';
import { ScrollText } from '@/components/molecules';
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
  return (
    <header
      aria-label={texts.join(' ')}
      className={cn('flex w-full flex-col items-center', className)}
      ref={ref}
      {...props}
    >
      <Title
        className={cn(
          'w-full md:grid md:grid-cols-12 md:items-center',
          className
        )}
        order={2}
      >
        {texts.map((text, i, arr) => (
          <ScrollText
            className={cn(
              i % 2 === 0
                ? 'max-lg:*:!-translate-x-[20%] max-sm:*:!-translate-x-[10%]'
                : 'max-lg:*:!-translate-x-[25%] max-sm:*:!-translate-x-[20%]',
              i !== arr.length - 1
                ? 'md:col-span-full'
                : 'md:col-span-6 lg:col-span-7'
            )}
            key={i}
            text={text}
          />
        ))}

        {renderComp(
          <Text
            aria-hidden
            className='px-xl font-display max-md:hidden md:col-span-6 lg:col-span-5'
            component='span'
          >
            {description}
          </Text>,
          [description]
        )}
      </Title>

      {renderComp(
        <Text className='mt-sm w-9/10 md:sr-only'>{description}</Text>,
        [description]
      )}
    </header>
  );
};

export default forwardRef(PrimaryLayoutBlockHeaderOrganism);
export type { PrimaryLayoutBlockHeaderOrganismProps };
