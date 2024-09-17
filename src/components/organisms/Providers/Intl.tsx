import { NextIntlClientProvider } from 'next-intl';
import { ComponentPropsWithoutRef } from 'react';

type IntlProviderOrganismOwnProps = {};

type IntlProviderOrganismProps = IntlProviderOrganismOwnProps &
  Omit<
    ComponentPropsWithoutRef<typeof NextIntlClientProvider>,
    keyof IntlProviderOrganismOwnProps
  >;

const IntlProviderOrganism = (props: IntlProviderOrganismProps) => {
  return <NextIntlClientProvider {...props} />;
};

export default IntlProviderOrganism;
export type { IntlProviderOrganismProps };
