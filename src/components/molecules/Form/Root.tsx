'use client';

import { ComponentPropsWithRef, forwardRef } from 'react';

import FormProvider, { FormProviderProps } from '@/Providers/Form';
import { useFormContext } from '@/hooks/contexts';

type FormMoleculeOwnProps = {
  handleValidationFailure?: Parameters<
    ReturnType<typeof useFormContext>['onSubmit']
  >['1'];
};

type FormMoleculeProps = FormMoleculeOwnProps &
  Omit<ComponentPropsWithRef<'form'>, keyof FormMoleculeOwnProps>;

const FormMolecule = forwardRef(
  (
    { handleValidationFailure, ...props }: FormMoleculeProps,
    ref: FormMoleculeProps['ref']
  ) => {
    const { onSubmit, onReset } = useFormContext();

    const submit = () => ({
      handleAction:
        typeof props.action === 'function'
          ? onSubmit(props.action, handleValidationFailure)
          : () => props.action,
      handleSubmit:
        typeof props.onSubmit === 'function'
          ? onSubmit(props.onSubmit, handleValidationFailure)
          : () => props.onSubmit
    });

    const { handleAction, handleSubmit } = submit();

    return (
      <form
        noValidate
        onReset={onReset}
        ref={ref}
        {...props}
        action={() => handleAction()}
        onSubmit={handleSubmit}
      />
    );
  }
);
FormMolecule.displayName = 'FormMolecule';

type FormMoleculeWithProviderOwnProps = {};

type FormMoleculeWithProviderProps<T> = FormMoleculeWithProviderOwnProps &
  Omit<
    FormProviderProps<T> & FormMoleculeProps,
    keyof FormMoleculeWithProviderOwnProps
  >;

const FormMoleculeWithProvider = <T,>(
  { initialValues, schema, ...props }: FormMoleculeWithProviderProps<T>,
  ref: FormMoleculeWithProviderProps<T>['ref']
) => {
  return (
    <FormProvider
      initialValues={initialValues}
      schema={schema}
    >
      <FormMolecule
        ref={ref}
        {...props}
      />
    </FormProvider>
  );
};

export default forwardRef(FormMoleculeWithProvider);
export type { FormMoleculeProps };
