import { ComponentPropsWithoutRef, ComponentType } from 'react';

type TypeVariants<T extends ComponentType | object> = {
  [K in keyof T]: { type: K } & (T[K] extends ComponentType<any>
    ? ComponentPropsWithoutRef<T[K]>
    : T[K]);
}[keyof T];

export default TypeVariants;
