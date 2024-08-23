'use client';

import { createFormContext } from '@mantine/form';
import { ComponentPropsWithoutRef } from 'react';

const [MantineFormProvider, useFormContext, useForm] = createFormContext<any>();

type FormProviderOwnProps<T> = {
  initialValues: T;
  schema: any;
};

type FormProviderProps<T> = FormProviderOwnProps<T> &
  Omit<ComponentPropsWithoutRef<typeof MantineFormProvider>, 'value' | 'form'>;

const FormProvider = <T,>({
  initialValues,
  schema,
  ...props
}: FormProviderProps<T>) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: initialValues,
    validate: schema
  });

  return (
    <MantineFormProvider
      form={form}
      {...props}
    />
  );
};

export default FormProvider;
export { useFormContext };
export type { FormProviderProps };
