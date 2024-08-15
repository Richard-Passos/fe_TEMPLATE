import { useMessages, useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { BentoGrid } from '@/components/molecules';
import { Namespace } from '@/types';
import { get, keys, normCompName } from '@/utils';

import Cards from '../../Cards';
import PrimaryLayoutBlock, { PrimaryLayoutBlockProps } from '../Layout/Primary';

type BentoGridBlockOrganismOwnProps = {
  namespace: Namespace;
};

type BentoGridBlockOrganismProps = BentoGridBlockOrganismOwnProps &
  Omit<PrimaryLayoutBlockProps, keyof BentoGridBlockOrganismOwnProps | 'data'>;

const BentoGridBlockOrganism = (
  { namespace, className, ...props }: BentoGridBlockOrganismProps,
  ref: BentoGridBlockOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  const messages = useMessages() as unknown as IntlMessages;

  const itemKeys = keys(get(messages, `${namespace}.items`) as any) as string[];

  return (
    <PrimaryLayoutBlock
      data={{
        title: t.raw('title') as string[],
        description: t.raw('description')
      }}
      ref={ref}
      {...props}
    >
      <BentoGrid.Root templates={t.raw('templates')}>
        {itemKeys.map((key, i) => {
          const Card =
            Cards[normCompName(t(`items.${key}.type`)) as keyof typeof Cards];

          return Card && <BentoGrid.Item index={i}></BentoGrid.Item>;
        })}
      </BentoGrid.Root>
    </PrimaryLayoutBlock>
  );
};

export default forwardRef(BentoGridBlockOrganism);
export type { BentoGridBlockOrganismProps };
