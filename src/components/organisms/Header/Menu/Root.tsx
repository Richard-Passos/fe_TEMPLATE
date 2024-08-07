import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Drawer } from '@/components/molecules';
import {
  DrawerContentProps,
  DrawerRootProps,
  DrawerTriggerProps
} from '@/components/molecules/Drawer';
import { cn } from '@/utils';

import HeaderMenuTrigger from './Trigger';

type HeaderMenuOrganismOwnProps = Partial<Pick<DrawerRootProps, 'trigger'>> & {
  namespace: ExtractPrefix<Namespace, `${string}.menu`>;
  triggerProps?: Partial<DrawerTriggerProps>;
  contentProps?: Partial<DrawerContentProps>;
};

type HeaderMenuOrganismProps = HeaderMenuOrganismOwnProps &
  Omit<DrawerRootProps, keyof HeaderMenuOrganismOwnProps>;

const HeaderMenuOrganism = (
  {
    namespace,
    className,
    triggerProps,
    contentProps,
    ...props
  }: HeaderMenuOrganismProps,
  ref: HeaderMenuOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

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
      ></Drawer.Content>
    </Drawer.Root>
  );
};

export default forwardRef(HeaderMenuOrganism);
export type { HeaderMenuOrganismProps };
