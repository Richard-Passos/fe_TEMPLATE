import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Portal } from '@/components/atoms';
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
  triggerProps?: DrawerTriggerProps;
  contentProps?: DrawerContentProps;
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
      className={cn('*:left-0 md:hidden', className)}
      ref={ref}
      {...props}
      trigger={
        <Portal>
          <HeaderMenuTrigger
            aria-label={t('open.label')}
            className='fixed right-[2.5%] top-[calc(var(--header-h)/2)] z-[60] -translate-y-1/2'
          />
        </Portal>
      }
    >
      <Drawer.Content
        {...contentProps}
        closeProps={{
          'aria-label': t('close.label'),
          ...contentProps?.closeProps
        }}
        overlayProps={{
          className: cn('md:hidden', contentProps?.overlayProps?.className),
          ...contentProps?.overlayProps
        }}
        title={t('title')}
      ></Drawer.Content>
    </Drawer.Root>
  );
};

export default forwardRef(HeaderMenuOrganism);
export type { HeaderMenuOrganismProps };
