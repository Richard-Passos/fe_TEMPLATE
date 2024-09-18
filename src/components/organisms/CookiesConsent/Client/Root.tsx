'use client';

import { ComponentPropsWithRef, forwardRef } from 'react';
import CookieConsent from 'react-cookie-consent';

import { Button } from '@/components/atoms';
import { useThemeContext } from '@/hooks/contexts';

type CookiesConsentClientOrganismOwnProps = {};

type CookiesConsentClientOrganismProps = CookiesConsentClientOrganismOwnProps &
  Omit<
    ComponentPropsWithRef<typeof CookieConsent>,
    keyof CookiesConsentClientOrganismOwnProps
  >;

const CookiesConsentClientOrganism = (
  props: CookiesConsentClientOrganismProps,
  ref: CookiesConsentClientOrganismProps['ref']
) => {
  const { theme } = useThemeContext();

  return (
    <CookieConsent
      ButtonComponent={(props: any) => (
        <Button
          variant='default'
          {...props}
        />
      )}
      customContainerAttributes={{
        'data-theme': theme
      }}
      debug
      disableStyles
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CookiesConsentClientOrganism);
export type { CookiesConsentClientOrganismProps };
