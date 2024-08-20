import { forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { TextScrollAnimate } from '@/components/molecules';
import { TextScrollAnimateProps } from '@/components/molecules/TextScrollAnimate';
import Icons, { IconsProps } from '@/components/organisms/Icons';

import CleanLayoutBlock, { CleanLayoutBlockProps } from '../Layout/Clean';

type CtaTextBlockOrganismOwnProps = {
  data: {
    description: TextScrollAnimateProps['text'];
    icons: {
      left: IconsProps['left'];
      right: IconsProps['right'];
    };
  };
};

type CtaTextBlockOrganismProps = CtaTextBlockOrganismOwnProps &
  Omit<CleanLayoutBlockProps, keyof CtaTextBlockOrganismOwnProps>;

const CtaTextBlockOrganism = (
  { data, ...props }: CtaTextBlockOrganismProps,
  ref: CtaTextBlockOrganismProps['ref']
) => {
  return (
    <CleanLayoutBlock
      ref={ref}
      {...props}
    >
      <Text className='relative z-10 w-9/10 max-w-screen-lg text-center text-xl font-semibold !leading-tight md:text-4xl lg:text-[3.25rem]'>
        <TextScrollAnimate text={data.description} />
      </Text>

      <Icons
        left={data.icons.left}
        right={data.icons.right}
      />
    </CleanLayoutBlock>
  );
};

export default forwardRef(CtaTextBlockOrganism);
export type { CtaTextBlockOrganismProps };
