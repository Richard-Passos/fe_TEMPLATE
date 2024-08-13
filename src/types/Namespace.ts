import { NamespaceKeys, NestedKeyOf } from 'next-intl';

type Namespace = NamespaceKeys<IntlMessages, NestedKeyOf<IntlMessages>>;

export default Namespace;
