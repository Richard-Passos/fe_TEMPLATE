import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Text, Title } from '@/components/atoms';
import { Action, Catalog } from '@/components/molecules';
import { ExtractPrefix, Namespace } from '@/types';

import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';
import SelectProjectsCatalogGridBlock from './Grid';
import SelectProjectsCatalogTableBlock from './Table';

type SelectProjectsCatalogBlockOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.blocks.`>;
};

type SelectProjectsCatalogBlockOrganismProps =
  SelectProjectsCatalogBlockOrganismOwnProps &
    Omit<
      PrimaryLayoutBlockProps,
      keyof SelectProjectsCatalogBlockOrganismOwnProps | 'data'
    >;

const SelectProjectsCatalogBlockOrganism = (
  { namespace, ...props }: SelectProjectsCatalogBlockOrganismProps,
  ref: SelectProjectsCatalogBlockOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  const items = Array.from(Array(5).keys()).map((i) => ({
    slug: `title-${i}`,
    title: `Title - ${i}`,
    roles: ['design', 'development'],
    image: {
      src: `/images/project-${i.toString().padStart(2, '0')}.jpg`,
      alt: ''
    }
  }));

  return (
    <PrimaryLayoutBlock
      data={{
        title: t.raw('title') as string[],
        description: t.raw('description')
      }}
      ref={ref}
      {...props}
    >
      <Catalog.Root
        className='mt-2xl flex w-9/10 max-w-screen-lg flex-col items-center'
        items={items}
        url='#'
      >
        <Title
          className='mb-lg mr-auto'
          component='h3'
          order={6}
        >
          {t('subtitle')}
        </Title>

        <Catalog.Empty>
          <Text className='text-center sm:max-w-2xl'>{t('empty')}</Text>
        </Catalog.Empty>

        <SelectProjectsCatalogTableBlock className='group relative z-20 w-full max-sm:hidden' />

        <SelectProjectsCatalogGridBlock className='w-full sm:hidden' />

        <Action
          className='mt-xl'
          href='projects'
          size='md'
          variant='default'
        >
          {t('action.label')}
        </Action>
      </Catalog.Root>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(SelectProjectsCatalogBlockOrganism);
export type { SelectProjectsCatalogBlockOrganismProps };
