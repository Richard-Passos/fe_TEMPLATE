import { ComponentPropsWithRef, ElementType } from 'react';

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

export default PolymorphicRef;
