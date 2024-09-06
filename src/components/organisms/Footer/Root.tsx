import { useMessages, useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { yFullScrollAnim } from '@/animations/scroll';
import {
  Icon,
  Lines,
  Link,
  LocalTime,
  ScrollAnimate,
  Text,
  Title
} from '@/components/atoms';
import { Action } from '@/components/molecules';
import Logo from '@/components/organisms/Logo';
import Section, { SectionProps } from '@/components/organisms/Section';
import { Namespace } from '@/types';
import { cn, keys } from '@/utils';

type FooterOrganismOwnProps = Pick<Partial<SectionProps>, 'theme'>;

type FooterOrganismProps = FooterOrganismOwnProps &
  Omit<SectionProps, keyof FooterOrganismOwnProps>;

const FooterOrganism = (
  { className, transitionProps, ...props }: FooterOrganismProps,
  ref: FooterOrganismProps['ref']
) => {
  const namespace: Namespace = 'footer';

  const t = useTranslations(namespace),
    pt = useTranslations('personal');

  const messages = useMessages() as unknown as IntlMessages;

  const socials = keys(messages.personal.socials).map((key) => ({
    label: pt(`socials.${key}.label`),
    href: pt(`socials.${key}.href`),
    icon: pt(`socials.${key}.icon`)
  }));

  return (
    <Section
      bgProps={{
        className: '*:hidden'
      }}
      className={cn('max-w-bounds py-0', className)}
      component='footer'
      ref={ref}
      theme='light'
      transitionProps={
        {
          reverse: true,
          'data-theme': 'dark',
          ...transitionProps
        } as SectionProps['transitionProps']
      }
      {...props}
    >
      <div className='relative z-10 flex w-9/10 grow flex-col'>
        <section className='mb-xl pt-[--section-spacing-md]'>
          <Title
            className='max-w-xs font-semibold'
            component='h3'
            order={6}
          >
            {t.rich('cta.subtitle')}
          </Title>

          <Title
            className='max-w-xs break-words uppercase leading-none sm:max-w-sm'
            component='h2'
            order={3}
          >
            {t.rich('cta.title')}
          </Title>

          <div className='mt-md flex flex-wrap items-center gap-xs'>
            <Action>{t('cta.action.label')}</Action>

            {socials.map((data) => (
              <Action
                as='link'
                aria-label={data.label}
                href={data.href}
                isIconOnly
                key={data.href}
                variant='default'
              >
                <Icon
                  className='absolute size-2/3'
                  src={data.icon}
                />
              </Action>
            ))}
          </div>
        </section>

        <div className='mt-auto flex gap-lg max-lg:gap-x-sm max-md:flex-col-reverse'>
          <Logo
            className='mt-auto h-auto w-full grow ![--button-bg:transparent] ![--button-hover:transparent] ![--button-padding-x:0px] [&_svg]:h-full'
            variant='secondary'
          />

          <section>
            <Title
              className='mt-auto w-fit py-sm'
              component='p'
              order={6}
            >
              {pt('location.country')}
              &nbsp;
              {t('locationSeparator')}
              &nbsp;
              {pt('location.state')}
              &nbsp;
              {t('locationSeparator')}
              &nbsp;
              <LocalTime />
            </Title>

            <Text className='max-w-sm'>{t('description')}</Text>
          </section>
        </div>

        <section className='flex justify-center py-sm max-sm:flex-col sm:justify-between'>
          <Text className='text-sm font-medium max-sm:text-center'>
            {t.rich('copyright', {
              legal: (chunks) => (
                <Link
                  className='text-[1em] font-semibold text-current'
                  href='/legal'
                >
                  {chunks}
                </Link>
              )
            })}
          </Text>

          <Text className='text-center text-sm font-medium sm:text-end'>
            {t.rich('madeBy', {
              creator: (chunks) => (
                <Link
                  className='text-[1em] font-semibold text-current'
                  href='https://github.com/Richard-Passos'
                >
                  {chunks}
                </Link>
              )
            })}
          </Text>
        </section>
      </div>

      <div className='absolute inset-[15%] flex items-center justify-center overflow-hidden rounded-lg'>
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines className='top-auto h-screen !text-border opacity-60 translate-y-0 [background-size:83.333px_66.666px]' />
        </ScrollAnimate>

        <span className='absolute inset-0 rounded-inherit border opacity-60' />
      </div>
    </Section>
  );
};

export default forwardRef(FooterOrganism);
export type { FooterOrganismProps };
