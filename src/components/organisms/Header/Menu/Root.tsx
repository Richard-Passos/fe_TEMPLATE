import { useMessages, useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { Action, Drawer, LocaleSelect } from '@/components/molecules';
import {
  DrawerContentProps,
  DrawerRootProps,
  DrawerTriggerProps
} from '@/components/molecules/Drawer';
import { locales } from '@/constants';
import { cn, keys } from '@/utils';

import HeaderNav from '../Nav';
import HeaderMenuTrigger from './Trigger';

type HeaderMenuOrganismOwnProps = Partial<Pick<DrawerRootProps, 'trigger'>> & {
  triggerProps?: Partial<DrawerTriggerProps>;
  contentProps?: Partial<DrawerContentProps>;
};

type HeaderMenuOrganismProps = HeaderMenuOrganismOwnProps &
  Omit<DrawerRootProps, keyof HeaderMenuOrganismOwnProps>;

const HeaderMenuOrganism = (
  { className, triggerProps, contentProps, ...props }: HeaderMenuOrganismProps,
  ref: HeaderMenuOrganismProps['ref']
) => {
  const t = useTranslations('header.menu'),
    pt = useTranslations('personal'),
    messages = useMessages() as unknown as IntlMessages;

  const items = keys(messages.header.menu.nav).map((key) => ({
    href: t(`nav.${key}.href`),
    label: t(`nav.${key}.label`)
  }));

  const socials = keys(messages.personal.socials).map((key) => ({
    label: pt(`socials.${key}.label`),
    href: pt(`socials.${key}.href`),
    icon: pt(`socials.${key}.icon`)
  }));

  return (
    <Drawer.Root
      trapFocus={false}
      position='right'
      ref={ref}
      {...props}
      trigger={
        <>
          <HeaderMenuTrigger.Mobile className='md:hidden'>
            {t('label')}
          </HeaderMenuTrigger.Mobile>

          <HeaderMenuTrigger.Root aria-label={t('open.label')} />
        </>
      }
    >
      <Drawer.Content
        title={t('title')}
        {...contentProps}
        bodyProps={{
          ...contentProps?.bodyProps,
          className: cn(
            'p-0 grow flex flex-col gap-xl pt-xl',
            contentProps?.bodyProps?.className
          )
        }}
        className={cn(
          'flex flex-col p-[--p] pt-[calc(var(--p)*1.5)] [--drawer-size:560px] [--p:theme(spacing.xl)] sm:[--p:theme(spacing.2xl)]',
          contentProps?.className
        )}
        hasCloseButton={false}
        headerProps={{
          ...contentProps?.headerProps,
          className: cn(
            'border relative border-x-0 border-t-0 py-0',
            contentProps?.headerProps?.className
          )
        }}
      >
        <HeaderNav
          className='flex-col items-start'
          data-autofocus
          items={items}
          linkProps={{
            orientation: 'vertical',
            indicatorProps: {
              layoutId: 'headerMenuLinkActiveIndicator'
            }
          }}
        />

        <div className='mt-auto flex flex-wrap gap-md px-md'>
          <LocaleSelect
            aria-label={t('locale.label')}
            className='mt-1'
            data={locales}
          />

          <div className='flex flex-wrap items-center gap-xs'>
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
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default forwardRef(HeaderMenuOrganism);
export type { HeaderMenuOrganismProps };
