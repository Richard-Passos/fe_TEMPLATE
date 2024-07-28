import { NamespaceKeys, NestedKeyOf } from 'next-intl';
import { ComponentPropsWithRef, ElementType } from 'react';

import en from './src/data/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}

  type Namespace = NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>>;

  type PolimorphicRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

  type ExtractPrefix<T, P extends string> = T extends `${P}${infer Rest}`
    ? Rest extends `${infer _}.${string}`
      ? never
      : T
    : never;
}
