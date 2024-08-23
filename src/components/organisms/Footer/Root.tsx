import { useMessages, useTranslations } from 'next-intl';
import { forwardRef } from 'react';

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
import { yFullScrollAnim } from '@/animations/scroll';

type FooterOrganismOwnProps = Pick<Partial<SectionProps>, 'theme'>;

type FooterOrganismProps = FooterOrganismOwnProps &
  Omit<SectionProps, keyof FooterOrganismOwnProps>;

const FooterOrganism = (
  { className, ...props }: FooterOrganismProps,
  ref: FooterOrganismProps['ref']
) => {
  const namespace: Namespace = 'footer';

  const t = useTranslations(namespace),
    pt = useTranslations('personal');

  const messages = useMessages() as unknown as IntlMessages;

  const socialKeys = keys(messages.personal.socials);

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
          'data-theme': 'dark'
        } as SectionProps['transitionProps']
      }
      {...props}
    >
      <section className='mb-xl w-9/10 pt-[--section-spacing-md]'>
        <Title
          className='font-semibold'
          component='h3'
          order={6}
        >
          {t('cta.subtitle')}
        </Title>

        <Title
          className='leading-none'
          component='h2'
          order={3}
        >
          {t.rich('cta.title')}
        </Title>

        <div className='mt-md flex flex-wrap items-center gap-xs'>
          <Action
            href='contact'
            variant='default'
          >
            {t('cta.action.label')}
          </Action>

          {socialKeys.map((key) => (
            <Action
              aria-label={pt(`socials.${key}.label`)}
              href={pt(`socials.${key}.href`)}
              isIconOnly
              key={key}
              size='input-sm'
              variant='default'
            >
              <Icon
                className='absolute size-2/3'
                src={pt(`socials.${key}.icon`)}
              />
            </Action>
          ))}
        </div>
      </section>

      <div className='mt-auto flex w-9/10 items-end justify-between'>
        <section>
          <Text className='font-semibold'>
            {t('location', {
              country: pt('location.country'),
              state: pt('location.state')
            })}
          </Text>

          <Text className='font-semibold'>
            <LocalTime />
          </Text>
        </section>

        <section className='text-end'>
          <Text className='text-sm font-medium'>
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

          <Text className='text-sm font-medium'>
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
        </section>
      </div>

      <div className='w-full overflow-hidden'>
        <Logo
          aria-hidden
          className='h-auto w-full ![--button-bg:transparent] ![--button-hover:transparent] ![--button-padding-x:0px] sm:-mb-[8%] [&_svg]:h-full'
          tabIndex={-1}
          variant='primary'
        />
      </div>

      <div className='absolute inset-[15%] -z-10 w-auto overflow-hidden rounded-lg'>
        <ScrollAnimate config={yFullScrollAnim}>
          <Lines className='!opacity-60 [background-size:83.333px_66.666px]' />
        </ScrollAnimate>

        <span className='absolute inset-0 rounded-inherit border opacity-60' />
      </div>
    </Section>
  );
};

export default forwardRef(FooterOrganism);
export type { FooterOrganismProps };
