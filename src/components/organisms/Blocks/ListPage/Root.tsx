import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Action, ListHorizontalScroll } from '@/components/molecules';

import CleanLayoutBlock, {
  CleanLayoutBlockOrganismProps
} from '../Layout/Clean/Root';

type ListPageBlockOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.listPage`>;
};

type ListPageBlockOrganismProps = ListPageBlockOrganismOwnProps &
  Omit<CleanLayoutBlockOrganismProps, keyof ListPageBlockOrganismOwnProps>;

const ListPageBlockOrganism = (
  { namespace, ...props }: ListPageBlockOrganismProps,
  ref: ListPageBlockOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  const items = t.raw('items') as string[];

  return (
    <CleanLayoutBlock
      ref={ref}
      {...props}
    >
      <ListHorizontalScroll.Root>
        {items.map((item, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 === 0 ? 1 : -1)}
            className='[--gap:--spacing-md]'
            key={item}
          >
            <span>{item}</span> ·&nbsp;
            <span className='opacity-10 dark:opacity-[.05]'>{item}</span>&nbsp;
            <span className='opacity-10 dark:opacity-[.05]'>·</span>&nbsp;
            <span className='opacity-10 dark:opacity-[.05]'>{item}</span> ·
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll.Root>

      <Action
        className='mt-md'
        href={t('link.src')}
      >
        {t('link.label')}
      </Action>
    </CleanLayoutBlock>
  );
};

export default forwardRef(ListPageBlockOrganism);
export type { ListPageBlockOrganismProps };
