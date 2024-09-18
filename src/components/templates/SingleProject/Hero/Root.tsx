import { ReactNode, forwardRef } from 'react';

import { Image, ScrollAnimate, Text, Title } from '@/components/atoms';
import { ArrowUpRightIcon } from '@/components/atoms/Icon/icons';
import { ImageProps } from '@/components/atoms/Image';
import { TextProps } from '@/components/atoms/Text';
import { TitleProps } from '@/components/atoms/Title';
import { Action } from '@/components/molecules';
import { ActionLinkProps } from '@/components/molecules/Action/Link';
import Section, { SectionProps } from '@/components/organisms/Section';
import { cn, renderComp } from '@/utils';

type SingleProjectHeroTemplateOwnProps = {
  data: {
    title: TitleProps['children'];
    description?: TextProps['children'];
    subtitle?: TitleProps['children'];
    image: {
      src: ImageProps['src'];
      alt: ImageProps['alt'];
    };
    action: {
      label: ReactNode;
      href: ActionLinkProps['href'];
    };
  };
};

type SingleProjectHeroTemplateProps = SingleProjectHeroTemplateOwnProps &
  Omit<SectionProps, keyof SingleProjectHeroTemplateOwnProps>;

const SingleProjectHeroTemplate = (
  { className, data, ...props }: SingleProjectHeroTemplateProps,
  ref: SingleProjectHeroTemplateProps['ref']
) => {
  return (
    <Section
      className={cn(`
        min-h-fit pt-0

        2xl:min-h-fit
      `, className)}
      forceTheme
      hasTransition={false}
      ref={ref}
      {...props}
    >
      <header className={`
        flex min-h-[calc(var(--h)*.75)] w-9/10 flex-col items-center
        justify-center pb-[--section-spacing-md]
        pt-[calc(var(--header-height)+var(--section-spacing-md))]

        [--h:100svh]

        2xl:[--h:--max-h]
      `}>
        {renderComp(
          <Title
            className='mb-xs max-w-md text-center font-medium tracking-wide'
            component='h2'
            order={6}
          >
            {data.subtitle}
          </Title>,
          [data.subtitle]
        )}

        <Title
          className='max-w-screen-lg text-center'
          order={1}
        >
          {data.title}
        </Title>

        {renderComp(
          <Text className='mt-lg max-w-lg text-center text-sm text-dimmed'>
            {data.description}
          </Text>,
          [data.description]
        )}
      </header>

      <div className={`
        relative mt-2xl flex w-full max-w-screen-xl items-center justify-center
      `}>
        {renderComp(
          <ScrollAnimate config={{ prop: 'y', propPoints: ['0%', '-100%'] }}>
            <div className={`
              absolute left-0 top-0 z-10 -translate-y-1/2 translate-x-1/2
            `}>
              <Action
                as='link'
                className={`
                  aspect-square rounded-full shadow

                  ![--button-height:calc(var(--size)*var(--mantine-scale))]

                  [--size:8rem]

                  sm:text-xl sm:[--size:12rem]
                `}
                disabled={!data.action?.href}
                href={data.action.href}
              >
                {data.action.label}&nbsp;
                <ArrowUpRightIcon className='size-[1.25em] shrink-0' />
              </Action>
            </div>
          </ScrollAnimate>,
          [data.action.label]
        )}

        <div className={`
          relative aspect-video w-full overflow-hidden rounded-xl bg-gray-1

          dark:bg-dark-6
        `}>
          <Image
            alt={data.image.alt}
            className='object-cover'
            fill
            priority
            quality={100}
            sizes='100vw'
            src={data.image.src}
          />
        </div>
      </div>
    </Section>
  );
};

export default forwardRef(SingleProjectHeroTemplate);
export type { SingleProjectHeroTemplateProps };
