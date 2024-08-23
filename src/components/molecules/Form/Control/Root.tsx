'use client';

import { Slot, SlotProps } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useFormContext } from '@/hooks/contexts';
import { PolymorphicRef } from '@/types';

type FormControlMoleculeOwnProps = {
  name: string;
  register?: ReturnType<typeof useFormContext>['getInputProps'];
  registerType?: 'input' | 'checkbox';
  ref?: PolymorphicRef<'div'>;
};

type FormControlMoleculeProps = FormControlMoleculeOwnProps &
  Omit<SlotProps, keyof FormControlMoleculeOwnProps>;

const FormControlMolecule = (
  {
    name,
    register,
    registerType = 'input',
    ...props
  }: FormControlMoleculeProps,
  ref: FormControlMoleculeProps['ref']
) => {
  const { key, getInputProps } = useFormContext();

  const { onChange, ...rest } = (register ?? getInputProps)(name, {
    type: registerType
  });

  props = { ...props, name } as typeof props;

  return (
    <Slot
      key={key(name)}
      ref={ref}
      {...rest}
      {...props}
      onChange={(ev) => {
        onChange(ev);

        props.onChange?.(ev);
      }}
    />
  );
};

export default forwardRef(FormControlMolecule);
export type { FormControlMoleculeProps };
