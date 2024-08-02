import { useTranslations } from 'next-intl';
import { ComponentPropsWithRef, forwardRef } from 'react';

import { Text } from '@/components/atoms';

import HighImpactHeroExtraIcon, { HighImpactHeroExtraIconProps } from './Icon';
import HighImpactHeroExtraText, { HighImpactHeroExtraTextProps } from './Text';

type HighImpactHeroExtraOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.hero`>;
};

type HighImpactHeroExtraOrganismProps = HighImpactHeroExtraOrganismOwnProps &
  Omit<ComponentPropsWithRef<'div'>, keyof HighImpactHeroExtraOrganismOwnProps>;

const HighImpactHeroExtraOrganism = (
  { namespace, className, ...props }: HighImpactHeroExtraOrganismProps,
  ref: HighImpactHeroExtraOrganismProps['ref']
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
    content: t(`${side}.content`) as HighImpactHeroExtraTextProps['children'],
    src: t(`${side}.src`) as HighImpactHeroExtraIconProps['src'],
    animation: t(
      `${side}.animation`
    ) as HighImpactHeroExtraIconProps['animation']
  };

  if (t(`${side}.type`) === 'text')
    return <HighImpactHeroExtraText>{data.content}</HighImpactHeroExtraText>;

  if (t(`${side}.type`) === 'icon')
    return (
      <HighImpactHeroExtraIcon
        animation={data.animation}
        src={data.src}
      />
    );
};

export default forwardRef(HighImpactHeroExtraOrganism);
export type { HighImpactHeroExtraOrganismProps };
