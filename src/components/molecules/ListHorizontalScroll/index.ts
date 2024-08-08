import ListHorizontalScrollItem, {
  ListHorizontalScrollItemProps
} from './Item';
import ListHorizontalScrollRoot, {
  ListHorizontalScrollOrganismProps as ListHorizontalScrollRootProps
} from './Root';

const ListHorizontalScroll = {
  Root: ListHorizontalScrollRoot,
  Item: ListHorizontalScrollItem
};

export default ListHorizontalScroll;
export { ListHorizontalScrollRoot, ListHorizontalScrollItem };
export type { ListHorizontalScrollRootProps, ListHorizontalScrollItemProps };
