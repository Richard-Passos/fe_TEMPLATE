import { NamespaceKeys, NestedKeyOf } from 'next-intl';

import ExtractPrefix from './ExtractPrefix';

type Keys = NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>>;

type Namespace<P = undefined> = P extends string
  ? ExtractPrefix<Keys, P>
  : Keys;

export default Namespace;
