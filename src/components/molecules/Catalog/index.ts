import CatalogEmpty, { CatalogEmptyProps } from './Empty';
import CatalogFilter from './Filter';
import CatalogLastPage, { CatalogLastPageProps } from './LastPage';
import CatalogList from './List';
import CatalogLoadMore, { CatalogLoadMoreProps } from './LoadMore';
import CatalogRoot, { CatalogMoleculeProps as CatalogRootProps } from './Root';

const Catalog = {
  Root: CatalogRoot,
  Empty: CatalogEmpty,
  Filter: CatalogFilter,
  LastPage: CatalogLastPage,
  List: CatalogList,
  LoadMore: CatalogLoadMore
};

export default Catalog;
export {
  CatalogRoot,
  CatalogEmpty,
  CatalogFilter,
  CatalogLastPage,
  CatalogList,
  CatalogLoadMore
};
export type {
  CatalogRootProps,
  CatalogEmptyProps,
  CatalogLastPageProps,
  CatalogLoadMoreProps
};
