import CatalogListItems, { CatalogListItemsProps } from './Items';
import CatalogListRoot, {
  CatalogListMoleculeProps as CatalogListRootProps
} from './Root';

const CatalogList = {
  Root: CatalogListRoot,
  Items: CatalogListItems
};

export default CatalogList;
export { CatalogListRoot, CatalogListItems };
export type { CatalogListRootProps, CatalogListItemsProps };
