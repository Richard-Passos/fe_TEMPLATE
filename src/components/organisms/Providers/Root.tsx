import { PropsWithChildren } from 'react';

import IntlProvider, { IntlProviderOrganismProps } from './Intl';
import StoreProvider, { StoreProviderOrganismProps } from './Store';
import UiProvider, { UiProviderOrganismProps } from './Ui';

type ProvidersOrganismProps = PropsWithChildren<{
  storeProps?: StoreProviderOrganismProps;
  intlProps?: IntlProviderOrganismProps;
  uiProps?: UiProviderOrganismProps;
}>;

const ProvidersOrganism = ({
  children,
  storeProps,
  intlProps,
  uiProps
}: ProvidersOrganismProps) => {
  return (
    <StoreProvider {...storeProps}>
      <IntlProvider {...intlProps}>
        <UiProvider {...uiProps}>{children}</UiProvider>
      </IntlProvider>
    </StoreProvider>
  );
};

export default ProvidersOrganism;
export type { ProvidersOrganismProps };
