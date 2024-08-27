'use client';

import { ComponentPropsWithRef, forwardRef } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import FormProvider, { FormProviderProps } from '@/Providers/Form';
import { useFormContext } from '@/hooks/contexts';

type FormMoleculeOwnProps = {
  action?: SubmitHandler<FieldValues>;
  onSubmit?: SubmitHandler<FieldValues>;
};

type FormMoleculeProps = FormMoleculeOwnProps &
  Omit<ComponentPropsWithRef<'form'>, keyof FormMoleculeOwnProps>;

const FormMolecule = forwardRef(
  (
    { action, onSubmit, ...props }: FormMoleculeProps,
    ref: FormMoleculeProps['ref']
  ) => {
    const { handleSubmit } = useFormContext();

    const onSend = () => {
      if (action) {
        const onAction = handleSubmit(action);

        return {
          action: () => onAction()
        };
      }

      if (onSubmit)
        return {
          onSubmit: handleSubmit(onSubmit)
        };
    };

    return (
      <form
        ref={ref}
        {...onSend()}
        {...props}
      />
    );
  }
);
FormMolecule.displayName = 'FormMolecule';

type FormMoleculeWithProviderOwnProps = {};

type FormMoleculeWithProviderProps = FormMoleculeWithProviderOwnProps &
  Omit<
    Omit<FormProviderProps, 'children'> & FormMoleculeProps,
    keyof FormMoleculeWithProviderOwnProps
  >;

const FormMoleculeWithProvider = (
  {
    defaultValues,
    schema,
    shouldReset,
    ...props
  }: FormMoleculeWithProviderProps,
  ref: FormMoleculeWithProviderProps['ref']
) => {
  return (
    <FormProvider
      defaultValues={defaultValues}
      schema={schema}
      shouldReset={shouldReset}
    >
      <FormMolecule
        ref={ref}
        {...props}
      />
    </FormProvider>
  );
};

export default forwardRef(FormMoleculeWithProvider);
export type { FormMoleculeWithProviderProps };
