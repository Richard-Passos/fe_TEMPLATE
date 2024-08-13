import { useTranslations } from 'next-intl';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { ExtractPrefix, Namespace } from '@/types';

import PrimaryHeroExtraIcon, { PrimaryHeroExtraIconProps } from './Icon';
import PrimaryHeroExtraText, { PrimaryHeroExtraTextProps } from './Text';

type PrimaryHeroExtraOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.hero`>;
};

type PrimaryHeroExtraOrganismProps = PrimaryHeroExtraOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof PrimaryHeroExtraOrganismOwnProps>;

const PrimaryHeroExtraOrganism = (
  { namespace, className, ...props }: PrimaryHeroExtraOrganismProps,
  ref: PrimaryHeroExtraOrganismProps['ref']
) => {
  const t = useTranslations(namespace);

  return (
    <div
      className='mt-sm grid w-full max-w-screen-lg grid-cols-2 gap-sm md:grid-cols-6'
      ref={ref}
      {...props}
    >
      <Text className='col-span-full max-w-lg justify-self-center text-center md:col-span-4 lg:sr-only'>
        {t('description')}
      </Text>

      <div className='md:-order-1'>{getType(t, 'left')}</div>

      <div className='justify-self-end lg:col-end-7'>{getType(t, 'right')}</div>
    </div>
  );
};

const getType = (
  t: ReturnType<typeof useTranslations>,
  side: 'left' | 'right'
) => {
  const data = {
    content: t(`${side}.content`) as PrimaryHeroExtraTextProps['children'],
    src: t(`${side}.src`) as PrimaryHeroExtraIconProps['src'],
    animation: t(`${side}.animation`) as PrimaryHeroExtraIconProps['animation']
  };

  if (t(`${side}.type`) === 'text')
    return <PrimaryHeroExtraText>{data.content}</PrimaryHeroExtraText>;

  if (t(`${side}.type`) === 'icon')
    return (
      <PrimaryHeroExtraIcon
        animation={data.animation}
        src={data.src}
      />
    );
};

export default forwardRef(PrimaryHeroExtraOrganism);
export type { PrimaryHeroExtraOrganismProps };
