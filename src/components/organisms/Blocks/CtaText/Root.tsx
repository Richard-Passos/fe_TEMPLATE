import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { TextScrollAnimate } from '@/components/molecules';
import Icons, { IconsIcon } from '@/components/organisms/Icons';
import { ExtractPrefix, Namespace } from '@/types';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type CtaTextBlockOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.blocks.`>;
};

type CtaTextBlockOrganismProps = CtaTextBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof CtaTextBlockOrganismOwnProps>;

const CtaTextBlockOrganism = (
  { namespace, ...props }: CtaTextBlockOrganismProps,
  ref: CtaTextBlockOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  const getIcon = (side: 'left' | 'right'): IconsIcon => ({
    src: t(`icons.${side}.src`),
    animation: t(`icons.${side}.animation`) as IconsIcon['animation'],
    y: t(`icons.${side}.y`) as IconsIcon['y']
  });

  return (
    <CleanLayoutBlock
      ref={ref}
      {...props}
    >
      <Text className='relative z-10 w-9/10 max-w-screen-lg text-center text-3xl font-semibold leading-tight sm:text-[3.25rem]'>
        <TextScrollAnimate text={t('text')} />
      </Text>

      <Icons
        left={getIcon('left')}
        right={getIcon('right')}
      />
    </CleanLayoutBlock>
  );
};

export default forwardRef(CtaTextBlockOrganism);
export type { CtaTextBlockOrganismProps };
