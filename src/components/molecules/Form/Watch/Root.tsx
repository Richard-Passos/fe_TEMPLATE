'use client';

import { forwardRef } from 'react';
import { useWatch } from 'react-hook-form';

import { useFormContext } from '@/hooks/contexts';

import FormControl, { FormControlProps } from '../Control';

type FormWatchMoleculeOwnProps = {};

type FormWatchMoleculeProps = FormWatchMoleculeOwnProps &
  Omit<FormControlProps, keyof FormWatchMoleculeOwnProps>;

const FormWatchMolecule = (
  { name, ...props }: FormWatchMoleculeProps,
  ref: FormWatchMoleculeProps['ref']
) => {
  const { control } = useFormContext(),
    value = useWatch({
      control,
      name
    });

  props = {
    value,
    ...props
  } as typeof props;

  return (
    <FormControl
      name={name}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(FormWatchMolecule);
export type { FormWatchMoleculeProps };
