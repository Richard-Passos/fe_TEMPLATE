'use client';

import { forwardRef, useState } from 'react';

import { FormRoot, FormRootProps } from '@/components/molecules/Form';
import { sendEmail } from '@/utils/actions';

type ContactFormClientOrganismOwnProps = {};

type ContactFormClientOrganismProps = ContactFormClientOrganismOwnProps &
  Omit<FormRootProps, keyof ContactFormClientOrganismOwnProps>;

const ContactFormClientOrganism = (
  { schema, ...props }: ContactFormClientOrganismProps,
  ref: ContactFormClientOrganismProps['ref']
) => {
  const [state, setState] = useState('');
  console.log('-  state   -', state);

  return (
    <FormRoot
      ref={ref}
      schema={schema}
      {...props}
      action={async (values) => {
        const res = await sendEmail(values);

        setState(res.message);
      }}
    />
  );
};

export default forwardRef(ContactFormClientOrganism);
export type { ContactFormClientOrganismProps };
