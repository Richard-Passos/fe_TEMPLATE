import { useMessages, useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Link } from '@/components/atoms';
import { Drawer } from '@/components/molecules';
import {
  DrawerContentProps,
  DrawerRootProps,
  DrawerTriggerProps
} from '@/components/molecules/Drawer';
import { cn, get, keys } from '@/utils';

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
    gt = useTranslations(),
    messages = useMessages() as unknown as IntlMessages;

  return (
    <Drawer.Root
      className={cn('*:left-0', className)}
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
        {...contentProps}
        closeProps={{
          'aria-label': t('close.label'),
          ...contentProps?.closeProps
        }}
        overlayProps={contentProps?.overlayProps}
        title={t('title')}
      >
        <nav className='flex flex-col gap-xs'>
          {keys(get(messages, 'header.nav.full')).map((key) => (
            <Link href={gt(`header.nav.full.${key}.href`)}>
              {gt(`header.nav.full.${key}.label`)}
            </Link>
          ))}
        </nav>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default forwardRef(HeaderMenuOrganism);
export type { HeaderMenuOrganismProps };
