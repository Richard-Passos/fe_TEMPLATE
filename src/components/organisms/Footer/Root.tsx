import { forwardRef } from 'react';

import { cn, objKeys } from '@/utils';
import { Icon, Lines, Link, LocalTime, ScrollAnimate, Text, Title } from '@/components/atoms';
import Section, { SectionProps } from '@/components/organisms/Section';
import Logo from '@/components/organisms/Logo';
import { useMessages, useTranslations } from 'next-intl';
import { Action } from '@/components/molecules';


type FooterOrganismOwnProps = {
  theme?: SectionProps['theme']
};

type FooterOrganismProps = FooterOrganismOwnProps &
  Omit<SectionProps, keyof FooterOrganismOwnProps>;

const FooterOrganism = (
  { className, ...props }: FooterOrganismProps,
  ref: FooterOrganismProps['ref']
) => {
  const namespace = 'footer'

  const t = useTranslations(namespace),
    pt = useTranslations('personal')

  const messages = useMessages() as unknown as IntlMessages

  const socialKeys = objKeys(messages.personal.socials)


  return (
    <Section
      bgProps={{
        className: '*:hidden'
      }}
      className={cn(
        'max-w-bounds py-0',
        className
      )}
      component='footer'
      ref={ref}
      theme='light'
      transitionProps={{
        reverse: true,
        'data-mantine-color-scheme': 'dark'
      } as SectionProps['transitionProps']}
      {...props}
    >
      <section className='w-9/10 pt-2xl pb-xl'>
        <Text>
          {t('cta.subtitle')}
        </Text>

        <Title className='leading-none mt-xs' component='h2' order={3} >
          {t.rich('cta.title')}
        </Title>



        <nav className='flex gap-xs flex-wrap items-center mt-md'>
          <Action href='contact' variant='default'>
            {t('cta.action.label')}
          </Action>

          {
            socialKeys.map(key => <Action aria-label={pt(`socials.${key}.label`)} href={pt(`socials.${key}.href`)} isIconOnly key={key} size='input-sm' variant='default'>
              <Icon className='absolute h-2/3 aspect-square w-auto' src={pt(`socials.${key}.icon`)} />
            </Action>)
          }


        </nav>
      </section>

      <div className='w-9/10 flex justify-between items-end mt-auto'>
        <section>
          <Text className='font-semibold'>
            {t('location', { country: pt('location.country'), state: pt('location.state') })}
          </Text>

          <Text className='font-semibold'>
            <LocalTime />
          </Text>
        </section>

        <section className='text-end'>
          <Text className='text-sm font-medium'>
            {t.rich('madeBy', { creator: (chunks) => <Link className='text-current font-semibold text-[1em]' href='https://github.com/Richard-Passos'>{chunks}</Link> })}
          </Text>

          <Text className='text-sm font-medium'>
            {t.rich('copyright', { legal: (chunks) => <Link className='text-current font-semibold text-[1em]' href='/legal'>{chunks}</Link> })}
          </Text>
        </section>
      </div>

      <div className='overflow-hidden w-full'>
        <Logo
          aria-hidden
          className='h-auto [&_svg]:h-full ![--action-hover:transparent] ![--action-bg:transparent] w-full ![--action-padding-x:0px] -mb-[8%]'
          tabIndex={-1}
          variant='primary'
        />
      </div>

      <div className='absolute overflow-hidden -z-10 w-auto inset-[15%] rounded-lg'>
        <ScrollAnimate config={{ prop: 'y', propPoints: ['-100%', '100%'] }}>
          <Lines className='[background-size:83.333px_66.666px]' />
        </ScrollAnimate>

        <span className='absolute inset-0 rounded-inherit border border-current border-solid opacity-20 dark:opacity-5' />
      </div>
    </Section>
  );
};

export default forwardRef(FooterOrganism);
export type { FooterOrganismProps };
