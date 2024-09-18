import { forwardRef } from 'react';

import { serialize } from '@/utils';
import { cookiesConsentApi, getLocale } from '@/utils/actions';

import CookiesConsentClient, { CookiesConsentClientProps } from './Client';

type CookiesConsentOrganismOwnProps = {};

type CookiesConsentOrganismProps = CookiesConsentOrganismOwnProps &
  Omit<CookiesConsentClientProps, keyof CookiesConsentOrganismOwnProps>;

const CookiesConsentOrganism = async (
  props: CookiesConsentOrganismProps,
  ref: CookiesConsentOrganismProps['ref']
) => {
  const locale = await getLocale();

  const res = await cookiesConsentApi.get({ locale });

  if (!res.ok) return null;

  const { data } = res;

  return (
    <CookiesConsentClient
      acceptOnScroll
      buttonText={serialize(data.actions.accpet.label)}
      buttonWrapperClasses='ml-auto flex gap-xs items-center'
      containerClasses='bg-body border w-full max-w-md fixed gap-sm flex items-center px-md py-xs right-sm !bottom-sm z-max rounded shadow-[0_3px_10px_rgba(0,0,0,0.1),0_3px_3px_rgba(0,0,0,0.05)]'
      contentClasses='text-sm'
      customDeclineButtonProps={{ variant: 'subtle', color: 'red' }}
      declineButtonText={serialize(data.actions.decline?.label)}
      enableDeclineButton={!!data.actions.decline}
      ref={ref}
      {...props}
    >
      {serialize(data.text)}
    </CookiesConsentClient>
  );
};

export default forwardRef(CookiesConsentOrganism);
export type { CookiesConsentOrganismProps };
