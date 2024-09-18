'use client';

import { ComponentPropsWithRef, forwardRef } from 'react';
import CookieConsent from 'react-cookie-consent';

import { Button } from '@/components/atoms';
import { ButtonProps } from '@/components/atoms/Button';

type CookiesConsentClientOrganismOwnProps = {
  customDeclineButtonProps?: Partial<ButtonProps>;
};

type CookiesConsentClientOrganismProps = CookiesConsentClientOrganismOwnProps &
  Omit<
    ComponentPropsWithRef<typeof CookieConsent>,
    keyof CookiesConsentClientOrganismOwnProps
  >;

const CookiesConsentClientOrganism = (
  props: CookiesConsentClientOrganismProps,
  ref: CookiesConsentClientOrganismProps['ref']
) => {
  return (
    <CookieConsent
      ButtonComponent={(props: any) => (
        <Button
          variant='default'
          {...props}
        />
      )}
      disableStyles
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CookiesConsentClientOrganism);
export type { CookiesConsentClientOrganismProps };
