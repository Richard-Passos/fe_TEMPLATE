import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ComponentPropsWithoutRef } from 'react';

import { pick } from '@/utils';

type IntlProviderOrganismOwnProps = {};

type IntlProviderOrganismProps = IntlProviderOrganismOwnProps &
  Omit<
    ComponentPropsWithoutRef<typeof NextIntlClientProvider>,
    keyof IntlProviderOrganismOwnProps
  >;

const IntlProviderOrganism = (props: IntlProviderOrganismProps) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      messages={pick(messages, ['pages.error'])}
      {...props}
    />
  );
};

export default IntlProviderOrganism;
export type { IntlProviderOrganismProps };
