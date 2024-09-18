import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { Action, Drawer, LocaleSelect } from '@/components/molecules';
import {
  DrawerContentProps,
  DrawerRootProps,
  DrawerTriggerProps
} from '@/components/molecules/Drawer';
import { defaultPages, locales } from '@/constants';
import { cn, renderComp } from '@/utils';
import { getLocale, headerApi, pagesApi, personalApi } from '@/utils/actions';

import HeaderNav, { HeaderNavProps } from '../Nav';
import HeaderMenuTrigger from './Trigger';

type HeaderMenuOrganismOwnProps = Partial<Pick<DrawerRootProps, 'trigger'>> & {
  triggerProps?: Partial<DrawerTriggerProps>;
  contentProps?: Partial<DrawerContentProps>;
};

type HeaderMenuOrganismProps = HeaderMenuOrganismOwnProps &
  Omit<DrawerRootProps, keyof HeaderMenuOrganismOwnProps>;

const HeaderMenuOrganism = async (
  { className, triggerProps, contentProps, ...props }: HeaderMenuOrganismProps,
  ref: HeaderMenuOrganismProps['ref']
) => {
  const locale = await getLocale();

  const [headerRes, pagesRes, personalRes] = await Promise.all([
    headerApi.get({ locale }),
    pagesApi.get({ locale, isSelected: true }),
    personalApi.get({ locale })
  ]);

  if (!headerRes.ok) return null;

  const header = headerRes.data,
    personal = personalRes.ok ? personalRes.data : undefined;

  const navItems: HeaderNavProps['items'] = pagesRes.ok
    ? pagesRes.data.map((p) => ({
        href: `/${p.slug === defaultPages.home ? '' : p.slug}`,
        label: `${p.label}`
      }))
    : [];

  const socials = personal?.socials;

  return (
    <Drawer.Root
      position='right'
      ref={ref}
      trapFocus={false}
      {...props}
      trigger={
        <>
          <HeaderMenuTrigger.Mobile className='md:hidden'>
            {header.menu.label}
          </HeaderMenuTrigger.Mobile>

          <HeaderMenuTrigger.Root
            label={{
              open: header.menu.open.label,
              close: header.menu.close.label
            }}
          />
        </>
      }
    >
      <Drawer.Content
        title={header.menu.title}
        {...contentProps}
        bodyProps={{
          ...contentProps?.bodyProps,
          className: cn(
            'flex grow flex-col gap-xl p-0 pt-xl',
            contentProps?.bodyProps?.className
          )
        }}
        className={cn(
          `
            flex flex-col p-[--p] pt-[calc(var(--p)*1.5)]

            [--drawer-size:560px]

            [--p:theme(spacing.xl)]

            sm:[--p:theme(spacing.2xl)]
          `,
          contentProps?.className
        )}
        hasCloseButton={false}
        headerProps={{
          ...contentProps?.headerProps,
          className: cn(
            'relative border border-x-0 border-t-0 py-0',
            contentProps?.headerProps?.className
          )
        }}
      >
        <HeaderNav
          className='flex-col items-start'
          data-autofocus
          items={navItems}
          linkProps={{
            orientation: 'vertical',
            indicatorProps: {
              layoutId: 'headerMenuLinkActiveIndicator'
            }
          }}
        />

        <div className='mt-auto flex flex-wrap gap-md px-md'>
          <LocaleSelect
            aria-label={header.locale.label}
            className='mt-1'
            data={locales}
          />

          {renderComp(
            <div className='flex flex-wrap items-center gap-xs'>
              {socials?.map((data) => (
                <Action
                  aria-label={data.label}
                  as='link'
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
            </div>,
            [socials]
          )}
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default forwardRef(HeaderMenuOrganism);
export type { HeaderMenuOrganismProps };
